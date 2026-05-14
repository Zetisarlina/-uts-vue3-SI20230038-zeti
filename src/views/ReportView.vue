<template>
  <Navbar />

  <div class="container">

    <h1>Laporan Distribusi</h1>

    <DistributionLog />

  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import DistributionLog from '../components/DistributionLog.vue'
</script>

<style scoped>
.container{
  padding:20px;
}
</style>