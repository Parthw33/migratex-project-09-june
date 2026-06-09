import Image from 'next/image';

interface ImageBlockProps {
  data?: {
    image?: { url?: string };
    caption?: string;
    alt_text?: string;
  };
}

export default function ImageBlock({ data }: ImageBlockProps) {
  const { image, caption, alt_text } = data || {};

  if (!image?.url) return null;

  return (
    <section className="py-8 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <figure>
          <div className="relative rounded-xl overflow-hidden" style={{ minHeight: '300px' }}>
            <Image
              src={image.url}
              alt={alt_text || caption || ''}
              fill
              className="object-cover"
            />
          </div>
          {caption && (
            <figcaption className="text-sm text-center mt-3" style={{ color: '#343333' }}>
              {caption}
            </figcaption>
          )}
        </figure>
      </div>
    </section>
  );
}