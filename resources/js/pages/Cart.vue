<template>
  <div class="w-full">
    <Hero line1="Votre panier" line2="Ajoutez ou supprimez les produits de votre panier puis passez commande !" ></Hero>
    <div class="md:w-2/3 w-full mx-auto mt-8" v-if="renderComponent">
      <div
        class="w-full p-6 flex flex-col md:flex-row"
        v-for="(item, index) in cart"
        :key="item.id"
      >
        <router-link :to="{ name: 'products.show', params: { slug: item.slug } }">
          <img
            class="hover:grow hover:shadow-lg m-auto"
            style="max-width: 250px"
            src="https://dummyimage.com/360x360"
          />
        </router-link>

        <div class="my-4 md:m-6 w-full">
          <h2
            class="text-gray-900 title-font text-lg font-medium"
            v-text="item.name"
          ></h2>
          <p class="mt-1" v-text="'Total : ' + cartLineTotal(item)"></p>
        </div>
        <div class="md:mx-6 md:m-6 w-full flex flex-col">
          <div
            class="ml-auto pb-6 md:py-6 md:py-0 text-2xl"
            style="width: fit-content disable-select"
          >
            <i
              class="fa fa-chevron-circle-left text-2xl cursor-pointer"
              aria-hidden="true"
              @click="removeOne(item)"
            ></i>
            {{ item.pivot.quantity }}
            <i
              class="fa fa-chevron-circle-right text-2xl cursor-pointer"
              aria-hidden="true"
              @click="addOne(item)"
            ></i>
          </div>

          <button
            style="margin:bottom: 0px; margin-top: auto;"
            class="ml-auto text-sm text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
            @click="deleteFromCart(item)"
          >
            <i class="fa fa-trash" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>

    <div class="md:w-2/3 w-full mx-auto mt-8" v-if="cartQuantity > 0">
      <div class="p-6">
        <div class="py-4 font-bold">Nombre de produits - {{ cartQuantity }}</div>
        <div class="py-4 font-bold">Prix total des produits - {{ cartTotal }}</div>
        <div class="flex p-6">
           <router-link
           :to="{ name: 'order.checkout' }"
            class="m-auto text-m text-white bg-indigo-500 border-0 py-4 px-8 focus:outline-none hover:bg-indigo-600 rounded"
          >Procéder au paiement
            <i class="fa fa-credit-card" style="padding-left: 10px;" aria-hidden="true"></i>
          </router-link>
        </div>
      </div>
    </div>

    <div class="md:w-2/3 w-full mx-auto mt-8 p-6" v-else>
      <p class="font-semibold">
        Votre panier est vide, remplissez le pour faire des achats ...
      </p>
      <div class="flex w-full justify-center">
        <i
          class="fa fa-cart-plus"
          style="font-size: 150px; margin: 100px 0"
          aria-hidden="true"
        ></i>
      </div>
    </div>
  </div>
</template>
<script>
import Hero from "../components/Hero.vue";

export default {
  name: "checkout",
  props: ["app"],
  components: {
    Hero,
  },
  data() {
    return {
      cartQuantity: -1,
      cartTotal: -1,
      renderComponent: true,
      user: this.app.user,
    };
  },
  methods: {
    forceRerender() {
      this.cartQuantity = this.getCartQuantity();
      this.cartTotal = this.getCartTotal();

      this.renderComponent = false;

      this.$nextTick(() => {
        this.renderComponent = true;
      });
    },
    getCartQuantity() {
      return this.$store.state.cart.reduce(
        (acc, item) => acc + item.pivot.quantity,
        0
      );
    },
    getCartTotal() {
      let amount = this.$store.state.cart.reduce(
        (acc, item) => acc + item.price * item.pivot.quantity,
        0
      );
      amount = amount / 100;

      return amount.toLocaleString("fr-FR", {
        style: "currency",
        currency: "EUR",
      });
    },
    addOne(product) {
      if (this.app.user) {
        this.$store
          .dispatch("addOneFromCart", {
            user_id: this.app.user.id,
            product_id: product.id,
          })
          .then((response) => {
            this.forceRerender();
          });
      }
    },
    removeOne(product) {
      if (this.app.user) {
        this.$store
          .dispatch("removeOneFromCart", {
            user_id: this.app.user.id,
            product_id: product.id,
          })
          .then((response) => {
            this.forceRerender();
          });
      }
    },
    deleteFromCart(product) {
      if (this.app.user) {
        this.$store
          .dispatch("deleteFromCart", {
            user_id: this.app.user.id,
            product_id: product.id,
          })
          .then((response) => {
            this.forceRerender();
          });
      }
    },
    cartLineTotal(item) {
      let amount = item.price * item.pivot.quantity;
      amount = amount / 100;

      return amount.toLocaleString("fr-FR", {
        style: "currency",
        currency: "EUR",
      });
    },
  },
  computed: {
    cart() {
      this.cartQuantity = this.getCartQuantity();
      this.cartTotal = this.getCartTotal();
      return this.$store.state.cart;
    },
  },
};
</script>
