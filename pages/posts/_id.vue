<template>
  <div>

	<post-card :post="post" />

	<h2>Details</h2>
		<post-info :post="post" />
		
	<h2>posted Data</h2>
		<p>	
			{{post.user.created_at}}
			<span v-if="post.user.created_at.getHours() >= 0 && post.user.created_at.getHours() < 6" id="morning" />
			<span v-else-if="post.user.created_at.getHours() >= 6 && post.user.created_at.getHours() < 12" id="day" />
			<span v-else-if="post.user.created_at.getHours() >= 12 && post.user.created_at.getHours() < 18" id="evening" />
			<span v-else id="night" />
		</p>

	<h2>posting speed</h2>
		<p>	{{post.user.created_at}}</p>

	<h2> Favorite </h2>
		<ul class="fav-container" v-for="fav_user in post.favorited_users" v-bind:key="fav_user.id">
			<!-- 黒点をなくす -->
			<li class="fav-element">
				<img class="fav-image" v-bind:src="fav_user.avatar_url">
  				username : {{fav_user.username}}
			</li>
		</ul>


<!--  dont have to edit why of this is a seen_users datas-->
<!-- <p v-for="user in post.seen_users" v-bind:key="user.email">
	{{user.created_at}}
</p> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Post } from '~/schemas'


@Component({})
export default class PostDetail extends Vue {
	// for debug: Mock post

	
	post: Post = {
		temperature: 24,
		id: 'hogefugahogefuga',
		content: 'あいうえおかきくけこ',
		content_length: 10,
		user: {
			id: 'foobarfoobar',
			username: 'izumi',
			email: 'izumi@example.com',
			avatar_url: 'https://picsum.photos/480',
			date_of_birth: new Date(),
			created_at: new Date(),
			updated_at: new Date()
		},
		writing_time: 3.2,
		lat: 33.65445,
		lng: 130.67161,
		elevation: 10,
		velocity: 10,
		direction: 234,
		gyro_x: 1.2,
		gyro_y: 1.2,
		gyro_z: 1.2,
		seen_users: [
			{
				id: 'hogefugafoobar',
				username: 'rkun',
				email: 'rkun@example.com',
				avatar_url: 'https://picsum.photos/480',
				date_of_birth: new Date(),
				created_at: new Date(),
				updated_at: new Date()
			}
		],
		favorited_users: [
			{
				id: 'hogefugafoobar',
				username: 'rkun',
				email: 'rkun@example.com',
				avatar_url: 'https://picsum.photos/480',
				date_of_birth: new Date(),
				created_at: new Date(),
				updated_at: new Date()
			},
		]
	}
}

</script>

<style scoped>

	#morning{
		content: url('https://api.iconify.design/vaadin:morning.svg?height=16');
		vertical-align: -0.125em;
	}

	#day{
		content: url('https://api.iconify.design/emojione-monotone:sun.svg?height=16');
		vertical-align: -0.125em;
	}

	#evening{
		content: url('https://api.iconify.design/vaadin:morning.svg?height=16');
		vertical-align: -0.125em;
	}

	#night{
		content: url('https://api.iconify.design/ic:baseline-mode-night.svg?height=24');
		vertical-align: -0.125em;
	}


	.fav-container{
		flex-direction: column;	
	}

	.fav-element{
		left: 0%;
		right: 0%;
		top: 0%;
		bottom: 0%;

		background: #FFFFFF;
		border: 1px solid rgba(0, 0, 0, 0.3);
		box-sizing: border-box;
		box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
		border-radius: 3px;
	}

	.fav-image{
		/*サイズ変更を一定化する*/
		width: 20%;
		height : 20%;
	}
</style>

