<template>
  <div>
    <div class="sidebar">
      <!-- <div class="navigation-items">
      <ul class="nav-list">
        <li class="nav-item"><nuxt-link to="#">Blog</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/PurchaseList">About</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="#">Admin</nuxt-link></li>
      </ul>
    </div> -->

      <div>
        <b-row class="p-4 mx-0">
          <b-col cols="5" class="p-0">
            <!-- <b-avatar
              src="https://placekitten.com/300/300"
              size="5rem"
            ></b-avatar> -->
            <b-img
              src="https://placekitten.com/300/300"
              rounded="circle"
              alt="Circle image"
              center
              width="75"
              height="auto"
            ></b-img>
          </b-col>
          <b-col cols="7" class="p-0 mt-2">
            <h5>ดีดีอะไหล่ยนต์</h5>
            <p>ออกจากระบบ</p>
          </b-col>
        </b-row>
      </div>

      <nav class="mb-3">
        <b-nav class="nav-list" vertical>
          <b-nav-item class="nav-item" to="/SaleItems">
            <b-row>
              <b-img
                class="mx-3"
                alt="รายการขาย"
                src="@/assets/icon/boxSmall.png"
                width="auto"
                height="23"
              >
              </b-img>
              <h6>รายการขาย</h6>
            </b-row>
          </b-nav-item>
          <b-nav-item class="nav-item" to="/PurchaseList">
            <b-row>
              <b-img
                class="mx-3"
                alt="รายการขาย"
                src="@/assets/icon/shopping-cartSmall.png"
                width="auto"
                height="23"
              >
              </b-img>
              <h6>รายการซื้อ</h6>
            </b-row>
          </b-nav-item>
          <b-nav-item class="nav-item" to="/SaleItems">
            <b-row>
              <b-img
                class="mx-3"
                alt="รายการขาย"
                src="@/assets/icon/warehouseSmall.png"
                width="auto"
                height="23"
              >
              </b-img>
              <h6>คลังสินค้า</h6>
            </b-row>
          </b-nav-item>
          <b-nav-item class="nav-item" to="/SaleItems">
            <b-row>
              <b-img
                class="mx-3"
                alt="รายการขาย"
                src="@/assets/icon/loanSmall.png"
                width="auto"
                height="23"
              >
              </b-img>
              <h6>การเงิน</h6>
            </b-row>
          </b-nav-item>
          <b-nav-item class="nav-item" to="/SaleItems">
            <b-row>
              <b-img
                class="mx-3"
                alt="รายการขาย"
                src="@/assets/icon/photo-albumSmall.png"
                width="auto"
                height="23"
              >
              </b-img>
              <h6>สมุดรายชื่อ</h6>
            </b-row>
          </b-nav-item>
          <b-nav-item class="nav-item" to="/SaleItems">
            <b-row>
              <b-img
                class="mx-3"
                alt="รายการขาย"
                src="@/assets/icon/toolsSmall.png"
                width="auto"
                height="23"
              >
              </b-img>
              <h6>การตั้งค่า</h6>
            </b-row>
          </b-nav-item>
        </b-nav>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.row {
  h6 {
    font-size: 1vw;
  }
}

h5,
p {
  color: white;
}

.sidebar {
  margin: 0;
  padding: 0;
  width: 15%;
  // background-color: #c0c0c0;
  background-color: #0e2340;
  position: fixed;
  height: 100%;
  overflow: auto;
}
.navigation-items {
  display: block;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin: 0;
}

.nav-item a {
  text-decoration: none;
  color: white;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  background-color: #176492;
  color: white;
}
</style>
