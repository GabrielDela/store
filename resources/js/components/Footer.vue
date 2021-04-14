<template>
  <!--Nav-->
  <div class="m-auto w-full text-gray-100 bg-gray-800 h-80"></div>
</template>

<script>
export default {
  name: "Footer",
  props: ["app"],
  data() {
    return {};
  },
  // methods: {
  //   logout() {
  //     this.app.req.post("auth/logout").then(() => {
  //       this.app.user = null;
  //       this.$router.push("/login");
  //     });
  //   },
  // },
};
</script>

<style scoped>
</style>
