<template>
  <div class="contact">
    <h1>This is an contact page</h1>
    <form @submit.prevent="submitForm" id="contactForm">
      <div>
        <!-- name -->
        <div>
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            v-model="form.name"
            @input="$v.form.name.$touch()"
          />
          <!-- notification -->
          <p
            v-if="!$v.form.name.required && $v.form.name.$error"
            class="text-red-500"
          >
            Name ist required
          </p>

          <p
            v-if="!$v.form.name.minLength && $v.form.name.$error"
            class="text-red-500"
          >
            Name must be valid
          </p>
        </div>

        <!-- email -->
        <!-- <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email" />
        </div> -->

        <!-- message -->
        <div>
          <label for="message">Your message:</label>
          <textarea
            name="message"
            form="contactForm"
            v-model="form.message"
            @input="$v.form.message.$touch()"
          >
Enter text here...</textarea
          >

          <!-- notification -->
          <p
            v-if="!$v.form.message.required && $v.form.message.$error"
            class="text-red-500"
          >
            Message ist required
          </p>

          <p
            v-if="!$v.form.message.minLength & $v.form.message.$error"
            class="text-red-500"
          >
            Message must be at least 10 character
          </p>
        </div>

        <div>
          <button>Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "Contact",
  data() {
    return {
      form: {
        name: null,
        message: null,
      },
    };
  },
  validations: {
    form: {
      name: {
        required: required,
        minLength: minLength(2),
      },
      message: {
        required: required,
        minLength: minLength(10),
      },
    },
  },
  computed: {},
  methods: {
    submitForm() {
      console.log("form is successfuly submitted!");
    },
  },
};
</script>
