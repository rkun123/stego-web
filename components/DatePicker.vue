<template>
	<div>
		<input
			class="date-picker"
			type='date'
			:required="inputRequired"
			:name="inputPlaceholder"
			@input="onValueChanged"
			:value="value"
			>
	</div>
</template>
<script lang="ts">
import { Component, Prop, Model, Vue } from 'nuxt-property-decorator'

@Component({})
export default class DatePicker extends Vue {
	@Prop({ default: 'text'})
	inputType!: 'text' | 'password'

	@Prop({ default: 'input...' })
	inputPlaceholder!: string

	@Prop({ default: false})
	inputRequired!: boolean

	@Model('change') value!: string

	public onValueChanged(e: InputEvent) {
		console.debug(e)
		const input = e.target as HTMLInputElement
		this.$emit('change', input.value)
	}
}
</script>
<style scoped>
</style>