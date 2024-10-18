<script setup>
import { config } from "~/template.config";
import { useTemplateConfigStore } from "@template/stores";
import { VNodeRenderer, useLayout } from "@template";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import {
  VerticalNavHeading,
  VerticalNavGroup,
  VerticalNavLink,
} from "@template";
import GIconBtn from "~/components/GIconBtn.vue";
import { injectionKeyIsVerticalNavHovered } from "@template/utils/keys";

const props = defineProps({
  navItems: {
    type: [Array],
    required: true,
  },
});

const configStore = useTemplateConfigStore();
const layout = useLayout();

const refVerticalNav = ref();
const isHovered = useElementHover(refVerticalNav);
const hideTitleAndAction =
  configStore.isVerticalNavIconAndNotHovered(isHovered);

const resolveNavItemComponent = (item) => {
  if ("heading" in item) return VerticalNavHeading;
  if ("children" in item) return VerticalNavGroup;

  return VerticalNavLink;
};

provide(injectionKeyIsVerticalNavHovered, isHovered);

//
</script>

<template>
  <div
    class="layout-vertical-nav-wrapper"
    :class="[{ 'mode-dark': layout.verticalNav.isThemeMixed() }]"
  >
    <div
      ref="refVerticalNav"
      class="layout-vertical-nav"
      :class="[{ 'vertical-nav--icon-type-hovered': !hideTitleAndAction }]"
    >
      <!-- 👉 Header -->
      <div class="vertical-nav-header">
        <NuxtLink to="/">
          <div class="app-title">
            <div class="logo">
              <VNodeRenderer :nodes="config.app.logo" />
            </div>

            <transition name="transition-nav-header">
              <div v-show="!hideTitleAndAction" class="title">
                {{ config.app.title }}
              </div>
            </transition>
          </div>
        </NuxtLink>

        <div class="header-action">
          <component
            :is="GIconBtn"
            v-show="!hideTitleAndAction"
            class="header-action-item hidden"
            :class="configStore.isVerticalNavUnpinned && 'xl:block'"
            v-bind="config.icons.unpinned"
            @click="layout.verticalNav.toggleAnchor()"
          />
          <component
            :is="GIconBtn"
            v-show="!hideTitleAndAction"
            class="header-action-item hidden"
            :class="!configStore.isVerticalNavUnpinned && 'xl:block'"
            v-bind="config.icons.pinned"
            @click="layout.verticalNav.toggleAnchor()"
          />
          <component
            :is="GIconBtn"
            class="header-action-item xl:hidden"
            v-bind="config.icons.close"
            @click="$emit('onClickCloseButton')"
          />
        </div>
      </div>

      <!-- 👉 Fade -->
      <div class="vertical-nav-fade">
        <div class="more-item"></div>
      </div>

      <!-- 👉 Nav Items -->
      <PerfectScrollbar
        tag="ul"
        class="nav-items"
        :options="{ wheelPropagation: false }"
      >
        <component
          :is="resolveNavItemComponent(item)"
          v-for="item in [...props.navItems]"
          :key="item"
          :item="item"
        />
      </PerfectScrollbar>
    </div>
  </div>
</template>

<style>
.vertical-nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1.25rem;
  padding: 1rem 0 1rem 0;
}
.vertical-nav-header a {
  display: flex;
  height: 2.5rem;
  overflow: hidden;
  padding: 0 0.4rem 0 0.1rem;
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
.nav-items {
  height: 100%;
  padding: 0.5rem 0;
}
.ps__thumb-y {
  inline-size: 0.3rem;
  inset-inline-end: 0.15rem;
  opacity: 0.5;
}
.mode-dark .ps__thumb-y {
  opacity: 0.3;
}
.ps__rail-y {
  z-index: 1;
  background: transparent !important;
  inline-size: 0.5rem;
  inset-inline-end: 0.125rem;
  inset-inline-start: unset;
}
.ps__rail-y.ps--clicking .ps__thumb-y,
.ps__rail-y:focus > .ps__thumb-y,
.ps__rail-y:hover > .ps__thumb-y {
  inline-size: 0.375rem;
}

.transition-nav-header-enter-active,
.transition-nav-header-leave-active {
  transition:
    opacity 0.1s ease-in-out,
    transform 0.12s ease-in-out;
}

.transition-nav-header-enter-from,
.transition-nav-header-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}
</style>
