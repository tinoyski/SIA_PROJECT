export function getProducts({ commit }, supabase) {
  /**
   * This gets data from the supabase table. This is equivalent to: 
   * 
   * SELECT * FROM "products";
   */
  supabase.from("products").select()
    .then(({ data }) => {
      /**
       * We perform object deconstruction by extracting the `data` property from the result
       * 
       * For example: 
       * 
       * result = {
       *  error: "",
       *  data: "",
       *  count: "",
       * }
       * 
       * We get only the data property by doing: 
       * const { data } = result;
       * 
       * which the same as: 
       * 
       * const data = result.data;
       */
      commit("setProducts", data);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function productDetails({ commit }, { supabase, idProduct }) {
  /**
   * This is equivalent to: 
   * 
   * SELECT * FROM "products" where id = ?;
   */
  supabase.from("products").select().eq("id", idProduct)
    .then(({ data }) => {
      commit("setProduct", data[0])
    }).catch((error) => {
      console.log(error);
    })
}

export function addCart({ commit, getters }, payload) {
  let cart = getters.cart;
  let data = payload.product;
  console.log(data);
  data["quantity"] = parseInt(payload.quantity);
  cart.push(data);
  commit("setCart", cart);
}

export function removeCart({ commit, getters }, id) {
  let cart = [];
  if (id) {
    for (let index = 0; index < getters.cart.length; index++) {
      const element = getters.cart[index];
      if (element.id !== id) {
        cart.push(element);
      }
    }
  }
  commit("setCart", cart);
}
