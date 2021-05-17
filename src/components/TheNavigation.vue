<template>
  <header>
    <button class="bars" id="bars">
      <font-awesome-icon icon="bars" />
    </button>
    <h1><router-link class="logo" to="/">Saladify</router-link></h1>
    <nav class="topnav" id="myTopNav">
      <router-link class="nav-link" to="/">Home</router-link>

      <router-link class="nav-link" to="/services">Services</router-link>
      <!-- <div class="dropdown">
        <button title="open Services">
          Services
          <font-awesome-icon icon="caret-down" />
        </button>
        <div class="dropdown-content">
          <a href="#">Link1</a>
          <a href="#">Link2</a>
          <a href="#">Link3</a>
        </div>
      </div> -->
      <!-- <a class="nav-link" href="#">About</a> -->
      <router-link class="nav-link" to="/about">About</router-link>

      <router-link class="nav-link" to="/contact">Contact</router-link>

      <button class="closeBtn" id="closeBtn">
        <font-awesome-icon icon="times" />
      </button>
    </nav>
  </header>
</template>
<script>
import { menu } from "../assets/scripts/menu.js";

export default {
  name: "TheNavigation",
  data() {
    return {};
  },
  props: {},
  computed: {},
  methods: {
    menu,
  },
  mounted() {
    menu();
  },
};
</script>
<style lang="postcss">
header {
  @apply bg-navbarcolor;

  /* for the logo & nav to sit next to each others*/
  @screen md {
    @apply flex flex-row;
  }

  .logo {
    @apply block text-brandcolor p-4 text-4xl;

    @screen md {
      @apply text-5xl;
    }
  }
}
nav.topnav {
  transition: 0.5s ease-out;
  @apply bg-navbarcolor overflow-hidden fixed w-full h-0 top-0 left-0;

  @screen md {
    @apply relative h-auto;
  }

  /* services | news | contact */
  /* nav links are block under each other in mobile */
  a.nav-link {
    @apply text-headingcolor block p-4 w-full text-center text-3xl transition-colors duration-300;

    &:hover {
      @apply bg-brandcolor text-white;
    }
    /* nav links to be horizontal in desktop mode */
    @screen md {
      @apply inline-block w-auto float-left text-lg p-8;
    }
  }
}

/* burger button & close button */
button.bars,
button.closeBtn {
  @apply border-none text-brandcolor text-right cursor-pointer w-full text-4xl absolute top-0 right-0 transition-colors duration-300 p-4;
}

/* burger & close button in desktop mode */
button.bars {
  @apply inline-block;

  @screen md {
    @apply hidden inset-2/4;
    transform: translate(-50%, -50%);
  }
}
button.closeBtn {
  @apply hidden;
}
</style>
