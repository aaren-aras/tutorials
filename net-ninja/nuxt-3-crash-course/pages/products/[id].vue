<!-- `[]` signifies that route name is dynamic/variable -->
<template>
  <div>
    <!-- (2nd way) Overrides default head tags in `nuxt.config.ts` (Nuxt component) -->
    <Head>
      <Title>Nuxt Dojo | {{ product.title }}</Title>
      <Meta name="description" :content="product.description"/>
    </Head>
    <ProductDetails :product="product"/>
  </div>
</template>

<script setup>
  // Extract `id` from `[id].vue` (Nuxt composable)
  const { id } = useRoute().params;
  const uri = 'https://fakestoreapi.com/products/' + id;

  // Options object tells Nuxt to perform new fetch based on `key: id` change (Nuxt composable); don't need?***
  const { data: product } = await useFetch(uri, { key: id });
  if (!product.value) {
    // Sent as `error` prop to `error.vue` (Nuxt composable)
    throw createError({ 
      statusCode: 404, 
      statusMessage: 'Product not found',
      // `fatal` forces Nuxt to show error page (in case error is created in browser)
      fatal: true
    });
  }

  definePageMeta({
    layout: 'products'
  });
</script>

<style scoped>

</style>