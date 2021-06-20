<template>
	<div class="postfilter-container">
		<div class="section">
			<div class="title">Sort</div>
			<div class="row">
				<div class="label">Sort</div>
				<Selector :options="sortAttrOptions" v-model="sortAttr"/>
				<Selector :options="sortOrderOptions" v-model="sortOrder"/>
			</div>
		</div>

		<div class="section">
			<div class="title">Filter</div>

			<div class="row">
				<div class="label">Temperature</div>
			</div>
			<div class="row">
				<min-max-box v-model="temperature"/>
			</div>

			<div class="row">
				<div class="label">velocity</div>
			</div>
			<div class="row">
				<min-max-box v-model="velocity"/>
			</div>

			<div class="row">
				<div class="label">elevation</div>
			</div>
			<div class="row">
				<min-max-box v-model="elevation"/>
			</div>

			<div class="row">
				<div class="label">direction</div>
			</div>
			<div class="row">
				<Selector v-model="direction" :options="['down', 'up']" />
			</div>
		</div>
		<div class="row">
			<button @click="resetQuery">reset</button>
			<button @click="updateQuery">confirm</button>
		</div>
	</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'
import Selector from './Selector.vue'
import MinMaxBox, { MinMax } from './MinMaxBox.vue'
import { Query, sortAttrOptions } from '~/schemas'

@Component({
	components: {
		Selector,
		MinMaxBox
	}
})
export default class Filter extends Vue {
	sortAttrOptions = sortAttrOptions
	sortOrderOptions = ['asc', 'desc']

	sortAttr: typeof sortAttrOptions[number] = 'birthday'
	sortOrder: 'asc' | 'desc' = 'asc'


	temperature: MinMax = {
		op: '',
		value: 0
	}

	velocity: MinMax = {
		op: '',
		value: 0
	}

	elevation: MinMax = {
		op: '',
		value: 0
	}

	direction: 'down' | 'up' | '' = 'down'

	get query(): Query {
		const q: Query = {
			sort: {
				attr: this.sortAttr,
				order: this.sortOrder
			},
			filter: {
			}
		}
		q.filter = {}
		if(this.sortAttr === '') q.sort = undefined
		console.debug('temp', this.temperature)
		if(this.temperature.op === '') {
			q.filter.temperture = undefined
		} else {
			q.filter.temperture = {}
			q.filter.temperture[this.temperature.op] = this.temperature.value
		}
		if(this.velocity.op === '') {
			q.filter.velocity = undefined
		}else{
			q.filter.velocity = {}
			q.filter.velocity[this.velocity.op] = this.velocity.value
		}
		if(this.elevation.op === '') {
			q.filter.elevation = undefined
		} else {
			q.filter.elevation = {}
			q.filter.elevation[this.elevation.op] = this.elevation.value
		}
		if(this.direction === '') q.filter.direction = undefined
		else q.filter.direction = this.direction

		return q
	}

	updateQuery() {
		this.$store.commit('post/setQuery', this.query)
		this.$store.dispatch('post/fetchList')
	}

	resetQuery() {
		this.$store.commit('post/setQuery', undefined)
		this.$store.dispatch('post/fetchList')
	}
}
</script>
<style scoped>
.postfilter-container {
	padding: 10px;
	box-shadow: 0 0px 40px silver;
	border-radius: 0 0 10px 10px;
	margin-bottom: 40px;
}
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