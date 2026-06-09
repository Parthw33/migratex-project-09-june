import { notFound } from 'next/navigation';
import { getEntryByUrl } from '@/lib/contentstack-api';
import type { GeneralPageEntry } from '@/lib/types';
import Image from 'next/image';
import RenderComponents from '@/components/RenderComponents';

interface GeneralPageSection {
  rich_text_block?: { heading?: string; content?: string };
  image_block?: { image?: { url?: string }; caption?: string; alt_text?: string };
  cta_block?: { heading?: string; subtext?: string; cta_button?: { button_text?: string; button_url?: string; button_style?: string } };
  accordion_faq_block?: { section_heading?: string; faq_items?: { question?: string; answer?: string }[] };
}

export default async function DynamicPage({
  params,
}: {
  params: { page: string };
}) {
  let entry: GeneralPageEntry | null = null;

  try {
    const result = await getEntryByUrl({
      entryUrl: `/${params.page}`,
      contentTypeUid: 'general_page',
      jsonRtePath: [
        'page_sections.rich_text_block.content',
        'page_sections.accordion_faq_block.faq_items.answer',
      ],
    });
    entry = result as GeneralPageEntry;
  } catch (error) {
    console.error('Error fetching general page:', error);
  }

  if (!entry) return notFound();

  const { page_header, page_sections } = entry;

  return (
    <div>
      {/* Page Header */}
      {(page_header?.heading || page_header?.header_image?.url) && (
        <section
          className="relative py-16 lg:py-24"
          style={{ backgroundColor: '#053947' }}
        >
          {page_header?.header_image?.url && (
            <div className="absolute inset-0 z-0">
              <Image
                src={page_header.header_image.url}
                alt={page_header?.heading || ''}
                fill
                className="object-cover opacity-20"
                priority
              />
            </div>
          )}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {page_header?.heading && (
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-heading">
                {page_header.heading}
              </h1>
            )}
            {page_header?.subheading && (
              <p className="text-lg text-white/80 max-w-2xl">
                {page_header.subheading}
              </p>
            )}
          </div>
        </section>
      )}

      <RenderComponents pageComponents={page_sections as Record<string, any>[]} />
    </div>
  );
}