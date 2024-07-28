import VerticalNavLayout from "./components/VerticalNavLayout.vue";
import VerticalNav from "./components/VerticalNav.vue";
import { VNodeRenderer } from "./components/VNodeRenderer";

import { useTemplateConfigStore } from "./stores/template";
import { config } from "./template.config";
import { localStoreRef } from "./utils";
import {
  localStorageKeyAppContentWidthType,
  localStorageKeyAppLayoutNavType,
  localStorageKeyFooterType,
  localStorageKeyIsNavbarBlur,
  localStorageKeyIsVerticalNavUnpinned,
  localStorageKeyNavbarType,
  localStorageKeyVerticalNavOnUnpinnedType,
} from "./utils/keys";

// 👉 Plugin
export const createTemplate = (userConfig) => {
  return () => {
    const templateConfigStore = useTemplateConfigStore();

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

    templateConfigStore.$patch({
      navbarType: localStoreRef(
        localStorageKeyNavbarType,
        userConfig.navbar?.type ?? config.navbar.type,
      ),
      isNavbarBlur: localStoreRef(
        localStorageKeyIsNavbarBlur,
        userConfig.navbar?.isBlur ?? config.navbar.isBlur,
      ),
      footerType: localStoreRef(
        localStorageKeyFooterType,
        userConfig.footer?.type ?? config.footer.type,
      ),
      isVerticalNavUnpinned: localStoreRef(
        localStorageKeyIsVerticalNavUnpinned,
        userConfig.verticalNav?.isVerticalNavUnpinned ??
          config.verticalNav.isVerticalNavUnpinned,
      ),
      verticalNavOnUnpinnedType: localStoreRef(
        localStorageKeyVerticalNavOnUnpinnedType,
        userConfig.verticalNav?.onUnpinnedNavType ??
          config.verticalNav.onUnpinnedNavType,
      ),
      appContentWidthType: localStoreRef(
        localStorageKeyAppContentWidthType,
        userConfig.app?.contentWidthType ?? config.app.contentWidthType,
      ),
      appLayoutNavType: localStoreRef(
        localStorageKeyAppLayoutNavType,
        userConfig.app?.layoutNavType ?? config.app.layoutNavType,
      ),
    });
  };
};

export { config };
export { VerticalNavLayout, VerticalNav, VNodeRenderer };
