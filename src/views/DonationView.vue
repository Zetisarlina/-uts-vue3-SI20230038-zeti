<template>

  <div class="dashboard">



    <!-- CONTENT -->
    <div class="content">

      <!-- BUTTON BACK -->
      <button
        class="back-btn"
        @click="$router.push('/')"
      >
        ← Kembali
      </button>

      <!-- HEADER -->
      <div class="top-card">

        <h1>Daftar Donasi</h1>

        <p>
          Data kebutuhan bantuan dan progres donasi
        </p>

      </div>

      <!-- FILTER -->
      <div class="filter-box">

        <select v-model="filterStatus">

          <option value="">
            Semua Status
          </option>

          <option value="Terbuka">
            Terbuka
          </option>

          <option value="Tertutup">
            Tertutup
          </option>

        </select>

      </div>

      <!-- CARD DONASI -->
      <div class="donation-grid">

        <div
          class="donation-card"
          v-for="item in filteredDonations"
          :key="item.id"
        >

          <h2 v-highlight>
            {{ item.nama }}
          </h2>

          <p>
            Target : {{ item.target }}
          </p>

          <p>
            Terkumpul : {{ item.terkumpul }}
          </p>

          <p>
            Status :
            <span class="status">
              {{ item.status }}
            </span>
          </p>

          <!-- PROGRESS BAR -->
          <div class="progress-container">

            <div
              class="progress"
              :style="{
                width:
                (item.terkumpul / item.target * 100) + '%'
              }"
            ></div>

          </div>

        </div>

      </div>

    </div>

  </div>

</template>

<script setup>

import { ref, computed } from 'vue'
import { useDonationStore } from '../stores/donationStore'

const store = useDonationStore()

const filterStatus = ref('')

const filteredDonations = computed(() => {

  if (!filterStatus.value) {
    return store.donations
  }

  return store.donations.filter(item =>
    item.status === filterStatus.value
  )
})

</script>

<style scoped>

/* LAYOUT */

.dashboard{
  display: flex;
  min-height: 100vh;
  background: #f3f4f6;
}

/* SIDEBAR */

.sidebar{
  width: 230px;
  background: #14532d;
  color: white;
  padding: 30px 20px;
}

.sidebar h2{
  margin-bottom: 40px;
}

.sidebar ul{
  list-style: none;
  padding: 0;
}

.sidebar li{
  margin-bottom: 25px;
}

.sidebar a{
  text-decoration: none;
  color: white;
  font-size: 16px;
  transition: 0.3s;
}

.sidebar a:hover{
  color: #4ade80;
}

/* MENU ACTIVE */

.router-link-active{
  color: #4ade80;
  font-weight: bold;
}

/* CONTENT */

.content{
  flex: 1;
  padding: 30px;
}

/* BUTTON BACK */

.back-btn{
  background: #22c55e;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: 0.3s;
  font-size: 13px;
}

.back-btn:hover{
  background: #16a34a;
}

/* HEADER */

.top-card{
  background: #f0fdf4;
  padding: 30px;
  border-radius: 20px;
  margin-bottom: 30px;

  text-align: center;
}

.top-card h1{
  margin-bottom: 10px;
  color: #166534;
  font-size: 34px;
}

.top-card p{
  color: #4b5563;
}

/* FILTER */

.filter-box{
  margin-bottom: 25px;
}

.filter-box select{
  padding: 12px 18px;
  border-radius: 12px;
  border: none;
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  font-size: 15px;
}

/* GRID */

.donation-grid{
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
  gap: 20px;
}

/* CARD */

.donation-card{
  background: white;
  padding: 25px;
  border-radius: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  transition: 0.3s;
}

.donation-card:hover{
  transform: translateY(-5px);
}

.donation-card h2{
  margin-bottom: 15px;
  color: #16a34a;
}

.donation-card p{
  margin-bottom: 10px;
}

/* STATUS */

.status{
  color: #15803d;
  font-weight: bold;
}

/* PROGRESS BAR */

.progress-container{
  width: 100%;
  height: 12px;
  background: #e5e7eb;
  border-radius: 20px;
  margin-top: 20px;
  overflow: hidden;
}

.progress{
  height: 100%;
  border-radius: 20px;

  background: linear-gradient(
    to right,
    #22c55e,
    #4ade80
  );
}

</style>