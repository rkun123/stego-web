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
            </span>
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



</style>