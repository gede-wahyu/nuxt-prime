<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  attr: {
    type: Object,
  },
});
</script>

<template>
  <div>
    <Button
      :icon="props.icon"
      severity="secondary"
      v-bind="props.attr"
      rounded
    />
  </div>
</template>
