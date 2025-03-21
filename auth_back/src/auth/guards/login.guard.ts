import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthDto } from '../dto';
import { UserService } from 'src/user/user.service';
import { comparePasswords } from '../helpers/password.helper';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private readonly userService: UserService) {}

  private readonly logger = new Logger(LoginGuard.name);

  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    const dto = ctx.switchToHttp().getRequest().body as AuthDto;
    const user = await this.userService.findOne({ email: dto.email });
    this.logger.log(user);
    if (!user) {
      throw new BadRequestException('Неверная почта или пароль');
    }

    if (user.password) {
      return comparePasswords(dto.password, user.password);
    }

    return false;
  }
}
