<template>
  <div class="text-center card">
    <div class="icon-wrapper">
      <font-awesome-icon class="mb-6 text-5xl text-brandcolor" :icon="icon" />
    </div>
    <h2 class="mb-6">{{ title }}</h2>
    <p>{{ content }}</p>
  </div>
</template>
<script>
export default {
  name: "ContactInfoItem",
  data() {
    return {};
  },
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  computed: {},
  methods: {},
};
</script>
