<template>
  <div class="home">
    <b-jumbotron>
      <template #header>CCC ONLINE MERCHANDISE</template>
      <template #lead>
        Shop different varieties of products offered by City College of Calamba Departments.
      </template>

      <hr class="my-4" />

      <p>
        Learn more about us visit <a target="target_name" rel="relation_name" href="https://ccc.edu.ph/">CITY COLLEGE OF CALAMBA</a>
        
      </p>

      <b-button variant="success" to="/shop">Shop Now </b-button>

    </b-jumbotron>
    <div class="container">
      <b-carousel
        id="carousel-1"
        :interval="6000"
        controls
        fade
        indicators
        style="text-shadow: 1px 1px 2px #333"
      >
        <!-- Slides with image only -->
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
export default {
  data() {
    return {
      imgHeight: 750,
      imgWidth: 500,
    };
  },
};
</script>
