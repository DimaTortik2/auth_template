import axios from 'axios'
import { CONSTANTS } from '../model/constants'

const instance = axios.create({
	baseURL: CONSTANTS.BACKEND_URL,
	withCredentials: true,
})

export { instance }
