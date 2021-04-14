<template>
  <div class="flex" style="height: 93vh;">
    <div class="w-full lg:w-1/2 m-auto" style="margin: auto">
      <div
        class="mt-10 px-6 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl xl:mx-auto"
      >
        <h2
          class="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl xl:text-bold"
        >
          Connexion
        </h2>
        <br>
        <div
          class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 my-6" 
          role="alert"
          v-if="errors.length"
        >
          <p class="font-bold">Attention</p>
          <p v-for="(error, index) in errors" :key="index">{{ error }}</p>
        </div>
        <div class="my-6">
          <form v-on:submit.prevent="onSubmit">
            <div>
              <div class="text-sm font-bold text-gray-700 tracking-wide">
                Adresse Email
              </div>
              <input
                class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type="email"
                name="email"
                v-model="email"
                placeholder="johndoe@gmail.com"
                required
              />
            </div>
            <div class="mt-8">
              <div class="flex justify-between items-center">
                <div class="text-sm font-bold text-gray-700 tracking-wide">
                  Mot de passe
                </div>
                <!-- <div>
                  <a
                    class="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800 cursor-pointer"
                  >
                    Mot de passe oublier ?
                  </a>
                </div> -->
              </div>
              <input
                class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type="password"
                name="password"
                v-model="password"
                placeholder="Entrez votre mot de passe ..."
                required
              />
            </div>
            <div class="mt-10">
              <button
                class="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg"
              >
                Se connecter
              </button>
            </div>
          </form>
          <div
            class="mt-12 text-sm font-display font-semibold text-gray-700 text-center"
          >
            Vous n'avez pas de compte ?
            <router-link
              :to="{ name: 'register' }"
              class="cursor-pointer text-indigo-600 hover:text-indigo-800"
              >S'enregistrer</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  props: ["app"],
  data() {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    onSubmit() {
      this.errors = [];

      if (!this.email) {
        this.errors.push("L'email est requis.");
      }
      if (!this.password) {
        this.errors.push("Le mot de passe est requis.");
      }

      if (!this.errors.length) {
        const data = {
          email: this.email,
          password: this.password,
        };

        this.app.req
          .post("auth/login", data)
          .then((response) => {
            this.app.user = response.data;
            this.$router.push("/");
          })
          .catch((errors) => {
            this.errors.push(errors.response.data.error);
          });
      }
    },
  },
};
</script>

<style scoped>
</style>