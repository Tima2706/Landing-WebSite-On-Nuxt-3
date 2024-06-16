<template>
  <div class="flex flex-col" style="min-height: 100vh;">
    <TheHeader/>
    <div class="main-page flex-grow">
      <NuxtPage/>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheHeader from "~/components/layouts/TheHeader.vue";
</script>