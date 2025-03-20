import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtPayLoad } from 'src/token/interfaces';

export const CurrentUser = createParamDecorator(
  (
    key: keyof JwtPayLoad,
    ctx: ExecutionContext,
  ): JwtPayLoad | Partial<JwtPayLoad> => {
    const user = ctx.switchToHttp().getRequest().user;
    return key ? user[key] : user;
  },
);
