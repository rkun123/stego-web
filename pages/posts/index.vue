<template>
	<div>
		<post-list />	
	</div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import PostList from '~/components/PostList.vue'

@Component({
	components: {
		PostList
	}
})
export default class Posts extends Vue {
	
}
</script>
<style scoped>
</style>