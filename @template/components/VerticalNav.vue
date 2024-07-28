<script setup>
import { VNodeRenderer } from "@template";
import PIcon from "~/components/PIcon.vue";
import { config } from "~/template.config";
import { useTemplateConfigStore } from "../stores/template";

const props = defineProps({
  navItems: {
    type: [Array],
    required: true,
  },
});

const configStore = useTemplateConfigStore();
</script>

<template>
  <!-- 👉 Header -->
  <div class="vertical-nav-header">
    <NuxtLink to="/">
      <div class="app-title">
        <div class="logo">
          <VNodeRenderer :nodes="config.app.logo" />
        </div>
        <div class="title">{{ config.app.title }}</div>
      </div>
    </NuxtLink>

    <component
      :is="PIcon"
      class="header-action"
      :class="!configStore.isVerticalNavUnpinned && 'hidden'"
      v-bind="config.icons.unpinned"
      @click="
        configStore.isVerticalNavUnpinned = !configStore.isVerticalNavUnpinned
      "
    />
    <component
      :is="PIcon"
      class="header-action"
      :class="configStore.isVerticalNavUnpinned && 'hidden'"
      v-bind="config.icons.pinned"
      @click="
        configStore.isVerticalNavUnpinned = !configStore.isVerticalNavUnpinned
      "
    />
    <component
      :is="PIcon"
      class="header-action xl:hidden"
      v-bind="config.icons.close"
    />
  </div>

  <!-- 👉 Fade -->
  <div class="vertical-nav-fade"></div>

  <!-- 👉 Nav Items -->
</template>

<style scoped>
.vertical-nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1.25rem;
  padding: 1rem 0 1rem 0;
}
.app-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.title {
  font-size: 1.75rem;
  font-weight: 600;
}
.header-action:hover {
  cursor: pointer;
}
</style>
