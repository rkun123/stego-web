<template>
	<div class="container">
		<div class="new-post-container" v-show="isNewPostShow">
			<new-post @close="closeNewPost"/>
		</div>
		<div class="fab-container">
			<div @click="openNewPost" class="fab" v-show="!isNewPostShow">
				<icon icon="mdi-add" />
			</div>
		</div>

		<div class="post-filter-button" @click="isFilterShow = !isFilterShow">
			<icon icon="mdi-chevron-up" v-if="isFilterShow"/>
			<icon icon="mdi-chevron-down" v-if="!isFilterShow"/>
		</div>
		<post-filter v-show="isFilterShow" @close="isFilterShow = false" />
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
import { Icon } from '@iconify/vue2'
@Component({
	components: {
		PostFilter,
		PostCard,
		Icon
	}
})
export default class PostList extends Vue {
	isNewPostShow: boolean = false
	isFilterShow: boolean = false

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
	overflow: hidden;
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
	font-size: 50px;
	cursor: pointer;
}

.post-filter-button {
	width: 100%;
	text-align: center;
	font-size: 20px;
}
</style>