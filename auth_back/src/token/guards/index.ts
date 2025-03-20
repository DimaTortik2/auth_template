import { AccessTokenGuard } from './access-token.guard';
import { RefreshTokenGuard } from './refresh-token.guard';

export * from './access-token.guard'
export * from './refresh-token.guard';

export const GUARDS = [AccessTokenGuard, RefreshTokenGuard];
