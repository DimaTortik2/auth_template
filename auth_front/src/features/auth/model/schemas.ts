import * as yup from 'yup'

export const LoginSchema = yup.object({
	email: yup.string().required('Не забудь email').email('Не похоже на email'),
	password: yup
		.string()
		.required('Не забудь пароль')
		.min(6, 'Минимально 6 символов')
		.max(32, 'Максимально 32 символа'),
})


export const RegisterSchema = yup.object({
	email: yup.string().required('Не забудь email').email('Не похоже на email'),
	password: yup
		.string()
		.required('Не забудь пароль')
		.min(6, 'Минимально 6 символов')
		.max(32, 'Максимально 32 символа'),
	password_repeat: yup
		.string()
		.required('Не забудь пароль')
		.oneOf([yup.ref('password')], 'Пароли должны совпадать')
		.min(6, 'Минимально 6 символов')
		.max(32, 'Максимально 32 символа'),
})