interface CaseStudySectionProps {
  title: string;
  children: React.ReactNode;
}

export function CaseStudySection({ title, children }: CaseStudySectionProps) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-black mb-4">{title}</h2>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </section>
  );
}

interface CaseStudySectionWithSubtitleProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export function CaseStudySectionWithSubtitle({
  title,
  subtitle,
  children,
}: CaseStudySectionWithSubtitleProps) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-black mb-2">{title}</h2>
      {subtitle && (
        <h3 className="text-lg font-bold text-black mb-4">{subtitle}</h3>
      )}
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </section>
  );
}
