import { z } from 'zod'

export const LoginSchema = z.object({
	email: z.string().min(1, 'Не забудь email').email('Не похоже на email'),
	password: z
		.string()
		.min(6, 'Минимально 6 символов')
		.max(32, 'Максимально 32 символа'),
})

export const RegisterSchema = z
	.object({
		email: z.string().min(1, 'Не забудь email').email('Не похоже на email'),
		password: z
			.string()
			.min(6, 'Минимально 6 символов')
			.max(32, 'Максимально 32 символа'),
		password_repeat: z
			.string()
			.min(6, 'Минимально 6 символов')
			.max(32, 'Максимально 32 символа'),
	})
	.refine(data => data.password === data.password_repeat, {
		message: 'Пароли должны совпадать',
		path: ['password_repeat'],
	})
