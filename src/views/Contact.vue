<template>
  <div class="contact">
    <div v-if="!submitted">
      <h1 class="text-center">Get In Touch</h1>
      <p class="my-8 text-center">
        Lorem ipsum dolor sunt placeat velit quia Voluptate tenetur reiciendis
        <br />
        aliquam quaerat expedita Odio sed deserunt officia.
      </p>
      <!-- contact info -->
      <contact-info
        class="grid grid-cols-1 gap-8 my-8 md:grid-cols-3"
      ></contact-info>
      <!-- form and google map -->
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <contact-form @update="submitForm" class="md:col-span-1"></contact-form>
        <contact-map @update="submitForm" class="md:col-span-1"></contact-map>
      </div>
    </div>
    <div v-else class="text-center form-item">
      <h1>Thank you!</h1>
      <p class="my-8">
        I will get in touch with you when my cat allows me to work quietly :)
        <button class="m-8 mx-auto btn btn--secondary">
          <font-awesome-icon :icon="['fas', 'home']" />
          Go to Homepage
        </button>
      </p>
    </div>
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm";
import ContactMap from "@/components/ContactMap";
import ContactInfo from "../components/ContactInfo.vue";

export default {
  name: "Contact",
  components: {
    ContactForm,
    ContactMap,
    ContactInfo,
  },
  data() {
    return {
      submitted: false,
      form: {
        name: null,
        message: null,
        email: null,
        newsletter: null,
      },
    };
  },
  methods: {
    submitForm() {
      this.submitted = true;
      console.log("submitted successfully!");
    },
  },
};
</script>
