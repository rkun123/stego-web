<template>
	<div class="container">
		<div class="header">
			<button @click="close" class="icon-button">x</button>
			<button @click="submit" class="icon-button">Send</button>
		</div>
		<div class="edit">
			<textarea v-model="post.content" class="textarea"></textarea>
		</div>
	</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'
import { BasePost, Query, sortAttrOptions } from '~/schemas'

@Component({
	components: { }
})
export default class NewPost extends Vue {
	post: BasePost = {
		content: '',
		writing_time: 0,
		images: []
	}
	close() {
		this.$emit('close')
	}
	submit() {
		this.$store.dispatch('post/postPost', this.post)
	}
}
</script>
<style scoped>
.container {
	display: flex;
	flex-direction: column;
	align-content: space-between;
	background-color: #fff;
	border-radius: 10px;
	z-index: 2;
}
.header {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.edit {
	flex-grow: 2;
}
.textarea {
	width: 100%;
	height: 100%;
}
</style>