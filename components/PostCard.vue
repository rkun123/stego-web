<template>

	<div class="PostCard">
            <img class="PostCard-UserImage" v-bind:src="post.user.avatar_url">

            <span class="PostCard-UserDescription">
                <nuxt-link :to="`/posts/${post.id}`" >
                    <h2 class="PostCard-UserDescription-Name">
                        {{ post.user.username }}
                    </h2>
                </nuxt-link>
                <ol class="PostCard-UserDescription-Contents">
                    {{ post.content }}
                </ol>
                
                <!-- <span>{{this.$route.name}}</span> -->
                <span v-if="this.$route.name !== 'posts-id'">
                    <post-info :post="post" />
                    <div  @click="FavClicked">
                        <Icon icon="mdi-heart" v-if="isFavoritedByMe"/>
                        <Icon icon="mdi-heart-outline" v-if="!isFavoritedByMe"/>
                        <!-- <span  id="PostCard-UserDescription-FavIcon"/> -->
                    </div>
                </span>
            </span>
	</div>

</template>

<script lang="ts">

import { AxiosResponse } from 'axios';
import { Component, Vue, Prop} from 'nuxt-property-decorator'
import { Post, User } from '~/schemas'
import { Icon } from '@iconify/vue2';

@Component({components: {Icon}})
export default class PostCard extends Vue {
	@Prop({})
    
	post!: Post

    get isFavoritedByMe(){
        const me = this.$store.getters["user/getMe"] as User;
        return this.post.favorited_users.find(u => (u.id === me.id))
    }

    async FavClicked()
    {
		let res:AxiosResponse;
        if(this.isFavoritedByMe){
            
            res = await this.$axios.delete("https://stego.pigeons.house/api/v1/posts/unfavorite/" + this.post.id, {
                headers: {
                    authorization: "Bearer " + localStorage.getItem("stego-jwt"),
                }
            });
        }
        else{
            
            res = await this.$axios.put("https://stego.pigeons.house/api/v1/posts/favorite/" + this.post.id,null, {
                headers: {
                    authorization: "Bearer " + localStorage.getItem("stego-jwt"),
                }
            });
        }
        
		console.debug(res);
		if(res.status === 200)
		{
            this.$store.dispatch("post/fetchList");
		}
		else
		{
			this.$nuxt.error({
				statusCode: 404,
				message: "specified post was not found"
			})
		} 
    }
}

</script>

<style scoped>

    *{
        padding: 0px;
        margin: 0px;
    }

    .PostCard{
        max-width: 100%;
        display: flex;
        padding: 15px;
		font-family: Noto Sans;
		font-style: normal;

		background-color: #FFF;
		border-bottom: 1px solid;
    }

    .PostCard-UserImage{
        background-color: green;
        Width: 100px;
        Height: 100px;
		filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));
		border-radius: 3px;
    }

    .PostCard-UserDescription{
        width: 100%;
        flex: column;
        background-color: white;
        padding-left: 15px;
    }

    .PostCard-UserDescription-Name{
        background-color: white;
    }

    .PostCard-UserDescription-Contents{
        background-color: white;
    }

    .PostCard-UserDescription a {
        text-decoration: none;
        color: black;
    }

    #PostCard-UserDescription-FavIcon{
        width: 50px;
		height : 50px;
		margin: 10px;
        margin-left: 80%;

		content: url('https://api.iconify.design/grommet-icons:favorite.svg?height=24');
        vertical-align: -0.125em;
    }



</style>