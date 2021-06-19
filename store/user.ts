import { User, BaseUser } from '../schemas'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import axiosCreator from '~/utils/axiosCreator'
import process from 'process'
import axios, { AxiosError } from 'axios'
import Vue from 'vue'

const BASE_URL = process.env.BASE_URL || 'http://localhost:8000'

let $axios = axiosCreator(
	BASE_URL
)

@Module({
	name: 'user',
	stateFactory: true,
	namespaced: true
})
export default class UserModule extends VuexModule {
	private me: User | null = null
	private token: string | null = null
	private fetching: boolean = false
	private error: string | null = null

	get getToken() {
		return this.token
	}
	get getMe() {
		return this.me
	}
	get getError() {
		return this.error
	}


	@Mutation
	setMe(user: User) {
		this.me = user
	}

	@Mutation
	setToken(token: string) {
		this.token = token
	}

	@Mutation
	setError(error: string) {
		this.error = error
	}

	@Action({})
	async createUser({ avatarFile, user }: {avatarFile: File, user: BaseUser}) {
		console.debug('avatarPath', avatarFile.name)
		const formData = new FormData()
		formData.append('file', avatarFile)
		formData.append('upload_preset', 'sns_avatar')
		formData.append('tags', 'gs-vue,gs-vue-uploaded');
		const avatar_res = await axios.post(`https://api.cloudinary.com/v1_1//dvmyw24ax/upload`, formData)
		console.log(avatar_res)
		user.avatar_url = avatar_res.data.url
		console.debug('avatar', user.avatar_url)
		const res = await $axios.post(
			`/api/v1/users/signup`,
			user,
			{
				headers: {
					'content-type': 'application/json'
				}
			}
		).catch((e: AxiosError) => {
			console.error(e)
			this.setError(e.message)
		})
	}

	@Action({ commit: 'setToken' })
	async signIn({ username, password }:{ username: string, password: string }) {
		const params = new URLSearchParams()
		params.append('username', username)
		params.append('password', password)

		const res = await $axios.post(
			`${BASE_URL}/api/v1/users/token`,
			params
		)
		if (!res) throw Error('Signin failed')

		const token = res.data.access_token as string
		localStorage.setItem('stego-jwt', token)
		$axios = axiosCreator(
			BASE_URL,
			token
		)
		await this.fetchMe()
		return token
	}

	@Action({commit: 'setToken'})
	async authByLocalStorage() {
		const token = localStorage.getItem('stego-jwt')
		if(token === null) return
		$axios = axiosCreator(
			BASE_URL,
			token
		)
		this.context.dispatch('fetchMe')
		return token
	}

	@Action({ commit: 'setMe'})
	async fetchMe() {
		const res = await $axios.get('/api/v1/users/me')
		if (res.status !== 200) {
			this.setError(res.data)
		}
		return res.data as User
	}

}
