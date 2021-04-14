<template>
  <section
    class="text-gray-700 body-font overflow-hidden flex"
    style="min-height: 93vh"
  >
    <div class="container px-6 md:px-12 py-24 m-auto" v-if="!processing">
      <div class="lg:w-3/5 mx-auto flex flex-wrap" v-if="product">
        <img
          alt="ecommerce"
          class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          src="https://dummyimage.com/360x360"
        />
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2
            class="text-sm title-font text-gray-500 tracking-widest uppercase inline-block mr-2"
            v-for="category in product.categories"
            v-text="category.name"
          ></h2>
          <h1
            class="text-gray-900 text-3xl title-font font-medium mb-2"
            v-text="product.name"
          ></h1>
          <p class="leading-relaxed" v-text="product.description"></p>
          <div class="flex mt-6 pt-4 border-t-2 border-gray-200">
            <span
              class="title-font font-medium text-2xl text-gray-900"
              v-text="formatCurrency(product.price)"
            ></span>
          </div>
          <br />
          <button
            v-if="app.user"
            class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
            @click="addToCart(product)"
          >
            Ajouter au panier
          </button>
          <button
            v-else
            class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
            @click="redirect()"
          >
            Connectez vous
          </button>
        </div>
      </div>
      <h1 v-else class="text-gray-900 text-3xl title-font font-medium mb-2">
        Aucun produit trouvé.
      </h1>
    </div>
    <spinner
      class="container px-12 py-24 mx-auto"
      style="padding-top: 40vh"
      v-else
    ></spinner>
  </section>
</template>
<script>
export default {
  name: "products.show",
  props: ["app"],
  data() {
    return {
      product: null,
      processing: true,
    };
  },
  mounted() {
    this.productBySlug(this.$route.params.slug);
  },
  methods: {
    redirect() {
      this.$router.push("/login");
    },
    formatCurrency(amount) {
      amount = amount / 100;
      return amount.toLocaleString("fr-FR", {
        style: "currency",
        currency: "EUR",
      });
    },
    addToCart(product) {
      if (this.app.user) {
        this.processing = true;
        this.$store
          .dispatch("addOneFromCart", {
            user_id: this.app.user.id,
            product_id: product.id,
          })
          .then((response) => {
            this.processing = false;
          });
      }
    },
    productBySlug(slug) {
      this.$store.state.req
        .get("/api/products/slug/" + slug)
        .then((response) => {
          this.product = response.data;
          this.processing = false;
        });
    },
  },
};
</script>
