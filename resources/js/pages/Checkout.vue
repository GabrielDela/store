<template>
  <div class="w-full">
    <Hero
      line1="Paiement"
      line2="Plus que quelques étapes avant la livraison de vos produits !"
    ></Hero>

    <div class="md:w-2/3 w-full mx-auto mt-8" v-if="renderComponent">
      <div
        class="w-full p-6 flex flex-col md:flex-row"
        v-for="(item, index) in cart"
        :key="item.id"
      >
        <router-link
          :to="{ name: 'products.show', params: { slug: item.slug } }"
        >
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
          <p class="mt-1" v-text="'Quantité : ' + item.pivot.quantity"></p>
        </div>
      </div>
    </div>

    <div class="md:w-2/3 w-full mx-auto mt-8">
      <div class="p-4">
        <div class="p-4 font-bold">Nombre de produits : {{ cartQuantity }}</div>
        <div class="p-4 font-bold">Prix des produits : {{ cartTotal }}</div>
        <div class="w-10 text-right"></div>
      </div>

      <div class="lg:w-2/3 w-full mx-auto mt-8">
        <div class="flex flex-wrap -mx-2 mt-4">
          <div class="p-8 w-full">
            <div class="relative">
              <label for="card-element" class="leading-7 text-sm text-gray-600"
                >Information de la carte bleue</label
              >
              <div id="card-element"></div>
            </div>
          </div>
        </div>
        <div class="p-8 w-full">
          <button
            class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            @click="processPayment"
            :disabled="paymentProcessing"
            v-text="paymentProcessing ? 'En cours' : 'Payez maintenant'"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Hero from "../components/Hero.vue";
import { loadStripe } from "@stripe/stripe-js";

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
      stripe: {},
      cardElement: {},
      customer: {
        id: this.app.user.id,
        firstname: this.app.user.firstname,
        lastname: this.app.user.lastname,
        email: this.app.user.email,
        address: this.app.user.address,
        address2: this.app.user.address2,
        city: this.app.user.city,
        state: this.app.user.state,
        zip_code: this.app.user.zip_code,
      },
      paymentProcessing: false,
    };
  },
  async mounted() {
    if (this.user) {
      this.stripe = await loadStripe(process.env.MIX_STRIPE_KEY);

      const elements = this.stripe.elements();
      this.cardElement = elements.create("card", {
        classes: {
          base:
            "bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 p-3 leading-8 transition-colors duration-200 ease-in-out",
        },
      });

      this.cardElement.mount("#card-element");
    } else {
      this.$router.push("/");
    }
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
    async processPayment() {
      if (this.user) {
        this.paymentProcessing = true;

        const { paymentMethod, error } = await this.stripe.createPaymentMethod(
          "card",
          this.cardElement,
          {
            billing_details: {
              name: this.customer.firstname + " " + this.customer.lastname,
              email: this.customer.email,
              address: {
                line1: this.customer.address,
                line2: this.customer.address2,
                city: this.customer.city,
                state: this.customer.state,
                postal_code: this.customer.zip_code,
              },
            },
          }
        );

        if (error) {
          this.paymentProcessing = false;
          // console.error(error);
        } else {
          // console.log(paymentMethod);
          this.customer.payment_method_id = paymentMethod.id;
          this.customer.amount = this.$store.state.cart.reduce(
            (acc, item) => acc + item.price * item.pivot.quantity,
            0
          );
          this.customer.cart = JSON.stringify(this.$store.state.cart);

          this.app.req
            .post("/api/purchase", this.customer)
            .then((response) => {
              this.paymentProcessing = false;
              // console.log(response);
              console.log(response);
              this.$store.dispatch("updateOrder", response.data);
              console.log(response);
              this.$store.dispatch("clearCart", { user_id: this.app.user.id});
              console.log(response);

              this.$router.push({ name: "order.summary" });
            })
            .catch((error) => {
              this.paymentProcessing = false;
              // console.error(error);
            });
        }
      }
    },
  },
  computed: {
    cart() {
      this.cartQuantity = this.getCartQuantity();
      this.cartTotal = this.getCartTotal();
      return this.$store.state.cart;
    },
  },
  watch: {
    show: function (val, oldVal) {
      this.forceRerender();
    },
  },
};
</script>
