<script setup>
import { VerticalNavLayout } from "@template";
</script>

<template>
  <VerticalNavLayout>
    <template v-slot:navbar>
      <div>Navbar</div>
    </template>

    <template #default>
      <ClientOnly>
        <slot />
      </ClientOnly>
    </template>

    <template v-slot:footer>
      <div>Footer</div>
    </template>
  </VerticalNavLayout>
</template>
