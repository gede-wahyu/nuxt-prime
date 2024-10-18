<script setup>
const beforeEnter = (el) => {
  el.style.height = "0";
};

const enter = (el, done) => {
  el.style.transition = "height 0.3s ease";
  requestAnimationFrame(() => {
    el.style.height = el.scrollHeight + "px";
  });
  el.addEventListener("transitionend", () => {
    el.style.height = ""; // Reset height after transition ends
    done();
  });
};

const beforeLeave = (el) => {
  el.style.height = el.scrollHeight + "px";
};

const leave = (el, done) => {
  el.style.transition = "height 0.3s ease";
  requestAnimationFrame(() => {
    el.style.height = "0";
  });
  el.addEventListener("transitionend", done);
};
</script>

<template>
  <transition
    name="wipe"
    @before-enter="beforeEnter"
    @enter="enter"
    @before-leave="beforeLeave"
    @leave="leave"
  >
    <slot />
  </transition>
</template>

<style scoped>
.wipe-enter-active,
.wipe-leave-active {
  overflow: hidden;
  transition: height 0.3s ease;
}
.wipe-enter,
.wipe-leave-to {
  height: 0;
}
</style>
