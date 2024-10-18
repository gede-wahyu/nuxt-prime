<script setup>
import Coloring from "~/pages/appearance/Coloring.vue";
import PresetLayout from "~/pages/appearance/PresetLayout.vue";
import CustomLayout from "~/pages/appearance/CustomLayout.vue";

definePageMeta({
  middleware: [
    function (to) {
      if (to.fullPath === "/appearance")
        return navigateTo({ path: "/appearance", query: { tab: "coloring" } });
    },
  ],
});

const tabs = [
  {
    label: "Coloring",
    icon: "pi pi-palette",
    value: "coloring",
    panel: Coloring,
  },
  {
    label: "Preset",
    icon: "pi pi-sparkles",
    value: "preset",
    panel: PresetLayout,
  },
  {
    label: "Custom",
    icon: "pi pi-wrench",
    value: "custom",
    panel: CustomLayout,
  },
];

const route = useRoute();
const currTab = ref(route.query?.tab);
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
      <div class="mb-4 flex justify-end sm:hidden">
        <Select
          v-model="currTab"
          :options="tabs"
          option-label="value"
          option-value="value"
        />
      </div>

      <Tabs v-model:value="currTab">
        <TabList class="mb-3 !hidden sm:!flex">
          <Tab
            v-for="tab in tabs"
            :key="tab.value"
            :value="tab.value"
            @click="$router.replace({ query: { tab: tab.value } })"
          >
            <div class="flex items-center gap-2 px-2">
              <GIcon :icon="tab.icon" />
              <span>{{ tab.label }}</span>
            </div>
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel v-for="tab in tabs" :key="tab.value" :value="tab.value">
            <component :is="tab.panel" />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </template>
  </Card>
</template>
