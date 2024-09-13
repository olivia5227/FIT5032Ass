<template>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <h2 class="text-center">Login</h2>
          <form @submit.prevent="login">
            <div class="row mb-3">
              <div class="col-md-12">
                <label for="username" class="form-label">Username</label>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  v-model="formData.username"
                  @blur="() => validateUsername(true)"
                  @input="() => validateUsername(false)"
                  required
                />
                <div v-if="errors.username" class="text-danger">{{ errors.username }}</div>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-12">
                <label for="password" class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  v-model="formData.password"
                  @blur="() => validatePassword(true)"
                  @input="() => validatePassword(false)"
                  required
                />
                <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
              </div>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
  
      <!-- Rating Modal -->
      <div v-if="showRatingModal" class="modal-overlay">
        <div class="modal-content">
          <h3>Please rate your experience</h3>
          <div class="rating-options">
            <button v-for="rating in ratings" :key="rating" @click="submitRating(rating)">
              {{ rating }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  const formData = ref({
    username: '',
    password: ''
  })
  
  const errors = ref({
    username: null,
    password: null
  })
  
  const showRatingModal = ref(false)
  const ratings = ref([1, 2, 3, 4, 5])
  
  const validateUsername = (blur) => {
    if (formData.value.username.length < 3) {
      if (blur) errors.value.username = 'Username must be at least 3 characters'
    } else {
      errors.value.username = null
    }
  }
  
  const validatePassword = (blur) => {
    const password = formData.value.password
    const minLength = 8
    const hasUppercase = /[A-Z]/.test(password)
    const hasLowercase = /[a-z]/.test(password)
    const hasNumber = /\d/.test(password)
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)
  
    if (password.length < minLength) {
      if (blur) errors.value.password = `Password must be at least ${minLength} characters long.`
    } else if (!hasUppercase) {
      if (blur) errors.value.password = 'Password must contain at least one uppercase letter.'
    } else if (!hasLowercase) {
      if (blur) errors.value.password = 'Password must contain at least one lowercase letter.'
    } else if (!hasNumber) {
      if (blur) errors.value.password = 'Password must contain at least one number.'
    } else if (!hasSpecialChar) {
      if (blur) errors.value.password = 'Password must contain at least one special character.'
    } else {
      errors.value.password = null
    }
  }
  
  const login = () => {
    validateUsername(true)
    validatePassword(true)
    if (!errors.value.username && !errors.value.password) {
      const users = JSON.parse(localStorage.getItem('users')) || []
      const user = users.find(u => u.username === formData.value.username && u.password === formData.value.password)
      if (user) {
        localStorage.setItem('isAuthenticated', true)
        showRatingModal.value = true
      } else {
        alert('Invalid credentials')
      }
    }
  }
  
  const submitRating = (rating) => {
    console.log(`User rated: ${rating}`)
    showRatingModal.value = false
    router.push('/admin') // Redirect to admin page after rating
  }
  </script>
  
  <style scoped>
  .container {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    max-width: 80vw;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .text-center {
    text-align: center;
  }
  
  .text-danger {
    color: #dc3545;
    font-size: 0.875rem;
    margin-top: 5px;
  }
  
  /* Modal styles */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
  }
  
  .rating-options button {
    margin: 0 5px;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  
  .rating-options button:hover {
    background-color: #0056b3;
  }
  </style>