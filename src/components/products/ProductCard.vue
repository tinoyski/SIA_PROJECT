<template>
  <div id="product-card">  <!--{{ Product details }}--> 
    <b-card
      :title="product.name"
      :img-src="product.imageUrl"
      img-top
      style="max-width: 20rem"
      class="mb-5 pt-4 shadow"
    >
      <b-button variant="dark" :to="'/details/' + product.id">Details</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["product"],
};
</script>

<style scoped></style>
