<template>
  <v-app id="inspire">
    <Sidebar :drawer="drawer"/>
    <Header v-on:toggleSideBar="drawer = !drawer"/>
    <ContentBook/>
  </v-app>
</template>

<script>

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ContentBook from "./components/ContentBook";
export default {
  name: 'App',

  components: {
    ContentBook,
    Header,
    Sidebar
  },

  props: {
    source: String
  },

  mounted() {
    this.$store.dispatch('GET_DATA');
  },

  data: () => ({
    drawer: false,
  }),
};
</script>
