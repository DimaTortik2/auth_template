import { AccessJwtStrategy } from './access-jwt.strategy';
import { RefreshJwtStrategy } from './refresh-jwt.strategy';

export * from './access-jwt.strategy'
export * from './refresh-jwt.strategy';

export const STRATEGIES = [RefreshJwtStrategy, AccessJwtStrategy];
