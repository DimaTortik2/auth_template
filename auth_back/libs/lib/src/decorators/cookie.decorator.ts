import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Cookie = createParamDecorator(
  (key: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    if (!request.cookies) return undefined;

    if (key && !request.cookies[key]) {
      return null;
    }
    return key ? request.cookies[key] : request.cookies;
  },
);
