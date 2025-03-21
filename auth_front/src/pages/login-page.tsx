import { useContext, useEffect } from 'react'
import { ILogin, UseLogin } from '../features/auth'
import { LoginForm } from '../widgets/auth'
import { useNavigate } from 'react-router'
import { AxiosError } from 'axios'
import { IErrorData } from '../shared/model/interfaces'
import { NotificationContext } from '../shared/notifications/notification-provider'

export function LoginPage() {
	const navigate = useNavigate()

	const { data, login, loginIsLoading, loginIsSuccess, loginIsError, error } =
		UseLogin()

	const { showNotification } = useContext(NotificationContext)

	useEffect(() => {
		if (loginIsLoading) {
			showNotification({ message: 'загрузка...', type: 'loading' })
		}
		if (loginIsSuccess) {
			
			navigate('/me')
			showNotification({ message: 'успешно', type: 'success' })

			console.log('data answer = ', data)

			console.log('data answer = ', data)
		}
		if (loginIsError) {
			const axiosError = error as AxiosError
			console.log('error = ', error?.message)
			const errorData = axiosError.response?.data as IErrorData
			const errorMessage = errorData.message
			showNotification({ message: errorMessage, type: 'error' })
		}
	}, [data, loginIsLoading, loginIsSuccess, loginIsError, error])

	const onSubmit = (data: ILogin) => {
		login(data)
	}

	return (
		<div className='text-white backdrop-blur-3xl bg-[rgba(52,116,132,0.4)] w-full min-[400px]:w-[400px] h-3/4 rounded-2xl border-solid border-4 border-cyan-500'>
			<LoginForm onSubmit={onSubmit} />
		</div>
	)
}
