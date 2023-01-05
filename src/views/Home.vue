<template>
  <div class="home">
    <b-jumbotron>
      <template #header>SIA PROJECT</template>

      <template #lead>
        Your one stop shop for all of your pet's foods! We offer products for
        dogs and cats and many more soon!
      </template>

      <hr class="my-4" />

      <p>
        Learn more about us and how we operate or start shopping now by clicking
        the button below!
      </p>

      <b-button variant="primary" to="/about" class="mr-2">Learn more</b-button>
      <b-dropdown text="Shop Now!" class="m-md-2" variant="success">
        <b-dropdown-item to="/dog">Dogs</b-dropdown-item>
        <b-dropdown-item to="/cat">Cats</b-dropdown-item>
      </b-dropdown>
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
              src="https://i.imgur.com/JIxnYfL.png"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block w-100"
              :height="imgHeight"
              src="@/assets/img/dog-1.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block w-100"
              :height="imgHeight"
              src="@/assets/img/cat-1.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block w-100"
              :height="imgHeight"
              src="@/assets/img/cat-2.jpg"
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
