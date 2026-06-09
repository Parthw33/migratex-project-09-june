import Image from 'next/image';
import Link from 'next/link';
import type { TwoColumnContentBlock } from '@/lib/types';

export default function TwoColumnContentBlock({ data }: { data?: TwoColumnContentBlock }) {
  const { heading, left_column_content, right_column_content, section_image, cta_button } = data || {};

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {heading && (
          <h2
            className="font-bold mb-10 font-heading"
            style={{ color: '#053947', fontSize: '26.4px', lineHeight: '36.3px' }}
          >
            {heading}
          </h2>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            {left_column_content && (
              <div
                className="prose max-w-none text-base leading-relaxed"
                style={{ color: '#343333' }}
                dangerouslySetInnerHTML={{ __html: typeof left_column_content === 'string' ? left_column_content : '' }}
              />
            )}
          </div>
          <div>
            {section_image?.url ? (
              <div className="relative h-72 lg:h-96 rounded-xl overflow-hidden">
                <Image
                  src={section_image.url}
                  alt={heading || 'Content'}
                  fill
                  className="object-cover"
                />
              </div>
            ) : right_column_content ? (
              <div
                className="prose max-w-none text-base leading-relaxed"
                style={{ color: '#343333' }}
                dangerouslySetInnerHTML={{ __html: typeof right_column_content === 'string' ? right_column_content : '' }}
              />
            ) : null}
          </div>
        </div>
        {cta_button?.button_text && (
          <div className="mt-8">
            <Link
              href={cta_button?.button_url || '#'}
              className="inline-flex items-center px-8 py-3 text-sm font-semibold text-white rounded-full transition-all hover:opacity-90"
              style={{ backgroundColor: '#053947' }}
            >
              {cta_button.button_text}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}