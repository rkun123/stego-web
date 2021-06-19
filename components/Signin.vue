<template>
	<div>
		<text-box v-model="username" inputPlaceholder="rkun@example.com" />
		<text-box v-model="password" inputPlaceholder="password" inputType="password" />
		<div class="signup-form">
			<div class="row">
				<div class="label">Avatar</div>
				<image-picker v-model="avatarFilePath"/>
			</div>
			<div class="row">
				<div class="label">Birth</div>
				<date-picker v-model="birthDate" />
			</div>
		</div>
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
import ImagePicker from './ImagePicker.vue'
import DatePicker from './DatePicker.vue'

@Component({
	components: {
		TextBox,
		Btn,
		ImagePicker,
		DatePicker
	}
})
export default class Signin extends Vue {
	username: string = ''
	password: string = ''
	avatarFilePath: string = ''
	birthDate: string = ''

	async signIn() {
		console.debug(this.$store.hasModule('user'))
		await this.$store.dispatch('user/signIn', {
			username: this.username,
			password: this.password
		})
		console.debug(this.$store.getters['user/me'])
	}

	async signUp() {
		console.debug(this.username, this.password, this.avatarFilePath, this.birthDate)
	}
}
</script>
<style scoped>
.button-container {
	display: flex;
	flex-direction: row;
	margin-top: 10px;
}

.label {
	margin-right: .5em;
}
.row {
	display: flex;
	flex-direction: row;
}
</style>