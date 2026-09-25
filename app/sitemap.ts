import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-09-25')

  return [
    { url: 'https://althia.org/senthia', lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://althia.org/privacy', changeFrequency: 'yearly', priority: 0.2 },
    { url: 'https://althia.org/unplugleague/privacy', changeFrequency: 'yearly', priority: 0.2 },
    { url: 'https://althia.org/senthia/support', lastModified: new Date('2026-09-21'), changeFrequency: 'monthly', priority: 0.4 },
    { url: 'https://althia.org/senthia/terms', lastModified: new Date('2026-09-21'), changeFrequency: 'yearly', priority: 0.2 },
    { url: 'https://althia.org/senthia/privacy', lastModified: new Date('2026-09-21'), changeFrequency: 'yearly', priority: 0.2 },
    {
      url: 'https://althia.org',
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://althia.org/mythia',
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://althia.org/mythia/greek-mythology-sleep-stories',
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: 'https://althia.org/about',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://althia.org/terms',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: 'https://althia.org/facts',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://althia.org/unplugleague',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://althia.org/unplugleague/join',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://althia.org/unplugleague/terms',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ]
}
