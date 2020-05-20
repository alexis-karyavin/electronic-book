<template>
  <div class="home">
    <h1>Home Page</h1>
    <Card title="Глава 1. Химические элементы. Атомы и молекулы. Изотопы"/>
    {{DATA}}
  </div>
</template>

<script>
  import Card from "../components/Card";
  import {mapGetters} from 'vuex';
export default {
  name: 'Home',
  components: {
    Card
  },
  computed: {
    ...mapGetters(['DATA'])
  }

}
</script>
