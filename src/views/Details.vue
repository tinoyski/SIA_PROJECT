<template>
  <div id="details" class="container-fluid">
    <b-row>
      <b-col class="col-2">
        <b-button variant="dark" to="/shop">
          <b-icon icon="arrow-left" aria-hidden="true"></b-icon> Back
        </b-button>
      </b-col>
    </b-row>
    <b-card no-body class="overflow-auto m-4 mx-5" style="max-width: 100%">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img-lazy
            :src="product.img_url"
            alt="Image"
            class="rounded-3 p-auto"
          ></b-card-img-lazy>
        </b-col>
        <b-col md="6">
          <b-card-body class="p-5 vl">
            <b-card-title class="display-3">{{ product.name }}</b-card-title>
            <b-card-text class="lead text-justify">
              {{ product.content }}
              <h3 class="mt-5">Price:</h3>
              <h2>₱{{ product.price }}.00</h2>
              <br />
              <AddToCart :product="product" />
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddToCart from "@/components/details/AddToCart";
export default {
  data() {
    return {
      isInCardProp: false,
    };
  },
  computed: {
    ...mapGetters("account", ["user"]),
    ...mapGetters("product", ["product"]),
  },
  components: { AddToCart },
  methods: {
    ...mapActions("product", ["productDetails"]),
  },
  mounted() {
    this.productDetails({ 
      supabase: this.$supabase,
      idProduct: this.$route.params.idProduct
    });
  },
};
</script>

<style>
.container-fluid {
  padding: 30px;
}
.image-product {
  width: 100%;
}
.card * {
  max-height: 85vh;
}

.vl {
  border-left: 2px solid rgb(223, 223, 223);
  height: 100%;
}
</style>
