<template>
  <div class="w-full">
    <Hero :line1='"Bonjour, " + app.user.firstname + " " +  app.user.lastname'  line2="Modifiez ici vos coordonnées pour vous faire livrer !" ></Hero>
    <!-- <section
      class="w-full mx-auto bg-nordic-gray-light flex md:pt-0 md:items-center h-40 md:h-96"
      style="
        background-image: url('https://wallpaperaccess.com/full/17093.jpg');
      "
    >
      <div class="container mx-auto my-auto">
        <div
          class="flex flex-col w-full lg:w-1/2 justify-center items-start px-6 md:px-12 tracking-wide"
        >
          <p class="text-black text-xl">Bonjour,</p>

          <h1 class="text-black text-2xl my-4 font-semibold">
            {{ app.user.firstname + " " + app.user.lastname }} !
          </h1>
        </div>
      </div>
    </section> -->
    <section class="text-gray-700 body-font pb-12">
      <div class="container px-5 py-6 mx-auto w-full md:w-4/6">
        <div class="my-8 w-full">
          <div class="flex justify-between items-center">
            <div class="text-xl font-bold text-gray-700 tracking-wide">
              Vos informations
            </div>
            <br />
          </div>
        </div>

        <div class="my-8 w-full">
          <div class="md:flex md:justify-between">
            <div
              class="text-sm font-bold text-gray-700 tracking-wide w-full md:w-1/2"
            >
              <div>
                <div class="text-sm font-bold text-gray-700 tracking-wide">
                  Prénom
                </div>
                <input
                  class="w-full md:w-5/6 text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  type="text"
                  v-model="app.user.firstname"
                  disabled
                />
              </div>
              <br />
              <div>
                <div class="text-sm font-bold text-gray-700 tracking-wide">
                  Nom
                </div>
                <input
                  class="w-full md:w-5/6 text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  type="text"
                  v-model="app.user.lastname"
                  disabled
                />
              </div>
            </div>
            <br />
            <div
              class="text-sm font-bold text-gray-700 tracking-wide w-full md:w-1/2"
            >
              <div>
                <div class="text-sm font-bold text-gray-700 tracking-wide">
                  Adresse Mail
                </div>
                <input
                  class="w-full md:w-5/6 text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  type="text"
                  v-model="app.user.email"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>

        <div class="my-8 w-full">
          <div class="flex justify-between items-center">
            <div class="text-xl font-bold text-gray-700 tracking-wide">
              Modifiez votre adresse de livraison
            </div>
            <br />
          </div>
        </div>
        <form v-on:submit.prevent="onSubmit">
          <div class="my-8 w-full">
            <div class="md:flex md:justify-between">
              <div
                class="text-sm font-bold text-gray-700 tracking-wide w-full md:w-1/2"
              >
                <div>
                  <div class="text-sm font-bold text-gray-700 tracking-wide">
                    Adresse
                  </div>
                  <input
                    class="w-full md:w-5/6 text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    type="text"
                    name="address"
                    v-model="address"
                    placeholder="12 Rue JohnDoe ..."
                    required
                  />
                </div>
                <br />
                <div>
                  <div class="text-sm font-bold text-gray-700 tracking-wide">
                    Adresse Ligne 2
                  </div>
                  <input
                    class="w-full md:w-5/6 text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    type="text"
                    name="address2"
                    v-model="address2"
                    placeholder="BIS ..."
                  />
                </div>

                <br />
                <div>
                  <div class="text-sm font-bold text-gray-700 tracking-wide">
                    Ville
                  </div>
                  <input
                    class="w-full md:w-5/6 text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    type="text"
                    name="city"
                    v-model="city"
                    placeholder="Paris ..."
                    required
                  />
                </div>
              </div>
              <br />
              <div
                class="text-sm font-bold text-gray-700 tracking-wide w-full md:w-1/2"
              >
                <div>
                  <div class="text-sm font-bold text-gray-700 tracking-wide">
                    Code Postal
                  </div>
                  <input
                    class="w-full md:w-5/6 text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    type="text"
                    name="zip_code"
                    v-model="zip_code"
                    placeholder="90000 ..."
                    required
                  />
                </div>
                <br />
                <div>
                  <div class="text-sm font-bold text-gray-700 tracking-wide">
                    Pays
                  </div>
                  <input
                    class="w-full md:w-5/6 text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    type="text"
                    name="state"
                    v-model="state"
                    placeholder="France ..."
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="errors.length != 0"
            class="flex items-center bg-red-500 text-white text-sm font-bold px-4 py-3 my-4 w-full md:w-1/2"
            role="alert"
          >
            <svg
              class="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"
              />
            </svg>
            <div>
              <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
            </div>
          </div>
          <div
            v-if="messages.length != 0"
            class="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3 my-4 w-full md:w-1/2"
            role="alert"
          >
            <svg
              class="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"
              />
            </svg>
            <div>
              <li v-for="(message, index) in messages" :key="index">
                {{ message }}
              </li>
            </div>
          </div>
          <button
            type="submit"
            class="border border-blue-500 bg-blue-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline"
          >
            <spinner v-if="processing"></spinner>
            <p v-else>Enregistrer</p>
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";

export default {
  name: "login",
  props: ["app"],
  components: {
    Hero,
  },
  data() {
    return {
      address: this.app.user.address,
      address2: this.app.user.address2,
      city: this.app.user.city,
      state: this.app.user.state,
      zip_code: this.app.user.zip_code,
      processing: false,
      errors: [],
      messages: [],
    };
  },
  mounted() {
    if (!this.app.user) {
      this.$router.push("/login");
    }
  },
  methods: {
    onSubmit() {
      this.errors = [];
      this.messages = [];
      this.processing = true;

      // if (!this.address) {
      //   this.errors.push("l'adresse est requise.");
      // }
      // if (!this.city) {
      //   this.errors.push("La ville est requise.");
      // }

      // if (!this.state) {
      //   this.errors.push("Le pays est requis.");
      // }

      // if (!this.zip_code) {
      //   this.errors.push("Le code postal est requis.");
      // }

      // if (!this.errors.length) {
      const data = {
        user: this.app.user,
        address: this.address,
        address2: this.address2,
        city: this.city,
        state: this.state,
        zip_code: this.zip_code,
      };

      this.app.req
        .post("user/update", data)
        .then((response) => {
          this.messages.push("Enregistrement des données complété.");
          this.processing = false;
        })
        .catch((errors) => {
          this.errors.push(errors.response.data.error);
          this.processing = false;
        });
      // }
    },
  },
};
</script>

<style scoped>
</style>