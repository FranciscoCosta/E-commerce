
  export async function getProductsFromCategoryAndQuery(query) {
    const resultados = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const api = await resultados.json();
    return api;
  }
  