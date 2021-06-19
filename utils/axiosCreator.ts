import axios, { AxiosInstance } from 'axios'

function axiosCreator(baseURL: string, token?: string): AxiosInstance {
	return axios.create({
		baseURL,
		headers: {
			'authoriztion': token ? 'Bearer ' + token : undefined
		}
	})
}

export default axiosCreator