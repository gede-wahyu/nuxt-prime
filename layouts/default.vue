<script setup>
const DefaultLayoutVerticalNav = defineAsyncComponent(
  () => import("~/layouts/components/DefaultLayoutVerticalNav.vue"),
);

const resolveDefaultLayout = () => {
  return DefaultLayoutVerticalNav;
};
</script>

<template>
  <component :is="resolveDefaultLayout()">
    <slot />
  </component>
</template>
