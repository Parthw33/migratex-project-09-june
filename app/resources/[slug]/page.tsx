import { notFound } from 'next/navigation';
import { getEntryByUrl } from '@/lib/contentstack-api';
import type { ResourceEntry } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

export default async function ResourcePage({
  params,
}: {
  params: { slug: string };
}) {
  let entry: ResourceEntry | null = null;

  try {
    const result = await getEntryByUrl({
      entryUrl: `/resources/${params.slug}`,
      contentTypeUid: 'resource',
      jsonRtePath: ['body_content'],
    });
    entry = result as ResourceEntry;
  } catch (error) {
    console.error('Error fetching resource:', error);
  }

  if (!entry) return notFound();

  return (
    <div>
      {/* Resource Header */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#053947' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {entry?.resource_type && (
            <span
              className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4"
              style={{ backgroundColor: 'rgba(10,131,160,0.3)', color: '#7dd3e8' }}
            >
              {entry.resource_type}
            </span>
          )}
          {entry?.title && (
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-heading">
              {entry.title}
            </h1>
          )}
          {entry?.subtitle && (
            <p className="text-lg text-white/80 mb-6">{entry.subtitle}</p>
          )}
          <div className="flex flex-wrap gap-4">
            {entry?.cta_button?.button_text && (
              <Link
                href={entry.cta_button?.button_url || '#'}
                className="inline-flex items-center px-8 py-3 text-sm font-semibold text-white rounded-full transition-all hover:opacity-90"
                style={{ backgroundColor: '#0a83a0' }}
              >
                {entry.cta_button.button_text}
              </Link>
            )}
            {entry?.downloadable_file?.url && (
              <a
                href={entry.downloadable_file.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold text-white rounded-full border-2 border-white/40 hover:border-white transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Thumbnail */}
      {entry?.thumbnail_image?.url && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
          <div className="relative h-72 lg:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={entry.thumbnail_image.url}
              alt={entry?.title || ''}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* Body Content */}
      {(entry?.description || entry?.body_content) && (
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {entry?.description && !entry?.body_content && (
            <p className="text-base leading-relaxed mb-6" style={{ color: '#343333' }}>
              {entry.description}
            </p>
          )}
          {entry?.body_content && (
            <div
              className="prose prose-lg max-w-none"
              style={{ color: '#343333' }}
              dangerouslySetInnerHTML={{
                __html: typeof entry.body_content === 'string' ? entry.body_content : '',
              }}
            />
          )}
        </article>
      )}

      {/* Back Link */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-100">
        <Link
          href="/resources"
          className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
          style={{ color: '#0a83a0' }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Resources
        </Link>
      </div>
    </div>
  );
}