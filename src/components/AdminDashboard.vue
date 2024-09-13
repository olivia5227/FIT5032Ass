<template>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <h1 class="text-center">Admin Dashboard</h1>
          <p class="text-center">
            Welcome to the admin dashboard!
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  
  onMounted(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated')
    if (!isAuthenticated) {
      alert('You are not authorized to view this page.')
      window.location.href = '/login'
    }
  })
  </script>
  
  <style scoped>
  .container {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    max-width: 80vw;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
  }
  
  h1, p {
    text-align: center;
    margin-bottom: 20px;
  }
  </style>