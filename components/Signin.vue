<template>
	<form>
		<text-box v-model="username" inputPlaceholder="rkun@example.com" />
		<text-box v-model="password" inputPlaceholder="password" inputType="password" />
		<div class="button-container">
			<btn @click="signIn">Signin</btn>
			<btn @click="signIn">Signup</btn>
		</div>
	</form>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import TextBox from './TextBox.vue'
import Btn from './Btn.vue'

@Component({
	components: {
		TextBox,
		Btn
	}
})
export default class Signin extends Vue {
	username: string = ''
	password: string = ''
}
</script>
<style scoped>
.button-container {
	display: flex;
	flex-direction: row;
	margin-top: 10px;
}
</style>