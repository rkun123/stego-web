<template>
	<div>
		<ul class="fav-container"	v-for="fav_user in post.favorited_users" v-bind:key="fav_user.id">
			<li  class="fav-element">
				<img class="fav-image" v-bind:src="fav_user.avatar_url">
  				username : {{fav_user.username}}
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

	.fav-container{
		flex-direction: column;
		padding-left: 0px;
		list-style: none;
	}

	.fav-container li{

		background: #FFFFFF;
		border: 1px solid rgba(0, 0, 0, 0.3);
		box-sizing: border-box;
		box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
		border-radius: 3px;

	}

	.fav-image{
		/*サイズ変更を一定化する*/
		width: 50px;
		height : 50px;
	}

</style>