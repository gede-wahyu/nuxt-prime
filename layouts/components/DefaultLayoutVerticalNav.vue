<script setup>
import { VerticalNavLayout } from "@template";
import navItems from "~/navigations/vertical";
</script>

<template>
  <VerticalNavLayout :nav-items="navItems">
    <template v-slot:navbar>
      <div>Navbar</div>
    </template>

    <template #default>
      <!-- <ClientOnly> -->
      <slot />
      <!-- </ClientOnly> -->
    </template>

    <template v-slot:footer>
      <div>Footer</div>
    </template>
  </VerticalNavLayout>
</template>
