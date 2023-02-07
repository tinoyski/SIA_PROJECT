const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtudmZuZWlxeWRybG1yY3RsY2Z3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUxNTY5OTAsImV4cCI6MTk5MDczMjk5MH0.pAqB0eYFCC6l41CDowAk4sKySiYbFAXZj0nxmzDb9Wo";

const options = {
  headers: {
    "apikey": SUPABASE_KEY,
    "Authorization": `Bearer ${SUPABASE_KEY}`
  }
}

export function getProducts({ commit }) {
  // Gets data from supabase table
  fetch("https://knvfneiqydrlmrctlcfw.supabase.co/rest/v1/products?select=*", options).then(async (res) => {
    commit("setProducts", await res.json());
  }).catch((error) => {
    console.log(error);
  })
}

export function productDetails({ commit }, id) {
  // Get id from database
  fetch(`https://knvfneiqydrlmrctlcfw.supabase.co/rest/v1/products?id=eq.${id}&select=*`, options).then(async (res) => {
    commit("setProduct", (await res.json())[0]);
  }).catch((error) => {
    console.log(error);
  })
}

export function addCart({ commit, getters }, payload) {
  let cart = getters.cart;
  let data = payload.product;
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
