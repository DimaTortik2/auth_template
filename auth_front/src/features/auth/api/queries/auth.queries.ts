import { useMutation } from '@tanstack/react-query'
import { QUERY_KEYS } from '../../../../shared/model/constants'
import { ILogin, IRegister } from '../../model/auth.interfaces'
import { authService } from '../services/auth.service'

export const UseLogin = () => {
	const {
		data,
		mutate: login,
		isPending: loginIsLoading,
		isSuccess: loginIsSuccess,
		isError: loginIsError,
		error,
	} = useMutation({
		mutationKey: [QUERY_KEYS.login],
		mutationFn: async (data: ILogin) => authService.login(data),
	})

	return {
		data,
		error,
		login,
		loginIsLoading,
		loginIsSuccess,
		loginIsError,
	}
}

export const UseRegister = () => {
	const {
		data,
		mutate: register,
		isPending: registerIsLoading,
		isSuccess: registerIsSuccess,
		isError: registerIsError,
		error,
	} = useMutation({
		mutationKey: [QUERY_KEYS.register],
		mutationFn: async (data: IRegister) => authService.register(data),
	})

	return {
		data,
		error,
		register,
		registerIsLoading,
		registerIsSuccess,
		registerIsError,
	}
}

