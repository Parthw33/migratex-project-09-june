import Image from 'next/image';
import Link from 'next/link';
import type { FeatureCardsGrid } from '@/lib/types';

export default function FeatureCardsGrid({ data }: { data?: FeatureCardsGrid }) {
  const { section_heading, section_subheading, feature_cards } = data || {};

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(section_heading || section_subheading) && (
          <div className="text-center mb-12">
            {section_heading && (
              <h2
                className="font-bold mb-4 font-heading"
                style={{ color: '#053947', fontSize: '26.4px', lineHeight: '36.3px' }}
              >
                {section_heading}
              </h2>
            )}
            {section_subheading && (
              <p className="text-base max-w-2xl mx-auto" style={{ color: '#343333' }}>
                {section_subheading}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(feature_cards || []).map?.((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow flex flex-col"
            >
              {card?.card_image?.url && (
                <div className="mb-4 h-48 relative rounded-lg overflow-hidden">
                  <Image
                    src={card.card_image.url}
                    alt={card?.card_title || ''}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              {card?.card_title && (
                <h3
                  className="text-lg font-semibold mb-2 font-heading"
                  style={{ color: '#053947' }}
                >
                  {card.card_title}
                </h3>
              )}
              {card?.card_description && (
                <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: '#343333' }}>
                  {card.card_description}
                </p>
              )}
              {card?.card_link?.link_text && (
                <Link
                  href={card?.card_link?.link_url || '#'}
                  className="text-sm font-semibold inline-flex items-center gap-1 mt-auto transition-colors"
                  style={{ color: '#0a83a0' }}
                >
                  {card.card_link.link_text}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}