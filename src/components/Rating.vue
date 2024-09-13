<template>
    <div>
      <h3>Rate our Service</h3>
      <select v-model="rating">
        <option v-for="star in 5" :key="star" :value="star">{{ star }} Stars</option>
      </select>
      <button @click="submitRating" class="btn btn-primary">Submit Rating</button>
      <p v-if="ratings.length > 0">Average Rating: {{ averageRating }} Stars</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        rating: 0,
        ratings: []
      };
    },
    computed: {
      averageRating() {
        if (this.ratings.length === 0) return 0;
        const total = this.ratings.reduce((sum, r) => sum + r, 0);
        return (total / this.ratings.length).toFixed(1);
      }
    },
    methods: {
      submitRating() {
        if (this.rating > 0) {
          this.ratings.push(this.rating);
          localStorage.setItem('ratings', JSON.stringify(this.ratings));
          this.rating = 0; // 重置选择
        } else {
          alert('Please select a rating before submitting.');
        }
      }
    },
    mounted() {
      const storedRatings = JSON.parse(localStorage.getItem('ratings')) || [];
      this.ratings = storedRatings;
    }
  }
  </script>
  
  <style>
  select {
    margin-right: 10px;
  }
  </style>
  