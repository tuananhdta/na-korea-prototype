import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogDetailView } from "@/components/BlogDetailView";
import blogsData from "@/data/blogs.json";
import productsData from "@/data/products.json";
import { BlogPost } from "@/types/blog";
import { Product } from "@/types/product";

interface TinTucDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const blogs = blogsData as unknown as BlogPost[];
  return blogs.map((b) => ({
    id: b.id,
  }));
}

export async function generateMetadata({ params }: TinTucDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const blogs = blogsData as unknown as BlogPost[];
  const post = blogs.find((b) => b.id === id || b.slug === id);

  if (!post) {
    return {
      title: "Bài Viết Không Tồn Tại | Hồng Sâm Kim",
    };
  }

  return {
    title: `${post.seoTitle || post.title}`,
    description: post.seoDescription || post.excerpt,
    keywords: post.keywords || ["Hồng Sâm Kim", "Hồng sâm Hàn Quốc", "NA Korea"],
    alternates: {
      canonical: `/tin-tuc/${post.id}`,
    },
    openGraph: {
      title: post.title,
      description: post.seoDescription || post.excerpt,
      url: `/tin-tuc/${post.id}`,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updatedDate || post.date,
      authors: [post.author.name],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.imageAlt || post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.seoDescription || post.excerpt,
      images: [post.image],
    },
  };
}

export default async function TinTucDetailPage({ params }: TinTucDetailPageProps) {
  const { id } = await params;
  const blogs = blogsData as unknown as BlogPost[];
  const postIndex = blogs.findIndex((b) => b.id === id || b.slug === id);

  if (postIndex === -1) {
    notFound();
  }

  const post = blogs[postIndex];
  const related = blogs.filter((b) => b.id !== post.id);
  const prevPost = postIndex > 0 ? blogs[postIndex - 1] : null;
  const nextPost = postIndex < blogs.length - 1 ? blogs[postIndex + 1] : null;

  // Find featured products matching featuredProductIds
  const allProducts = productsData as unknown as Product[];
  const featured = allProducts.filter(
    (p) =>
      post.featuredProductIds?.includes(p.id) ||
      (p.goodsNo && post.featuredProductIds?.includes(p.goodsNo))
  );

  return (
    <div className="min-h-screen bg-[#F8F8F8] flex flex-col">
      <Header />
      <main className="flex-1">
        <BlogDetailView
          post={post}
          relatedPosts={related}
          prevPost={prevPost}
          nextPost={nextPost}
          featuredProducts={featured.length > 0 ? featured : allProducts.slice(0, 3)}
        />
      </main>
      <Footer />
    </div>
  );
}
