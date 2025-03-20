import { Injectable } from '@nestjs/common';
import { Prisma, Role, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(user: Prisma.UserCreateInput) {
    return await this.prisma.user.create({
      data: {
        ...user,
        roles: [Role.USER],
        provider: user.provider ? user.provider : null,
      },
    });
  }

  async findOne(where: Prisma.UserWhereUniqueInput): Promise<User | null> {
    const user = await this.prisma.user.findFirst({
      where,
    });
    if (!user) {
      return null;
    }
    return user;
  }

  async delete(args: Prisma.UserDeleteArgs): Promise<void> {
    await this.prisma.user.delete({
      ...args,
    });
  }
}
