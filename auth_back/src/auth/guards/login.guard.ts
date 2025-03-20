import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthDto } from '../dto';
import { UserService } from 'src/user/user.service';
import { comparePasswords } from '../helpers/password.helper';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private readonly userService: UserService) {}

  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    const dto = ctx.switchToHttp().getRequest().body as AuthDto;
    const user = await this.userService.findOne({ email: dto.email });
    if (!user) {
      throw new UnauthorizedException('Неверная почта или пароль');
    }

    if (user.password) {
      return comparePasswords(dto.password, user.password);
    }

    return false;
  }
}
