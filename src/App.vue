<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import FormComponent from './components/Form.vue'
import RatingComponent from './components/Rating.vue'
import Register from './components/Register.vue'
</script>

<template>
  <div>
    <header class="header">
      <div class="title-container">
        <h1>Mental Health Support</h1>
      </div>
      <nav>
        <ul class="nav">
          <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/register">Register</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/login">Login</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/admin">Admin</router-link></li>
        </ul>
      </nav>
    </header>
    <main class="content">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: center; 
  align-items: center;
  padding: 10px 20px;
  background-color: #f5f5f5;
}

.title-container {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #f0fff0;
  border: 3px solid #90EE90;
  margin-right: auto; 
}

.nav {
  list-style: none;
  display: flex;
  gap: 15px;
  margin-left: auto; 
}

.nav-item .nav-link {
  text-decoration: none;
  color: #007bff;
}

.nav-item .nav-link:hover {
  text-decoration: underline;
}

.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>
