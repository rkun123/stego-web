<template>
	<div class="container">
		<Selector :value="value.op" :options="['min', 'max']" @change="onOpChange" />
		<num-box :value="value.value" @change="onValueChange"/>
	</div>
</template>
<script lang="ts">
import { Component, Model, Vue, Watch } from 'nuxt-property-decorator'
import Selector from './Selector.vue'
import NumBox from './NumBox.vue'

export type MinMax = {
	op: 'min' | 'max',
	value: number
}

@Component({
	components: {
		NumBox,
		Selector
	}
})
export default class MinMaxBox extends Vue {
	@Model('update')
	value: MinMax = {
		op: 'min',
		value: 0
	}

	onOpChange(value: 'min' | 'max') {
		this.value.op = value
		this.onUpdate()
	}

	onValueChange(value: number) {
		this.value.value = value
		this.onUpdate()
	}

	onUpdate() {
		this.$emit('update', this.value)
	}
	
}

</script>
<style scoped>
.container {
	display: flex;
	flex-direction: row;
}
</style>