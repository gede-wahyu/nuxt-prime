<script setup>
import { useColor, useLayout } from "@template";
import { useTemplateConfigStore } from "~/@template/stores";

const configStore = useTemplateConfigStore();
const layout = useLayout();
const color = useColor();

const presetOpt = layout.layout.getPresetOpt();
const primaryOpt = color.primary.getPrimaryColorOpt();
const surfaceOpt = color.surface.getSurfaceColorOpt();
</script>

<template>
  <div class="mb-6">
    <h1 class="text-heading-1">Appearance Settings</h1>
    <span class="text-muted">
      Manage your app's appearance settings and preferences
    </span>
  </div>

  <Card>
    <template #content>
      <div class="flex flex-col">
        <div>
          <div class="mb-5">
            <h2 class="text-heading-2">Preset</h2>
            <span class="text-muted">
              Select a layout preset to personalize the look and arrangement of
              your dashboard.
            </span>
          </div>
          <div class="grid gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            <div v-for="item in presetOpt">
              <Button
                :label="`Preset ${item.label}`"
                @click="layout.layout.updatePreset(item.value)"
              />
            </div>
          </div>
        </div>

        <Divider class="!my-10" />

        <div>
          <div class="mb-5">
            <h2 class="text-heading-2">Theme</h2>
            <span class="text-muted">
              Customize the primary colors, surface tones, and overall theme
              mode for a cohesive visual experience.
            </span>
          </div>

          <div class="grid gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            <div class="col-span-1 flex flex-col gap-2">
              <label class="font-semibold">Primary</label>
              <ColorsetPicker
                v-model="configStore.appPrimaryColor"
                :options="primaryOpt"
                type="primary"
              />
            </div>

            <div class="col-span-1 flex flex-col gap-2">
              <label class="font-semibold">Surface</label>
              <ColorsetPicker
                v-model="configStore.appSurfaceColor"
                :options="surfaceOpt"
                type="surface"
              />
            </div>

            <div class="col-span-3 flex flex-col gap-2">
              <label class="font-semibold">Scheme</label>
              <div></div>
            </div>
          </div>
        </div>

        <Divider class="!my-10" />
      </div>
    </template>
  </Card>
</template>
