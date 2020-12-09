<template>
  <div>
    <b-row class="mt-3">
      <b-col>
        <b-button block class="print p-2">
          <b-row class="justify-content-center" align-v="center">
            <img
              class="mx-3"
              src="@/assets/icon/printer.png"
              width="35"
              height="auto"
              alt=""
            />
            <h6>พิมพ์ภาษีขาย</h6>
          </b-row>
        </b-button>
      </b-col>
      <b-col>
        <b-button block class="print p-2">
          <b-row class="justify-content-center" align-v="center">
            <img
              class="mx-3"
              src="@/assets/icon/add.png"
              width="35"
              height="auto"
              alt=""
            />
            <h6>เพิ่มรายการซื้อ</h6>
          </b-row>
        </b-button>
      </b-col>
      <div class="w-100"></div>
      <b-col class="mt-2">
        <b-form-group label="เลขที่ใบสั่งขาย">
          <b-form-input placeholder="-- เลขที่ใบสั่งขาย --"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col class="mt-2">
        <b-form-group label="สถานะ">
          <b-form-select v-model="selected" :options="options"></b-form-select>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="8"> </b-col>
      <b-col cols="4">
        <b-button block class="p-2">รีเซท</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<style lang="scss" scoped>
h5,
h6 {
  margin-bottom: 0;
}

</style>
