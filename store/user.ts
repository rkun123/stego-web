import { User, BaseUser } from '../schemas'
import { MutationTree, ActionTree } from 'vuex'
import axiosCreator from '~/utils/axiosCreator'
import process from 'process'

const BASE_URL = process.env.BASE_URL || 'http://localhost:8000'

let $axios = axiosCreator(
	BASE_URL
)

export type State = {
	me?: User,
	token?: string,
	fetching: boolean,
	error?: string
}

export const state = (): State => ({
	fetching: false,
})

export const getters = {
	me: (state: State) => {
		return state.me
	},
	error: (state: State) => {
		return state.error
	}
}

export const mutations: MutationTree<State> = {
	setMe(state: State, user: User) {
		state.me = user
	},
	setToken(state: State, token: string) {
		state.token = token
	},
	setError(state: State, error: string) {
		state.error = error
	},
}

export const actions: ActionTree<State, State> = {
	async signIn({ commit, dispatch }, { username, password }:{ username: string, password: string }) {
		const params = new URLSearchParams()
		params.append('username', username)
		params.append('password', password)

		const res = await $axios.post(
			`${BASE_URL}/api/v1/users/token`,
			params
		).catch(e => {
			console.error(e)
			return
		})
		if (!res) return

		if (res.status !== 200) {
			commit('setError', res.data)
		}
		console.debug(res.data)
		const token = res.data.access_token as string
		commit('setToken', token)
		$axios = axiosCreator(
			BASE_URL,
			token
		)
		dispatch('getMe')
	},

	async getMe({ commit }) {
		const res = await $axios.get('/api/v1/users/me')
		if (res.status !== 200) {
			commit('setError', res.data)
		}
		commit('setMe', res.data as User)
	},

	async createUser({ dispatch, state}, { avatarFile, user }: {avatarFile: File, user: BaseUser}) {
		console.debug('avatarPath', avatarFile.name)
		user.avatar_url = await uploadAvatar(this.$cloudinary, avatarFile) as string
		console.debug('avatar', user.avatar_url)
		const res = await this.$axios.post(
			`${BASE_URL}/api/v1/users/signup`,
			user,
			{
				headers: {
					'content-type': 'application/json'
				}
			}
		).catch(e => {
			console.error(e)
			this.commit('setError', 'Failed')
		})
	},

}
	async function uploadAvatar($cloudinary: any, avatar: File) {
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