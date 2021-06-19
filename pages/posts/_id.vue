<template>
  <div>
		{{ post.content }}
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

