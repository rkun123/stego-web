<template>
	<div class="container">
		<div class="header">
			<div @click="close" class="icon-button">
				<Icon icon="mdi-close" />
			</div>
			<div @click="submit" class="icon-button">
				<Icon icon="mdi-send" />
			</div>
		</div>
		<div class="edit">
			<textarea v-model="post.content" class="textarea" placeholder="What's Up ?"></textarea>
		</div>
	</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'
import { BasePost, Query, sortAttrOptions } from '~/schemas'
import { Icon } from '@iconify/vue2'

@Component({
	components: {
		Icon
	}
})
export default class NewPost extends Vue {
	post: BasePost = {
		content: '',
		writing_time: 0,
		reply_to_id: '',
		temperature: 0,
		images: []
	}

	writeStartedAt: number = Date.now()

	close() {
		this.$emit('close')
	}

	@Watch('post.content')
	onContentChange(_: any, old: string) {
		if(old === '') {
			this.writeStartedAt = Date.now()
		}
	}
	async submit() {
		const writingTime = Date.now() - this.writeStartedAt
		this.post.writing_time = writingTime
		await this.$store.dispatch('post/postPost', this.post)
		this.$emit('close')
	}
}
</script>
<style scoped>
.container {
	display: flex;
	flex-direction: column;
	align-content: space-between;
	background-color: #fff;
	border-radius: 10px 10px 0 0;
	box-shadow: 0px 0px 10px silver;
	z-index: 2;
}
.header {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.edit {
	flex-grow: 2;
	padding: 10px;
	padding-top: 0;
}
.textarea {
	resize: none;
	height: 100%;
	width: 100%;
	border: none;
}
.textarea:focus {
	outline: none;
}
.icon-button {
	padding: 5px;
	cursor: pointer;
	font-size: 20px;
}
</style>