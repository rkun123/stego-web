<template>
	<div>
		<text-box v-model="username" inputPlaceholder="rkun" />
		<text-box v-model="password" inputPlaceholder="password" inputType="password" />
		<div class="signup-form">
			<text-box v-model="email" inputPlaceholder="rkun@example.com" />
			<div class="row">
				<div class="label">Avatar</div>
				<image-picker @change="onImageChange"/>
			</div>
			<div class="row">
				<div class="label">Birth</div>
				<date-picker v-model="birthDate" />
			</div>
		</div>
		<div>
			{{ error }}
		</div>
		<div class="button-container">
			<btn @click="signIn">Signin</btn>
			<btn @click="signUp">Signup</btn>
		</div>
		<div>{{ me }}</div>
	</div>
</template>
<script lang="ts">
import { Component, Vue, Getter } from 'nuxt-property-decorator'
import TextBox from './TextBox.vue'
import Btn from './Btn.vue'
import ImagePicker from './ImagePicker.vue'
import DatePicker from './DatePicker.vue'
import { BaseUser } from '~/schemas'
import { AxiosError } from 'axios'

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
	email: string = ''
	avatarFile?: File
	birthDate: string = ''

	onImageChange(avatar: File) {
		console.debug('..')
		this.avatarFile = avatar
	}

	async signIn() {
		if (!(this.username && this.password)){
			this.$store.commit('user/setError', 'Missing elements')
			return
		}
		console.debug(this.$store.hasModule('user'))
		try {
			await this.$store.dispatch('user/signIn', {
				username: this.username,
				password: this.password
			})
			this.$router.push('./posts')
		} catch(e) {
			console.error(e)
			this.$store.commit('user/setError', e)
		}
	}

	async signUp() {
		if (!(this.username && this.password && this.email)){
			this.$store.commit('user/setError', 'Missing elements')
			return
		}
		console.debug(this.username, this.password, this.avatarFile, this.birthDate)
		const baseUser: BaseUser = {
			email: this.email,
			username: this.username,
			password: this.password,
			date_of_birth: new Date(this.birthDate),
			avatar_url: ''
		}
		await this.$store.dispatch('user/createUser', {
			avatarFile: this.avatarFile,
			user: baseUser
		})
	}

	async created() {
	}

	get error () {
		console.debug('get', this.$store.getters)
		return this.$store.getters['user/getError']
	}

	get me () {
		return this.$store.getters['user/me']
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