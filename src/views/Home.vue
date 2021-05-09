<template>
  <div class="home">
    <img alt="saladify logo" src="../assets/images/saladify-logo.jpg" />
    <HelloWorld msg="Live longer!" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
