'use client';

import { useState } from 'react';

interface FaqItem {
  question?: string;
  answer?: string;
}

interface AccordionFaqBlockProps {
  data?: {
    section_heading?: string;
    faq_items?: FaqItem[];
  };
}

export default function AccordionFaqBlock({ data }: AccordionFaqBlockProps) {
  const { section_heading, faq_items } = data || {};
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const items = Array.isArray(faq_items) ? faq_items : [];
  if (items.length === 0) return null;

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {section_heading && (
          <h2
            className="font-bold mb-10 text-center font-heading"
            style={{ color: '#053947', fontSize: '26.4px', lineHeight: '36.3px' }}
          >
            {section_heading}
          </h2>
        )}
        <div className="space-y-3">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-semibold text-sm transition-colors"
                style={{ color: '#053947' }}
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                aria-expanded={openIdx === idx}
              >
                <span>{item?.question || ''}</span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIdx === idx && item?.answer && (
                <div
                  className="px-6 pb-5 text-sm leading-relaxed border-t border-gray-100 pt-4 prose max-w-none"
                  style={{ color: '#343333' }}
                  dangerouslySetInnerHTML={{ __html: typeof item.answer === 'string' ? item.answer : '' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}