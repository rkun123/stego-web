<template>
	<div class="image-picker">
		<input
			class="image-picker"
			type='file'
			accept="image/png, image/jpeg"
			:name="inputPlaceholder"
			@input="onValueChanged"
			:value="value"
			>
	</div>
</template>
<script lang="ts">
import { Component, Prop, Model, Vue } from 'nuxt-property-decorator'

@Component({})
export default class TextBox extends Vue {
	@Prop({ default: 'text'})
	inputType!: 'text' | 'password'

	@Prop({ default: 'input...' })
	inputPlaceholder!: string

	@Model('change') value!: string

	public onValueChanged(e: InputEvent) {
		console.debug(e)
		const input = e.target as HTMLInputElement
		this.$emit('change', input.value)
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