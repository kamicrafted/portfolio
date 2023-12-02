import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStringStore = defineStore('strings', () => {
  const strings = {
    "home": {
      "introduction": "",
      "current": "Consulting for select clients",
      "previous": "SVP, Design @ Fubo, 2018-2023",
    },
    "contact": {
      "heading": "Don’t be shy, say hello!",
      "instructions": "Pick a subject, fill out a message, and I’ll get back to you as soon as possible."
    }
  }

  return {
    useStringStore, strings
  }
})


// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })
