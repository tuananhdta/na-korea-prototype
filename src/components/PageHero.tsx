import Image from "next/image";

interface PageHeroProps {
  eyebrow?: string;
  showEyebrow?: boolean;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  imageOpacity?: number;
}

export function PageHero({
  eyebrow,
  showEyebrow = false,
  title,
  description,
  image,
  imageAlt = "",
  imageOpacity = 0.92,
}: PageHeroProps) {
  return (
    <section data-floating-contact-hero className="relative isolate flex min-h-[clamp(260px,34vh,350px)] items-center overflow-hidden bg-[#181818] px-4 py-14 text-white sm:px-6 md:py-18">
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

      <div className="na-hero-content relative z-10 mx-auto w-full max-w-[1240px] space-y-4">
        <h1 className="max-w-5xl text-3xl font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-white/95 drop-shadow-[0_1px_5px_rgba(0,0,0,0.55)] sm:text-base">
          {description}
        </p>
      </div>
    </section>
  );
}
