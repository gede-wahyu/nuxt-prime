import logo from "~/assets/logo/logo.svg?raw";
import { breakpointsTailwind } from "@vueuse/core";
import {
  ContentWidthType,
  FooterType,
  LayoutNavType,
  NavbarType,
  VerticalNavType,
} from "@template/utils/enums";

const resizeLogo = (logo) => {
  return logo.replace(/<svg/, '<svg width="44px" height="44px"');
};

export const config = {
  app: {
    title: "Gedew",
    logo: h("div", {
      innerHTML: resizeLogo(logo),
      class: "text-primary-500 dark:text-primary-400",
      style: "line-height:0;",
    }),
    contentWidthType: ContentWidthType.Boxed,
    layoutNavType: LayoutNavType.Vertical,
    verticalNavBreakpoint: breakpointsTailwind.xl,
    iconRenderer: h("Icon"),
  },
  navbar: {
    type: NavbarType.Sticky,
    isBlur: true,
  },
  footer: {
    type: FooterType.Static,
  },
  verticalNav: {
    isVerticalNavUnpinned: false,
    onUnpinnedNavType: VerticalNavType.Icon,
    defaultNavItemIconProps: { icon: "pi pi-circle", size: 10 },
  },
  icons: {
    chevronDown: { icon: "pi pi-chevron-down" },
    chevronRight: { icon: "pi pi-chevron-right" },
    close: { icon: "pi pi-times" },
    pinned: { icon: "pi pi-chevron-circle-right" },
    unpinned: { icon: "pi pi-circle" },
    titlePlaceholder: { icon: "pi pi-minus" },
  },
};
