<script setup>
import { useTemplateConfigStore } from "@template/stores";
import { config } from "~/template.config";

const props = defineProps({
  item: {
    type: [Object],
    required: true,
  },
});

const configStore = useTemplateConfigStore();
const shallRenderIcon = configStore.isVerticalNavIconAndNotHovered();
</script>

<template>
  <li class="nav-item-heading">
    <div class="nav-item-heading--wrapper">
      <transition name="transition-nav-heading" mode="out-in">
        <component
          :is="shallRenderIcon ? config.app.iconRenderer : 'span'"
          :class="
            shallRenderIcon
              ? 'nav-item-heading--placeholder-icon'
              : 'nav-item-heading--text'
          "
          v-bind="config.icons.titlePlaceholder"
        >
          {{ !shallRenderIcon ? props.item?.heading : null }}
        </component>
      </transition>
    </div>
  </li>
</template>

<style>
.nav-item-heading {
  height: 1.5rem;
  margin: 1.5rem 0.5rem 0.7rem 0.5rem;
  padding: 0 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--p-surface-500);
}
.mode-dark .nav-item-heading {
  color: var(--p-surface-400);
}
.nav-item-heading--placeholder-icon {
  display: flex;
  justify-content: start;
  padding-left: 0.5rem;
}

.transition-nav-heading-enter-active,
.transition-nav-heading-leave-active {
  transition:
    opacity 0.1s ease-in-out,
    transform 0.1s ease-in-out;
}

.transition-nav-heading-enter-from,
.transition-nav-heading-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
</style>
