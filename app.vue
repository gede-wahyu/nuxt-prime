<script setup>
import {
  palette,
  updatePrimaryPalette,
  $dt,
  updateSurfacePalette,
} from "@primevue/themes";

const isColorSchemeDark = ref(false);
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

const toggleColorScheme = () => {
  const element = document.querySelector("html");
  if (isColorSchemeDark.value) element.classList.add("mode-dark");
  else element.classList.remove("mode-dark");
};

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
  <ClientOnly>
    <div class="default">
      <Button label="I'm a Button" />
      <ToggleSwitch
        v-model="isColorSchemeDark"
        @update:model-value="toggleColorScheme"
      />
      <Button icon="pi pi-palette" @click="toggleColorPopover" />
      <ColorPicker v-model="primaryPicker" />
      <pre>{{ primaryPalette }}</pre>
    </div>

    <Popover ref="colorPopover">
      <div class="color-popover">
        <span class="label">Primary</span>
        <div class="primary-options">
          <div
            v-for="(item, index) in primaryOptions"
            class="primary-item"
            @click="changePrimary(item)"
          ></div>
        </div>

        <Divider />

        <span class="label">Surface</span>
        <div class="surface-options">
          <div
            v-for="item in surfaceOptions"
            class="surface-item"
            @click="changeSurface(item)"
          ></div>
        </div>
      </div>
    </Popover>
  </ClientOnly>
</template>

<style>
html {
  font-size: 14px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
body {
  width: 100%;
  min-height: 100dvh;
  margin: 0;
  background-color: var(--p-surface-50);
}
.mode-dark body {
  background-color: var(--p-surface-900);
}
.default {
  width: 100%;
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
  background-color: var(--p-primary-500);
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
