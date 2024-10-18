<script setup>
import NavbarProfile from "~/layouts/components/navbar/NavbarProfile.vue";
import NavbarNotifications from "~/layouts/components/navbar/NavbarNotifications.vue";
import NavbarQuickAccess from "~/layouts/components/navbar/NavbarQuickAccess.vue";
import NavbarColorScheme from "~/layouts/components/navbar/NavbarColorScheme.vue";

const props = defineProps({
  verticalNavLayoutAction: {
    type: Function,
    required: true,
  },
  shouldRenderBars: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div class="navbar">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <transition name="transition-bars">
          <GIconBtn
            v-if="props.shouldRenderBars"
            icon="pi pi-bars"
            @click="props.verticalNavLayoutAction()"
          />
        </transition>

        <!-- <div>
          <span class="sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden"
            >xs</span
          >
          <span
            class="hidden sm:inline md:hidden lg:hidden xl:hidden 2xl:hidden"
            >sm</span
          >
          <span
            class="hidden sm:hidden md:inline lg:hidden xl:hidden 2xl:hidden"
            >md</span
          >
          <span
            class="hidden sm:hidden md:hidden lg:inline xl:hidden 2xl:hidden"
            >lg</span
          >
          <span
            class="hidden sm:hidden md:hidden lg:hidden xl:inline 2xl:hidden"
            >xl</span
          >
          <span
            class="hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:inline"
            >2xl</span
          >
        </div> -->
      </div>

      <div class="flex items-center gap-2 sm:gap-4">
        <NavbarColorScheme />

        <NavbarQuickAccess />

        <NavbarNotifications />

        <NavbarProfile />
      </div>
    </div>
  </div>
</template>

<style>
.transition-bars-enter-active,
.transition-bars-leave-active {
  transition: opacity 0.1s ease-in-out;
}

.transition-bars-enter-from,
.transition-bars-leave-to {
  opacity: 0;
}
</style>
