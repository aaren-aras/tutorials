<!-- Doesn't necessarily have to match w/ corresponding page component's name -->
<template>
  <header class="shadow-sm bg-white">
    <nav class="container p-4 mx-auto">
      <NuxtLink to="/products" class="font-bold">Nuxt Dojo Merch</NuxtLink>
    </nav>
  </header>

  <div class="container p-4 mx-auto">
    <slot/>
  </div>

  <footer class="flex justify-between container p-4 border-t-2 mx-auto">
    <ul class="flex gap-4">
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <li><NuxtLink to="/products">Products</NuxtLink></li>
    </ul>
  </footer>
</template>

<style scoped>
  .router-link-exact-active {
    color: #12b488;
  }
</style>