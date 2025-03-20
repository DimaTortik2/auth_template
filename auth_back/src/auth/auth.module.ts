import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';

import { ConfigModule } from '@nestjs/config';
import { STRATEGIES } from './strategies';
import { GUARDS } from './guards';
import { TokenModule } from 'src/token/token.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { HttpModule } from '@nestjs/axios';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService, ...STRATEGIES, ...GUARDS],
  imports: [
    PassportModule,
    TokenModule,
    PrismaModule,
    HttpModule,
    ConfigModule,
    UserModule,
  ],
})
export class AuthModule {}
