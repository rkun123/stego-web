<template>
	<div class="container">
		<num-box :value="max" @change="onMaxChange" :inputPlaceholder="maxPlaceholder"/>
		<div>~</div>
		<num-box :value="min" @change="onMinChange" :inputPlaceholder="minPlaceholder"/>
	</div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class NumRangeBox extends Vue {
	min: number = 0
	max: number = 0

	@Prop({ default: 'min'})
	minPlaceholder!: string

	@Prop({ default: 'max'})
	maxPlaceholder!: string

	public onMinChange(value: number) {
		this.min = Number(value)
		this.emitChange()
	}

	public onMaxChange(value: number) {
		this.max = Number(value)
		this.emitChange()
	}

	emitChange() {
		this.$emit('change', {
			min: this.min,
			max: this.max
		})
	}
	
}
</script>
<style scoped>
.container {
	display: flex;
	flex-direction: row;
}
</style>
