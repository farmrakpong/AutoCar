<template>
  <div>
    <b-row class="my-3">
      <b-col cols="6" class="mb-3" v-for="carditem in carditems" :key="carditem">
        <b-card bg-variant="white" :title="carditem.title">
          <b-card-text>
            <sub-title>{{ carditem.date }}</sub-title>
            <p>{{ carditem.description }}</p>
          </b-card-text>
          <b-button class="rounded-pill px-4" href="#" variant="primary">รายการขายเสร็จสิ้น</b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carditems: [
        {
          title: '0919-0010',
          date: '12/01/2563 10:49:20',
          description: 'ร้าน CC อะไหล่ยนต์',
        },
        {
          title: '0919-0010',
          date: '12/01/2563 10:49:20',
          description: 'ร้าน CC อะไหล่ยนต์',
        },
        {
          title: '0919-0010',
          date: '12/01/2563 10:49:20',
          description: 'ร้าน CC อะไหล่ยนต์',
        },
        {
          title: '0919-0010',
          date: '12/01/2563 10:49:20',
          description: 'ร้าน CC อะไหล่ยนต์',
        },
        {
          title: '0919-0010',
          date: '12/01/2563 10:49:20',
          description: 'ร้าน CC อะไหล่ยนต์',
        },
        {
          title: '0919-0010',
          date: '12/01/2563 10:49:20',
          description: 'ร้าน CC อะไหล่ยนต์',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.card-title {
  color: #0696CD;
}
</style>
