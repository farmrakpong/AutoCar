<template>
  <div class="CardHeadTitle">
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
  props: ['title'],
}
</script>

<style lang="scss" scoped>

@import '@/globalStyles/default.scss';

.CardHeadTitle {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid #eaeaea;

  @include respond-to($tablet) {
  padding-top: 3%;
  padding-bottom: 1%;
}
}
</style>
