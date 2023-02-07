<template>
  <div id="navbar" class="sticky-top">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-brand to="/">
        <b-img src="@/assets/img/ccc1.jpg" width="60%"></b-img>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav id="navLinks">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item to="/shop">Products</b-nav-item>

        </b-navbar-nav>

        <b-navbar-nav class="ml-auto pr-2">
          <!-- user icon -->
          <b-nav-item>
            <b-nav-item-dropdown size="lg" toggle-class="nav-link" right no-caret>
              <template #button-content> <!--{{ If-Else to check user photo }}-->
                <b-avatar v-if="user.username" class="icon-size" :text="user.username[0]" variant="primary"></b-avatar>
                <b-avatar v-else class="icon-size" icon="person" variant="dark"></b-avatar>
              </template> <!--{{ Login or Register }}-->
              <div v-if="user.username">
                <b-dropdown-item disabled>{{ user.username }}</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item @click="doLogout()">Logout</b-dropdown-item>
              </div>
              <div v-else>
                <b-dropdown-item v-b-modal="'login'">Login</b-dropdown-item>
                <b-dropdown-item v-b-modal="'register'">Register</b-dropdown-item>
              </div>
            </b-nav-item-dropdown>
          </b-nav-item>
          <!-- cart icon -->
          <b-nav-item class="no-padding">
            <b-nav-item-dropdown @show="calcPrice()" ref="cart-dd" size="lg" toggle-class="nav-link" right no-caret>
              <template #button-content>
                <b-avatar class="icon-size" :badge="cart.length.toString()" icon="cart3" badge-top badge-variant="light"
                  variant="dark">
                </b-avatar>
              </template>
              <b-dropdown-form class="no-padding" style="width: 640px">
                <b-card class="overflow-auto">
                  <div v-if="cart.length"> <!--{{ check items inside the cart }}-->
                    <b-list-group>
                      <b-list-group-item v-for="(item, index) in cart" :key="item.id"
                        class="flex-column align-items-center">
                        <div v-if="item.quantity"> <!--{{ cart items quantity }}-->
                          <b-row>
                            <b-col class="col-3" style="text-align: center">
                              <p><strong>Product</strong></p>
                            </b-col>
                            <b-col class="col-3"></b-col>
                            <b-col style="text-align: center">
                              <p><strong>Quantity:</strong></p>
                            </b-col>
                            <b-col style="text-align: center">
                              <p><strong>Total:</strong></p>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col class="col-3 py-2">
                              <!-- <b-link :to="`/details/${item.id}`">
                              </b-link> -->
                              <b-img :src="item.img_url" height="100" width="100"></b-img>
                            </b-col>
                            <b-col cols="3">
                              <p class="h4 mt-3" style="text-align: left">
                                {{ item.name }}
                              </p>
                            </b-col>
                            <b-col>
                              <b-row>
                                <b-col style="text-align: center">
                                  <b-button-toolbar> <!--{{ modify quantity inside the cart }}-->
                                    <b-button @click="minusOne(index)" size="sm" variant="light">
                                      <b-icon icon="dash"></b-icon>
                                    </b-button>
                                    <p class="mx-auto my-auto">
                                      {{ item.quantity }}
                                    </p>
                                    <b-button @click="plusOne(index)" size="sm" variant="light">
                                      <b-icon icon="plus"></b-icon>
                                    </b-button>
                                  </b-button-toolbar>
                                  <b-link @click="remove(index)" style="color: black">Remove</b-link>
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
                          <b-col cols="3">
                            <p class="h4 mt-4">Total</p>
                          </b-col>
                          <b-col cols="5" style="text-align: center">
                            <div>
                              <p><strong>Total Price:</strong></p>
                              <p>₱{{ totalPrice }}.00</p> <!--{{ display final amount }}-->
                            </div>
                          </b-col>
                        </b-row>
                      </b-list-group-item>
                      <b-row>
                        <b-col align-self="center">
                          <b-button class="col-11 my-3" size="md" to="/cart" @click.stop="closeDD()" variant="dark">View
                            Cart</b-button>
                        </b-col>
                        <b-col align-self="center">
                          <b-button class="col-11 my-3" size="md" @click="
                              checkout();
                            closeDD();
                          " variant="dark">Checkout</b-button>
                        </b-col>
                      </b-row>
                    </b-list-group>
                  </div>
                  <div v-else class="overflow-hidden" style="width: 450px">
                    <h2>You don't have any items!</h2>
                    <b-button class="mt-3" variant="dark" to="/shop" @click="closeDD()">Add Products!</b-button>
                  </div>
                </b-card>
              </b-dropdown-form>
            </b-nav-item-dropdown>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!-- User Login -->
    <b-modal id="login" ok-title="Login">
      <template #modal-title>
        <p><strong>Login</strong></p>
      </template>
      <template #modal-footer>
        <b-button @click="
  doLogin();
