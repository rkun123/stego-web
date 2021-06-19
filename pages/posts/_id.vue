<template>
  <div>


	<post-card :post="post" />
	
	<span class="PostDetail">
		

		<h2>Details</h2>
		<span class="PostDetail-Element">
			<post-info :post="post" />
		</span>
		
		<h2>posted Data</h2>
		<span class="PostDetail-Element">
			<p>	
				{{post.user.created_at}}
				<span v-if="post.user.created_at.getHours() >= 0 && post.user.created_at.getHours() < 6" id="morning" />
				<span v-else-if="post.user.created_at.getHours() >= 6 && post.user.created_at.getHours() < 12" id="day" />
				<span v-else-if="post.user.created_at.getHours() >= 12 && post.user.created_at.getHours() < 18" id="evening" />
				<span v-else id="night" />
			</p>
		</span>

		<h2>posting speed</h2>
		<span class="PostDetail-Element">
			<p>	{{post.user.created_at}}</p>	
		</span>

		<h2> Favorite </h2>
		<span class="PostDetail-Element">
			<post-favorite :post="post" />
		</span>

	</span>

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


	*{
        padding: 0px;
        margin: 0px;
    }
    
    .PostDetail{
        display: flex;
        flex-direction: column;
        max-width: 100%;
        background-color: red;
        padding-left: 30px;
        padding-right: 30px;
    }

    .PostDetail h2{
        background-color: green;
        padding-top: 15px;
        padding: auto;
    }

    .PostDetail-Element{
        background-color: purple;
        padding: 10px;
    } 



	/* 以下パッケージ化するべきか悩む部分 */
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

</style>

