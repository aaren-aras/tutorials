<!-- Replaces default Nuxt.js error page with our custom one (*note: put in root dir) -->
<template>
  <div class="card max-w-sm text-center mt-7 mx-auto">
    <p class="text-7xl font-bold mt-7">{{ error.statusCode }}</p>
    <p class="text-6xl mt-7">Oopsie</p>
    <p class="mt-7">{{ error.message }}</p>
    <button @click="handleError" class="btn my-7">Go Home</button>
  </div>
</template>

<script setup>
  defineProps(['error'])

  // Sends back to home (Nuxt composable)
  const handleError = () => clearError({ redirect: '/' });

</script>

<style scoped>

</style>