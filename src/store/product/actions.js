import axios from "axios";

export function getProducts({ commit }) {
  let url =
    "https://my-json-server.typicode.com/tinoyski/ccc-db/products";
  // get products through API;
  axios
    .get(url)
    .then((response) => {
      commit("setProducts", response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function productDetails({ commit }, id) {
  const productID = parseInt(id);

  let url =
    "https://my-json-server.typicode.com/tinoyski/ccc-db/products";
  // get products through API;
  axios
    .get(url)
    .then((response) => {
      const product = response.data.find(({ id }) => id === productID)
      commit("setProduct", product);
    })
    .catch(function (error) {
      console.log(error);
    });
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
