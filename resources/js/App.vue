<template>
  <div>
    <Header :app="this"></Header>

    <div v-if="loading" style="height: 100vh">
      <spinner style="padding: 46vh"></spinner>
    </div>

    <div v-else-if="initiated" style="padding-top: 7vh; min-height: 100vh">
      <router-view :app="this" />
    </div>

    <Footer :app="this"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      user: null,
      loading: false,
      initiated: false,
      req: axios.create({
        baseUrl: BASE_URL,
      }),
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.loading = true;
      this.req.get("auth/init").then((response) => {
        this.user = response.data.user;
        this.loading = false;
        this.initiated = true;

        this.getCart();
      });
    },
    getCart(){
      if (this.user) {
        this.req
          .get("/api/cart/" + this.user.id)
          .then((response) => {
            this.$store.commit("updateCart", response.data);
          });
      }
    }
  },
};
</script>

<style scoped>
</style>
