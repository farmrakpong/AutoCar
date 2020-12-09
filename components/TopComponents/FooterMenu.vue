<template>
  <div class="navbar">
    <b-row>
      <b-col>
        <div>
          <img
            src="@/assets/icon/iconMenuFooter/box.png"
            class="center mt-2"
          />
        </div>
        <div class="text-center my-2">รายการขาย</div>
      </b-col>
      <b-col>
        <div>
          <img
            src="@/assets/icon/iconMenuFooter/shopping-cart.png"
            class="center mt-2"
          />
        </div>
        <div class="text-center my-2">รายการซื้อ</div>
      </b-col>
      <b-col>
        <div>
          <img
            src="@/assets/icon/iconMenuFooter/warehouse.png"
            class="center mt-2"
          />
        </div>
        <div class="text-center my-2">คลังสินค้า</div>
      </b-col>
      <b-col>
        <div>
          <img
            src="@/assets/icon/iconMenuFooter/loan.png"
            class="center mt-2"
          />
        </div>
        <div class="text-center my-2">การเงิน</div>
      </b-col>
      <b-col>
        <div>
          <img
            src="@/assets/icon/iconMenuFooter/photo-album.png"
            class="center mt-2"
          />
        </div>
        <div class="text-center my-2">สมุดรายชื่อ</div>
      </b-col>
      <b-col>
        <div>
          <img
            src="@/assets/icon/iconMenuFooter/tools.png"
            class="center mt-2"
          />
        </div>
        <div class="text-center my-2">ตั้งค่า</div>
      </b-col>

    </b-row>
  </div>
</template>

<style lang="scss" scoped>

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}

.navbar {
  overflow: hidden;
  background-color: white;
  position: fixed;
  padding: 0;
  bottom: 0;
  width: 100%;
  z-index: 1;
}

.row {
  margin-left: 0;
  margin-right: 0;

  .col {
    border-right: 1px solid #dbdbdb;
    border-top: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
  }
}
</style>
