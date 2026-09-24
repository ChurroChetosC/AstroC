import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const allPosts = await getCollection("blog");
  return rss({

    title: 'DesarrolladorC | BlogC',
    description: 'Mi viaje para superar la ansiedad y la depresión a través del desarrollo web y la programación.',
    site: context.site,
    items: allPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.id}/`,
    })),    customData: `<language>es-ES</language>`,
  });
}