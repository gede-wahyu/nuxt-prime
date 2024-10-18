import { defineStore } from "pinia";
import { useMediaQuery } from "@vueuse/core";
import { config as userConfig } from "~/template.config";
import { VerticalNavEnums } from "../utils/enums";
import {
  localStoreRef,
  updateColorScheme,
  updatePrimePrimary,
  updatePrimeSurface,
} from "../utils";
import {
  injectionKeyIsVerticalNavHovered,
  localStorageKeyAppLayoutNavType,
  localStorageKeyAppPreset,
  localStorageKeyAppPrimaryColor,
  localStorageKeyAppSurfaceColor,
  localStorageKeyAppColorScheme,
  localStorageKeyContentStyle,
  localStorageKeyContentTheme,
  localStorageKeyContentWidth,
  localStorageKeyNavbarBackground,
  localStorageKeyNavbarPosition,
  localStorageKeyNavbarStyle,
  localStorageKeyVerticalNavAnchor,
  localStorageKeyVerticalNavStyle,
  localStorageKeyVerticalNavTheme,
  localStorageKeyVerticalNavUnpinnedStyle,
} from "../utils/keys";

export const useTemplateConfigStore = defineStore("templateConfig", () => {
  // 👉 Vertical Nav
  const verticalNavStyle = localStoreRef(
    localStorageKeyVerticalNavStyle,
    userConfig.verticalNav.style,
  );

  const verticalNavAnchor = localStoreRef(
    localStorageKeyVerticalNavAnchor,
    userConfig.verticalNav.anchor,
  );

  const verticalNavUnpinnedStyle = localStoreRef(
    localStorageKeyVerticalNavUnpinnedStyle,
    userConfig.verticalNav.unpinnedStyle,
  );

  const verticalNavTheme = localStoreRef(
    localStorageKeyVerticalNavTheme,
    userConfig.verticalNav.theme,
  );

  const verticalNavOverlayState = ref();

  const openedVerticalNavGroup = ref([]);

  // 👉 Navbar
  const navbarStyle = localStoreRef(
    localStorageKeyNavbarStyle,
    userConfig.navigationBar.style,
  );

  const navbarPosition = localStoreRef(
    localStorageKeyNavbarPosition,
    userConfig.navigationBar.position,
  );

  const navbarBackground = localStoreRef(
    localStorageKeyNavbarBackground,
    userConfig.navigationBar.background,
  );

  // 👉 Content
  const contentWidth = localStoreRef(
    localStorageKeyContentWidth,
    userConfig.content.width,
  );

  const contentStyle = localStoreRef(
    localStorageKeyContentStyle,
    userConfig.content.style,
  );

  const contentTheme = localStoreRef(
    localStorageKeyContentTheme,
    userConfig.content.theme,
  );

  // 👉 App
  const appPreset = localStoreRef(
    localStorageKeyAppPreset,
    userConfig.app.preset,
  );

  const appLayoutNavType = localStoreRef(
    localStorageKeyAppLayoutNavType,
    userConfig.app.layoutNavType,
  );

  const appColorScheme = localStoreRef(
    localStorageKeyAppColorScheme,
    userConfig.app.colorScheme,
  );

  const appPrimaryColor = localStoreRef(
    localStorageKeyAppPrimaryColor,
    userConfig.app.primaryColor,
  );

  const appSurfaceColor = localStoreRef(
    localStorageKeyAppSurfaceColor,
    userConfig.app.surfaceColor,
  );

  // 👉 Getters
  const isXlScreen = computed(
    () =>
      useMediaQuery(`(min-width: ${userConfig.app.verticalNavBreakpoint}px)`)
        .value,
  );

  const layoutClasses = computed(() => {
    return [
      `preset--${appPreset.value}`,
      `layout-nav-type--${appLayoutNavType.value}`,
      `vertical-nav--${verticalNavStyle.value}`,
      `vertical-nav--${verticalNavAnchor.value}`,
      `vertical-nav--${verticalNavUnpinnedStyle.value}`,
      `vertical-nav--${verticalNavTheme.value}`,
      `vertical-nav--overlay-${verticalNavOverlayState.value}`,
      `navbar--${navbarStyle.value}`,
      `navbar--${navbarPosition.value}`,
      `navbar--${navbarBackground.value}`,
      `content--${contentWidth.value}`,
      `content--${contentStyle.value}`,
      `content--${contentTheme.value}`,
    ];
  });

  const isVerticalNavUnpinned = computed(
    () => verticalNavAnchor.value === VerticalNavEnums.Anchor.Unpinned,
  );

  const isOverlayVerticalNavActive = computed(
    () => verticalNavOverlayState.value === VerticalNavEnums.Overlay.Active,
  );

  const isVerticalNavTypeHidden = computed(
    () =>
      verticalNavUnpinnedStyle.value === VerticalNavEnums.UnpinnedStyle.Hidden,
  );

  const isVerticalNavIconAndNotHovered = (isHovered = null) => {
    const localIsHovered =
      isHovered || inject(injectionKeyIsVerticalNavHovered) || ref(false);

    return computed(() => {
      const isXL = isXlScreen.value;
      const isUnpinned = isVerticalNavUnpinned.value;
      const isIconType =
        verticalNavUnpinnedStyle.value === VerticalNavEnums.UnpinnedStyle.Icon;

      return isXL ? !localIsHovered.value && isUnpinned && isIconType : false;
    });
  };

  // 👉 Watchers
  watch(
    [appColorScheme, usePreferredColorScheme()],
    updateColorScheme(appColorScheme),
    { immediate: true },
  );

  watch(appPrimaryColor, updatePrimePrimary(appPrimaryColor), {
    immediate: true,
  });

  watch(appSurfaceColor, updatePrimeSurface(appSurfaceColor), {
    immediate: true,
  });

  /**
   * if screen width changes, reset overlay state to inactive.
   */
  watch(isXlScreen, () => {
    verticalNavOverlayState.value = VerticalNavEnums.Overlay.Inactive;
  });

  return {
    verticalNavStyle,
    verticalNavAnchor,
    verticalNavUnpinnedStyle,
    verticalNavTheme,
    verticalNavOverlayState,
    //
    navbarStyle,
    navbarPosition,
    navbarBackground,
    //
    contentWidth,
    contentStyle,
    contentTheme,
    //
    appPreset,
    appLayoutNavType,
    appColorScheme,
    appPrimaryColor,
    appSurfaceColor,
    //
    layoutClasses,
    isXlScreen,
    isVerticalNavUnpinned,
    isVerticalNavTypeHidden,
    isOverlayVerticalNavActive,
    openedVerticalNavGroup,
    isVerticalNavIconAndNotHovered,
  };
});
