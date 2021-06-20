<template>
	<div>
		<select :value="value" @change="onChange">
			<template v-for="(option, index) in options">
				<option :value="option" :key="index">
					{{ option }}
				</option>
			</template>
		</select>
	</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Model } from 'nuxt-property-decorator'

@Component({})
export default class Selector extends Vue {

	@Model('change')
	value?: string

	@Prop({})
	options?: string[]

	onChange(e: InputEvent) {
		const target = e.target as HTMLSelectElement
		this.$emit('change', target.value)
	}
}

</script>