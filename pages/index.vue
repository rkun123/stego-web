<template>
  <div>
    <page-title>Signin / Signup</page-title>
    <signin />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import PageTitle from '~/components/PageTitle.vue'
import Signin from '~/components/Signin.vue'

@Component({
  components: {
    PageTitle,
    Signin
  }
})
export default class Index extends Vue {
  
}

</script>

<style>

</style>
