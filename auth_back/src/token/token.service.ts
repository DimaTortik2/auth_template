import {
  BadRequestException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { add } from 'date-fns';
import { PrismaService } from 'src/prisma/prisma.service';
import { Tokens } from './interfaces';
import { Response } from 'express';
import { UserService } from 'src/user/user.service';

@Injectable()
export class TokenService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
    private readonly userService: UserService,
  ) {}

  async generateTokens(user: User, agent: string) {
    const accessToken = this.jwtService.sign(
      {
        id: user.id,
        email: user.email,
        roles: user.roles,
      },
      {
        expiresIn: '10m',
        secret: this.configService.get('JWT_ACCESS_SECRET'),
      },
    );

    const refreshToken = await this.getRefreshToken(user.id, agent);

    return { accessToken, refreshToken };
  }

  setTokensToCookies(tokens: Tokens, res: Response, shouldRedirect = false) {
    if (!tokens) {
      throw new UnauthorizedException();
    }

    res.cookie('refreshtoken', tokens.refreshToken, {
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 31 * 24 * 60 * 60 * 1000,
      secure:
        this.configService.get('NODE_ENV', 'development') === 'production',
      path: '/',
    });

    res.cookie('accesstoken', tokens.accessToken, {
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 10 * 60 * 1000,
      secure:
        this.configService.get('NODE_ENV', 'development') === 'production',
      path: '/',
    });
    shouldRedirect
      ? res.redirect(
          this.configService.get(
            'ACCESS_PROVIDER_REDIRECT_URL',
            'http://localhost:5173/me',
          ),
        )
      : res.sendStatus(HttpStatus.CREATED);
  }

  deleteRefreshToken(token: string) {
    return this.prisma.token.delete({
      where: {
        token,
      },
    });
  }

  async refreshTokens(refreshToken: string, agent: string): Promise<Tokens> {
    const token = await this.prisma.token.delete({
      where: {
        token: refreshToken,
      },
    });

    if (!token) {
      throw new UnauthorizedException();
    }

    if (new Date(token.exp) < new Date()) {
      throw new UnauthorizedException();
    }

    const user = await this.userService.findOne({ id: token.userId });

    if (!user) {
      throw new BadRequestException(
        'не получилось найти пользователя по токену',
      );
    }
    return this.generateTokens(user, agent);
  }

  private async getRefreshToken(
    userId: number,
    agent: string,
  ): Promise<string> {
    const generatedRefreshToken = this.jwtService.sign(
      {
        id: userId,
      },
      {
        expiresIn: '10m',
        secret: this.configService.get('JWT_REFRESH_SECRET'),
      },
    );

    const _token = await this.prisma.token.findFirst({
      where: { userId, userAget: agent },
    });

    const token = _token?.token ?? '';
    const { token: refreshToken } = await this.prisma.token.upsert({
      where: { token },
      update: {
        token: generatedRefreshToken,
        exp: add(new Date(), { months: 1 }),
      },
      create: {
        token: generatedRefreshToken,
        exp: add(new Date(), { months: 1 }),
        userId,
        userAget: agent,
      },
    });
    return refreshToken;
  }
}
