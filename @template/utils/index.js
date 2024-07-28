import { config } from "~/template.config";
import { useStorage } from "@vueuse/core";

export const nameSpaceConfig = (str) => `${config.app.title}-${str}`;

export const cookieRef = (key, defaultValue) => {
  return useCookie(nameSpaceConfig(key), { default: () => defaultValue });
};

export const localStoreRef = (key, defaultValue) => {
  return useStorage(nameSpaceConfig(key), defaultValue);
};
