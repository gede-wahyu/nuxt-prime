<template>
  <div class="layout-wrapper">
    <div class="layout-vertical-nav">Vertical Nav</div>

    <div class="layout-content-wrapper">
      <div class="layout-navbar">
        <slot name="navbar" />
      </div>

      <div class="layout-page-content">
        <slot />
      </div>

      <div class="layout-footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<style>
@import url("~/@template/styles/index.css");
</style>
