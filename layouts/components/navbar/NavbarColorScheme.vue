<script setup>
import { useTemplateConfig } from "@template";

const colorSchemeMenu = ref();
const templateConfig = useTemplateConfig();

const colorSchemeMenuItems = ref([
  {
    label: "System",
    icon: "pi pi-desktop",
    value: "system",
    command: () => {
      templateConfig.updateColorScheme("system");
    },
  },
  {
    label: "Light",
    icon: "pi pi-sun",
    value: "light",
    command: () => {
      templateConfig.updateColorScheme("light");
    },
  },
  {
    label: "Dark",
    icon: "pi pi-moon",
    value: "dark",
    command: () => {
      templateConfig.updateColorScheme("dark");
    },
  },
]);

const toggleColorSchemeMenu = (event) => {
  colorSchemeMenu.value.toggle(event);
};

const resolveColorSchemeIcon = () => {
  const findColorSchemeMenuItem = (item) =>
    templateConfig.isColorSchemeActive(item.label.toLowerCase());
  const currentColorScheme = colorSchemeMenuItems.value.find(
    findColorSchemeMenuItem,
  );

  return currentColorScheme.icon;
};
</script>

<template>
  <Button
    :icon="resolveColorSchemeIcon()"
    severity="secondary"
    @click="toggleColorSchemeMenu"
  />

  <Menu
    ref="colorSchemeMenu"
    :model="colorSchemeMenuItems"
    popup
    append-to="#teleports"
    class="w-4"
    style="margin-top: 0.75rem"
  >
    <template #item="{ item, props }">
      <div
        v-ripple
        class="dwdwd flex items-center"
        :class="{
          'color-scheme-item-active': templateConfig.isColorSchemeActive(
            item.value,
          ),
        }"
        style="gap: 0.75rem"
        v-bind="props.action"
      >
        <span :class="item.icon" />
        <span>{{ item.label }}</span>
      </div>
    </template>
  </Menu>
</template>

<style scoped>
.color-scheme-item-active {
  color: var(--p-primary-500);
  background-color: color-mix(in srgb, var(--p-primary-500), transparent 85%);
  border-radius: var(--p-menu-item-border-radius);
}
.mode-dark .color-scheme-item-active {
  background-color: color-mix(in srgb, var(--p-primary-500), transparent 90%);
}
</style>
