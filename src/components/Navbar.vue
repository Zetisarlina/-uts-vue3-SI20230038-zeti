<template>
  <nav class="navbar">
    <h2>BantuSesama</h2>

    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/donation">Donasi</router-link>
      <router-link to="/report">Laporan</router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar{
  background:#2563eb;
  padding:15px;
  display:flex;
  justify-content:space-between;
  align-items:center;
}

a{
  color:white;
  margin-left:15px;
  text-decoration:none;
}

h2{
  color:white;
}
</style>