/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import User from '~/store/user'
import Post from '~/store/post'

let UserStore: User
let PostStore: Post
function initialiseStores (store: Store<any>): void {
  UserStore = getModule(User, store)
	PostStore = getModule(Post, store)
}

export { initialiseStores, UserStore, PostStore }