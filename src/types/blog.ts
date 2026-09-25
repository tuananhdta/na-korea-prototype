export interface BlogAuthor {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface BlogTocItem {
  id: string;
  title: string;
  level?: number;
}

export interface BlogFaqItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  url: string;
  date: string;
  formattedDate: string;
  updatedDate: string;
  readTime: string;
  viewsCount: number;
  category: string;
  tags: string[];
  image: string;
  imageAlt: string;
  originalImageUrl?: string;
  excerpt: string;
  author: BlogAuthor;
  tableOfContents: BlogTocItem[];
  faqs?: BlogFaqItem[];
  featuredProductIds?: string[];
  contentHtml: string;
}
