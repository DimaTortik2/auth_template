import {
  BadRequestException,
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpStatus,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthDto } from './dto';
import { AuthService } from './auth.service';
import { Response, Request } from 'express';
import { ConfigService } from '@nestjs/config';
import { Cookie, UserAgent } from 'lib/lib/decorators';
import { userResponse } from 'src/user/responses';
import { GoogleGuard } from './guards/google.guard';
import { HttpService } from '@nestjs/axios';
import { map, mergeMap, tap } from 'rxjs';
import { Provider } from '@prisma/client';
import { LoginGuard } from './guards/login.guard';
import { RegisterGuard } from './guards/register.guard';
import { TokenService } from 'src/token/token.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly tokenService: TokenService,
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(RegisterGuard)
  @Post('register')
  async register(@Body() dto: AuthDto) {
    const user = await this.authService.register(dto);

    if (!user) {
      throw new BadRequestException(
        `Не получается зарегистрировать пользователя с данными ${JSON.stringify(dto)}`,
      );
    }

    return new userResponse(user);
  }

  @UseGuards(LoginGuard)
  @Post('login')
  async login(
    @Body() dto: AuthDto,
    @Res() res: Response,
    @UserAgent() agent: string,
  ) {
    const tokens = await this.authService.login(dto, agent);

    if (!tokens) {
      throw new BadRequestException(
        `Не получается зайти с данными ${JSON.stringify(dto)}`,
      );
    }

    return this.tokenService.setTokensToCookies(tokens, res);
  }

  @Get('logout')
  async logout(
    @Cookie('refreshtoken') refreshToken: string,
    @Res() res: Response,
  ) {
    if (!refreshToken) {
      res.sendStatus(HttpStatus.OK);
      return;
    }

    await this.tokenService.deleteRefreshToken(refreshToken);
    res.cookie('refreshtoken', '', {
      httpOnly: true,
      secure: true,
      expires: new Date(),
    });
    res.cookie('accesstoken', '', {
      httpOnly: true,
      secure: true,
      expires: new Date(),
    });
    res.sendStatus(HttpStatus.OK);
  }

  @UseGuards(GoogleGuard)
  @Get('google')
  googleAuth() {}

  @UseGuards(GoogleGuard)
  @Get('google/callback')
  googleAuthCallback(
    @Req() req: Request,
    @Res() res: Response,
    @UserAgent() agent: string,
  ) {
    if (!req.user) {
      throw new BadRequestException(
        'не получается получить токен из Google auth',
      );
    }
    const token = req.user['accessToken'];

    this.httpService
      .get(
        `https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${token}`,
      )
      .pipe(
        mergeMap(({ data: { email } }) =>
          this.authService.providerAuth(email, agent, Provider.GOOGLE),
        ),
        tap((tokens) =>
          this.tokenService.setTokensToCookies(tokens, res, true),
        ),
      )
      .subscribe({
        error: (err) => res.status(400).json({ message: err.message }),
      });
  }
}
