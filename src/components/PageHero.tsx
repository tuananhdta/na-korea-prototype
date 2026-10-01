import Image from "next/image";

interface PageHeroProps {
  eyebrow?: string;
  showEyebrow?: boolean;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  imageOpacity?: number;
  titleClassName?: string;
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
}: PageHeroProps) {
  return (
    <section data-floating-contact-hero className="relative isolate flex min-h-[clamp(220px,28vh,350px)] items-center overflow-hidden bg-[#181818] px-4 py-10 text-white sm:px-6 sm:py-14 md:py-18">
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

      <div className="na-hero-content relative z-10 mx-auto w-full max-w-[1240px] space-y-3 sm:space-y-4">
        {showEyebrow && eyebrow && (
          <p className="font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#D4A359]">
            {eyebrow}
          </p>
        )}
        <h1 className={`max-w-5xl font-sans text-2xl font-semibold leading-[1.25] tracking-[-0.02em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] sm:text-[28px] lg:text-[32px] ${titleClassName || ""}`}>
          {title}
        </h1>
        <p className="max-w-2xl font-sans text-xs sm:text-sm md:text-base leading-relaxed text-white/95 drop-shadow-[0_1px_5px_rgba(0,0,0,0.55)]">
          {description}
        </p>
      </div>
    </section>
  );
}
