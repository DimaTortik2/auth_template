import { z } from 'zod'
import { LoginSchema, RegisterSchema } from './schemas'

export type ILogin = z.infer<typeof LoginSchema>
export type IRegisterForm = z.infer<typeof RegisterSchema>
export type IRegister = Pick<IRegisterForm, 'email' | 'password'>

export interface IRegisterResponse {
	id: number
	email: string

	createdAt: Date
	updatedAt: Date
	roles: Role[]
}

enum Role {
	ADMIN,
	USER,
}
