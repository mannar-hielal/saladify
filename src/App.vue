<template>
  <div id="app">
    <the-navigation></the-navigation>
    <router-view class="default-container" />
  </div>
</template>
<script>
import TheNavigation from "@/components/TheNavigation";
export default {
  components: {
    TheNavigation,
  },
};
</script>
<style lang="scss"></style>
