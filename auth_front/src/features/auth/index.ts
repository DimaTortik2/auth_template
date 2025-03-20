export { RegisterInput } from './ui/register-input'
export { LoginInput } from './ui/login-input'

export { LoginSchema, RegisterSchema } from './model/schemas'
export type {
	ILogin,
	IRegister,
	IRegisterForm,
	IRegisterResponse,
} from './model/auth.interfaces'
export { UseLogin, UseRegister, } from './api/queries/auth.queries'
