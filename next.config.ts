import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.pstatic.net",
      },
      {
        protocol: "https",
        hostname: "**.cdn-nhncommerce.com",
      },
      {
        protocol: "https",
        hostname: "goldsammall.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/product", destination: "/san-pham", permanent: true },
      { source: "/products", destination: "/san-pham", permanent: true },
      { source: "/products/adults", destination: "/san-pham/nguoi-lon", permanent: true },
      { source: "/products/kids", destination: "/san-pham/tre-em", permanent: true },
      { source: "/products/gifts", destination: "/san-pham", permanent: true },
      { source: "/product/:id", destination: "/san-pham/:id", permanent: true },
      { source: "/cart", destination: "/gio-hang", permanent: true },
      { source: "/checkout", destination: "/thanh-toan", permanent: true },
      { source: "/summary", destination: "/gioi-thieu", permanent: true },
      { source: "/about-us", destination: "/gioi-thieu", permanent: true },
      { source: "/greeting", destination: "/loi-chao-nghe-nhan", permanent: true },
      { source: "/history", destination: "/lich-su-hinh-thanh", permanent: true },
      { source: "/certification", destination: "/chung-chi-chat-luong", permanent: true },
      { source: "/ginseng", destination: "/nhan-sam", permanent: true },
      { source: "/red-ginseng", destination: "/hong-sam", permanent: true },
      { source: "/notice", destination: "/tin-tuc", permanent: true },
      { source: "/notice/:id", destination: "/tin-tuc/:id", permanent: true },
      { source: "/blog", destination: "/tin-tuc", permanent: true },
      { source: "/blog/:id", destination: "/tin-tuc/:id", permanent: true },
      { source: "/wholesale", destination: "/dang-ky-dai-ly", permanent: true },
      { source: "/contact", destination: "/lien-he", permanent: true },
    ];
  },
};

export default nextConfig;
