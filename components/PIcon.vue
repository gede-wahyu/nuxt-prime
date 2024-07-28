<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div>
    <i :class="props.icon" />
  </div>
</template>
