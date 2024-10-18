<script setup>
import { config } from "~/template.config";
import { useTemplateConfigStore } from "@template/stores";
import Badge from "primevue/badge";

const props = defineProps({
  item: {
    type: [Object],
    required: true,
  },
  level: {
    type: Number,
    default: 0,
  },
});

const configStore = useTemplateConfigStore();
const shallHideTitleAndBadge = configStore.isVerticalNavIconAndNotHovered();

const dynamicIndentation = computed(() => {
  if (props.level >= 1) {
    return {
      marginLeft: `${props.level * 1}rem`,
    };
  }
});
</script>

<template>
  <li class="nav-item-link">
    <NuxtLink :to="{ name: props.item.to }">
      <component
        :is="config.app.iconRenderer"
        class="nav-item-link--icon"
        :style="dynamicIndentation"
        v-bind="item.icon || config.verticalNav.defaultNavItemIconProps"
      />

      <transition-group name="transition-nav-link">
        <span
          v-show="!shallHideTitleAndBadge"
          key="badge"
          class="nav-item-link--title"
        >
          {{ item.title }}
        </span>

        <component
          :is="Badge"
          v-if="item.badge"
          v-show="!shallHideTitleAndBadge"
          key="title"
          class="nav-item-link--badge"
          v-bind="{
            value: item.badge.value,
            severity: item.badge.severity || 'danger',
          }"
        />
      </transition-group>
    </NuxtLink>
  </li>
</template>

<style>
.nav-item-link a {
  padding: 0 1rem;
  margin: 0 1rem 0.5rem 1rem;
  height: 2.7rem;
  display: flex;
  align-items: center;
  border-radius: 0.4rem;
  font-weight: 500;
}
.nav-item-link a:hover:not(.router-link-active.router-link-exact-active) {
  background: color-mix(in srgb, var(--p-surface-700), transparent 93%);
}
.mode-dark
  .nav-item-link
  a:hover:not(.router-link-active.router-link-exact-active) {
  background: color-mix(in srgb, var(--p-surface-700), transparent 70%);
}
.nav-item-link a.router-link-active.router-link-exact-active {
  background: linear-gradient(
    160deg,
    var(--p-primary-500),
    color-mix(in srgb, var(--p-primary-500), transparent 30%)
  );
  box-shadow: 0 2px 6px
    color-mix(in srgb, var(--p-primary-500), transparent 70%);
  color: var(--p-primary-contrast-color);
}
.nav-item-link--title {
  margin-right: auto;
  text-wrap: nowrap;
}
.nav-item-link--icon {
  margin-right: 0.7rem;
}
.transition-nav-link-enter-active,
.transition-nav-link-leave-active {
  transition:
    opacity 0.1s ease-in-out,
    transform 0.12s ease-in-out;
}

.transition-nav-link-enter-from,
.transition-nav-link-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}
</style>
