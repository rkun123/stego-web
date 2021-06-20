import { MutationTree, ActionTree, GetterTree } from 'vuex'
import { Module, VuexModule, Mutation, Action} from 'vuex-module-decorators'
import { BasePost, Post, Query } from '../schemas'
import axiosCreator from '~/utils/axiosCreator'
import { AxiosResponse, AxiosError } from 'axios'
import process from 'process'
import updateDetailInfo from '~/utils/updateDetailInfo'

const BASE_URL = process.env.BASE_URL || 'https://stego.pigeons.house'
console.debug(process.env)

let $axios = axiosCreator(
	BASE_URL
)

export type PostState = {
	list: Post[],
	fetching: boolean,
	error?: string,
	query?: Query
}

@Module({
	name: 'post',
	stateFactory: true,
	namespaced: true
})
export default class PostModule extends VuexModule {
	list: Post[] = []
	fetching: boolean = false
	error?: string
	query: Query = {
		sort: {
			attr: 'birthday',
			order: 'asc'
		},
		filter: {}
	}

	get getList() {
		return this.list
	}

	@Mutation
	setList(list: Post[]) {
		this.list = list
	}

	@Mutation
	appendList(list: Post[]) {
		this.list.concat(list)
	}
	
	@Mutation
	setError(error: string) { 
		this.error = error
	}

	@Mutation
	setQuery(query: Query) {
		this.query = query
	}

	@Action({ commit: 'setList'})
	async fetchList() {
		const token = localStorage.getItem('stego-jwt')
		if(token === null) {
			window.$nuxt.$router.push('/')
			return
		}
		console.debug()
		console.debug(this.context)
		const axios = axiosCreator(BASE_URL, token)

		let res: void | AxiosResponse

		if(this.query !== undefined) {
			res = await axios.post('/api/v1/posts/query', this.query)
			.catch((e: AxiosError) => {
				this.setError(e.message)
			})
		} else {
			res = await axios.get('/api/v1/posts/')
				.catch((e: AxiosError) => {
					this.setError(e.message)
				})
		}

		if (res) {
			return res.data as Post[]
		}
	}

	@Action({})
	async postPost(_post: BasePost) {
		const post = await updateDetailInfo(_post)
		const token = localStorage.getItem('stego-jwt')
		if(token === null) {
			window.$nuxt.$router.push('/')
			return
		}
		console.debug(this.context)
		const axios = axiosCreator(BASE_URL, token)
		const res = await axios.post('/api/v1/posts/',
			post
		)
		.catch((e: AxiosError) => {
			this.setError(e.message)
		})
		this.context.dispatch('fetchList')
	}
}