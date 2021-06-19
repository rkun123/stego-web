<template>
	<div>
			
		<p>
			{{post.user.created_at}}
			<span v-if="post.user.created_at.getHours() >= 0 && post.user.created_at.getHours() < 6" id="morning" />
			<span v-else-if="post.user.created_at.getHours() >= 6 && post.user.created_at.getHours() < 12" id="day" />
			<span v-else-if="post.user.created_at.getHours() >= 12 && post.user.created_at.getHours() < 18" id="evening" />
			<span v-else id="night" />
		</p>

	</div>
</template>
<script lang="ts">
import { Component, Vue, Prop} from 'nuxt-property-decorator'
import { Post } from '~/schemas'

@Component({})
export default class PostDate extends Vue {
	@Prop({})
	post!: Post
}

</script>
<style scoped>

	p{
		font-size: 15px;
	}

	span{
		margin-left: 3px;
		margin-right: 3px;
		width: 15px;
		height : 15px;
	}

	#morning{
		content: url('https://api.iconify.design/vaadin:morning.svg?height=16');
		vertical-align: -0.125em;
		filter: invert(81%) sepia(81%) saturate(633%) hue-rotate(359deg) brightness(106%) contrast(105%);
	}

	#day{
		content: url('https://api.iconify.design/emojione-monotone:sun.svg?height=16');
		vertical-align: -0.125em;
		filter: invert(15%) sepia(95%) saturate(6932%) hue-rotate(358deg) brightness(95%) contrast(112%);
	}

	#evening{
		content: url('https://api.iconify.design/vaadin:morning.svg?height=16');
		vertical-align: -0.125em;
		filter: invert(72%) sepia(26%) saturate(6428%) hue-rotate(1deg) brightness(105%) contrast(102%);
	}

	#night{
		content: url('https://api.iconify.design/ic:baseline-mode-night.svg?height=24');
		vertical-align: -0.125em;
		filter: invert(11%) sepia(71%) saturate(5170%) hue-rotate(293deg) brightness(87%) contrast(111%);
	}

</style>