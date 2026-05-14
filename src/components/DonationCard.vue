<template>
  <div class="card">

    <h3 v-highlight>{{ item.nama }}</h3>

    <p>Target : {{ item.target }}</p>
    <p>Terkumpul : {{ item.terkumpul }}</p>
    <p>Status : {{ item.status }}</p>

    <ProgressBar
      :value="percentage"
    />

  </div>
</template>

<script setup>
import { computed } from 'vue'
import ProgressBar from './ProgressBar.vue'

const props = defineProps({
  item: Object
})

const percentage = computed(() => {
  return (props.item.terkumpul / props.item.target) * 100
})
</script>

<style scoped>
.card{
  background:white;
  padding:20px;
  border-radius:10px;
  margin-bottom:20px;
  box-shadow:0 0 10px rgba(222, 12, 12, 0.1);
}
</style>