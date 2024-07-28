import { defineStore } from "pinia";
import { useMediaQuery } from "@vueuse/core";
import { localStoreRef } from "@template/utils";
import { config as userConfig } from "~/template.config";
import {
  injectionKeyIsVerticalNavHovered,
  localStorageKeyAppContentWidthType,
  localStorageKeyAppLayoutNavType,
  localStorageKeyFooterType,
  localStorageKeyIsNavbarBlur,
  localStorageKeyIsVerticalNavUnpinned,
  localStorageKeyNavbarType,
  localStorageKeyVerticalNavOnUnpinnedType,
} from "@template/utils/keys";

export const useTemplateConfigStore = defineStore("templateConfig", () => {
  const navbarType = localStoreRef(
    localStorageKeyNavbarType,
    userConfig.navbar.type,
  );

  const isNavbarBlur = localStoreRef(
    localStorageKeyIsNavbarBlur,
    userConfig.navbar.isBlur,
  );

  const footerType = localStoreRef(
    localStorageKeyFooterType,
    userConfig.footer.type,
  );

  const isVerticalNavUnpinned = localStoreRef(
    localStorageKeyIsVerticalNavUnpinned,
    userConfig.verticalNav.isVerticalNavUnpinned,
  );

  const verticalNavOnUnpinnedType = localStoreRef(
    localStorageKeyVerticalNavOnUnpinnedType,
    userConfig.verticalNav.onUnpinnedNavType,
  );

  const appContentWidthType = localStoreRef(
    localStorageKeyAppContentWidthType,
    userConfig.app.contentWidthType,
  );

  const appLayoutNavType = localStoreRef(
    localStorageKeyAppLayoutNavType,
    userConfig.app.layoutNavType,
  );

  const isXlScreen = computed(
    () =>
      useMediaQuery(`(min-width: ${userConfig.app.verticalNavBreakpoint}px)`)
        .value,
  );

  const layoutClasses = computed(() => {
    return [
      `layout-nav-type-${appLayoutNavType.value}`,
      `layout-navbar-${navbarType.value}`,
      `layout-footer-${footerType.value}`,
      {
        [`vertical-nav-${verticalNavOnUnpinnedType.value}`]:
          isXlScreen.value && isVerticalNavUnpinned.value,
      },
    ];
  });

  const isVerticalNavIconHovered = (isVerticalNavHovered = null) => {
    const isVerticalNavHoveredLocal =
      isVerticalNavHovered ||
      inject(injectionKeyIsVerticalNavHovered) ||
      ref(false);

    return computed(
      () =>
        isVerticalNavHoveredLocal.value &&
        isXlScreen.value &&
        isVerticalNavUnpinned.value &&
        verticalNavOnUnpinnedType.value,
    );
  };

  return {
    navbarType,
    isNavbarBlur,
    footerType,
    isVerticalNavUnpinned,
    verticalNavOnUnpinnedType,
    appContentWidthType,
    appLayoutNavType,
    isXlScreen,
    layoutClasses,
    isVerticalNavIconHovered,
  };
});
