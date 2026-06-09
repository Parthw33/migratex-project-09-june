import Link from 'next/link';
import type { AnnouncementBanner } from '@/lib/types';

export default function AnnouncementBanner({ data }: { data?: AnnouncementBanner }) {
  const { banner_text, banner_cta } = data || {};

  if (!banner_text) return null;

  return (
    <div className="py-3 px-4 text-center text-sm text-white font-medium" style={{ backgroundColor: '#0a83a0' }}>
      <span>{banner_text}</span>
      {banner_cta?.button_text && (
        <Link
          href={banner_cta?.button_url || '#'}
          className="ml-3 inline-flex items-center underline font-semibold hover:no-underline"
        >
          {banner_cta.button_text} →
        </Link>
      )}
    </div>
  );
}