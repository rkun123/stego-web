<template>
	<div>
		<text-box v-model="username" inputPlaceholder="rkun@example.com" />
		<text-box v-model="password" inputPlaceholder="password" inputType="password" />
		<div class="button-container">
			<btn @click="signIn">Signin</btn>
			<btn @click="signUp">Signup</btn>
		</div>
	</div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
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

	async signIn() {
		console.debug(this.$store.hasModule('user'))
		await this.$store.dispatch('user/signIn', {
			username: this.username,
			password: this.password
		})
		console.debug(this.$store.getters['user/me'])
	}
}
</script>
<style scoped>
.button-container {
	display: flex;
	flex-direction: row;
	margin-top: 10px;
}
</style>