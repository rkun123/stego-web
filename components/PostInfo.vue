<template>
	<div>
	<ul  class="info-container">
		<li v-show=" post.tempurture != undefined ">
			<span class="info-title" >
				<span id="temperature" class="info-icons" />
				temperature 
			</span>
			<span class="info-value" >
				{{post.tempurture}} [°C] / {{post.tempurture * 1.8 + 32}} [°F]
			</span>
		</li>

		<li v-show=" post.velocity != undefined ">
			<span class="info-title">
				<span id="run-fast" class="info-icons"/>
				velocity
			</span>
			<span class="info-value">
				{{post.velocity}} [m/s]
			</span>
		</li>

		<li v-show=" post.direction != undefined ">
			<span class="info-title">
				<span id="compass" class="info-icons"/>
				direction
			</span>
			<span class="info-value">
			 	{{post.direction}} [m]
			</span>
		</li>

		<li v-show=" post.elevation != undefined ">
			<span class="info-title">
				<span id="mountain" class="info-icons"/>
				elevation
			</span>
			<span class="info-value">
				{{post.elevation}} [m]
			</span>
		</li>
		
		<li v-show=" post.lat != undefined || post.lng != undefined ">
			<span class="info-title">
				<span id="phone-shaking" class="info-icons"/>
				latlng
			</span>
			<span class="info-value">
				<p>lat : {{post.lat}} [°]</p>
				<p>lng : {{post.lng}} [°]</p>
			</span>
		</li>

		<li v-show=" post.gyro_x != undefined ">
			<span class="info-title">
				<span id="phone-shaking" class="info-icons"/>
				gyro
			</span>
			<span class="info-value">
				{{post.gyro_x}}, {{ post.gyro_y}}, {{ post.gyro_z }} [°]
			</span>
		</li>

		<li v-show=" post.writing_time != undefined "> 
			<span class="info-title" >
				<span id="writing-time" class="info-icons" />
				writing_time 
			</span>
			<span class="info-value" >
				{{post.writing_time / 1000}} [s]
			</span>
		</li>


		<li v-show=" post.weather != undefined ">
			<span class="info-title" >
				<span id="weather" class="info-icons" />
				weather
			</span>
			<span class="info-value">
			 	{{post.weather}} 
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
		flex-basis: 50%; 
		margin-right: 30px;
	}

	.info-value{
		flex-basis: 50%;
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

	#writing-time{
		content: url('https://api.iconify.design/dashicons:welcome-write-blog.svg?height=20');
	}

	#weather{
		/* content: url('https://api.iconify.design/dashicons:welcome-write-blog.svg?height=20'); */
		content: url('https://api.iconify.design/fluent:weather-hail-day-20-filled.svg?height=20');
	}

</style>