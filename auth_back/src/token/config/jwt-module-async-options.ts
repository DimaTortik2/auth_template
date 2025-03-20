import { ConfigService } from '@nestjs/config';
import { JwtModuleAsyncOptions, JwtModuleOptions } from '@nestjs/jwt';

export const options = (): JwtModuleAsyncOptions => ({
  inject: [ConfigService],
  useFactory: (config: ConfigService): JwtModuleOptions => ({
    signOptions: {
      expiresIn: config.get('JWT_EXP', '10m'),
    },
  }),
});
