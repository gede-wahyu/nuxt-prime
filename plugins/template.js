import { createTemplate } from "@template";
import { config } from "~/template.config";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(createTemplate(config));
});
