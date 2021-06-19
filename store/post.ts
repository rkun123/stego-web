import { MutationTree, ActionTree, GetterTree } from 'vuex'
import { Module, VuexModule, Mutation, Action} from 'vuex-module-decorators'
import { Post, Query } from '../schemas'
import axiosCreator from '~/utils/axiosCreator'
import { AxiosError } from 'axios'
import process from 'process'

const BASE_URL = process.env.BASE_URL || 'http://localhost:8000'

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
	query?: Query

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
		const token = this.context.rootGetters['user/getToken']
		console.debug(this.context)
		const axios = axiosCreator(BASE_URL, token)
		const res = await axios.get('/api/v1/posts')
		.catch((e: AxiosError) => {
			this.setError(e.message)
		})
		if (res) {
			return res.data as Post[]
		}
	}
}