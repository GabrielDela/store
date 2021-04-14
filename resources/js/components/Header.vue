<template>
  <!--Nav-->

  <div
    class="m-auto w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 fixed z-30"
    style="box-shadow: #00000085 0 0 10px"
  >
    <div
      x-data="{ opened: false }"
      class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
      style="min-height: 7vh"
      
    >
      <div class="p-4 flex flex-row items-center justify-between">
        <a
          href="#"
          class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
          >DropShipping</a
        >
        <button
          class="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
          @click="opened = !opened"
        >
          <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
            <path
              v-if="!opened"
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
            <path
              v-if="opened"
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <nav
        :class="{ flex: opened, hidden: !opened }"
        class="flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row"
        
      >
        <router-link
          class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          :to="{ name: 'index' }"
          v-on:click.native="openedDrop = false; opened = false;"
          >Produits</router-link
        >
        <router-link
          v-if="app.user"
          class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          :to="{ name: 'order.cart' }"
          v-on:click.native="openedDrop = false; opened = false;"
          >{{ "Panier (" + $store.state.cart.length + ")" }}</router-link
        >

        <div class="relative" v-if="app.user" id="dropdown">
          <button
            @click="openedDrop = !openedDrop"
            class="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          >
            <span> {{ app.user.firstname + " " + app.user.lastname }} </span>
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            v-if="openedDrop"
            class="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48"
          >
            <div
              class="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800"
            >
              <router-link
                class="mb-1 block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                :to="{ name: 'user' }"
                v-on:click.native="openedDrop = false; opened = false;"
                >Mes Informations</router-link
              >
              <a
                class="cursor-pointer block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                @click="logout(); openedDrop = false; opened = false;"
                >Se déconnecter</a
              >
            </div>
          </div>
        </div>
        <div class="relative" v-else>
          <button
            @click="openedDrop = !openedDrop"
            class="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          >
            <span> Invité </span>
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            v-if="openedDrop"
            class="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48"
          >
            <div
              class="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800"
            >
              <router-link
                class="mb-1 block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                :to="{ name: 'login' }"
                v-on:click.native="openedDrop = false; opened = false"
                >Se connecter</router-link
              >
              <router-link
                class="cursor-pointer block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                :to="{ name: 'register' }"
                v-on:click.native="openedDrop = false; opened = false"
                >S'enregistrer</router-link
              >
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["app"],
  data() {
    return {
      opened: false,
      openedDrop: false,
    };
  },
  methods: {
    logout() {
      this.app.req.post("auth/logout").then(() => {
        this.app.user = null;
        this.$router.push("/login");
      });
    },
  },
};
</script>



<style scoped>
.router-link-exact-active {
  background-color: rgb(215, 215, 215);
}
</style>
