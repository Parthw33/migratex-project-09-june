import { notFound } from 'next/navigation';
import { getEntryByUrl } from '@/lib/contentstack-api';
import type { ArticleEntry } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  let entry: ArticleEntry | null = null;

  try {
    const result = await getEntryByUrl({
      entryUrl: `/articles/${params.slug}`,
      contentTypeUid: 'article',
      jsonRtePath: ['body_content'],
    });
    entry = result as ArticleEntry;
  } catch (error) {
    console.error('Error fetching article:', error);
  }

  if (!entry) return notFound();

  return (
    <div>
      {/* Article Header */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#053947' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {entry?.category && (
            <span
              className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4"
              style={{ backgroundColor: 'rgba(10,131,160,0.3)', color: '#7dd3e8' }}
            >
              {entry.category}
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
          <div className="flex items-center gap-4 text-sm text-white/60">
            {entry?.author_name && <span>{entry.author_name}</span>}
            {entry?.published_date && (
              <span>
                {new Date(entry.published_date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {entry?.featured_image?.url && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
          <div className="relative h-72 lg:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={entry.featured_image.url}
              alt={entry?.title || ''}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* Article Body */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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

      {/* Related Articles */}
      {(entry?.related_articles?.length ?? 0) > 0 && (
        <section className="py-12 bg-gray-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold mb-6 font-heading" style={{ color: '#053947' }}>
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(entry.related_articles || []).map?.((related, idx) => (
                <Link
                  key={idx}
                  href={related?.url || '#'}
                  className="block bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md transition-shadow"
                >
                  <h3
                    className="font-semibold text-sm mb-1 font-heading"
                    style={{ color: '#053947' }}
                  >
                    {related?.title || ''}
                  </h3>
                  {related?.excerpt && (
                    <p className="text-xs line-clamp-2" style={{ color: '#343333' }}>
                      {related.excerpt}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back Link */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
          style={{ color: '#0a83a0' }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Articles
        </Link>
      </div>
    </div>
  );
}