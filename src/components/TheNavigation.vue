<template>
  <header>
    <div class="p-6 mx-auto md:ml-auto logo header-item md:col-span-1">
      <h1 class="text-brandcolor">Saladify</h1>
      <span>Customize your salad</span>
    </div>
    <div class="navigation header-item md:col-span-3">
      <div class="quickBar">
        <div class="quickContact">
          <span>email@email.com</span>
          <span>+49 27 000 00 00</span>
        </div>
        <div class="language">
          <span>Currency</span>
          <span>Language</span>
        </div>
      </div>
      <div class="nav">
        <ul class="navbar-list">
          <li>
            <router-link class="link navbar-link" to="/">Home</router-link>
          </li>
          <li>
            <router-link class="link navbar-link" to="/about"
              >About</router-link
            >
          </li>
          <li>
            <router-link class="link navbar-link" to="/contact"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "TheNavigation",
  data() {
    return {};
  },
  props: {},
  computed: {},
  methods: {},
};
</script>
<style lang="postcss">
header {
  @apply grid grid-cols-1 md:grid-cols-4;
  @apply bg-navbarcolor;

  .header-item {
    @apply grid-cols-1;
  }

  .quickBar {
    @apply flex justify-between w-full px-4 py-2 text-white  bg-brandcolor;

    > div > span {
      @apply pr-4;

      &:last-child {
        @apply pr-0;
      }
    }
  }
}
ul.navbar-list {
  @apply flex items-center justify-start;

  li {
    /* @apply mr-8;
    &:last-child {
      @apply mr-0;
    } */

    .navbar-link {
      @apply px-4 py-8;
      @apply uppercase font-bold;
      &:hover {
        @apply transition-colors  text-brandcolor duration-100 ease-in bg-brandcolor text-whitecolor;
      }
    }
  }
}
</style>
