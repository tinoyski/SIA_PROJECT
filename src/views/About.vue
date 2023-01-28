<template>
  <div id="about">
    <b-jumbotron>
      <template #header>About Us</template>

      <template #lead>
        Learn more about how we manage and handle our products in order to give
        you the best experiece possible!
      </template>
      <hr class="my-4" />
    </b-jumbotron>
    <section class="container">
      <h2>Who we are</h2>
      <hr class="my-4" />
      <br />
      <img src="@/assets/img/ccc4.jpg" class="img-fluid" alt="@/assets/img/ccc3.png" />
       <br />
      <p class="sm" style="text-align: left">
          Taken from
          <a href="https://www.facebook.com/citycollegeofcalamba">CITY COLLEGE OF CALAMBA</a>
        </p>
      <br />
      <br />
      <p style="font-size: +20px">
        This website is developed by a group of IT Programmers from City College of Calamba. 
        To serve as their partial requirement in System Integration and Architecture. 
        A project inspired by Professor Leonardo Antivo.
      </p>
      <br />
      <h1>Our Products</h1>
      <hr class="my-4" />
      <p style="font-size: +20px">
        Our products are from the collaborated departments of City College of Calamba such as Departmental T-shirts, Facemask, Totebag, Accesories and more.
       For more info, visit <a target="target_name" rel="relation_name" href="https://m.facebook.com/CCCOnlineBazaar"> CCC Student's Online Bazaar</a>
      </p>
      <br />
      <br />
      <div>
        <h3>CITY COLLEGE OF CALAMBA DEPARTMENTS</h3>
        <br />
        <div class="container">
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
              src="@/assets/img/dci.png"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block w-100"
              :height="imgHeight"
              src="@/assets/img/daste.png"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block w-100"
              :height="imgHeight"
              src="@/assets/img/dba.png"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block w-100"
              :height="imgHeight"
              src="@/assets/img/dte.png"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>
    <br />
        <p class="sm" style="text-align: left">  <!-- references -->
          Taken from
          <a target="ccc_dci" rel="dci" href="https://ccc.edu.ph/academics/dci">DCI, </a>
          <a target="ccc_das" rel="das" href="https://ccc.edu.ph/academics/das">DASTE, </a>
          <a target="ccc_dba" rel="dba" href="https://ccc.edu.ph/academics/dba">DBA, </a>
          <a target="ccc_dte" rel="dte" href="https://ccc.edu.ph/academics/daste">DTE</a>
        </p>
      </div>
    </section>
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