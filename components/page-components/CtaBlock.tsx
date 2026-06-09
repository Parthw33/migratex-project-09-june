import Link from 'next/link';

interface CtaBlockProps {
  data?: {
    heading?: string;
    subtext?: string;
    cta_button?: {
      button_text?: string;
      button_url?: string;
      button_style?: string;
    };
  };
}

export default function CtaBlock({ data }: CtaBlockProps) {
  const { heading, subtext, cta_button } = data || {};

  return (
    <section className="py-16 lg:py-20" style={{ backgroundColor: '#053947' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {heading && (
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-heading">
            {heading}
          </h2>
        )}
        {subtext && (
          <p className="text-white/80 mb-8 text-base leading-relaxed">{subtext}</p>
        )}
        {cta_button?.button_text && (
          <Link
            href={cta_button?.button_url || '#'}
            className="inline-flex items-center px-8 py-3 text-sm font-semibold rounded-full text-white transition-all hover:opacity-90"
            style={{ backgroundColor: '#0a83a0' }}
          >
            {cta_button.button_text}
          </Link>
        )}
      </div>
    </section>
  );
}