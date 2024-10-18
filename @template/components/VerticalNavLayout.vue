<script setup>
import { useTemplateConfigStore } from "@template/stores";
import { VerticalNav, useLayout } from "@template";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";

const props = defineProps({
  navItems: {
    type: [Array],
    required: true,
  },
});

const route = useRoute();
const layout = useLayout();
const configStore = useTemplateConfigStore();

const verticalNavRef = ref();
const shouldRenderActionElement = computed(() => {
  const isXL = configStore.isXlScreen;
  const isUnpinned = configStore.isVerticalNavUnpinned;
  const isTypeHidden = configStore.isVerticalNavTypeHidden;

  return isXL ? isUnpinned && isTypeHidden : true;
});

const verticalNavLayoutAction = (val = true) => {
  layout.verticalNav.updateIsHiddenActive(val);
};

onClickOutside(verticalNavRef, () => {
  verticalNavLayoutAction(false);
});

watch(
  () => route.name,
  () => {
    verticalNavLayoutAction(false);
  },
);
</script>

<template>
  <div class="layout-wrapper" :class="[...configStore.layoutClasses]">
    <VerticalNav
      ref="verticalNavRef"
      :nav-items="props.navItems"
      @on-click-close-button="verticalNavLayoutAction(false)"
    />
    <component
      :is="layout.content.isStyleCard() ? PerfectScrollbar : 'div'"
      class="layout-content-wrapper"
    >
      <div class="layout-navbar">
        <slot
          name="navbar"
          :verticalNavLayoutAction="verticalNavLayoutAction"
          :shouldRenderActionElement="shouldRenderActionElement"
        />
      </div>

      <div class="layout-page-content">
        <slot />
      </div>

      <div class="layout-footer">
        <slot name="footer" />
      </div>
    </component>
  </div>
</template>
