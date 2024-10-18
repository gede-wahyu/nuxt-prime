import { breakpointsTailwind } from "@vueuse/core";
import {
  Surface,
  Primary,
  ColorScheme,
  ColorSchemeEnums,
  LayoutNavType,
  VerticalNavEnums,
  NavigationBarEnums,
  ContentEnums,
  PresetEnums,
  PrimaryEnums,
  SurfaceEnums,
} from "@template/utils/enums";

export const config = {
  app: {
    title: "default-template",
    logo: h("img", { src: "~/assets/logo/logo.svg" }),
    iconRenderer: h("i"),
    verticalNavBreakpoint: breakpointsTailwind.xl,
    preset: PresetEnums.Preset1,
    layoutNavType: LayoutNavType.Vertical,
    colorScheme: ColorSchemeEnums.System,
    // todo: remove this two
    colorPrimary: Primary.Green,
    colorSurface: Surface.Zinc,
    //
    primaryColor: PrimaryEnums.Green,
    surfaceColor: SurfaceEnums.Zinc,
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
    pinned: { icon: "pi pi-circle-fill" },
    unpinned: { icon: "pi pi-circle" },
    titlePlaceholder: { icon: "pi pi-minus" },
  },
};
