<template>
  <div class="card">
    <form @submit.prevent="submit" id="contactForm">
      <!-- name -->
      <div class="form-item">
        <label for="name" class="label">
          <div class="icon-wrapper">
            <font-awesome-icon icon="user" />
          </div>
          <input
            type="text"
            id="name"
            :class="{
              errorInput: $v.form.name.$error,
              successInput: !$v.form.name.$invalid,
            }"
            v-model="form.name"
            @input="$v.form.name.$touch()"
            placeholder="Your name"
          />
        </label>
        <!-- notification -->
        <p
          v-if="!$v.form.name.required && $v.form.name.$error"
          class="errorMsg"
        >
          Name is required!
        </p>

        <p
          v-if="!$v.form.name.minLength && $v.form.name.$error"
          class="errorMsg"
        >
          Name must be valid!
        </p>
      </div>

      <!-- email -->
      <div class="form-item">
        <label for="email" class="label">
          <div class="icon-wrapper">
            <font-awesome-icon icon="envelope" />
          </div>

          <input
            type="email"
            id="email"
            v-model="form.email"
            @input="$v.form.email.$touch()"
            :class="{
              errorInput: $v.form.email.$error,
              successInput: !$v.form.email.$invalid && $v.form.email.$dirty,
            }"
            placeholder="your@email.com"
          />
        </label>
        <!-- notification -->
        <p v-if="!$v.form.email.email && $v.form.email.$error" class="errorMsg">
          Please input a valid email address!
        </p>
        <p
          v-if="!$v.form.email.required && $v.form.email.$error"
          class="errorMsg"
        >
          Email is required!
        </p>
      </div>

      <!-- message -->
      <div class="form-item">
        <label for="message" class="label">
          <div class="icon-wrapper">
            <font-awesome-icon icon="pen-nib" />
          </div>
          <textarea
            name="message"
            form="contactForm"
            v-model="form.message"
            @input="$v.form.message.$touch()"
            placeholder="Enter your message here"
            :class="{
              errorInput: $v.form.message.$error,
              successInput: !$v.form.message.$invalid,
            }"
            class="h-32"
          ></textarea>
        </label>
        <!-- notification -->
        <p
          v-if="!$v.form.message.required && $v.form.message.$error"
          class="errorMsg"
        >
          Message is required!
        </p>

        <p
          v-if="!$v.form.message.minLength & $v.form.message.$error"
          class="errorMsg"
        >
          Yout message must be at least 10 character
        </p>
      </div>

      <!-- newsletter check -->
      <div class="text-left form-item">
        <input type="checkbox" id="newsletter" v-model="form.newsletter" />
        <label for="newsletter">Subscribe to the newsletter</label>
      </div>

      <!-- submit button -->
      <div class="form-item">
        <button class="w-full btn btn--primary">
          <font-awesome-icon icon="paper-plane" />
          Send Message
        </button>
      </div>
    </form>
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
  name: "ContactForm",
  data() {
    return {
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
        minLength: minLength(20),
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
    submit() {
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        this.$emit("update", {
          data: {
            name: this.form.name,
            email: this.form.email,
            message: this.form.message,
          },
          valid: !this.$v.form.$invalid,
        });
      } else {
        console.log("invalid form");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
