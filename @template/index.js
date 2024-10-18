import { useTemplateConfigStore } from "./stores";

export * from "./plugins";
export * from "./components";
export * from "./composables";

export const useTemplateConfig = () => {
  const configStore = useTemplateConfigStore();

  const updateColorScheme = (colorScheme) => {
    configStore.appColorScheme = colorScheme;
  };

  const isColorSchemeActive = (colorScheme) => {
    return colorScheme === configStore.appColorScheme;
  };

  const updatePrimaryColor = (primary) => {
    configStore.appColorPrimary = primary;
  };

  const isPrimaryColorActive = (primary) => {
    return primary === configStore.appColorPrimary;
  };

  const updateSurfaceColor = (surface) => {
    configStore.appColorSurface = surface;
  };

  const isSurfaceColorActive = (surface) => {
    return surface === configStore.appColorSurface;
  };

  const isLayoutActive = (layout) => {
    return false;
  };

  return {
    updateColorScheme,
    isColorSchemeActive,
    updatePrimaryColor,
    isPrimaryColorActive,
    updateSurfaceColor,
    isSurfaceColorActive,
    isLayoutActive,
  };
};
