import Link from 'next/link';
import Image from 'next/image';
import type { FooterEntry } from '@/lib/types';

export default function Footer(props: FooterEntry) {
  const {
    footer_logo,
    footer_logo_alt_text,
    footer_navigation_columns,
    social_links,
    legal_links,
    copyright_text,
  } = props || {};

  return (
    <footer className="text-white" style={{ backgroundColor: '#053947' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo Column */}
          <div className="lg:col-span-1">
            {footer_logo?.url ? (
              <Image
                src={footer_logo.url}
                alt={footer_logo_alt_text || 'Logo'}
                width={160}
                height={40}
                className="h-10 w-auto object-contain brightness-0 invert mb-4"
              />
            ) : (
              <div className="text-xl font-bold font-heading mb-4">Scaled Agile</div>
            )}
            {/* Social Links */}
            {(social_links?.length ?? 0) > 0 && (
              <div className="flex gap-3 mt-4">
                {(social_links || []).map?.((s, idx) => (
                  <a
                    key={idx}
                    href={s?.platform_url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-xs font-bold transition-colors"
                    title={s?.platform_name || ''}
                  >
                    {s?.platform_name?.[0]?.toUpperCase() || 'S'}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Nav Columns */}
          {(footer_navigation_columns || []).map?.((col, idx) => (
            <div key={idx}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4">
                {col?.column_heading || ''}
              </h4>
              <ul className="space-y-2">
                {(col?.footer_links || []).map?.((link, lIdx) => (
                  <li key={lIdx}>
                    <Link
                      href={link?.link_url || '#'}
                      className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {link?.link_label || ''}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">
            {copyright_text || `© ${new Date().getFullYear()} Scaled Agile, Inc. All rights reserved.`}
          </p>
          <div className="flex flex-wrap gap-4">
            {(legal_links || []).map?.((link, idx) => (
              <Link
                key={idx}
                href={link?.link_url || '#'}
                className="text-xs text-white/60 hover:text-white transition-colors"
              >
                {link?.link_label || ''}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}