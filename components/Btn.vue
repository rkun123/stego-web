<template>
	<button class="button" @click="onClick">
		<slot />
	</button>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Btn extends Vue {
	onClick() {
		this.$emit('click')
	}
}
</script>
<style scoped>
.button {
	padding: 5px 10px;
	background-color: #00000000;
	box-shadow: none;
	border-radius: 5px;
	border: solid 1px #000000;
	margin-right: 10px;
	cursor: pointer;
}
</style>