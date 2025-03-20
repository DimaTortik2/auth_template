import { compare, genSaltSync, hashSync } from 'bcrypt';

export const hashPassword = (password: string) => {
  return password ? hashSync(password, genSaltSync(10)) : null;
};

export const comparePasswords = async (
  password: string,
  hashedPassword: string,
) => {
  return await compare(password, hashedPassword);
};
