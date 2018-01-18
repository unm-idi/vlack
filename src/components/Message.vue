<template>
  <div class="message" :class="{starred: message.starred}">
    <b>{{message.user}}</b> <span>{{message.createdAt}}</span>
    <p>{{message.body}}</p>
    <button @click="star">Star</button>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: ['message'],

  methods: {
    star () {
      this.$emit('star')
    }
  }
}
</script>

<style>
  .message.starred {
    background: yellow;
  }
</style>