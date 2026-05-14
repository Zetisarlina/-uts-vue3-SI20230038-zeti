<template>
  <div class="progress-container">
    <div
      class="progress"
      :style="{ width: value + '%' }"
    ></div>
  </div>

  <p>{{ value.toFixed(0) }}%</p>
</template>

<script setup>
defineProps({
  value: Number
})
</script>

<style scoped>
.progress-container{
  width:100%;
  height:20px;
  background:#ddd;
  border-radius:10px;
  overflow:hidden;
}

.progress{
  height:100%;
  background:#22c55e;
}
</style>