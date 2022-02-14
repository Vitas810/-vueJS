<template>
  <div id="app">
    <mcv-topbar />

    <router-view />
  </div>
</template>

<script>
import McvTopbar from '@/components/Topbar'
import {actionsTypes} from '@/store/modules/auth'

export default {
  name: 'McvApp',
  components: {
    McvTopbar,
  },
  mounted() {
    this.$store.dispatch(actionsTypes.getCurrentUser)
  },
}
</script>
