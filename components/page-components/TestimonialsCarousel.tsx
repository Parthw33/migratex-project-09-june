'use client';

import { useState } from 'react';
import type { TestimonialsCarousel } from '@/lib/types';

export default function TestimonialsCarousel({ data }: { data?: TestimonialsCarousel }) {
  const { section_heading, testimonials } = data || {};
  const [current, setCurrent] = useState(0);
  const items = Array.isArray(testimonials) ? testimonials : [];
  const total = items.length;

  if (total === 0) return null;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);
  const item = items[current];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {section_heading && (
          <h2
            className="text-center font-bold mb-12 font-heading"
            style={{ color: '#053947', fontSize: '26.4px', lineHeight: '36.3px' }}
          >
            {section_heading}
          </h2>
        )}

        <div
          className="relative rounded-2xl p-8 lg:p-12 text-center"
          style={{ backgroundColor: '#053947' }}
        >
          <svg
            className="w-10 h-10 mx-auto mb-6 opacity-40 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          {item?.quote && (
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8 italic">
              &ldquo;{item.quote}&rdquo;
            </p>
          )}
          <div>
            {item?.author_name && (
              <p className="text-white font-semibold font-heading">{item.author_name}</p>
            )}
            {(item?.author_title || item?.company_name) && (
              <p className="text-white/60 text-sm mt-1">
                {[item?.author_title, item?.company_name].filter(Boolean).join(', ')}
              </p>
            )}
          </div>

          {total > 1 && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Previous"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="flex gap-2">
                {items.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`w-2 h-2 rounded-full transition-colors ${idx === current ? 'bg-white' : 'bg-white/30'}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Next"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}