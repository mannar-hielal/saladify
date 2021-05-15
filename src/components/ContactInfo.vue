<template>
  <div>
    <contact-info-item
      v-for="info in contactInfoItems"
      :key="info.id"
      :icon="info.icon"
      :title="info.title"
      :content="info.content"
    ></contact-info-item>
  </div>
</template>
<script>
import ContactInfoItem from "./ContactInfoItem.vue";

export default {
  name: "ContactInfo",
  components: {
    ContactInfoItem,
  },
  data() {
    return {
      contactInfoItems: [
        {
          icon: "map-marker-alt",
          title: "Find Us",
          content: "Bahnhofstrasse 8, 3011 Bern",
        },
        {
          icon: "phone-alt",
          title: "Make a Call",
          content: "+41 076 000 00 00",
        },
        {
          icon: "envelope",
          title: "Send Email",
          content: "email@email.com",
        },
      ],
    };
  },
  computed: {},
  methods: {},
};
</script>
