import Image from 'next/image';
import Link from 'next/link';
import type { HeroSection } from '@/lib/types';

export default function HeroSection({ hero_section }: { hero_section?: HeroSection }) {
  const { heading, subheading, hero_image, primary_cta, secondary_cta } = hero_section || {};

  return (
    <section className="relative overflow-hidden py-20 lg:py-28" style={{ backgroundColor: '#053947' }}>
      {/* Background image */}
      {hero_image?.url && (
        <div className="absolute inset-0 z-0">
          <Image
            src={hero_image.url}
            alt={heading || 'Hero'}
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {heading && (
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 font-heading">
              {heading}
            </h1>
          )}
          {subheading && (
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              {subheading}
            </p>
          )}
          <div className="flex flex-wrap gap-4">
            {primary_cta?.button_text && (
              <Link
                href={primary_cta?.button_url || '#'}
                className="inline-flex items-center px-8 py-3 text-sm font-semibold text-white rounded-full transition-all hover:opacity-90"
                style={{ backgroundColor: '#0a83a0' }}
              >
                {primary_cta.button_text}
              </Link>
            )}
            {secondary_cta?.button_text && (
              <Link
                href={secondary_cta?.button_url || '#'}
                className="inline-flex items-center px-8 py-3 text-sm font-semibold text-white rounded-full border-2 border-white/40 hover:border-white transition-all"
              >
                {secondary_cta.button_text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}