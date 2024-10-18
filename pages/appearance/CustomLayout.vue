<script setup>
import { useTemplateConfigStore } from "~/@template/stores";
import { useLayout } from "@template";

const configStore = useTemplateConfigStore();
const layout = useLayout();

const verticalNavStyleOpt = layout.verticalNav.getStyleOpt();
const verticalNavAnchorOpt = layout.verticalNav.getAnchorOpt();
const verticalNavUnpinnedStyleOpt = layout.verticalNav.getUnpinnedStyleOpt();
const verticalNavThemeOpt = layout.verticalNav.getThemeOpt();
const navbarStyleOpt = layout.navbar.getStyleOpt();
const navbarPositionOpt = layout.navbar.getPositionOpt();
const navbarBackgroundOpt = layout.navbar.getBackgroundOpt();
const contentWidthTypeOpt = layout.content.getWidthOpt();
const contentStyleOpt = layout.content.getStyleOpt();
const contentThemeOpt = layout.content.getThemeOpt();

const selectButtonOptions = {
  "option-label": "label",
  "option-value": "value",
};
</script>

<template>
  <div class="flex flex-col">
    <div>
      <div class="mb-5">
        <h2 class="text-heading-2">Vertical Navigation</h2>
        <span class="text-muted">
          Update vertical navigation or sidebar style
        </span>
      </div>

      <div>
        <div class="grid gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          <div class="col-span-1 flex flex-col gap-2">
            <label class="font-semibold">Style Type</label>
            <SelectButton
              v-model="configStore.verticalNavStyle"
              :options="verticalNavStyleOpt"
              v-bind="selectButtonOptions"
            />
          </div>

          <div class="col-span-1 flex flex-col gap-2">
            <label class="font-semibold">Anchor</label>
            <SelectButton
              v-model="configStore.verticalNavAnchor"
              :options="verticalNavAnchorOpt"
              v-bind="selectButtonOptions"
            />
          </div>

          <div class="col-span-1 flex flex-col gap-2">
            <label class="font-semibold">Unpinned Style</label>
            <SelectButton
              v-model="configStore.verticalNavUnpinnedStyle"
              :options="verticalNavUnpinnedStyleOpt"
              v-bind="selectButtonOptions"
            />
          </div>

          <div class="col-span-1 flex flex-col gap-2">
            <label class="font-semibold">Theme Color</label>
            <SelectButton
              v-model="configStore.verticalNavTheme"
              :options="verticalNavThemeOpt"
              v-bind="selectButtonOptions"
            />
          </div>
        </div>
      </div>
    </div>

    <Divider class="!my-10" />

    <div>
      <div class="mb-5">
        <h2 class="text-heading-2">Navigation Bar</h2>
        <span class="text-muted">Update navigation bar or topbar style</span>
      </div>

      <div>
        <div class="grid gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          <div class="col-span-1 flex flex-col gap-2">
            <label class="font-semibold">Style Type</label>
            <SelectButton
              v-model="configStore.navbarStyle"
              :options="navbarStyleOpt"
              v-bind="selectButtonOptions"
            />
          </div>

          <div class="col-span-1 flex flex-col gap-2">
            <label class="font-semibold">Position</label>
            <SelectButton
              v-model="configStore.navbarPosition"
              :options="navbarPositionOpt"
              v-bind="selectButtonOptions"
            />
          </div>

          <div class="col-span-1 flex flex-col gap-2">
            <label class="font-semibold">Background</label>
            <SelectButton
              v-model="configStore.navbarBackground"
              :options="navbarBackgroundOpt"
              v-bind="selectButtonOptions"
            />
          </div>
        </div>
      </div>
    </div>

    <Divider class="!my-10" />

    <div>
      <div class="mb-5">
        <h2 class="text-heading-2">Content Wrapper</h2>
        <span class="text-muted">Update content layout style</span>
      </div>

      <div>
        <div class="grid gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          <div class="col-span-1 flex flex-col gap-2">
            <label class="font-semibold">Width Type</label>
            <SelectButton
              v-model="configStore.contentWidth"
              :options="contentWidthTypeOpt"
              v-bind="selectButtonOptions"
            />
          </div>

          <div class="grid gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            <div class="col-span-1 flex flex-col gap-2">
              <label class="font-semibold">Style Type</label>
              <SelectButton
                v-model="configStore.contentStyle"
                :options="contentStyleOpt"
                v-bind="selectButtonOptions"
              />
            </div>
          </div>

          <div class="grid gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            <div class="col-span-1 flex flex-col gap-2">
              <label class="font-semibold">Theme Color</label>
              <SelectButton
                v-model="configStore.contentTheme"
                :options="contentThemeOpt"
                v-bind="selectButtonOptions"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
