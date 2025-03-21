import { useForm } from 'react-hook-form'
import { MyButton } from '../../shared/buttons'
import {
	RegisterSchema,
	IRegister,
	RegisterInput,
	IRegisterForm,
} from '../../features/auth'
import { AuthBackLink, AuthHeader } from '../../shared/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { CONSTANTS } from '../../shared/model/constants'
import GoogleIcon from '@mui/icons-material/Google'

interface IProps {
	onSubmit: (data: IRegister) => void
}

export function RegisterForm({ onSubmit }: IProps) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IRegisterForm>({
		resolver: zodResolver(RegisterSchema),
		mode: 'onChange',
	})

	const handleGoogleAuthClick = () => {
		window.location.href = CONSTANTS.GOOGLE_BACKEND_PROVIDER_URL
	}

	const handleFormSubmit = ({ email, password }: IRegisterForm) => {
		onSubmit({ email, password })
	}

	return (
		<form
			onSubmit={handleSubmit(handleFormSubmit)}
			className='relative h-full w-full flex flex-col justify-center'
		>
			<AuthHeader className='absolute top-0 rounded-b-none'>
				Регистрация
			</AuthHeader>

			<div className='relative flex flex-col flex-1 w-full justify-center'>
				<div className='w-full items-center flex flex-col gap-1'>
					<RegisterInput
						title={'Почта'}
						errors={errors}
						register={register}
						registerName={'email'}
						type={'text'}
					/>

					<RegisterInput
						title={'Пароль'}
						errors={errors}
						register={register}
						registerName={'password'}
						type={'password'}
					/>

					<RegisterInput
						title={'Повторите пароль'}
						errors={errors}
						register={register}
						registerName={'password_repeat'}
						type={'password'}
					/>
				</div>

				<div className='w-full flex justify-center'>
					<div className='h-px w-4/5 bg-cyan-100'></div>
				</div>

				<div className='w-full flex justify-center mt-2'>
					<div className='w-3/4 flex gap-3'>
						<span className='opacity-85 text-gray-100'>есть аккаунт?</span>
						<AuthBackLink className='hover:text-cyan-200' type='login' />
					</div>
				</div>
				<MyButton
					onClick={handleGoogleAuthClick}
					className='mt-4 mx-4 flex gap-4'
				>
					<GoogleIcon
						sx={{
							padding: 0,
							height: '25px',
						}}
					/>{' '}
					продолжить с google
				</MyButton>
			</div>

			<MyButton isSubmit={true} className='w-full rounded-t-none'>
				Зарегаться
			</MyButton>
		</form>
	)
}
