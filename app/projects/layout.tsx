import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Projects & Case Studies',
  description: 'Explore Adhabits projects across web development, digital products, brand experiences, and growth-focused marketing.',
  alternates: { canonical: '/projects' },
};

export default function ProjectsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}