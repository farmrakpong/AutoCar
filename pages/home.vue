<template>
  <div class="container">
    <!-- <b-row>
      <b-col cols="12" md="12" class="responsive"
        ><div>
          <b-img
            src="https://picsum.photos/1200/350/?image=5"
            alt="Responsive image"
            fluid
          ></b-img>
        </div>
      </b-col>
    </b-row> -->
    <div class="row">
      <div class="col-md-12 p-0 pd">
        <div class="backG"></div>
      </div>
    </div>

    <b-row>
      <b-col cols="4" md="4" class="p-0">
        <nuxt-link to="/SaleItems">
          <div class="card p-5">
            <img
              src="@/assets/icon/box.png"
              class="card-img-top hw-50"
              alt="..."
            />
            <div class="card-body">
              <h2 class="card-title text-center">รายการขาย</h2>
            </div>
          </div>
        </nuxt-link>
      </b-col>
      <b-col cols="4" md="4" class="p-0">
        <div class="card p-5">
          <img
            src="@/assets/icon/shopping-cart.png"
            class="card-img-top hw-50"
            alt="..."
          />
          <div class="card-body">
            <h2 class="card-title text-center">รายการซื้อ</h2>
          </div>
        </div>
      </b-col>
      <b-col cols="4" md="4" class="p-0">
        <div class="card p-5">
          <img
            src="@/assets/icon/warehouse.png"
            class="card-img-top hw-50"
            alt="..."
          />
          <div class="card-body">
            <h2 class="card-title text-center">คลังสินค้า</h2>
          </div>
        </div>
      </b-col>
      <b-col cols="4" md="4" class="p-0">
        <div class="card p-5">
          <img
            src="@/assets/icon/loan.png"
            class="card-img-top hw-50"
            alt="..."
          />
          <div class="card-body">
            <h2 class="card-title text-center">การเงิน</h2>
          </div>
        </div>
      </b-col>
      <b-col cols="4" md="4" class="p-0">
        <div class="card p-5">
          <img
            src="@/assets/icon/photo-album.png"
            class="card-img-top hw-50"
            alt="..."
          />
          <div class="card-body">
            <h2 class="card-title text-center">สมุดรายชื่อ</h2>
          </div>
        </div>
      </b-col>
      <b-col cols="4" md="4" class="p-0">
        <div class="card p-5">
          <img
            src="@/assets/icon/tools.png"
            class="card-img-top hw-50"
            alt="..."
          />
          <div class="card-body">
            <h2 class="card-title text-center">ตั้งค่า</h2>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  layout: 'main',
}
</script>

<style lang="scss" scoped>
@import '~/globalStyles/responsive.scss';
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap');

* {
  font-family: 'Kanit', sans-serif;
}

.hw-50 {
  height: auto;
  width: 30%;
  margin-left: auto;
  margin-right: auto;
}

.card {
  border-radius: 0;
}

.card:hover {
  background-color: #e7e7e7;
  transition: background 0.6s 0s ease-out;
}

.backG {
  background-color: transparent;
  padding: 16%;
  background-image: url('https://i.picsum.photos/id/1071/3000/1996.jpg?hmac=rPo94Qr1Ffb657k6R7c9Zmfgs4wc4c1mNFz7ND23KnQ');
  background-repeat: no-repeat;
  background-attachment: local;
  background-position: 50% 50%;
}

a:link,
a:visited {
  color: black;
  text-decoration: none;
}
// a:hover, a:active {
//   color: rgb(4, 189, 196);
// }

@include respond-to($tablet) {
  .container {
    max-width: 100%;
  }

  .backG {
    padding: 25% !important;
  }

  .card-body {
    padding: 0;
  }

  .card-title {
    margin-top: 2.2rem;
  }

  .hw-50 {
    width: 65%;
  }
}
</style>
