import {
  BadRequestException,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthDto } from './dto';
import { UserService } from 'src/user/user.service';
import { Tokens } from '../token/interfaces';
import { Provider, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { TokenService } from 'src/token/token.service';
import { hashPassword } from './helpers/password.helper';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly userService: UserService,
    private readonly tokenService: TokenService,
    private readonly prisma: PrismaService,
  ) {}

  async register(dto: AuthDto): Promise<User> {
    const password = dto.password ? hashPassword(dto.password) : null;
    const user = await this.userService.create({ ...dto, password });

    return user;
  }

  async login(dto: AuthDto, agent: string): Promise<Tokens> {
    const user = await this.userService
      .findOne({ email: dto.email })
      .catch((e) => {
        this.logger.error(e);
        return null;
      });
    if (!user) {
      throw new UnauthorizedException('Неверная почта или пароль');
    }

    return this.tokenService.generateTokens(user, agent);
  }

  async providerAuth(email: string, agent: string, provider: Provider) {
    const UserExist = await this.userService.findOne({ email });
    if (UserExist) {
      return this.tokenService.generateTokens(UserExist, agent);
    }

    const user = await this.userService
      .create({ email, provider })
      .catch((e) => {
        this.logger.error(e);
        return null;
      });
    if (!user) {
      throw new BadRequestException(
        `не получилось создать пользователя с email ${email} в Google auth`,
      );
    }
    return this.tokenService.generateTokens(user, agent);
  }
}
