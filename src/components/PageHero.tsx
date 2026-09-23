import Image from "next/image";
import { Sparkles } from "lucide-react";

interface PageHeroProps {
  eyebrow: string;
  showEyebrow?: boolean;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  imageOpacity?: number;
}

export function PageHero({
  eyebrow,
  showEyebrow = true,
  title,
  description,
  image,
  imageAlt = "",
  imageOpacity = 0.92,
}: PageHeroProps) {
  return (
    <section data-floating-contact-hero className="relative isolate flex min-h-[clamp(320px,45vh,430px)] items-center overflow-hidden bg-[#161e27] px-4 py-16 text-white sm:px-6 md:py-20">
      {image && (
        <div className="na-image-reveal absolute inset-0 z-0">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="100vw"
            preload
            style={{ opacity: imageOpacity }}
            className="object-cover object-center brightness-[1.08] saturate-[1.04]"
          />
        </div>
      )}

      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/55 via-[#161e27]/30 to-transparent" />

      <div className="na-hero-content relative z-10 mx-auto w-full max-w-[1240px] space-y-4">
        {showEyebrow && (
          <div className="inline-flex items-center gap-2 rounded-full bg-[#b5222a] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{eyebrow}</span>
          </div>
        )}
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
