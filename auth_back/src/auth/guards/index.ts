import { GoogleGuard } from './google.guard';
import { LoginGuard } from './login.guard';
import { RegisterGuard } from './register.guard';

export const GUARDS = [LoginGuard, RegisterGuard, GoogleGuard];
