import { User, BaseUser } from '../schemas'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import axiosCreator from '~/utils/axiosCreator'
import process from 'process'
import { AxiosError } from 'axios'
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
		user.avatar_url = await uploadAvatar(this.$cloudinary, avatarFile) as string
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
		$axios = axiosCreator(
			BASE_URL,
			token
		)
		await this.fetchMe()
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

async function uploadAvatar($cloudinary: any, avatar: File) {
	console.debug(Vue.prototype)
	const reader = new FileReader()
	reader.readAsDataURL(avatar)
	return new Promise((resolve) => {
		reader.addEventListener('load', async () => {
			const res = await $cloudinary.upload( reader.result, {
				'upload_preset': 'sns_avatar'
			})
			console.debug('res', res)
			resolve(res.url)
		})
	})
}