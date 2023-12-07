<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="product in products">
        <ProductCard :product="product"/>
      </div>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    // Use `products.vue` layout (instead of `default.vue`)
    layout: 'products'
  });

  // Can be fired from client or server (Nuxt composable); ':' for renaming fetched prop
  const { data: products } = await useFetch('https://fakestoreapi.com/products') 

  // (1st way) Overrides default head tags in `nuxt.config.ts` (Nuxt composable)
  useHead({
    title: 'Nuxt Dojo | Merch',
    meta: [
      { name: 'description', content: 'Nuxt 3 Merch' }
    ]
  });
</script>

<style scoped>

</style>