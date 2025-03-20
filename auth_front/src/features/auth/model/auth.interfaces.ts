import * as yup from 'yup'
import { LoginSchema, RegisterSchema } from './schemas'

export type ILogin = yup.InferType<typeof LoginSchema>
export type IRegisterForm = yup.InferType<typeof RegisterSchema>
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
