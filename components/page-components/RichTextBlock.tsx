interface RichTextBlockProps {
  data?: {
    heading?: string;
    content?: string;
  };
}

export default function RichTextBlock({ data }: RichTextBlockProps) {
  const { heading, content } = data || {};

  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {heading && (
          <h2
            className="font-bold mb-6 font-heading"
            style={{ color: '#053947', fontSize: '26.4px', lineHeight: '36.3px' }}
          >
            {heading}
          </h2>
        )}
        {content && (
          <div
            className="prose max-w-none text-base leading-relaxed"
            style={{ color: '#343333' }}
            dangerouslySetInnerHTML={{ __html: typeof content === 'string' ? content : '' }}
          />
        )}
      </div>
    </section>
  );
}