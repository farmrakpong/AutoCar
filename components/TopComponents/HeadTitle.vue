<template>
  <div>
    <div class="CardHeadTitle">
      <h3>{{ title }}</h3>
    </div>

    <div class="col-12 pl-0 pr-0 mt-2 mb-2">
      <div class="row">
        <div class="col-12 text-left pl-0 pr-0 searchProduct">ค้นหาสินค้า</div>
      </div>
    </div>
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
.searchProduct {
  color: $btn-color;
}
</style>
