<template>

	<div class="PostCard">
		<img class="PostCard-UserImage">

		<span class="PostCard-UserDescription">
			<h2 class="PostCard-UserDescription-Name">
				hugahuga
			</h2>
			<ol class="PostCard-UserDescription-Contents">
				<p>piyopiyo</p>
				<p>piyopiyo</p>
				<p>hogehoge</p>
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
        background-color: red;
        display: flex;
        padding: 15px;
    }

    .PostCard-UserImage{
        background-color: green;
        Width: 100px;
        Height: 100px;
    }

    .PostCard-UserDescription{
        width: 100%;
        flex: column;
        background-color: blue;
        padding-left: 15px;
    }

    .PostCard-UserDescription-Name{
        background-color: peru;
    }

    .PostCard-UserDescription-Contents{
        background-color: purple;
    }



</style>