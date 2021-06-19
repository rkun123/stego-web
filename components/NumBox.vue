<template>
	<div class="text-box">
		<input
			class="text-input"
			:required="inputRequired"
			type="number"
			:placeholder="inputPlaceholder"
			@input="onValueChanged"
			:value="value"
			>
	</div>
</template>
<script lang="ts">
import { Component, Prop, Model, Vue } from 'nuxt-property-decorator'

@Component({})
export default class NumBox extends Vue {
	@Prop({ default: 'text'})
	inputType!: 'text' | 'password'

	@Prop({ default: 'input...' })
	inputPlaceholder!: string

	@Prop({ default: false})
	inputRequired!: boolean

	@Model('change') value!: string

	public onValueChanged(e: InputEvent) {
		const input = e.target as HTMLInputElement
		this.$emit('change', input.value)
	}

	
}
</script>
<style scoped>
</style>