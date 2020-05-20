<template>
  <v-card
      class=""
      max-width="300"
  >
    <v-img
        class="white--text align-end"
        height="200px"
        :src="image || 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'"
    >
      <v-card-title>{{ title || 'Add title'}}</v-card-title>
    </v-img>
  </v-card>
</template>

<script>
  export default {
    name: "Card",
    props: [
      'title',
      'image'
    ]
  }
</script>

<style scoped>

</style>
