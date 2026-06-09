import Image from 'next/image';
import Link from 'next/link';
import type { ResourcesSection } from '@/lib/types';

export default function ResourcesSection({ data }: { data?: ResourcesSection }) {
  const { section_heading, section_subheading, resource_items, view_all_link } = data || {};

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            {section_heading && (
              <h2
                className="font-bold font-heading mb-3"
                style={{ color: '#053947', fontSize: '26.4px', lineHeight: '36.3px' }}
              >
                {section_heading}
              </h2>
            )}
            {section_subheading && (
              <p className="text-base max-w-2xl" style={{ color: '#343333' }}>
                {section_subheading}
              </p>
            )}
          </div>
          {view_all_link?.link_text && (
            <Link
              href={view_all_link?.link_url || '#'}
              className="text-sm font-semibold inline-flex items-center gap-1 whitespace-nowrap transition-colors"
              style={{ color: '#0a83a0' }}
            >
              {view_all_link.link_text}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(resource_items || []).map?.((item, idx) => (
            <article
              key={idx}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col"
            >
              {item?.featured_image?.url && (
                <div className="relative h-48">
                  <Image
                    src={item.featured_image.url}
                    alt={item?.title || ''}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-5 flex flex-col flex-1">
                {item?.category && (
                  <span
                    className="text-xs font-semibold uppercase tracking-wider mb-2"
                    style={{ color: '#0a83a0' }}
                  >
                    {item.category}
                  </span>
                )}
                {item?.title && (
                  <h3
                    className="text-base font-semibold mb-2 font-heading line-clamp-2"
                    style={{ color: '#053947' }}
                  >
                    {item.title}
                  </h3>
                )}
                {item?.excerpt && (
                  <p className="text-sm leading-relaxed flex-1 line-clamp-3 mb-4" style={{ color: '#343333' }}>
                    {item.excerpt}
                  </p>
                )}
                {item?.url && (
                  <Link
                    href={item.url}
                    className="text-sm font-semibold inline-flex items-center gap-1 mt-auto transition-colors"
                    style={{ color: '#0a83a0' }}
                  >
                    Read more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}