<template>
	<div class="container">
		<div class="section">
			<div class="title">Sort</div>
			<div class="row">
				<div class="label">Sort</div>
				<Selector :options="sortAttrOptions" @change="onSortAttrChange"/>
				<Selector :options="sortOrderOptions" @change="onSortOrderChange"/>
			</div>
		</div>

		<div class="section">
			<div class="title">Filter</div>

			<div class="row">
				<div class="label">Temperature</div>
			</div>
			<div class="row">
				<Selector :value="filterTempOperation" :options="['min', 'max']" @change="onTempOperationChange" />
				<num-box @change="onTempThreasholdChange"/>
			</div>

			<div class="row">
				<div class="label">velocity</div>
			</div>
			<div class="row">
				<Selector :value="filterVelocityOperation" :options="['min', 'max']" @change="onVelocityOperationChange" />
				<num-box @change="onVelocityThreasholdChange"/>
			</div>

			<div class="row">
				<div class="label">elevation</div>
			</div>
			<div class="row">
				<Selector :value="filterElevationOperation" :options="['min', 'max']" @change="onElevationOperationChange" />
				<num-box @change="onElevationThreasholdChange"/>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'
import Selector from './Selector.vue'
import NumRangeBox from './NumRangeBox.vue'
import { Query, sortAttrOptions } from '~/schemas'

@Component({
	components: {
		Selector,
		NumRangeBox
	}
})
export default class Filter extends Vue {
	query: Query = {
		sort: {},
		filter: {}
	}

	sortAttrOptions = sortAttrOptions
	sortOrderOptions = ['asc', 'desc']

	onSortAttrChange(label: string) {
		console.debug(label)
		this.query.sort.attr = label as (typeof sortAttrOptions[number] | undefined)
		this.onQueryChange()
	}

	onSortOrderChange(label: string) {
		this.query.sort.order = label as 'asc' | 'desc'
		this.onQueryChange()
	}

	// Temp
	filterTempOperation: 'min' | 'max' = 'min'
	filterTempThreashold: number = 0

	updateTempFilter() {
		this.query.filter.temperture = {}
		this.query.filter.temperture[this.filterTempOperation] = this.filterTempThreashold
		this.onQueryChange()
	}

	onTempOperationChange(value: 'min' | 'max') {
		this.filterTempOperation = value
		this.updateTempFilter()
	}

	onTempThreasholdChange(value: number) {
		this.filterTempThreashold = Number(value)
		this.updateTempFilter()
	}

	// Velocity
	filterVelocityOperation: 'min' | 'max' = 'min'
	filterVelocityThreashold: number = 0

	updateVelocityFilter() {
		this.query.filter.velocity = {}
		this.query.filter.velocity[this.filterVelocityOperation] = this.filterVelocityThreashold
		this.onQueryChange()
	}

	onVelocityOperationChange(value: 'min' | 'max') {
		this.filterVelocityOperation = value
		this.updateVelocityFilter()
	}

	onVelocityThreasholdChange(value: number) {
		this.filterVelocityThreashold = Number(value)
		this.updateVelocityFilter()
	}

	// Elevation
	filterElevationOperation: 'min' | 'max' = 'min'
	filterElevationThreashold: number = 0

	updateElevationFilter() {
		this.query.filter.elevation = {}
		this.query.filter.elevation[this.filterElevationOperation] = this.filterElevationThreashold
		this.onQueryChange()
	}

	onElevationOperationChange(value: 'min' | 'max') {
		this.filterElevationOperation = value
		this.updateElevationFilter()
	}

	onElevationThreasholdChange(value: number) {
		this.filterElevationThreashold = Number(value)
		this.updateElevationFilter()
	}


	onQueryChange() {
		this.$store.commit('post/setQuery', this.query)
	}
}
</script>
<style scoped>
.row {
	display: flex;
}
.title {
	font-size: 1.2em;
	font-weight: bold;
	border-bottom: solid 2px black;
}
.section {
	margin-bottom: 10px;
}
.label {
	margin-right: .3em;
}
</style>