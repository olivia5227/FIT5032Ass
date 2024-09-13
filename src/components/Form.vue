<template>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" v-model="email" required>
        <div v-if="!isValidEmail(email)" class="text-danger">Invalid email format</div>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" v-model="password" required minlength="8">
        <div v-if="password.length < 8" class="text-danger">Password must be at least 8 characters long</div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    mounted() {
      const savedEmail = localStorage.getItem('email');
      if (savedEmail) {
        this.email = savedEmail;
      }
    },
    methods: {
      isValidEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
      },
      submitForm() {
        if (this.isValidEmail(this.email) && this.password.length >= 8) {
          localStorage.setItem('email', this.email);
          alert('Form submitted successfully!');
        }
      }
    }
  }
  </script>
  
  <style>
  .text-danger {
    color: red;
  }
  </style>
  