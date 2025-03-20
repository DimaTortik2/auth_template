import { Controller, Get, Res, UnauthorizedException } from '@nestjs/common';
import { Cookie, UserAgent } from 'lib/lib/decorators';
import { TokenService } from './token.service';
import { Response } from 'express';

@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Get('refresh')
  async refresh(
    @Cookie('refreshtoken') refreshToken: string,
    @Res() res: Response,
    @UserAgent() agent: string,
  ) {
    if (!refreshToken) {
      throw new UnauthorizedException();
    }

    const tokens = await this.tokenService.refreshTokens(refreshToken, agent);
    if (!tokens) {
      throw new UnauthorizedException();
    }
    this.tokenService.setTokensToCookies(tokens, res);
  }
}
