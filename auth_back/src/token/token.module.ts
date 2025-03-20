import { Module } from '@nestjs/common';
import { TokenController } from './token.controller';
import { TokenService } from './token.service';
import { UserModule } from 'src/user/user.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { options } from './config';
import { STRATEGIES } from './strategies';
import { GUARDS } from './guards';

@Module({
  controllers: [TokenController],
  providers: [TokenService, ...STRATEGIES, ...GUARDS],
  exports: [TokenService, ...GUARDS],
  imports: [UserModule, PrismaModule, JwtModule.registerAsync(options())],
})
export class TokenModule {}