$bvModal.hide('login');
        " type="submit" variant="dark">Login</b-button>
      </template>
      <b-container fluid>
        <b-form>
          <!-- Email -->
          <b-form-group id="email" label="Email:" label-for="emailInput">
            <b-form-input id="emailInput" type="text" v-model="form.email" placeholder="Enter Email"
              required></b-form-input>
          </b-form-group>

          <!-- Password -->
          <b-form-group id="password" label="Password:" label-for="passwordInput">
            <b-form-input id="passwordInput" type="password" v-model="form.password" placeholder="Password"
              required></b-form-input>
          </b-form-group>
        </b-form>
      </b-container>
    </b-modal>

    <!-- User Register -->
    <b-modal id="register" ok-title="Register">
      <template #modal-title>
        <p><strong>Register</strong></p>
      </template>
      <template #modal-footer>
        <b-button @click="
  doRegister();
$bvModal.hide('register');
        " type="submit" variant="dark">Register</b-button>
      </template>
      <b-form>
        <!-- Username -->
        <b-form-group id="username" label="Username:" label-for="usernameInput">
          <b-form-input id="usernameInput" type="text" v-model="form.username" placeholder="Enter Username"
            required></b-form-input>
        </b-form-group>

        <!-- Email -->
        <b-form-group id="email" label="Email:" label-for="emailInput">
          <b-form-input id="emailInput" type="email" v-model="form.email" placeholder="Enter Email"
            description="We won't share your email to anyone else." required></b-form-input>
        </b-form-group>

        <!-- Password -->
        <b-form-group id="password" label="Password:" label-for="passwordInput">
          <b-form-input id="passwordInput" type="password" v-model="form.password" placeholder="Enter Password"
            required></b-form-input>
        </b-form-group>

        <!-- Confirm Password -->
        <b-form-group id="confirm-password" label="Confirm Password:" label-for="confirm-passwordInput">
          <b-form-input id="confirm-passwordInput" type="password" v-model="form.confirmPass"
            placeholder="Confirm Password" required></b-form-input>
        </b-form-group>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "Navbar",
  data() {
    return {
      form: {
        username: "",
        email: "",
        password: "",
        confirmPass: "",
      },
      totalPrice: 0,
    };
  },
  computed: {
    ...mapGetters("account", ["user", "errors"]),
    ...mapGetters("product", ["cart"]),
  },
  methods: {
    ...mapActions("account", ["register", "login", "logout"]),
    ...mapActions("product", ["removeCart"]),
    ...mapMutations("account", ["setUserData"]),
    calcPrice() {
      this.totalPrice = 0;
      this.cart.forEach((element) => {
        this.totalPrice += element.price * element.quantity;
      });
    },
    closeDD() {
      this.$refs["cart-dd"].hide();
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
    doLogin() {
      this.login({
        supabase: this.$supabase,
        form: this.form,
        bvToast: this.$bvToast
      })
    },
    doRegister() {
      this.register({
        supabase: this.$supabase,
        form: this.form,
        bvToast: this.$bvToast
      })
    },
    doLogout() {
      this.logout({
        supabase: this.$supabase,
        bvToast: this.$bvToast
      })
    }
  },
  mounted() {
    const user = this.$supabase.auth.user();
    if (user) {
      const userData = {
        username: user.user_metadata.username,
        email: user.email,
      }
      this.setUserData(userData);
    }
  }
};
</script>

<style scoped>
.nav-link {
  padding: 0.1rem;
}

.icon-size {
  width: 2.7rem;
}

.no-padding {
  padding: 0rem !important;
}

#navLinks {
  font-size: 18px;
}
</style>
