// state เอาไว้ประกาศตัวแปร
export const state = () => ({
  counter: [],
})

// mutations เหมือน methods Function
export const mutations = {
  increment(state, value) {
    state.counter.push(value)
  },
}

// ตัวผ่านเพื่อความปลอดภัยหรือ ไว้คำนวน
export const getters = {
  getCount(state) {
    return state.counter
  },
}

// เข้า actions เป็นอันดับแรก
export const actions = {
  add(context, value) {
    context.commit('increment', value)
  },
}

/*
state ตัวแปร
actions เรียกจากหน้า page และจะเรียก mutations อีกที
mutations เป็นเหมือน methods Function ไว้ทำอะไรสักอย่าง
getters เป็นตัวแสดงหรือตัวผ่านเพื่อความปลอดภัย

*/
