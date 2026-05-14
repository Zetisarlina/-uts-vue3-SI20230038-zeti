<template>

  <Navbar />

  <div class="dashboard">

    <!-- Sidebar tetap -->
    <div class="sidebar">

      <h2>BantuSesama</h2>

      <ul>
        <li>Dashboard</li>
        <li>Donasi</li>
        <li>Laporan</li>
        <li>Pengguna</li>
      </ul>

    </div>

    <!-- Content -->
    <div class="content">

      <div class="top-card">

        <h1>Dashboard Donasi</h1>

        <p>
          Sistem transparansi bantuan dan distribusi donasi
        </p>

      </div>

      <!-- Statistik -->
      <div class="stats">

        <div class="card">
          <h3>Total Donasi</h3>
          <p>{{ store.totalDonasi }}</p>
        </div>

        <div class="card">
          <h3>Bantuan Aktif</h3>
          <p>12</p>
        </div>

        <div class="card">
          <h3>Distribusi</h3>
          <p>8</p>
        </div>

      </div>

      <!-- Table -->
      <div class="table-card">

        <h2>Data Bantuan</h2>

        <table>

          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Target</th>
              <th>Terkumpul</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            <tr
              v-for="(item, index) in store.donations"
              :key="item.id"
            >
              <td>{{ index + 1 }}</td>
              <td>{{ item.nama }}</td>
              <td>{{ item.target }}</td>
              <td>{{ item.terkumpul }}</td>
              <td>{{ item.status }}</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>

  </div>

</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import { useDonationStore } from '../stores/donationStore'

const store = useDonationStore()
</script>

<style scoped>


.dashboard{
  display: flex;
  background: #f3f4f6;
  min-height: 100vh;
}

/* SIDEBAR */

.sidebar{
  width: 230px;
  background: #0f172a;
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
  cursor: pointer;
  transition: 0.3s;
}

.sidebar li:hover{
  color: #60a5fa;
}

/* CONTENT */

.content{
  flex: 1;
  padding: 30px;
}

/* TOP CARD */

.top-card{
  background: #fefce8;
  padding: 30px;
  border-radius: 20px;
  margin-bottom: 30px;
}

.top-card h1{
  margin-bottom: 10px;
}

/* STATS */

.stats{
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.card{
  flex: 1;
  background: white;
  padding: 25px;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.card h3{
  color: #6b7280;
  margin-bottom: 10px;
}

.card p{
  font-size: 28px;
  font-weight: bold;
  color: #2563eb;
}

/* TABLE */

.table-card{
  background: white;
  padding: 25px;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

table{
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th{
  background: #0f172a;
  color: white;
  padding: 15px;
}

td{
  padding: 15px;
  border-bottom: 1px solid #e5e7eb;
}

</style>