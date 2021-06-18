<template>
	<div class="text-box">
		<input
			class="text-input"
			:type="inputType"
			:placeholder="inputPlaceholder"
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
		const input = e.target as HTMLInputElement
		this.$emit('change', input.value)
	}

	
}
</script>
<style scoped>
	.text-input {
		border: none;
		font-size: 20px;
		font-weight: bold;
	}

	.text-input:focus {
		outline: none;
	}
</style>