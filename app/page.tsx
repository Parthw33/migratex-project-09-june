import { notFound } from 'next/navigation';
import { getEntryByUrl } from '@/lib/contentstack-api';
import type { HomePageEntry } from '@/lib/types';
import HeroSection from '@/components/page-components/HeroSection';
import RenderComponents from '@/components/RenderComponents';

export default async function HomePage() {
  let entry: HomePageEntry | null = null;

  try {
    const result = await getEntryByUrl({
      entryUrl: '/',
      contentTypeUid: 'home_page',
      jsonRtePath: [
        'page_sections.value_proposition_section.body_content',
        'page_sections.two_column_content_block.left_column_content',
        'page_sections.two_column_content_block.right_column_content',
      ],
    });
    entry = result as HomePageEntry;
  } catch (error) {
    console.error('Error fetching home page:', error);
  }

  if (!entry) {
    return (
      <div className="min-h-screen flex flex-col">
        {/* Fallback Hero */}
        <section className="py-20 lg:py-28 flex-1" style={{ backgroundColor: '#053947' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 font-heading">
                Achieving Business Agility with SAFe
              </h1>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                The Scaled Agile Framework® (SAFe®) helps businesses respond faster, work
                more productively, and improve business outcomes.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/resources"
                  className="inline-flex items-center px-8 py-3 text-sm font-semibold text-white rounded-full transition-all hover:opacity-90"
                  style={{ backgroundColor: '#0a83a0' }}
                >
                  Explore Resources
                </a>
                <a
                  href="/articles"
                  className="inline-flex items-center px-8 py-3 text-sm font-semibold text-white rounded-full border-2 border-white/40 hover:border-white transition-all"
                >
                  Read Articles
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Fallback Feature Cards */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8 font-heading text-center" style={{ color: '#053947' }}>
              Why SAFe?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Business Agility', desc: 'Adapt quickly to market changes and customer needs.' },
                { title: 'Lean-Agile Principles', desc: 'Apply proven lean and agile practices at enterprise scale.' },
                { title: 'Continuous Delivery', desc: 'Build and deploy high-quality solutions continuously.' },
              ].map((card, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-100 p-6">
                  <h3 className="text-lg font-semibold mb-2 font-heading" style={{ color: '#053947' }}>
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#343333' }}>
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      {entry?.hero_section && (
        <HeroSection hero_section={entry.hero_section} />
      )}
      <RenderComponents pageComponents={entry?.page_sections || []} />
    </div>
  );
}