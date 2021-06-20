<template>
	<div class="container">
		<div class="new-post-container" v-show="isNewPostShow">
			<new-post @close="closeNewPost"/>
		</div>
		<div class="fab-container">
			<button @click="openNewPost" v-show="!isNewPostShow">+</button>
		</div>

		<post-filter />
		<div>
			<template v-for="(post, index) in list">
				<post-card :post="post" :key="index"/>
			</template>
		</div>
	</div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import PostFilter from './PostFilter.vue'
import PostCard from './PostCard.vue'
@Component({
	components: {
		PostFilter,
		PostCard
	}
})
export default class PostList extends Vue {
	isNewPostShow: boolean = false

	openNewPost() {
		this.isNewPostShow = true
	}

	closeNewPost() {
		this.isNewPostShow = false
	}

	async created() {
		console.debug(this.$store)
		await this.$store.dispatch('post/fetchList')
	}

	get list() {
		return this.$store.getters['post/getList']
	}
}
</script>
<style scoped>
.container {
	position: relative;
}
.new-post-container {
	position: fixed;
	display: flex;
	background-color: #fff;
	bottom: 0;
	width: 100%;
	min-height: 20vh;
	z-index: 2;
}
.fab-container {
	position: fixed;
	display: flex;
	background-color: #fff;
	bottom: 10vh;
	right: 10%;
}
</style>