<script setup>
const props = defineProps({
  tonal: {
    type: Boolean,
    default: false,
  },
  severity: {
    type: String,
  },
  initialState: {
    type: String,
  },
});
</script>

<template>
  <Button
    v-bind="$attrs"
    :severity="props.severity"
    :class="[
      `tonal-${!props.tonal ? 'none' : (props.severity ?? 'primary')}`,
      { 'initial-state-transparent': props.initialState === 'transparent' },
    ]"
  />
</template>

<style>
.tonal-primary {
  background: color-mix(in srgb, var(--p-primary-500), transparent 85%);
  border-color: transparent;
  color: var(--p-primary-500);
}
.tonal-primary.tonal-primary:hover {
  background: color-mix(in srgb, var(--p-primary-500), transparent 75%);
  border-color: transparent;
  color: var(--p-primary-500);
}

.tonal-success {
  background: color-mix(in srgb, var(--p-green-500), transparent 85%);
  border-color: transparent;
  color: var(--p-green-500);
}
.tonal-success.tonal-success:hover {
  background: color-mix(in srgb, var(--p-green-500), transparent 75%);
  border-color: transparent;
  color: var(--p-green-500);
}

.tonal-info {
  background: color-mix(in srgb, var(--p-sky-500), transparent 85%);
  border-color: transparent;
  color: var(--p-sky-500);
}
.tonal-info.tonal-info:hover {
  background: color-mix(in srgb, var(--p-sky-500), transparent 75%);
  border-color: transparent;
  color: var(--p-sky-500);
}

.tonal-warn {
  background: color-mix(in srgb, var(--p-orange-500), transparent 85%);
  border-color: transparent;
  color: var(--p-orange-500);
}
.tonal-warn.tonal-warn:hover {
  background: color-mix(in srgb, var(--p-orange-500), transparent 75%);
  border-color: transparent;
  color: var(--p-orange-500);
}

.tonal-help {
  background: color-mix(in srgb, var(--p-purple-500), transparent 85%);
  border-color: transparent;
  color: var(--p-purple-500);
}
.tonal-help.tonal-help:hover {
  background: color-mix(in srgb, var(--p-purple-500), transparent 75%);
  border-color: transparent;
  color: var(--p-purple-500);
}

.tonal-danger {
  background: color-mix(in srgb, var(--p-red-500), transparent 85%);
  border-color: transparent;
  color: var(--p-red-500);
}
.tonal-danger.tonal-danger:hover {
  background: color-mix(in srgb, var(--p-red-500), transparent 75%);
  border-color: transparent;
  color: var(--p-red-500);
}
.initial-state-transparent {
  background: transparent;
  color: var(--g-text-color);
}
</style>
