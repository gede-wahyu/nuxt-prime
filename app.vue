<template>
  <div class="app-wrapper">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>

  <teleport to="body">
    <NuxtLoadingIndicator color="var(--p-primary-500)" />
  </teleport>
</template>
