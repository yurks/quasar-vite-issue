<script setup lang="ts">
const title = import.meta.env.VITE_TITLE
</script>
<template>
  <q-toolbar class="bg-grey text-white">
    <q-toolbar-title>{{ title }}</q-toolbar-title>
  </q-toolbar>
</template>
