import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthDto } from '../dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class RegisterGuard implements CanActivate {
  constructor(private readonly userService: UserService) {}

  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    const dto = ctx.switchToHttp().getRequest().body as AuthDto;
    const user = await this.userService.findOne({ email: dto.email });
    if (user) {
      throw new UnauthorizedException('такой пользователь уже есть');
    }
    return true;
  }
}
