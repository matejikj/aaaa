<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <v-app>
    <v-app-bar flat>
      <v-app-bar-title>
        <v-icon icon="mdi-circle-slice-6" />

        Essentials Preset
      </v-app-bar-title>
    </v-app-bar>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped>
</style>
