<template>
  <header class="bg-white shadow-sm">
    <nav class="flex justify-between container p-4 mx-auto">
      <NuxtLink to="/" class="font-bold">Nuxt Dojo</NuxtLink>
      <ul class="flex gap-4">
        <!-- Preferable over anchor tags since it doesn't send more requests (SPA) -->
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
      </ul>
    </nav>
  </header>

  <div class="container mx-auto p-4">
    <!-- Places content of other page components here (Vue/Nuxt 3) -->
    <slot/>
  </div>
</template>

<style scoped>
  .router-link-exact-active {
    color: #12b488;
  }
</style>