import { breakpointsTailwind } from "@vueuse/core";
import {
  ContentWidthType,
  FooterType,
  LayoutNavType,
  NavbarType,
  VerticalNavType,
} from "./utils/enums";

export const config = {
  app: {
    title: "default-template",
    logo: h("img", { src: "~/assets/logo/logo.svg" }),
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
    defaultNavItemIconProps: { icon: "pi pi-circle" },
  },
  icons: {
    chevronDown: { icon: "pi pi-chevron-down" },
    chevronRight: { icon: "pi pi-chevron-right" },
    close: { icon: "pi pi-times" },
    pinned: { icon: "pi pi-circle-fill" },
    unpinned: { icon: "pi pi-circle" },
    titlePlaceholder: { icon: "pi pi-minus" },
  },
};
