import {
  BadRequestException,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  ParseIntPipe,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { userResponse } from './responses';
import { CurrentUser, Roles } from 'lib/lib/decorators';
import { JwtPayLoad } from 'src/token/interfaces';
import { Role } from '@prisma/client';
import { AccessTokenGuard } from 'src/token/guards';
import { RolesGuard } from 'lib/lib/guards';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  async finOne(@Query('id', ParseIntPipe) id: number) {
    const user = await this.userService.findOne({ id });

    if (!user) {
      throw new BadRequestException(
        `Невозможно найти пользователя с id  ${id}`,
      );
    }
    return new userResponse(user);
  }

  @UseGuards(AccessTokenGuard)
  @Delete('delete-myself')
  async deleteMyself(@CurrentUser() user) {
    await this.userService.delete({ where: { id: user.id } });
    return true;
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Delete()
  async deleteOne(@Query('id', ParseIntPipe) id: number) {
    await this.userService.delete({ where: { id } });
    return true;
  }

  @Get('me')
  @UseGuards(AccessTokenGuard)
  me(@CurrentUser() user: JwtPayLoad) {
    return user;
  }
}
