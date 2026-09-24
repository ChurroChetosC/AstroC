import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'DesarrolladorC | BlogC',
    description: 'Mi viaje para superar la ansiedad y la depresión a través del desarrollo web y la programación.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>es-ES</language>`,
  });
}