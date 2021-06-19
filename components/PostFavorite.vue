<template>
	<div>
		<ul class="fav-container"	v-for="fav_user in post.favorited_users" v-bind:key="fav_user.id">
			<li  class="fav-element">
				<img v-bind:src="fav_user.avatar_url">
  				<h3>
				  favoried by {{fav_user.username}}
				</h3>
				<h3>
				  {{post.writing_time}}
				</h3>
			</li>
			<li  class="fav-element">
				<img v-bind:src="fav_user.avatar_url">
  				<h3>
				  favoried by {{fav_user.username}}
				</h3>
			</li>
			<li  class="fav-element">
				<img v-bind:src="fav_user.avatar_url">
  				<h3>
				  favoried by {{fav_user.username}}
				</h3>
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
	}

	.fav-element img{
		
		width: 50px;
		height : 50px;
		filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));
		border-radius: 3px;
		margin: 10px;
		flex-basis: auto;
	
	}

	.fav-element h3{
		flex-basis: 40%; 
		margin: auto;
	}

</style>