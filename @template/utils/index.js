import { config } from "~/template.config";
import { useStorage } from "@vueuse/core";
import { ColorScheme } from "@template/utils/enums";
import {
  palette,
  updatePrimaryPalette,
  updateSurfacePalette,
} from "@primevue/themes";

export const nameSpaceConfig = (str) =>
  `${config.app.title.replaceAll(" ", "-")}-${str}`;

export const cookieRef = (key, defaultValue) => {
  return useCookie(nameSpaceConfig(key), { default: () => defaultValue });
};

export const localStoreRef = (key, defaultValue) => {
  return useStorage(nameSpaceConfig(key), defaultValue);
};

export const transformEnum = (enumValue, options = {}) => {
  if (options.labelOnly) {
    return Object.entries(enumValue).map(([label, value]) => label);
  }
  if (options.valueOnly) {
    return Object.entries(enumValue).map(([label, value]) => value);
  }

  return Object.entries(enumValue).map(([label, value]) => ({
    label,
    value,
  }));
};

export const updatePrimePrimary = (appColorPrimary) => {
  return () => {
    const primaryPallete = palette(`{${appColorPrimary.value}}`);
    updatePrimaryPalette(primaryPallete);
  };
};

export const updatePrimeSurface = (appColorSurface) => {
  return () => {
    const surfacePallete = palette(`{${appColorSurface.value}}`);
    updateSurfacePalette(surfacePallete);
  };
};

export const getPreferredColorScheme = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export const updateColorScheme = (appColorScheme) => {
  return () => {
    const localAppColorScheme =
      appColorScheme.value === ColorScheme.System
        ? getPreferredColorScheme()
        : appColorScheme.value;

    const html = document.querySelector("html");

    if (localAppColorScheme === ColorScheme.Dark)
      html.classList.add("mode-dark");
    else html.classList.remove("mode-dark");
  };
};

export const hasActiveChild = (items) => {
  const route = useRoute();

  return items.children.some((child) => {
    if (!child.children) return child.to === route.name;

    return hasActiveChild(child);
  });
};
