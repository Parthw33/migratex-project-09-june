import { getEntry } from '@/lib/contentstack-api';
import type { ResourceEntry } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

export default async function ResourcesPage() {
  let resources: ResourceEntry[] = [];

  try {
    const result = await getEntry({ contentTypeUid: 'resource' });
    const data = result as ResourceEntry[][];
    resources = Array.isArray(data?.[0]) ? data[0] : [];
  } catch (error) {
    console.error('Error fetching resources:', error);
  }

  return (
    <div>
      {/* Page Header */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#053947' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-heading">
            Resources
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Guides, whitepapers, webinars, and tools to help you on your SAFe journey.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {resources.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500">No resources found. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col"
                >
                  {resource?.thumbnail_image?.url && (
                    <div className="relative h-48">
                      <Image
                        src={resource.thumbnail_image.url}
                        alt={resource?.title || ''}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-5 flex flex-col flex-1">
                    {resource?.resource_type && (
                      <span
                        className="text-xs font-semibold uppercase tracking-wider mb-2 px-2 py-1 rounded-full inline-block w-fit"
                        style={{ backgroundColor: '#e0f4f8', color: '#0a83a0' }}
                      >
                        {resource.resource_type}
                      </span>
                    )}
                    {resource?.title && (
                      <h2
                        className="text-base font-semibold mb-2 font-heading line-clamp-2"
                        style={{ color: '#053947' }}
                      >
                        {resource.title}
                      </h2>
                    )}
                    {resource?.subtitle && (
                      <p className="text-sm font-medium mb-2" style={{ color: '#0a83a0' }}>
                        {resource.subtitle}
                      </p>
                    )}
                    {resource?.description && (
                      <p
                        className="text-sm leading-relaxed flex-1 line-clamp-3 mb-4"
                        style={{ color: '#343333' }}
                      >
                        {resource.description}
                      </p>
                    )}
                    <div className="flex gap-3 mt-auto">
                      {resource?.url && (
                        <Link
                          href={resource.url}
                          className="text-sm font-semibold inline-flex items-center gap-1 transition-colors"
                          style={{ color: '#0a83a0' }}
                        >
                          Learn more
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      )}
                      {resource?.downloadable_file?.url && (
                        <a
                          href={resource.downloadable_file.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold inline-flex items-center gap-1 transition-colors"
                          style={{ color: '#053947' }}
                        >
                          Download
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}