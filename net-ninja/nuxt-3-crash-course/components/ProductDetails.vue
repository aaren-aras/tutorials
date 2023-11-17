<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img class="mx-auto my-7" :src="product.image" alt="Product Image">
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-7">{{ product.title }}</h2>
        <p class="text-xl my-7">Price: ${{ product.price }}</p>
        <h3 class="font-bold pb-2 border-b-2 mb-4">Product Description:</h3>
        <p class="mb-7">{{ product.description }}</p>
        <button class="btn flex">
          <i class="material-icons mr-2">add_shopping_cart</i>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  const { product } = defineProps(['product']);
</script>

<style scoped>
  img {
    max-width: 400px;
  }
</style>