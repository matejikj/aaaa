<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <v-app>
    <v-app-bar flat>
      <RouterLink to="/" custom v-slot="{ navigate }">
        <v-btn
          class="mx-4 white--text"
          @click="navigate"
          role="link"
          elevation="2"
          x-large
          color="blue darken-1"
        >
          CSV parser
        </v-btn>
      </RouterLink>
      <RouterLink to="/visualisation" custom v-slot="{ navigate }">
        <v-btn
          class="mx-4 white--text"
          @click="navigate"
          role="link"
          elevation="2"
          x-large
          color="blue darken-1"
        >
          Visualisation setup
        </v-btn>
      </RouterLink>
    </v-app-bar>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped>
.navigation-link {
  font-size: 2em;
}
</style>
