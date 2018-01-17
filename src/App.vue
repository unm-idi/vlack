<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => {
    return {
      channels: []
    }
  },

  created () {
    this.getChannels()
  },

  methods: {
    getChannels () {
      this.$http.get('/channel')
        .then((response) => {
          this.channels = response.data
        })
    }
  }
}
</script>
