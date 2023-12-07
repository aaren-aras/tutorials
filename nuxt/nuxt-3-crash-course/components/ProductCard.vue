<template>
  <div class="card text-center">
    <img class="thumb" :src="product.image" alt="Product Thumbnail">
    <p class="font-bold text-gray-500 truncate m-4">{{ product.title }}</p>
    <NuxtLink :to="`/products/${product.id}`">
      <p class="btn my-4">View Details</p>
    </NuxtLink>
  </div>
</template>

<script setup>
  const { product } = defineProps(['product']);
</script>

<style scoped>
  .thumb {
    max-width: 70%;
    max-height: 120px;
    margin: 0 auto;
  }
</style>