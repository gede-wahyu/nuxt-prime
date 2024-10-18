<script setup>
definePageMeta({
  alias: "/",
});

const email = ref("owner@lori.com");
const password = ref("password*123");
const login = async () => {
  try {
    await $fetch("https://backendlori.omahit.online/api/auth/login", {
      method: "POST",
      body: {
        email: email.value,
        password: password.value,
      },
      credentials: "include",
    });
  } catch (e) {
    console.log(e);
  }
};
</script>

<template>
  <Card>
    <template #title>Simple Card</template>
    <template #content>
      <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
        consequuntur error repudiandae numquam deserunt quisquam repellat libero
        asperiores earum nam nobis, culpa ratione quam perferendis esse,
        cupiditate neque quas!
      </p>
    </template>
    <template #footer>
      <div class="mt-1 flex justify-end gap-4">
        <div>
          <Button
            label="Cancel"
            severity="secondary"
            outlined
            class="w-full"
            @click="$router.push({ name: 'projects-projects-1' })"
          />
        </div>
        <div>
          <Button
            label="Go to Tes"
            class="w-full"
            @click="$router.push('/tes')"
          />
        </div>
      </div>
    </template>
  </Card>

  <Card>
    <template #content>
      <div>
        <form @submit.prevent="login">
          <InputText v-model="email" />
          <InputText v-model="password" />
          <Button label="Login" type="submit" />
        </form>
      </div>
    </template>
  </Card>

  <div class="mt-6 bg-violet-500/50 px-6 py-3">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quaerat!
  </div>
</template>
