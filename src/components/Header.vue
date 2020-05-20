<template>
  <v-app-bar
      app
      color="indigo"
      dark
  >
    <v-app-bar-nav-icon @click.stop="clickBtnMenu"></v-app-bar-nav-icon>
    <v-toolbar-title>Elecrtonic Book</v-toolbar-title>
  </v-app-bar>
</template>

<script>
  export default {
    name: "Header",
    methods: {
      clickBtnMenu() {
        this.$emit('toggleSideBar');
      }
    }
  }
</script>

<style scoped>

</style>
