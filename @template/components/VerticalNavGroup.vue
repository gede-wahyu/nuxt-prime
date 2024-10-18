<script setup>
import { config } from "~/template.config";
import { useTemplateConfigStore } from "@template/stores";
import { VerticalNavLink, TransitionWipe, VerticalNavGroup } from "@template";
import { hasActiveChild } from "@template/utils";
import { injectionKeyIsVerticalNavHovered } from "@template/utils/keys";
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

const route = useRoute();
const configStore = useTemplateConfigStore();
const shallHideTitleAndBadge = configStore.isVerticalNavIconAndNotHovered();
const isVerticalNavHovered = inject(
  injectionKeyIsVerticalNavHovered,
  ref(false),
);
const isGroupActive = ref(false);
const isGroupOpen = ref(false);

const dynamicIndentation = computed(() => {
  if (props.level >= 1) {
    return {
      marginLeft: `${props.level * 1}rem`,
    };
  }
});

const collapseChildren = (children) => {
  children.forEach((child) => {
    if ("children" in child) collapseChildren(child.children);

    configStore.openedVerticalNavGroup =
      configStore.openedVerticalNavGroup.filter(
        (group) => group !== child.title,
      );
  });
};

const isAnyChildOpen = (children) => {
  return children.some((child) => {
    let result = configStore.openedVerticalNavGroup.includes(child.title);
    if ("children" in child) result = isAnyChildOpen(child.children) || result;

    return result;
  });
};

watch(
  () => route.name,
  () => {
    isGroupActive.value = hasActiveChild(props.item);
    isGroupOpen.value =
      isGroupActive.value &&
      !configStore.isVerticalNavIconAndNotHovered(isVerticalNavHovered).value;
  },
  { immediate: true },
);

watch(
  isGroupOpen,
  (val) => {
    const groupIndex = configStore.openedVerticalNavGroup.indexOf(
      props.item.title,
    );

    if (val && groupIndex === -1) {
      configStore.openedVerticalNavGroup.push(props.item.title);
    } else if (!val && groupIndex !== -1) {
      configStore.openedVerticalNavGroup.splice(groupIndex, 1);
      collapseChildren(props.item.children);
    }
  },
  { immediate: true },
);

watch(
  () => configStore.openedVerticalNavGroup,
  (val) => {
    const lastOpenedGroup = val.at(-1);

    if (lastOpenedGroup === props.item.title) return;

    const isActive = hasActiveChild(props.item);

    if (isActive) return;
    // console.log(props.item);

    if (isAnyChildOpen(props.item.children)) return;

    isGroupOpen.value = isActive;
    isGroupActive.value = isActive;
  },
  { deep: true },
);

watch(
  configStore.isVerticalNavIconAndNotHovered(isVerticalNavHovered),
  (val) => {
    isGroupOpen.value = val ? false : isGroupActive.value;
  },
);
</script>

<template>
  <li class="nav-item-group" :class="{ active: hasActiveChild(props.item) }">
    <div class="nav-item-group--label" @click="isGroupOpen = !isGroupOpen">
      <component
        :is="config.app.iconRenderer"
        class="nav-item-group--icon"
        :style="dynamicIndentation"
        v-bind="item.icon || config.verticalNav.defaultNavItemIconProps"
      />

      <transition-group name="transition-nav-group">
        <span
          v-show="!shallHideTitleAndBadge"
          key="badge"
          class="nav-item-group--title"
        >
          {{ item.title }}
        </span>

        <component
          :is="Badge"
          v-if="item.badge"
          v-show="!shallHideTitleAndBadge"
          key="title"
          class="nav-item-group--badge"
          v-bind="{
            value: item.badge.value,
            severity: item.badge.severity || 'danger',
          }"
        />

        <component
          :is="config.app.iconRenderer"
          v-show="!shallHideTitleAndBadge"
          class="nav-item-group--chevron"
          key="chevron"
          v-bind="config.icons.chevronRight"
        />
      </transition-group>
    </div>

    <TransitionWipe>
      <ul v-show="isGroupOpen" class="nav-item-group--children">
        <component
          v-for="child in item.children"
          :is="'children' in child ? VerticalNavGroup : VerticalNavLink"
          :key="child"
          :item="child"
          :level="props.level + 1"
        />
      </ul>
    </TransitionWipe>
  </li>
</template>

<style>
.nav-item-group .nav-item-group--label {
  padding: 0 1rem;
  margin: 0 1rem 0.5rem 1rem;
  height: 2.7rem;
  display: flex;
  align-items: center;
  border-radius: 0.4rem;
  font-weight: 500;
  cursor: pointer;
}
.nav-item-group .nav-item-group--label:hover,
.nav-item-group.active > .nav-item-group--label {
  background: color-mix(in srgb, var(--p-surface-700), transparent 93%);
}
.mode-dark .nav-item-group .nav-item-group--label:hover,
.mode-dark .nav-item-group.active > .nav-item-group--label {
  background: color-mix(in srgb, var(--p-surface-700), transparent 70%);
}

.nav-item-group--icon {
  margin-right: 0.7rem;
}
.nav-item-group--title {
  margin-right: auto;
  text-wrap: nowrap;
}
.nav-item-group--badge {
  margin-right: 0.7rem;
}

.transition-nav-group-enter-active,
.transition-nav-group-leave-active {
  transition:
    opacity 0.1s ease-in-out,
    transform 0.12s ease-in-out;
}
.transition-nav-group-enter-from,
.transition-nav-group-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}
</style>
