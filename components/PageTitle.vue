<template>
	<h3 class="title">
		<slot />
	</h3>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component()
export default class PageTitle extends Vue {
}
</script>
<style scoped>
.title {
  font-weight: 300;
  font-size: 30px;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>