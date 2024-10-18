import { useTemplateConfigStore } from "../stores";
import { config } from "../template.config";
import { localStoreRef } from "../utils";
import { VerticalNavEnums } from "../utils/enums";
import {
  localStorageKeyAppColorSurface,
  localStorageKeyAppColorPrimary,
  localStorageKeyAppColorScheme,
  localStorageKeyAppLayoutNavType,
  localStorageKeyVerticalNavStyle,
  localStorageKeyVerticalNavAnchor,
  localStorageKeyVerticalNavUnpinnedStyle,
  localStorageKeyVerticalNavTheme,
  localStorageKeyNavbarStyle,
  localStorageKeyNavbarPosition,
  localStorageKeyNavbarBackground,
  localStorageKeyContentWidth,
  localStorageKeyContentStyle,
  localStorageKeyContentTheme,
} from "../utils/keys";

export const createTemplate = (userConfig) => {
  return () => {
    const configStore = useTemplateConfigStore();

    config.app.title = userConfig.app?.title ?? config.app.title;
    config.app.logo = userConfig.app?.logo ?? config.app.logo;
    config.app.verticalNavBreakpoint =
      userConfig.app?.verticalNavBreakpoint ?? config.app.verticalNavBreakpoint;
    config.verticalNav.defaultNavItemIconProps =
      userConfig.verticalNav?.defaultNavItemIconProps ??
      config.verticalNav.defaultNavItemIconProps;
    config.app.iconRenderer =
      userConfig.app?.iconRenderer ?? config.app.iconRenderer;
    config.icons.chevronDown =
      userConfig.icons?.chevronDown ?? config.icons.chevronDown;
    config.icons.chevronRight =
      userConfig.icons?.chevronRight ?? config.icons.chevronRight;
    config.icons.close = userConfig.icons?.close ?? config.icons.close;
    config.icons.pinned = userConfig.icons?.pinned ?? config.icons.pinned;
    config.icons.unpinned = userConfig.icons?.unpinned ?? config.icons.unpinned;
    config.icons.titlePlaceholder =
      userConfig.icons?.titlePlaceholder ?? config.icons.titlePlaceholder;

    configStore.$patch({
      verticalNavStyle: localStoreRef(
        localStorageKeyVerticalNavStyle,
        userConfig.verticalNav?.style ?? config.verticalNav.style,
      ),
      verticalNavAnchor: localStoreRef(
        localStorageKeyVerticalNavAnchor,
        userConfig.verticalNav?.anchor ?? config.verticalNav.anchor,
      ),
      verticalNavUnpinnedStyle: localStoreRef(
        localStorageKeyVerticalNavUnpinnedStyle,
        userConfig.verticalNav?.unpinnedStyle ??
          config.verticalNav.unpinnedStyle,
      ),
      verticalNavTheme: localStoreRef(
        localStorageKeyVerticalNavTheme,
        userConfig.verticalNav?.theme ?? config.verticalNav.theme,
      ),
      verticalNavOverlayState: VerticalNavEnums.Overlay.Inactive,
      navbarStyle: localStoreRef(
        localStorageKeyNavbarStyle,
        userConfig.navigationBar?.style ?? config.navigationBar.style,
      ),
      navbarPosition: localStoreRef(
        localStorageKeyNavbarPosition,
        userConfig.navigationBar?.position ?? config.navigationBar.position,
      ),
      navbarBackground: localStoreRef(
        localStorageKeyNavbarBackground,
        userConfig.navigationBar?.background ?? config.navigationBar.background,
      ),
      contentWidth: localStoreRef(
        localStorageKeyContentWidth,
        userConfig.content?.width ?? config.content.width,
      ),
      contentStyle: localStoreRef(
        localStorageKeyContentStyle,
        userConfig.content?.style ?? config.content.style,
      ),
      contentTheme: localStoreRef(
        localStorageKeyContentTheme,
        userConfig.content?.theme ?? config.content.theme,
      ),
      appLayoutNavType: localStoreRef(
        localStorageKeyAppLayoutNavType,
        userConfig.app?.layoutNavType ?? config.app.layoutNavType,
      ),
      appColorScheme: localStoreRef(
        localStorageKeyAppColorScheme,
        userConfig.app?.colorScheme ?? config.app.colorScheme,
      ),
      appColorPrimary: localStoreRef(
        localStorageKeyAppColorPrimary,
        userConfig.app?.colorPrimary ?? config.app.colorPrimary,
      ),
      appColorSurface: localStoreRef(
        localStorageKeyAppColorSurface,
        userConfig.app?.colorSurface ?? config.app.colorSurface,
      ),
    });
  };
};
