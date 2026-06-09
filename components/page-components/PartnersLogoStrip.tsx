import Image from 'next/image';
import Link from 'next/link';
import type { PartnersLogoStrip } from '@/lib/types';

export default function PartnersLogoStrip({ data }: { data?: PartnersLogoStrip }) {
  const { section_heading, partner_logos } = data || {};

  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {section_heading && (
          <h2
            className="text-center text-sm font-semibold uppercase tracking-wider mb-8"
            style={{ color: '#053947' }}
          >
            {section_heading}
          </h2>
        )}
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {(partner_logos || []).map?.((partner, idx) => (
            <div key={idx}>
              {partner?.partner_url ? (
                <a
                  href={partner.partner_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block opacity-60 hover:opacity-100 transition-opacity"
                >
                  {partner?.partner_logo?.url ? (
                    <Image
                      src={partner.partner_logo.url}
                      alt={partner?.partner_name || ''}
                      width={120}
                      height={40}
                      className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                    />
                  ) : (
                    <span className="text-sm font-medium text-gray-500">{partner?.partner_name}</span>
                  )}
                </a>
              ) : partner?.partner_logo?.url ? (
                <Image
                  src={partner.partner_logo.url}
                  alt={partner?.partner_name || ''}
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain grayscale opacity-60"
                />
              ) : (
                <span className="text-sm font-medium text-gray-500">{partner?.partner_name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}