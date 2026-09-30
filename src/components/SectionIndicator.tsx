export function SectionIndicator({
  activeIndex = 1,
  total = 5,
  className = "",
}: {
  activeIndex?: number;
  total?: number;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`mb-5 flex items-center justify-center gap-2 ${className}`}
    >
      {Array.from({ length: total }).map((_, idx) => {
        const itemNumber = idx + 1;
        if (itemNumber === activeIndex) {
          return (
            <span
              key={idx}
              className="h-1 w-9 rounded-full bg-[#4B193E] transition-all duration-300"
            />
          );
        }
        return (
          <span
            key={idx}
            className="h-1 w-1 rounded-full bg-[#4B193E] transition-all duration-300"
          />
        );
      })}
    </div>
  );
}
