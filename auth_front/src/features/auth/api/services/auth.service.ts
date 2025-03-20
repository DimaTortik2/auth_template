import { instance } from '../../../../shared/api'
import {
	ILogin,
	IRegister,
	IRegisterResponse,
} from '../../model/auth.interfaces'

export const authService = {
	axios: instance,

	async login(data: ILogin): Promise<void> {
		return await this.axios.post('auth/login', data).then(({ data }) => data)
	},

	async register(data: IRegister): Promise<IRegisterResponse> {
		return await this.axios.post('auth/register', data).then(({ data }) => data)
	},

}
