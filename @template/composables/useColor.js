import { useTemplateConfigStore } from "../stores";
import { transformEnum } from "../utils";
import { PrimaryEnums, ColorSchemeEnums, SurfaceEnums } from "../utils/enums";

export const useColor = () => {
  const configStore = useTemplateConfigStore();

  const getPrimaryColorOpt = () => transformEnum(PrimaryEnums);

  const getSurfaceColorOpt = () => transformEnum(SurfaceEnums);

  const getColorSchemeOpt = () => ColorSchemeEnums;

  const updatePrimaryColor = (primary) => {
    configStore.appPrimaryColor = primary;
  };

  const updateSurfaceColor = (surface) => {
    configStore.appSurfaceColor = surface;
  };

  const updateColorScheme = (colorScheme) => {
    configStore.appColorScheme = colorScheme;
  };

  const isPrimaryColor = (primary) => configStore.appPrimaryColor === primary;

  const isSurfaceColor = (surface) => configStore.appSurfaceColor === surface;

  const isColorScheme = (colorScheme) =>
    configStore.appColorScheme === colorScheme;

  return {
    primary: {
      getPrimaryColorOpt,
      updatePrimaryColor,
      isPrimaryColor,
    },
    surface: {
      getSurfaceColorOpt,
      updateSurfaceColor,
      isSurfaceColor,
    },
    colorScheme: {
      getColorSchemeOpt,
      updateColorScheme,
      isColorScheme,
    },
  };
};
