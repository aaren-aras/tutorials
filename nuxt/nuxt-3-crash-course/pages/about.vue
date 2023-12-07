<template>
  <div>
    <h2>About</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore minus quasi praesentium magni alias cum culpa nisi incidunt ea delectus!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore minus quasi praesentium magni alias cum culpa nisi incidunt ea delectus!</p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
  // `?` for optional query string for more specific info 
  const { data } = await useFetch('/api/currency/GBP');
</script>

<style scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }

  p {
    margin: 20px 0;
  }
</style>