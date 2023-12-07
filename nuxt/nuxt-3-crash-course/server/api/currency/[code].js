/* Use backend for server routes/endpoints for private info that shouldn't be exposed to client, etc. (Nuxt) */
// `[]` signifies that route name is dynamic/variable 

// Fires when `/api/currency/[code].js` is requested
export default defineEventHandler(async event => {
  // Extract `code` from `[code].js`
  const { code } = event.context.params;
  // Access `runtimeConfig` props in `nuxt.config.ts` (Nuxt composable)
  const { currencyKey } = useRuntimeConfig();

  const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`;
  const { data } = await $fetch(uri);

  return data;
});
