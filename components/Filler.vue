<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Cards",
  },
});
</script>

<template>
  <Card>
    <template #title>{{ props.title }}</template>
    <template #content>
      <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
        consequuntur error repudiandae numquam deserunt quisquam repellat libero
        asperiores earum nam nobis, culpa ratione quam perferendis esse,
        cupiditate neque quas!
      </p>
    </template>
  </Card>
</template>
