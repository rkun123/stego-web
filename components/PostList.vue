<template>
	<div class="container">
		<post-filter />
		{{ list }}
	</div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import PostFilter from './PostFilter.vue'
@Component({
	components: {
		PostFilter
	}
})
export default class PostList extends Vue {
	async fetch() {
		console.debug(this.$store)
		await this.$store.dispatch('post/fetchList')
	}

	get list() {
		return this.$store.getters['post/getList']
	}
}
</script>