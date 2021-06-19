<template>
	<div class="image-picker">
		<input
			class="image-picker"
			type='file'
			accept="image/png, image/jpeg"
			:required="inputRequired"
			:name="inputPlaceholder"
			@change="onValueChanged"
			:value="value"
			>
	</div>
</template>
<script lang="ts">
import { Component, Prop, Model, Vue } from 'nuxt-property-decorator'

@Component({})
export default class ImagePicker extends Vue {
	@Prop({ default: 'text'})
	inputType!: 'text' | 'password'

	@Prop({ default: 'input...' })
	inputPlaceholder!: string

	@Prop({ default: false})
	inputRequired!: boolean

	public onValueChanged(e: InputEvent) {
		const input = e.target as HTMLInputElement
		const file = input.files?.item(0)
		console.debug('event', file)
		this.$emit('change', file)
	}
}
</script>
<style scoped>
	.image-picker {
		border: none;
	}

	.text-input:focus {
		outline: none;
	}
</style>