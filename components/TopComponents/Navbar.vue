<template>
  <b-navbar toggleable="lg">
    <!-- <b-navbar-brand href="#">NavBar</b-navbar-brand> -->
    <b-img
      class="responsive"
      src="@/assets/img/logo-autopair-blue.png"
      alt="Responsive image"
    ></b-img>

    <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <div class="mr-5 border-left pl-4">
          <b-img
            class="mr-1"
            width="35%"
            src="@/assets/img/facebook.png"
            alt="Responsive image"
          ></b-img>
          <b-img
            width="35%"
            src="@/assets/img/line.png"
            alt="Responsive image"
          ></b-img>
        </div>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style lang="scss" scoped>
@import '~/globalStyles/responsive.scss';

.navbar {
  border-bottom: 4.5px solid #176492;
  overflow: hidden;
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}

.responsive {
  width: 10%;
  margin-left: 3rem;
}

@include respond-to($tablet) {
  .responsive {
    width: 30%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
