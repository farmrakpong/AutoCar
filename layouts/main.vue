<template>
  <div>
    <Navbar/>
    <div class="contentA">
      <nuxt/>
    </div>
    
  </div>
</template>

<script>
import Navbar from '@/components/TopComponents/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
.contentA{
  margin-top: 3.5rem;
}
</style>