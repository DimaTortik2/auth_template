import { Provider, Role, User } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class userResponse implements User {
  id: number;
  email: string;

  @Exclude()
  password: string;
  @Exclude()
  provider: Provider | null;

  createdAt: Date;
  updatedAt: Date;
  roles: Role[];

  constructor(user: User) {
    Object.assign(this, user);
  }
}
