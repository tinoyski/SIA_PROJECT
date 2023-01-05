<template>
  <div id="addToCart">
    <b-row no-gutters>
      <b-col class="col-3">
        <b-form-group
          id="quantity-group"
          label="Quantity"
          label-for="input-quantity"
        >
          <input
            id="input-quantity"
            type="number"
            v-model="quantity"
            class="form-control mb-2 mr-sm-2"
          />
        </b-form-group>
      </b-col>
      <b-col>
        <b-button
          v-if="!isInCardProp"
          @click.stop="addCart({ product, quantity })"
          variant="dark"
          class="ctr ml-3 col-11"
        >
          Add to Cart</b-button
        >
        <div v-else class="ctr ml-3">
          <b-row no-gutters>
            <b-col>
              <b-button class="col-11" variant="dark" to="/cart"
                >View Cart</b-button
              >
            </b-col>
            <b-col>
              <b-button
                class="col-11"
                @click.stop="removeCart(product.id)"
                variant="dark"
                >Remove from cart</b-button
              >
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  props: ["product"],
  data() {
    return {
      isInCardProp: false,
      quantity: 1,
    };
  },
  computed: {
    ...mapState("product", ["cart"]),
  },
  methods: {
    ...mapActions("product", ["addCart", "removeCart"]),

    isInCart(id) {
      for (let index = 0; index < this.cart.length; index++) {
        const element = this.cart[index];
        if (element.id === id) {
          return true;
        }
      }
      return false;
    },
  },
  watch: {
    product(value) {
      this.isInCardProp = this.isInCart(value.id);
    },
    cart() {
      this.isInCardProp = this.isInCart(this.product.id);
    },
    quantity(value) {
      if (value <= 0) {
        this.quantity = 1;
      }
    },
  },
};
</script>

<style scoped>
.ctr {
  margin-top: 2.3rem !important;
}
</style>
