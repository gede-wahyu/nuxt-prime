<script setup>
import { VerticalNavLayout } from "@template";
import navItems from "~/navigations/vertical";
import Navbar from "~/layouts/components/navbar/Navbar.vue";
import Footer from "~/layouts/components/Footer.vue";
</script>

<template>
  <VerticalNavLayout :nav-items="navItems">
    <template
      v-slot:navbar="{ shouldRenderActionElement, verticalNavLayoutAction }"
    >
      <Navbar
        :should-render-bars="shouldRenderActionElement"
        :vertical-nav-layout-action="verticalNavLayoutAction"
      />
    </template>

    <template #default>
      <slot />
    </template>

    <template v-slot:footer>
      <Footer />
    </template>
  </VerticalNavLayout>
</template>
