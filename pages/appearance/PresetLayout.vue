<script setup>
import { useTemplateConfigStore } from "@template/stores";
import { useLayout } from "@template";

const configStore = useTemplateConfigStore();
const layout = useLayout();

const appPresetOpt = [
  { label: "Preset 1", value: "preset-1" },
  { label: "Preset 2", value: "preset-2" },
  { label: "Preset 3", value: "preset-3" },
];

const selectButtonOptions = {
  "option-label": "label",
  "option-value": "value",
};
</script>

<template>
  <div class="flex flex-col">
    <div>
      <div class="mb-5">
        <h2 class="text-heading-2">Preset</h2>
        <span class="text-muted"> Choose your preference preset to style </span>
      </div>

      <div>
        <div class="grid gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          <div class="col-span-1 flex flex-col gap-2">
            <label class="font-semibold">Preset</label>
            <!-- <SelectButton
              v-model="configStore.appPreset"
              :options="appPresetOpt"
              v-bind="selectButtonOptions"
            /> -->
            <div class="flex gap-2">
              <GButton
                v-for="item in appPresetOpt"
                :label="item.label"
                tonal
                @click="layout.updatePreset(item.value)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
