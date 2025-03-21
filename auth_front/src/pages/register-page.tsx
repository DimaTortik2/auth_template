import { useContext, useEffect } from 'react'
import { ILogin, UseRegister } from '../features/auth'
import { RegisterForm } from '../widgets/auth'
import { useNavigate } from 'react-router'
import { AxiosError } from 'axios'
import { IErrorData } from '../shared/model/interfaces'
import { NotificationContext } from '../shared/notifications/notification-provider'

export function RegisterPage() {
	const navigate = useNavigate()

	const {
		register,
		registerIsLoading,
		registerIsSuccess,
		registerIsError,
		error,
		data,
	} = UseRegister()

	const { showNotification } = useContext(NotificationContext)

	useEffect(() => {
		if (registerIsLoading) {
			showNotification({ message: 'загрузка...', type: 'loading' })
		}
		if (registerIsSuccess) {
			navigate('/')
			showNotification({ message: 'успешно', type: 'success' })

			console.log('data answer = ', data)
		}
		if (registerIsError) {
			const axiosError = error as AxiosError
			const errorData = axiosError.response?.data as IErrorData
			const errorMessage = errorData.message
			showNotification({ message: errorMessage, type: 'error' })
		}
	}, [data, registerIsLoading, registerIsSuccess, registerIsError, error])

	const onSubmit = (data: ILogin) => {
		register(data)
	}

	return (
		<div className='text-white backdrop-blur-3xl bg-[rgba(52,116,132,0.4)] w-full min-[400px]:w-[400px] h-3/4 rounded-2xl border-solid border-4 border-cyan-500'>
			<RegisterForm onSubmit={onSubmit} />
		</div>
	)
}
