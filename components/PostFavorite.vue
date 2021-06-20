<template>
	<div>
		<ul class="fav-container"	v-for="fav_user in post.favorited_users" v-bind:key="fav_user.id">
			<li  class="fav-element">
				<img v-bind:src="fav_user.avatar_url">
  				<h3>
				  favoried by {{fav_user.username}}
				</h3>
				<span id="Fav-icon" />
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop} from 'nuxt-property-decorator'
import { Post } from '~/schemas'

@Component({})
export default class PostFavorite extends Vue {
	@Prop({})
	post!: Post
}

</script>
<style scoped>

	.fav-container{
        display: flex;
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

	.fav-element{
        display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.fav-element img{
		
		width: 50px;
		height : 50px;
		margin: 10px;
		filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));
		border-radius: 3px;
		order: -1;
	
	}

	.fav-element h3{
		order: 0;
		margin-left: 10px;
	}

	.fav-element #Fav-icon{

		width: 50px;
		height : 50px;
		margin: 10px;

		background: url('https://api.iconify.design/emojione:beating-heart.svg') no-repeat center center / contain;
		margin-left: auto;

		order: 1;
	}

</style>