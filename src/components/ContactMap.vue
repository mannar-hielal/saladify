<template>
  <div class="card">
    <GmapMap :center="center" :zoom="12" style="width: 100%; height: 100%" />
  </div>
</template>
<script>
export default {
  name: "ContactMap",
  data() {
    return {
      center: { lat: 46.94457307069113, lng: 7.474266000592595 },
    };
  },
  computed: {},
  methods: {},
};
</script>
