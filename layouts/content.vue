<template>
  <div>
    <Navbar />
    <Sidebar class="resShow" />
    <div class="content">
      <nuxt />
      <!-- หน้า ipod  -->
      <TopFormInput class="resHide" />
      <CardComponents class="resHide" />
    </div>
    <FooterMenu class="resHide" />
  </div>
</template>

<script>
import Navbar from '@/components/TopComponents/Navbar'
import Sidebar from '@/components/TopComponents/Sidebar'
import FooterMenu from '@/components/TopComponents/FooterMenu'

import TopFormInput from '@/components/TabletComponents/TopFormInput'
import CardComponents from '@/components/TabletComponents/CardComponents'
export default {
  components: {
    Navbar,
    Sidebar,
    FooterMenu,
    TopFormInput,
    CardComponents
  },
}
</script>

<style lang="scss" scoped>
@import '@/globalStyles/default.scss';

@include respond-to($tablet) {
  .resShow {
    display: none !important;
  }

  .resHide {
    display: block !important;
  }

  div.content {
    margin-left: 0 !important;
    margin-top: 3.5rem !important;
    margin-bottom: 6rem;
    padding: 0px 1rem 0px 1rem !important;
    // height: 1000px;
  }
}

.resHide {
  display: none;
}

div.content {
  margin-left: 15%;
  margin-top: 3.5rem;
  padding: 15px 2.5rem;
  height: auto;
  // height: 1000px;
}
</style>
