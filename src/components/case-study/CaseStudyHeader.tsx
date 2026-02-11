export interface CaseStudyHeaderProps {
  tag: string;
  readTime: string;
  title: string;
  subtitle: string;
  heroImageSrc: string;
  heroImageAlt?: string;
}

export function CaseStudyHeader({
  tag,
  readTime,
  title,
  subtitle,
  heroImageSrc,
  heroImageAlt = '',
}: CaseStudyHeaderProps) {
  return (
    <header className="w-full">
      <div className="flex items-center gap-2 text-sm mb-4">
        <span className="text-[#0F9DF3] font-medium">{tag}</span>
        <span className="text-gray-400" aria-hidden>
          •
        </span>
        <span className="text-black">{readTime}</span>
      </div>
      <h1 className="text-3xl lg:text-4xl font-bold text-black leading-tight tracking-tight mb-4">
        {title}
      </h1>
      <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-3xl">
        {subtitle}
      </p>
      <div className="w-full rounded-lg overflow-hidden">
        <img
          src={heroImageSrc}
          alt={heroImageAlt}
          className="w-full h-auto object-cover"
        />
      </div>
    </header>
  );
}
