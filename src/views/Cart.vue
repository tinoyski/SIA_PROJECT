<template>
  <div id="cart">
    <h1 class="p-3">Your Cart</h1>
    <div v-if="cart.length">
      <b-list-group class="container">
        <b-list-group-item
          v-for="(item, index) in cart"
          :key="item.id"
          class="flex-column align-items-center"
        >
          <div v-if="item.quantity">
            <b-row>
              <b-col class="col-2">
                <p><strong>Product</strong></p>
              </b-col>
              <b-col class="col-5"></b-col>
              <b-col>
                <p><strong>Quantity:</strong></p>
              </b-col>
              <b-col>
                <p><strong>Total:</strong></p>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="col-2 py-2">
                <b-link :to="'/details/' + item.id">
                  <b-img
                    :src="item.imageUrl"
                    :to="'/details/' + item.id"
                    height="80"
                    width="80"
                  ></b-img>
                </b-link>
              </b-col>
              <b-col>
                <p class="h4 mt-4" style="text-align: left">{{ item.name }}</p>
              </b-col>
              <b-col>
                <b-row>
                  <b-col>
                    <b-button-toolbar> <!-- modify item quantity -->
                      <b-button
                        @click="minusOne(index)"
                        size="sm"
                        variant="light"
                      >
                        <b-icon icon="dash"></b-icon>
                      </b-button>
                      <p class="mx-auto my-auto">
                        {{ item.quantity }}
                      </p>
                      <b-button
                        @click="plusOne(index)"
                        size="sm"
                        variant="light"
                      >
                        <b-icon icon="plus"></b-icon>
                      </b-button>
                    </b-button-toolbar>
                    <b-link @click="remove(index)" style="color: black"
                      >Remove</b-link
                    >
                  </b-col>
                  <b-col>
                    <p>₱{{ item.price * item.quantity }}.00</p>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </div>
        </b-list-group-item>
        <b-list-group-item>
          <b-row align-h="between">
            <b-col cols="2">
              <p class="h4 mt-4">Total</p>
            </b-col>
            <b-col cols="5">
              <div>
                <p><strong>Total Price:</strong></p>
                <p>₱{{ totalPrice }}.00</p>
              </div>
            </b-col>
          </b-row>
        </b-list-group-item>
        <b-button class="mt-3" @click="checkout()" variant="dark"
          >Checkout</b-button
        >
      </b-list-group>
    </div> <!-- check if cart is empty -->
    <div v-else>
      <h2>You don't have any items!</h2>
      <b-button class="mt-3 col-4" variant="dark" to="/"
        >Add Products!</b-button
      >
    </div>
    <div class="mt-5">
      <hr class="my-4" />
    </div>
    <div class="container pl-0">
      <b-carousel
        id="carousel-1"
        :interval="6000"
        controls
        fade
        indicators
        style="text-shadow: 1px 1px 2px #333"
      >
        <!-- slideshow with image only -->
        <b-carousel-slide>
          <template #img>
            <img
              :height="imgHeight"
              src="@/assets/img/ccc1.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block w-100"
              :height="imgHeight"
              src="@/assets/img/lanyard.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block w-100"
              :height="imgHeight"
              src="@/assets/img/shirt.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block w-100"
              :height="imgHeight"
              src="@/assets/img/jacket.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Cart",
  data() {
    return {
      totalPrice: 0,
      imgHeight: 750,
    };
  },
  computed: {
    ...mapGetters("product", ["cart"]),
    ...mapGetters("account", ["user"]),
  },
  methods: {
    ...mapActions("product", ["removeCart"]),
    calcPrice() {
      this.totalPrice = 0;
      this.cart.forEach((element) => {
        this.totalPrice += element.price * element.quantity;
      });
    },
    checkout() {
      const vm = this;
      setTimeout(() => {
        vm.removeCart();
        alert("Purchase successful!");
        vm.$router.push("/");
      }, 2000);
    },
    minusOne(index) {
      this.cart[index].quantity--;
      this.$set(this.cart, index, this.cart[index]);
      if (this.cart[index].quantity == 0) {
        this.cart.splice(index, 1);
      }
      this.calcPrice();
    },
    plusOne(index) {
      this.cart[index].quantity++;
      this.$set(this.cart, index, this.cart[index]);
      this.calcPrice();
    },
    remove(index) {
      this.cart.splice(index, 1);
      this.calcPrice();
    },
  },
  mounted() {
    this.calcPrice();
  },
};
</script>

<style scoped>
img:hover {
  opacity: 80%;
}
</style>
