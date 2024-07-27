<script setup>
definePageMeta({
  alias: "/",
});
</script>

<template>
  <div>Dashboard</div>
  <Button label="Go to Tes" @click="$router.push('/tes')" />
</template>
