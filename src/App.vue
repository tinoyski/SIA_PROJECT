<template>
  <div id="app">
    <Navbar id="nav" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
#app {
  background-color: rgb(223, 223, 223);
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Alfa Slab One", cursive;
}

#nav a {
  font-weight: bold;
}
</style>
