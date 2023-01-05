<template>
  <div id="cat">
    <b-jumbotron>
      <template #header>Malu-Pet na Cat Foods</template>

      <template #lead>
        Here we have a variety of cat foods for the common types of cats.
      </template>
    </b-jumbotron>
    <div style="padding: 25px">
      <div class="container">
        <div class="row">
          <div class="col-md-4" v-for="product in products" :key="product.id">
            <ProductCard :product="product" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ProductCard from "@/components/products/ProductCard";
export default {
  computed: {
    ...mapGetters("product", ["products"]),
  },
  components: { ProductCard },
  methods: {
    ...mapActions("product", ["getCatProducts", "addCart", "removeCart"]),
  },
  mounted() {
    this.getCatProducts();
  },
};
</script>

<style scoped></style>
