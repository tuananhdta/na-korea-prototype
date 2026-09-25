import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductDetailView } from "@/components/ProductDetailView";
import productsData from "@/data/products.json";
import { Product } from "@/types/product";
import { SITE_CONFIG } from "@/lib/siteConfig";

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

export async function generateMetadata({ params }: SanPhamPageProps): Promise<Metadata> {
  const { id } = await params;
  const products = productsData as Product[];
  const product = products.find((p) => p.id === id || p.goodsNo === id || p.slug === id);

  if (!product) {
    return {
      title: "Sản Phẩm Không Tồn Tại",
    };
  }

  const cleanDescription = product.description
    ? product.description.replace(/<[^>]*>?/gm, "").slice(0, 160)
    : `${product.title} - Hồng sâm 6 năm tuổi Kim's Red Ginseng Punggi Hàn Quốc nhập khẩu chính ngạch bởi NA Korea. Giá ${product.price}.`;

  return {
    title: product.title,
    description: cleanDescription,
    keywords: [
      product.title,
      "Hồng sâm Kim",
      "Kim's Red Ginseng",
      "Hồng sâm Hàn Quốc",
      "Nhân sâm Punggi",
      ...product.categories,
    ],
    alternates: {
      canonical: `${SITE_CONFIG.siteUrl}/san-pham/${product.id}`,
    },
    openGraph: {
      title: `${product.title} | ${SITE_CONFIG.brandName}`,
      description: cleanDescription,
      url: `${SITE_CONFIG.siteUrl}/san-pham/${product.id}`,
      type: "website",
      images: [
        {
          url: product.image,
          width: 800,
          height: 800,
          alt: product.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: cleanDescription,
      images: [product.image],
    },
  };
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
