<template>
    <section
      class="w-full mx-auto bg-nordic-gray-light flex pt-12 md:pt-0 md:items-center bg-cover"
      style="
        background-image: url('https://wallpaperaccess.com/full/17093.jpg');
        padding: 10vh 0 10vh 0;
      "
    >
      <div class="container mx-auto">
        <div
          class="flex flex-col w-full justify-center items-start md:px-6 md:px-12 tracking-wide"
        >
          <h1 v-if="line1" class="text-black font-medium text-xl my-4 bg-white p-2">
            {{ line1 }}
          </h1>
          <p v-if="line2" class="text-black font-medium text-m my-4 bg-white p-2">
            {{ line2 }}
          </p>

        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: "Hero",
  props: ["line1", "line2"],
};
</script>

<style scoped>
</style>