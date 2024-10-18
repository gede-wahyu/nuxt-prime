<script setup>
import { useColor } from "@template";

const props = defineProps({
  modelValue: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    validator(value) {
      const allowedTypes = ["primary", "surface"];
      return allowedTypes.includes(value);
    },
  },
  options: {
    type: [Array, Object],
  },
  cols: {
    type: Number,
    default: 9,
  },
});

const emit = defineEmits(["update:modelValue"]);

const color = useColor();

const resolveActiveChecker = (val) => {
  if (props.type === "primary") return color.primary.isPrimaryColor(val);
  else if (props.type === "surface") return color.surface.isSurfaceColor(val);
  else return;
};
</script>

<template>
  <div
    class="grid gap-3"
    :style="{
      gridTemplateColumns: `repeat(${props.cols}, min-content)`,
    }"
  >
    <div
      v-for="item in props.options"
      :key="item"
      class="size-6 cursor-pointer rounded-md"
      :class="[
        `bg-${item.value}-500 dark:bg-${item.value}-400`,
        {
          'ring-1 ring-primary-500 ring-offset-2 dark:ring-primary-400 dark:ring-offset-surface-800':
            resolveActiveChecker(item.value),
        },
      ]"
      v-tooltip.bottom="item.label"
      @click="emit('update:modelValue', item.value)"
    />
  </div>
</template>
