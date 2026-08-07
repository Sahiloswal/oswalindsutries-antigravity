import { MetadataRoute } from 'next';
import productsData from '../products.json';

const BASE_URL = 'https://www.oswalindustries.in';

export default function sitemap(): MetadataRoute.Sitemap {
  const productUrls = productsData.map((p) => ({
    url: `${BASE_URL}/product/${p.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/catalog`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/library`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    ...productUrls,
  ];
}
