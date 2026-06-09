import { getEntry } from '@/lib/contentstack-api';
import type { ArticleEntry } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

export default async function ArticlesPage() {
  let articles: ArticleEntry[] = [];

  try {
    const result = await getEntry({ contentTypeUid: 'article' });
    const data = result as ArticleEntry[][];
    articles = Array.isArray(data?.[0]) ? data[0] : [];
  } catch (error) {
    console.error('Error fetching articles:', error);
  }

  return (
    <div>
      {/* Page Header */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#053947' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-heading">
            Articles
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Insights, best practices, and thought leadership on business agility and SAFe.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {articles.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500">No articles found. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, idx) => (
                <article
                  key={idx}
                  className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col"
                >
                  {article?.featured_image?.url && (
                    <div className="relative h-48">
                      <Image
                        src={article.featured_image.url}
                        alt={article?.title || ''}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      {article?.category && (
                        <span
                          className="text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded-full"
                          style={{ backgroundColor: '#e0f4f8', color: '#0a83a0' }}
                        >
                          {article.category}
                        </span>
                      )}
                      {article?.published_date && (
                        <span className="text-xs text-gray-400">
                          {new Date(article.published_date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                      )}
                    </div>
                    {article?.title && (
                      <h2
                        className="text-base font-semibold mb-2 font-heading line-clamp-2"
                        style={{ color: '#053947' }}
                      >
                        {article.title}
                      </h2>
                    )}
                    {article?.excerpt && (
                      <p
                        className="text-sm leading-relaxed flex-1 line-clamp-3 mb-4"
                        style={{ color: '#343333' }}
                      >
                        {article.excerpt}
                      </p>
                    )}
                    <div className="flex items-center justify-between mt-auto">
                      {article?.author_name && (
                        <span className="text-xs text-gray-500">{article.author_name}</span>
                      )}
                      {article?.url && (
                        <Link
                          href={article.url}
                          className="text-sm font-semibold inline-flex items-center gap-1 transition-colors"
                          style={{ color: '#0a83a0' }}
                        >
                          Read more
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}