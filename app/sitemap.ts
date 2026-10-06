import type { MetadataRoute } from 'next';

const siteUrl = 'https://adhabits.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: siteUrl, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${siteUrl}/services`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/projects`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteUrl}/stack`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${siteUrl}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
  ];
}