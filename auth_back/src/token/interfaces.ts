export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export interface JwtPayLoad {
  id: number;
  email: string;
  roles: string[];
}
