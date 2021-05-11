<template>
  <div class="contact">
    <div v-if="!submitted">
      <h1>Question</h1>
      <p>Don't hesitate to get in touch</p>
      <form @submit.prevent="submitForm" id="contactForm">
        <div>
          <!-- name -->
          <div>
            <input
              type="text"
              id="name"
              aria-label="name"
              v-model="form.name"
              @input="$v.form.name.$touch()"
              :class="{
                error: $v.form.name.$error,
                success: !$v.form.name.$invalid,
              }"
              placeholder="Your name"
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
              Name must be valid!
            </p>
          </div>

          <div>
            <input type="checkbox" id="newsletter" v-model="form.newsletter" />
            <label for="newsletter">Subscribe to the newsletter</label>
          </div>

          <!-- email -->
          <div>
            <input
              type="email"
              id="email"
              aria-label="email"
              v-model="form.email"
              @input="$v.form.email.$touch()"
              :class="{
                error: $v.form.email.$error,
                success: !$v.form.email.$invalid && $v.form.email.$dirty,
              }"
              placeholder="Your email address"
            />
            <!-- notification -->
            <p
              v-if="!$v.form.email.email && $v.form.email.$error"
              class="text-red-500"
            >
              Please input a valid email
            </p>
            <p
              v-if="!$v.form.email.required && $v.form.email.$error"
              class="text-red-500"
            >
              Email is required
            </p>
          </div>

          <!-- message -->
          <div>
            <textarea
              name="message"
              form="contactForm"
              aria-label="message"
              v-model="form.message"
              @input="$v.form.message.$touch()"
              placeholder="Enter your message here"
              :class="{
                error: $v.form.message.$error,
                success: !$v.form.message.$invalid,
              }"
            ></textarea>
            <!-- notification -->
            <p
              v-if="!$v.form.message.required && $v.form.message.$error"
              class="text-red-500"
            >
              Message is required
            </p>

            <p
              v-if="!$v.form.message.minLength & $v.form.message.$error"
              class="text-red-500"
            >
              Yout message must be at least 10 character
            </p>
          </div>

          <div>
            <button>Submit</button>
          </div>
        </div>
      </form>
    </div>
    <div v-else>
      <h1>Thank you!</h1>
      <p>
        I will get in touch with you when my cat allows me to work quietly :)
      </p>
    </div>
  </div>
</template>

<script>
import {
  required,
  minLength,
  email,
  requiredIf,
} from "vuelidate/lib/validators";

export default {
  name: "Contact",
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
  validations: {
    form: {
      name: {
        required: required,
        minLength: minLength(3),
      },
      message: {
        required: required,
        minLength: minLength(10),
      },
      email: {
        email: email,
        required: requiredIf(function () {
          return !!this.form.newsletter;
        }),
      },
    },
  },
  computed: {},
  methods: {
    submitForm() {
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        console.log("form is successfuly submitted!");
        this.submitted = true;
      } else {
        console.log("invalid form");
      }
    },
  },
};
</script>
