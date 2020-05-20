<template>
  <v-content>
    <v-container fluid>
      <v-row>
        <v-col class="ml-4 mr-4" >
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    name: "ContentBook"
  }
</script>

<style scoped>

</style>
