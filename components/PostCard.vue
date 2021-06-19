<template>

	<div>
		<p class="flex_box_test">
			hoge
		</p>
	</div>

</template>

<script lang="ts">

import { Component, Vue, Prop} from 'nuxt-property-decorator'
import { Post } from '~/schemas'

@Component({})
export default class PostInfo extends Vue {
	@Prop({})
	post!: Post
}

</script>

<style scoped>
	.flex_box_test{
		/*flex-boxのテスト*/
		background: blue;
	}
</style>