<template>
  <div>


	<h2>Details</h2>
		<p>temperature : 	</p>
		<p>velocity : {{post.velocity}}	</p>
		<p>direction : {{post.direction}}</p>
		<p>elevation : {{post.elevation}}</p>
		<p>latlng : {{post.lat}}/{{post.lng}}</p>

	<h2>posted Data</h2>
		<p>	{{post.user.created_at}}</p>

	<h2>posting speed</h2>
		<p>	{{post.user.created_at}}</p>

	<h2> Favorite </h2>
		<ul v-for="fav_user in post.favorited_users" v-bind:key="fav_user.id">
			img : {{fav_user.avatar_url}}  username : {{fav_user.username}}
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
			}
		]
	}
}

</script>

<style>

</style>

