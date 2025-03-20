import { useForm } from 'react-hook-form'
import { MyButton } from '../../shared/buttons'
import { ILogin, LoginInput, LoginSchema } from '../../features/auth'
import { AuthBackLink, AuthHeader } from '../../shared/auth'
import { yupResolver } from '@hookform/resolvers/yup'
import { CONSTANTS } from '../../shared/model/constants'
import GoogleIcon from '@mui/icons-material/Google'

interface IProps {
	onSubmit: (data: ILogin) => void
}

export function LoginForm({ onSubmit }: IProps) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ILogin>({
		resolver: yupResolver(LoginSchema),
	})

	const handleGoogleAuthClick = () => {
		window.location.href = CONSTANTS.GOOGLE_BACKEND_PROVIDER_URL
		
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='relative h-full w-full flex flex-col justify-center'
		>
			<AuthHeader className='absolute top-0 rounded-b-none'>Вход</AuthHeader>
			<div className='relative flex flex-col flex-1 w-full justify-center'>
				<div className='w-full items-center flex flex-col gap-1'>
					<LoginInput
						title={'Почта'}
						errors={errors}
						register={register}
						registerName={'email'}
						type={'text'}
					/>

					<LoginInput
						title={'Пароль'}
						errors={errors}
						register={register}
						registerName={'password'}
						type={'password'}
					/>
				</div>
				<div className='w-full flex justify-center'>
					<div className='h-px w-4/5 bg-cyan-100'></div>
				</div>

				<div className='w-full flex justify-center mt-2'>
					<div className='w-3/4 flex gap-3'>
						<span className='opacity-85 text-gray-100'>нет аккаунта?</span>
						<AuthBackLink className='hover:text-cyan-200' type='register' />
					</div>
				</div>

				<MyButton onClick={handleGoogleAuthClick} className='mt-4 mx-4 flex gap-4'>
					<GoogleIcon
						sx={{
							padding: 0,
							height: '25px',
						}}
					/>{' '}
					продолжить с google
				</MyButton>
			</div>
			<MyButton isSubmit={true} className='mt-auto w-full rounded-t-none'>
				Войти
			</MyButton>
		</form>
	)
}
