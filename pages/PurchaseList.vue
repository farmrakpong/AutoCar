<template>
  <div>
    <HeadTitle title="รายการซื้อ" />
    {{ $store.getters.getCount.length }}
    <button @click="asd()">submit</button>
  </div>
</template>

<script>
export default {
  layout: 'content',
  data() {
    return {
      text: {
        title: 'jack',
        phone: '0888888888',
      },
    }
  },
  methods: {
    asd() {
      this.$store.dispatch('add', this.text)
    },
  },
}
</script>
