import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductDetailView } from "@/components/ProductDetailView";
import productsData from "@/data/products.json";
import { Product } from "@/types/product";

interface SanPhamPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const products = productsData as Product[];
  const params: { id: string }[] = [];
  products.forEach((p) => {
    params.push({ id: p.id });
    if (p.goodsNo && p.goodsNo !== p.id) {
      params.push({ id: p.goodsNo });
    }
  });
  return params;
}

export default async function SanPhamDetailPage({ params }: SanPhamPageProps) {
  const { id } = await params;
  const products = productsData as Product[];
  const product = products.find((p) => p.id === id || p.goodsNo === id || p.slug === id);

  if (!product) {
    notFound();
  }

  const related = products
    .filter(
      (p) =>
        p.id !== product.id &&
        p.categories.some((c) => product.categories.includes(c))
    )
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col">
      <Header />
      <main className="flex-1">
        <ProductDetailView product={product} relatedProducts={related} />
      </main>
      <Footer />
    </div>
  );
}
