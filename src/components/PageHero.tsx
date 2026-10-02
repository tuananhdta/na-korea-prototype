import Image from "next/image";
import { SubNavBar, SubNavItem } from "./SubNavBar";

interface PageHeroProps {
  eyebrow?: string;
  showEyebrow?: boolean;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  imageOpacity?: number;
  titleClassName?: string;
  subNavItems?: SubNavItem[];
  currentHref?: string;
}

export function PageHero({
  eyebrow,
  showEyebrow = false,
  title,
  description,
  image,
  imageAlt = "",
  imageOpacity = 0.92,
  titleClassName,
  subNavItems,
  currentHref = "",
}: PageHeroProps) {
  const hasSubNav = subNavItems && subNavItems.length > 0;

  return (
    <section
      data-floating-contact-hero
      className={`relative isolate flex flex-col justify-between overflow-hidden bg-[#181818] text-white ${
        hasSubNav
          ? "min-h-[clamp(300px,36vh,340px)] sm:min-h-[clamp(380px,42vh,420px)] lg:min-h-[clamp(480px,50vh,520px)] pt-28 sm:pt-32 md:pt-36 lg:pt-40"
          : "min-h-[clamp(280px,32vh,420px)] px-4 pt-28 pb-10 sm:px-6 sm:pt-36 sm:pb-14 md:pt-40 md:pb-16"
      }`}
    >
      {image && (
        <div className="kenburns-pulse absolute inset-0 z-0">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="100vw"
            priority
            style={{ opacity: imageOpacity }}
            className="object-cover object-center brightness-[1.05] saturate-[1.04]"
          />
        </div>
      )}

      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/60 via-[#181818]/40 to-transparent" />

      {/* [TẦNG 2] HERO CONTENT BLOCK - ĐỒNG BỘ 100% CHUẨN TRANG CHỦ (BRANDSTORYSECTION & PRODUCTSECTION) */}
      <div className="na-hero-content relative z-10 mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8 space-y-3 sm:space-y-4 my-auto py-8">
        {showEyebrow && eyebrow && (
          <p className="font-sans text-base font-normal leading-6 tracking-[-0.01em] text-[#D4A359]">
            {eyebrow}
          </p>
        )}
        <h1
          className={`max-w-5xl font-sans text-2xl font-semibold leading-[1.25] tracking-[-0.02em] text-white sm:text-[28px] lg:text-[32px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] ${
            titleClassName || ""
          }`}
        >
          {title}
        </h1>
        <p className="max-w-3xl font-sans text-base font-normal leading-6 tracking-[-0.01em] text-[#EEEEEE] drop-shadow-[0_1px_5px_rgba(0,0,0,0.55)]">
          {description}
        </p>
      </div>

      {/* [TẦNG 3] SUB-NAVIGATION BAR (NẾU CÓ) */}
      {hasSubNav && (
        <SubNavBar items={subNavItems} currentHref={currentHref} />
      )}
    </section>
  );
}
