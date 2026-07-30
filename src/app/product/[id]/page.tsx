import productsData from '../../../products.json';
import { notFound } from 'next/navigation';
import ProductPageClient from './ProductPageClient';

export function generateStaticParams() {
  return productsData.map((p) => ({ id: p.id }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = productsData.find((p) => p.id === id) as any;
  if (!product) notFound();

  return <ProductPageClient product={product} />;
}
