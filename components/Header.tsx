'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import type { HeaderEntry } from '@/lib/types';

export default function Header(props: HeaderEntry) {
  const {
    logo,
    logo_alt_text,
    logo_link_url,
    primary_navigation,
    header_cta_buttons,
  } = props || {};

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={logo_link_url || '/'}>
              {logo?.url ? (
                <Image
                  src={logo.url}
                  alt={logo_alt_text || 'Logo'}
                  width={160}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              ) : (
                <span className="text-xl font-bold text-primary font-heading" style={{ color: '#053947' }}>
                  Scaled Agile
                </span>
              )}
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {(primary_navigation || []).map?.((item, idx) => (
              <div key={idx} className="relative group">
                <button
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-secondary rounded transition-colors"
                  style={{ color: '#343333' }}
                  onMouseEnter={() => setOpenDropdown(idx)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                >
                  {item?.nav_label || 'Menu'}
                  {(item?.dropdown_items?.length ?? 0) > 0 && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                {(item?.dropdown_items?.length ?? 0) > 0 && openDropdown === idx && (
                  <div
                    className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-2"
                    onMouseEnter={() => setOpenDropdown(idx)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {(item?.dropdown_items || []).map?.((drop, dIdx) => (
                      <Link
                        key={dIdx}
                        href={drop?.item_url || '#'}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors"
                      >
                        <div className="font-medium">{drop?.item_label || ''}</div>
                        {drop?.item_description && (
                          <div className="text-xs text-gray-500 mt-0.5">{drop.item_description}</div>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {(header_cta_buttons || []).map?.((btn, idx) => (
              <Link
                key={idx}
                href={btn?.button_url || '#'}
                className={
                  btn?.button_style === 'primary' || idx === (header_cta_buttons?.length ?? 0) - 1
                    ? 'px-5 py-2 text-sm font-semibold text-white rounded-full transition-colors'
                    : 'px-5 py-2 text-sm font-semibold rounded-full border transition-colors'
                }
                style={
                  btn?.button_style === 'primary' || idx === (header_cta_buttons?.length ?? 0) - 1
                    ? { backgroundColor: '#053947', color: '#fff' }
                    : { borderColor: '#053947', color: '#053947' }
                }
              >
                {btn?.button_text || 'Get Started'}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-2">
          {(primary_navigation || []).map?.((item, idx) => (
            <div key={idx}>
              <Link
                href={item?.nav_url || '#'}
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-secondary rounded"
                onClick={() => setMobileOpen(false)}
              >
                {item?.nav_label || 'Menu'}
              </Link>
              {(item?.dropdown_items || []).map?.((drop, dIdx) => (
                <Link
                  key={dIdx}
                  href={drop?.item_url || '#'}
                  className="block px-6 py-1.5 text-sm text-gray-600 hover:text-secondary"
                  onClick={() => setMobileOpen(false)}
                >
                  {drop?.item_label || ''}
                </Link>
              ))}
            </div>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            {(header_cta_buttons || []).map?.((btn, idx) => (
              <Link
                key={idx}
                href={btn?.button_url || '#'}
                className="block text-center px-5 py-2 text-sm font-semibold rounded-full"
                style={
                  btn?.button_style === 'primary' || idx === (header_cta_buttons?.length ?? 0) - 1
                    ? { backgroundColor: '#053947', color: '#fff' }
                    : { borderColor: '#053947', color: '#053947', border: '2px solid #053947' }
                }
                onClick={() => setMobileOpen(false)}
              >
                {btn?.button_text || 'Get Started'}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}