<script setup>
import { useTemplateConfigStore } from "@template/stores/template";
import { VerticalNav } from "@template";

const props = defineProps({
  navItems: {
    type: [Array],
    required: true,
  },
});

const templateConfigStore = useTemplateConfigStore();
</script>

<template>
  <div class="layout-wrapper" :class="templateConfigStore.layoutClasses">
    <div class="layout-vertical-nav">
      <VerticalNav :nav-items="props.navItems" />
    </div>

    <div class="layout-content-wrapper">
      <div class="layout-navbar bg-green-500">
        <slot name="navbar" />
      </div>

      <div class="layout-page-content bg-orange-500">
        <slot />
      </div>

      <div class="layout-footer bg-teal-500">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<style>
@import url("~/@template/styles/index.css");
</style>
