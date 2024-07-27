<script setup>
const DefaultLayoutVerticalNav = defineAsyncComponent(() =>
  import("~/layouts/components/DefaultLayoutVerticalNav.vue")
);
</script>

<template>
  <component :is="DefaultLayoutVerticalNav">
    <slot />
  </component>
</template>
