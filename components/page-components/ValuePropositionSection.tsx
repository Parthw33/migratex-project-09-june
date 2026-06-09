import Link from 'next/link';
import type { ValuePropositionSection } from '@/lib/types';

export default function ValuePropositionSection({ data }: { data?: ValuePropositionSection }) {
  const { section_heading, body_content, cta_button } = data || {};

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {section_heading && (
          <h2
            className="text-2xl lg:text-3xl font-bold mb-6 font-heading"
            style={{ color: '#053947', fontSize: '26.4px', lineHeight: '36.3px' }}
          >
            {section_heading}
          </h2>
        )}
        {body_content && (
          <div
            className="text-base leading-relaxed mb-8 prose max-w-none"
            style={{ color: '#343333' }}
            dangerouslySetInnerHTML={{ __html: typeof body_content === 'string' ? body_content : '' }}
          />
        )}
        {cta_button?.button_text && (
          <Link
            href={cta_button?.button_url || '#'}
            className="inline-flex items-center px-8 py-3 text-sm font-semibold text-white rounded-full transition-all hover:opacity-90"
            style={{ backgroundColor: '#053947' }}
          >
            {cta_button.button_text}
          </Link>
        )}
      </div>
    </section>
  );
}