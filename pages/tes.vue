<script setup>
import {
  palette,
  updatePrimaryPalette,
  $dt,
  updateSurfacePalette,
} from "@primevue/themes";

const primaryPicker = ref();
const colorPopover = ref();

const primaryPalette = computed(() => {
  const primaryPickerHex = `#${primaryPicker.value}`;
  const primaryPallet = palette(primaryPickerHex);
  return primaryPallet;
});

watch(primaryPalette, () => {
  updatePrimaryPalette(primaryPalette.value);
});

const toggleColorPopover = (event) => {
  colorPopover.value.toggle(event);
};

const changePrimary = (primary) => {
  const primaryPaletteLocal = palette(`{${primary}}`);
  updatePrimaryPalette(primaryPaletteLocal);
};

const changeSurface = (surface) => {
  const surfacePalette = palette(`{${surface}}`);
  updateSurfacePalette(surfacePalette);
};

const primaryOptions = [
  "emerald",
  "green",
  "lime",
  "red",
  "orange",
  "amber",
  "yellow",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
];

const surfaceOptions = ["slate", "gray", "zinc", "neutral", "stone"];
</script>

<template>
  <div class="default">
    <Button label="I'm a Button" @click="$router.push('/')" />

    <Button icon="pi pi-palette" @click="toggleColorPopover" />

    <ColorPicker v-model="primaryPicker" />

    <div class="rounded-md bg-primary-500 px-6 py-3">
      <span>This element's background should be primary</span>
    </div>

    <pre>{{ primaryPalette }}</pre>
  </div>

  <Popover ref="colorPopover">
    <div class="color-popover">
      <span class="label">Primary</span>
      <div class="primary-options">
        <div
          v-for="(item, index) in primaryOptions"
          :key="item"
          class="primary-item"
          :class="`bg-${item}-500 dark:bg-${item}-400`"
          @click="changePrimary(item)"
        ></div>
      </div>

      <Divider />

      <span class="label">Surface</span>
      <div class="surface-options">
        <div
          v-for="item in surfaceOptions"
          :key="item"
          class="surface-item"
          :class="`bg-${item}-500 dark:bg-${item}-400`"
          @click="changeSurface(item)"
        ></div>
      </div>
    </div>
  </Popover>
</template>

<style scoped>
.default {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.color-popover {
  display: flex;
  flex-direction: column;
}
.primary-options,
.surface-options {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 0.75rem;
}
.primary-item,
.surface-item {
  width: 1.125rem;
  height: 1.125rem;
  border-radius: 2rem;
}
.label {
  margin-bottom: 0.75rem;
  color: var(--p-surface-500);
  font-weight: 500;
}
.mode-dark .label {
  color: var(--p-surface-400);
}
</style>
