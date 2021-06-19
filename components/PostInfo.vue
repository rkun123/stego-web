<template>
	<div>
		<p>
			<span id="temperature"></span>
			temperature : {{post.temperature}} 
		</p>

		<p>
			<span id="run-fast"></span>
			velocity : {{post.velocity}}	
		</p>
		<p>
			<span id="compass"></span>
			direction : {{post.direction}}
		</p>
		<p>
			<span id="mountain"></span>
			elevation : {{post.elevation}}
		</p>
		<p>
			<span id="run-fast"></span>
			latlng : {{post.lat}}/{{post.lng}}
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

	#phone-shake{
		content: url('https://api.iconify.design/fluent:phone-shake-24-regular.svg?height=24');
		vertical-align: -0.125em;
	}

	#mountain{
		content: url('https://api.iconify.design/la:mountain.svg?height=32');
		vertical-align: -0.125em;
	}
	
	#compass{
		content: url('https://api.iconify.design/clarity:compass-line.svg?height=16');
		vertical-align: -0.125em;
	}

	#temperature{
		content: url('https://api.iconify.design/fluent:temperature-20-filled.svg?height=20');
		vertical-align: -0.125em;
	}

	#run-fast{
		content: url('https://api.iconify.design/mdi:run-fast.svg?height=24');
		vertical-align: -0.125em;
	}

</style>