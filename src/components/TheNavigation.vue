<template>
  <header class="grid w-full md:grid-cols-4 md:grid-rows-2">
    <div class="col-span-4 logo md:row-span-2 md:col-span-1 md:static">
      <h1>Saladify</h1>
      <span>Customize your salad</span>
    </div>
    <div class="col-span-4 quickBar md:col-span-3">
      <div class="contact">
        <span><a href="mailto:email@email.com">email@email.com</a></span>
        <span><a href="tel:+49 27 000 00 00">+41 76 000 0000</a> </span>
      </div>
      <div class="language">
        <select name="currency-switcher">
          <option selected>currency</option>
          <option value="1">$</option>
          <option value="2">CHF</option>
          <option value="3">£</option>
        </select>
        <select name="language-switcher">
          <option selected>language</option>
          <option value="1">English</option>
          <option value="2">German</option>
          <option value="3">French</option>
        </select>
      </div>
    </div>

    <div class="col-span-4 nav md:col-span-3">
      <ul class="navbar-list">
        <li>
          <router-link class="link navbar-link" to="/">Home</router-link>
        </li>
        <li>
          <router-link class="link navbar-link" to="/about">About</router-link>
        </li>
        <li>
          <router-link class="link navbar-link" to="/contact"
            >Contact</router-link
          >
        </li>
      </ul>
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
  @apply bg-navbarcolor;

  .logo {
    @apply relative mt-4 text-center;
    top: 2.5rem;

    @screen md {
      @apply static ml-auto p-3 text-left mt-0;
    }

    h1 {
      @apply text-brandcolor;
    }
  }

  .quickBar {
    @apply flex justify-between items-center w-full px-4 py-2 text-white  bg-brandcolor relative;
    top: -5.8rem;

    @screen md {
      @apply static;
    }

    .contact {
      @apply flex justify-between w-full;

      @screen md {
        @apply block;
      }
    }

    .language {
      @apply hidden;
      @screen md {
        @apply block w-full flex justify-end;
      }

      select {
        @apply bg-transparent capitalize cursor-pointer ml-2;
      }
    }

    > div > span {
      @apply pr-0 text-sm;

      @screen md {
        @apply pr-4 text-base;
      }

      &:last-child {
        @apply pr-0;
      }
    }
  }
}
ul.navbar-list {
  @apply flex items-center justify-center;

  @screen md {
    @apply mt-0 justify-start;
  }

  li {
    @apply w-full;
    @screen md {
      @apply w-auto;
    }
    .navbar-link {
      @apply px-4 py-3 w-full;
      @apply uppercase font-bold text-center;
      &:hover {
        @apply transition-colors  text-brandcolor duration-100 ease-in bg-brandcolor text-whitecolor;
      }
    }
  }
}
</style>
