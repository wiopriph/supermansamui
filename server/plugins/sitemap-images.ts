// Sitemap collects every <img> inside <main> during prerender. That is what
// we want for project photos, but not for the resized /_ipx/ thumbnails -
// they would list the same image twice at 160px. Keep originals only.
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('sitemap:resolved', (ctx) => {
    for (const url of ctx.urls) {
      if (Array.isArray(url.images)) {
        url.images = url.images.filter(image => !String(image.loc).includes('/_ipx/'));
      }
    }
  });
});
