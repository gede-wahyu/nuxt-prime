<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
  },
});
</script>

<template>
  <div style="line-height: 0">
    <i :class="props.icon" :style="`font-size: ${props.size}rem;`" />
  </div>
</template>
