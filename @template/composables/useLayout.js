import { useTemplateConfigStore } from "../stores";
import { transformEnum } from "../utils";
import {
  VerticalNavEnums,
  NavigationBarEnums,
  ContentEnums,
  PresetEnums,
} from "../utils/enums";

export const useLayout = () => {
  const configStore = useTemplateConfigStore();

  const getAppPresetOpt = (options) => transformEnum(PresetEnums, options);

  const getVerticalNavStyleOpt = (options) =>
    transformEnum(VerticalNavEnums.Style, options);

  const getVerticalNavAnchorOpt = (options) =>
    transformEnum(VerticalNavEnums.Anchor, options);

  const getVerticalNavUnpinnedStyleOpt = (options) =>
    transformEnum(VerticalNavEnums.UnpinnedStyle, options);

  const getVerticalNavThemeOpt = (options) =>
    transformEnum(VerticalNavEnums.Theme, options);

  const getNavbarStyleOpt = (options) =>
    transformEnum(NavigationBarEnums.Style, options);

  const getNavbarPositionOpt = (options) =>
    transformEnum(NavigationBarEnums.Position, options);

  const getNavbarBackgroundOpt = (options) =>
    transformEnum(NavigationBarEnums.Background, options);

  const getContentWidthOpt = (options) =>
    transformEnum(ContentEnums.Width, options);

  const getContentStyleOpt = (options) =>
    transformEnum(ContentEnums.Style, options);

  const getContentThemeOpt = (options) =>
    transformEnum(ContentEnums.Theme, options);

  const updateAppPreset = (preset) => {
    configStore.appPreset = preset;
  };

  const updateVerticalNavStyle = (style) => {
    configStore.verticalNavStyle = style;
  };

  const toggleVerticalNavAnchor = () => {
    configStore.verticalNavAnchor =
      configStore.verticalNavAnchor === VerticalNavEnums.Anchor.Pinned
        ? VerticalNavEnums.Anchor.Unpinned
        : VerticalNavEnums.Anchor.Pinned;
  };

  const updateVerticalNavUnpinnedStyle = (unpinnedStyle) => {
    configStore.verticalNavUnpinnedStyle = unpinnedStyle;
  };

  const updateVerticalNavTheme = (theme) => {
    configStore.verticalNavTheme = theme;
  };

  const isVerticalNavThemeMixed = () => {
    return configStore.verticalNavTheme === VerticalNavEnums.Theme.Mixed;
  };

  const updateIsVerticalNavHiddenActive = (val = false) => {
    configStore.verticalNavOverlayState = val
      ? VerticalNavEnums.Overlay.Active
      : VerticalNavEnums.Overlay.Inactive;
  };

  const updateNavbarStyle = (stye) => {
    configStore.navbarStyle = stye;
  };

  const updateNavbarPosition = (position) => {
    configStore.navbarPosition = position;
  };

  const updateNavbarBackground = (background) => {
    configStore.navbarBackground = background;
  };

  const updateContentWidth = (width) => {
    configStore.contentWidth = width;
  };

  const updateContentStyle = (style) => {
    configStore.contentStyle = style;
  };

  const isContentStyleCard = () => {
    return configStore.contentStyle === ContentEnums.Style.Card;
  };

  const updateContentTheme = (theme) => {
    configStore.contentTheme = theme;
  };

  const updatePreset = (preset) => {
    switch (preset) {
      case "preset-2":
        updateVerticalNavStyle(VerticalNavEnums.Style.Bare);
        configStore.verticalNavAnchor = VerticalNavEnums.Anchor.Pinned;
        updateVerticalNavUnpinnedStyle(VerticalNavEnums.UnpinnedStyle.Icon);
        updateVerticalNavTheme(VerticalNavEnums.Theme.Mixed);
        updateNavbarStyle(NavigationBarEnums.Style.Bordered);
        updateNavbarPosition(NavigationBarEnums.Position.Sticky);
        updateNavbarBackground(NavigationBarEnums.Background.Surface);
        updateContentWidth(ContentEnums.Width.Boxed);
        updateContentStyle(ContentEnums.Style.Card);
        updateContentTheme(ContentEnums.Theme.Mixed);
        break;
      case "preset-3":
        updateVerticalNavStyle(VerticalNavEnums.Style.Boxed);
        configStore.verticalNavAnchor = VerticalNavEnums.Anchor.Pinned;
        updateVerticalNavUnpinnedStyle(VerticalNavEnums.UnpinnedStyle.Icon);
        updateVerticalNavTheme(VerticalNavEnums.Theme.Inherit);
        updateNavbarStyle(NavigationBarEnums.Style.Boxed);
        updateNavbarPosition(NavigationBarEnums.Position.Sticky);
        updateNavbarBackground(NavigationBarEnums.Background.Surface);
        updateContentWidth(ContentEnums.Width.Boxed);
        updateContentStyle(ContentEnums.Style.Bare);
        updateContentTheme(ContentEnums.Theme.Inherit);
        break;
      default:
        updateVerticalNavStyle(VerticalNavEnums.Style.Bordered);
        configStore.verticalNavAnchor = VerticalNavEnums.Anchor.Pinned;
        updateVerticalNavUnpinnedStyle(VerticalNavEnums.UnpinnedStyle.Icon);
        updateVerticalNavTheme(VerticalNavEnums.Theme.Inherit);
        updateNavbarStyle(NavigationBarEnums.Style.Bordered);
        updateNavbarPosition(NavigationBarEnums.Position.Sticky);
        updateNavbarBackground(NavigationBarEnums.Background.Surface);
        updateContentWidth(ContentEnums.Width.Boxed);
        updateContentStyle(ContentEnums.Style.Bare);
        updateContentTheme(ContentEnums.Theme.Inherit);
        break;
    }
  };

  return {
    layout: {
      getPresetOpt: getAppPresetOpt,
      updatePreset: updateAppPreset,
    },
    verticalNav: {
      getStyleOpt: getVerticalNavStyleOpt,
      getAnchorOpt: getVerticalNavAnchorOpt,
      getUnpinnedStyleOpt: getVerticalNavUnpinnedStyleOpt,
      getThemeOpt: getVerticalNavThemeOpt,
      updateStyle: updateVerticalNavStyle,
      toggleAnchor: toggleVerticalNavAnchor,
      updateUnpinnedStyle: updateVerticalNavUnpinnedStyle,
      updateTheme: updateVerticalNavTheme,
      isThemeMixed: isVerticalNavThemeMixed,
      updateIsHiddenActive: updateIsVerticalNavHiddenActive,
    },
    navbar: {
      getStyleOpt: getNavbarStyleOpt,
      getPositionOpt: getNavbarPositionOpt,
      getBackgroundOpt: getNavbarBackgroundOpt,
      updateStyle: updateNavbarStyle,
      updatePosition: updateNavbarPosition,
      updateBackground: updateNavbarBackground,
    },
    content: {
      getWidthOpt: getContentWidthOpt,
      getStyleOpt: getContentStyleOpt,
      getThemeOpt: getContentThemeOpt,
      updateWidth: updateContentWidth,
      updateStyle: updateContentStyle,
      isStyleCard: isContentStyleCard,
      updateTheme: updateContentTheme,
    },
    updatePreset,
  };
};
