export const baseUrl = 'https://portfolio-blog-starter.vercel.app';

export default async function sitemap() {
  let routes = ['', '/skills', '/projects', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes];
}
