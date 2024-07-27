export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:mounted", () => {
    const html = document.querySelector("html");
    html.classList.add("mode-dark");
  });
});
