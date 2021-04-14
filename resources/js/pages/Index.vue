<template>
  <div class="w-full">
    <Hero line1="Bienvenue dans notre magasin !" line2="Faites vos recherches et trouvez ce qui vous plait ..." ></Hero>
    <section class="text-gray-700 body-font">
      <div class="container px-5 py-6 mx-auto">
        <div class="my-8 w-full">
          <div class="flex justify-between items-center">
            <div class="text-sm font-bold text-gray-700 tracking-wide">
              Rechercher dans nos produits ...
            </div>
          </div>
          <div class="flex">
            <div class="flex space-between w-full mr-4">
              <input
                class="w-full md:w-1/3 text-s py-2 pr-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type="text"
                name="search"
                v-model="search"
                placeholder="Lunettes, Montres ..."
              />
            </div>

            <button
              @click="price = !price"
              style="width: 80px"
              class="flex items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-gray-100 rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              <span>Prix</span>

              <i
                class="fa fa-sort-desc inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"
                v-if="price"
                aria-hidden="true"
              ></i>
              <i
                class="fa fa-sort-asc inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"
                v-else
                aria-hidden="true"
              ></i>
            </button>
          </div>
        </div>

        <div class="my-8 w-full">
          <div class="flex justify-between items-center">
            <div class="text-sm font-bold text-gray-700 tracking-wide">
              Produits ({{ totalProducts }})
            </div>
          </div>
        </div>

        <spinner v-if="processing" style="margin: 250px 0;"></spinner>

        <div class="my-8 w-full" v-else-if="!products.length">
          <div class="flex justify-between items-center">
            <div class="text-sm font-medium text-gray-700 tracking-wide">
              Aucun produits pour la recherche "{{ search }}".
            </div>
          </div>
        </div>

        <div class="flex flex-wrap -m-4" v-else>
          <div
            class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col"
            v-for="product in products"
            :key="product.id"
          >
            <router-link
              :to="{ name: 'products.show', params: { slug: product.slug } }"
            >
              <img
                class="hover:grow hover:shadow-lg m-auto"
                src="https://dummyimage.com/360x360"
              />
            </router-link>

            <div class="mt-4">
              <h3
                class="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase inline-block mr-2"
                v-for="category in product.categories"
                v-text="category.name"
              ></h3>
              <h2
                class="text-gray-900 title-font text-lg font-medium"
                v-text="product.name"
              ></h2>
              <p class="mt-1" v-text="formatCurrency(product.price)"></p>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center my-12">
          <div class="flex text-gray-700">
            <a href="#top">
              <div
                class="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer"
                @click="previousPage"
                v-if="previous != 0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-chevron-left w-6 h-6"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </div>
            </a>
            <div class="flex h-12 font-medium rounded-full bg-gray-200">
              <div
                class="w-12 h-12 flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-teal-600 text-black"
              >
                {{ page }}
              </div>
            </div>
            <a href="#top">
              <div
                class="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer"
                @click="nextPage"
                v-if="next != 0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-chevron-right w-6 h-6"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg></div
            ></a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>

import Hero from "../components/Hero.vue";

export default {
  name: "products",
  props: ["app"],
  components: {
    Hero,
  },
  data() {
    return {
      price: false,
      search: "",
      previous: 0,
      next: 0,
      page: 1,
      test: [],
      processing: false,
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    previousPage() {
      this.page = this.previous;
      this.getProducts()
    },
    nextPage() {
      this.page = this.next;
      this.getProducts()
    },
    formatCurrency(amount) {
      amount = amount / 100;
      return amount.toLocaleString("fr-FR", {
        style: "currency",
        currency: "EUR",
      });
    },
    getProducts() {
      this.processing = true;
      this.app.req
        .get("/api/products", {
          params: {
            search: this.search,
            price: this.price ? "asc" : "desc",
            page: this.page,
          },
        })
        .then((response) => {
          this.$store.state.products = response.data.products;
          this.previous = response.data.previous;
          this.next = response.data.next;
          this.processing = false;
          this.$store.state.totalProducts = response.data.totalProducts;
        });
    },
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    totalProducts(){
      return this.$store.state.totalProducts;
    }
  },
  watch: {
    search: function (val, oldVal) {
      this.page = 1;
      this.getProducts();
    },
    price: function (val, oldVal) {
      this.page = 1;
      this.getProducts();
    },
  },
};
</script>
