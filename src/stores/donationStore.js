import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const useDonationStore = defineStore('donation', () => {

  const donations = ref([
    {
      id: 1,
      nama: 'Beras',
      target: 100,
      terkumpul: 70,
      status: 'Terbuka'
    },
    {
      id: 2,
      nama: 'Selimut',
      target: 50,
      terkumpul: 50,
      status: 'Tertutup'
    },
    {
      id: 3,
      nama: 'Obat',
      target: 80,
      terkumpul: 30,
      status: 'Terbuka'
    }
  ])

  const totalDonasi = computed(() => {
    return donations.value.reduce((total, item) => {
      return total + item.terkumpul
    }, 0)
  })

  watch(totalDonasi, (value) => {
    if (value >= 200) {
      alert('Target bantuan tercapai!')
    }
  })

  return {
    donations,
    totalDonasi
  }
})