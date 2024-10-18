import logo from "~/assets/logo/logo.svg?raw";
import { breakpointsTailwind } from "@vueuse/core";
import GIcon from "~/components/GIcon.vue";
import {
  ColorScheme,
  ContentEnums,
  LayoutNavType,
  NavigationBarEnums,
  PresetEnums,
  Primary,
  PrimaryEnums,
  ColorSchemeEnums,
  Surface,
  SurfaceEnums,
  VerticalNavEnums,
} from "@template/utils/enums";

const resizeLogo = (logo) => {
  return logo.replace(/<svg/, '<svg width="35px" height="35px"');
};

export const config = {
  app: {
    title: "doublew",
    logo: h("div", {
      innerHTML: resizeLogo(logo),
      class: "text-primary-500",
      style: "line-height:0;",
    }),
    iconRenderer: h(GIcon),
    verticalNavBreakpoint: breakpointsTailwind.xl,
    preset: PresetEnums.Preset1,
    layoutNavType: LayoutNavType.Vertical,
    colorScheme: ColorSchemeEnums.System,
    // todo: remove this two
    colorPrimary: Primary.Cyan,
    colorSurface: Surface.Gray,
    //
    primaryColor: PrimaryEnums.Cyan,
    surfaceColor: SurfaceEnums.Gray,
  },
  verticalNav: {
    style: VerticalNavEnums.Style.Full,
    anchor: VerticalNavEnums.Anchor.Pinned,
    unpinnedStyle: VerticalNavEnums.UnpinnedStyle.Icon,
    theme: VerticalNavEnums.Theme.Inherit,
    defaultNavItemIconProps: { icon: "pi pi-circle", size: 0.7 },
  },
  navigationBar: {
    style: NavigationBarEnums.Style.Full,
    position: NavigationBarEnums.Position.Sticky,
    background: NavigationBarEnums.Background.Surface,
  },
  content: {
    width: ContentEnums.Width.Boxed,
    style: ContentEnums.Style.Bare,
    theme: ContentEnums.Theme.Inherit,
  },
  icons: {
    chevronDown: { icon: "pi pi-chevron-down" },
    chevronRight: { icon: "pi pi-chevron-right" },
    close: { icon: "pi pi-times" },
    pinned: { icon: "pi pi-th-large" },
    unpinned: { icon: "pi pi-th-large" },
    titlePlaceholder: { icon: "pi pi-minus" },
  },
};
