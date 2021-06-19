<template>
	<div>
	<ul  class="info-container">
		<li>
			<span class="info-title" >
				<span id="temperature" class="info-icons" />
				temperature 
			</span>
			<span class="info-value" >
				{{post.temperature}} 
			</span>
		</li>

		<li>
			<span class="info-title">
				<span id="run-fast" class="info-icons"/>
				velocity
			</span>
			<span class="info-value">
				{{post.velocity}}	
			</span>
		</li>

		<li>
			<span class="info-title">
				<span id="compass" class="info-icons"/>
				direction
			</span>
			<span class="info-value">
			 	{{post.direction}}
			</span>
		</li>

		<li>
			<span class="info-title">
				<span id="mountain" class="info-icons"/>
				elevation
			</span>
			<span class="info-value">
				{{post.elevation}}
			</span>
		</li>
		
		<li>
			<span class="info-title">
				<span id="phone-shaking" class="info-icons"/>
				latlng
			</span>
			<span class="info-value">
				{{post.lat}}/{{post.lng}}
			</span>
		</li>

		</ul>
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


    *{
        padding: 0px;
        margin: 0px;
    }

	.info-container{
		display: flex;
		flex-direction: column;
		padding-left: 0px;
		list-style: none;
	}

	.info-container li{
		display: flex;
		flex-direction: row;
	}

	.info-title{
		flex-basis: 25%; 
		margin-right: 30px;
	}

	.info-value{
		flex-basis: 75%;
	}

	.info-icons{
		width: 15px;
		height: 15px;
		margin-left: 5px;
		margin-right: 5px;
		vertical-align: -0.125em;
	}

	#mountain{
		content: url('https://api.iconify.design/la:mountain.svg?height=32');
	}
	
	#compass{
		content: url('https://api.iconify.design/clarity:compass-line.svg?height=16');
	}

	#temperature{
		content: url('https://api.iconify.design/fluent:temperature-20-filled.svg?height=20');
	}

	#run-fast{
		content: url('https://api.iconify.design/mdi:run-fast.svg?height=24');
	}

	#phone-shaking{
		content: url('https://api.iconify.design/fluent:phone-shake-24-regular.svg?height=24');
	}

</style>