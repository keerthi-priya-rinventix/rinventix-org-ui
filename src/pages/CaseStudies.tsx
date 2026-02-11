import {
  CaseStudyHeader,
  CaseStudyMeta,
  NewsletterCard,
  CaseStudyArticle,
} from '../components/case-study';

const HERO_IMAGE_SRC =
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80';

export function CaseStudies() {
  return (
    <main className="min-h-screen pt-14 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CaseStudyHeader
          tag="Product"
          readTime="8 min read"
          title="Enabling natural language access to data, documents, and communications through a secure, AI-powered platform."
          subtitle="Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty? Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          heroImageSrc={HERO_IMAGE_SRC}
          heroImageAlt="Mountains and sky"
        />

        <CaseStudyMeta authorName="Alec Whitten" publishedDate="17 Jan 2022" />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 pt-8">
          <CaseStudyArticle />
          <div>
            <NewsletterCard />
          </div>
        </div>
      </div>
    </main>
  );
}
