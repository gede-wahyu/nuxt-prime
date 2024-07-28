import { createTemplate } from "@template";
import { config } from "~/template.config";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:mounted", () => {
    const html = document.querySelector("html");
    html.classList.add("mode-dark");
  });

  nuxtApp.vueApp.use(createTemplate(config));
});
