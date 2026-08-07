import productsData from '../../../products.json';
import { notFound } from 'next/navigation';
import ProductPageClient from './ProductPageClient';

export function generateStaticParams() {
  return productsData.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = productsData.find((p) => p.id === id) as any;
  if (!product) return {};

  const title = `${product.prodname} | OSWAL ${product.category}`;
  const description = product.description || `OSWAL ${product.prodname} is a high-quality ${product.category.toLowerCase()} designed for maximum safety.`;

  return {
    title,
    description,
    keywords: [product.prodname, product.category, 'OSWAL', 'Safety Goggles', 'Industrial Safety', ...(product.datasheet?.industries || [])],
    openGraph: {
      title,
      description,
      images: product.image ? [product.image] : [],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = productsData.find((p) => p.id === id) as any;
  if (!product) notFound();

  return <ProductPageClient product={product} />;
}
