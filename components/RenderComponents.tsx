import HeroSection from './page-components/HeroSection';
import ValuePropositionSection from './page-components/ValuePropositionSection';
import FeatureCardsGrid from './page-components/FeatureCardsGrid';
import TestimonialsCarousel from './page-components/TestimonialsCarousel';
import StatsBanner from './page-components/StatsBanner';
import TwoColumnContentBlock from './page-components/TwoColumnContentBlock';
import PartnersLogoStrip from './page-components/PartnersLogoStrip';
import AnnouncementBanner from './page-components/AnnouncementBanner';
import ResourcesSection from './page-components/ResourcesSection';
import RichTextBlock from './page-components/RichTextBlock';
import ImageBlock from './page-components/ImageBlock';
import CtaBlock from './page-components/CtaBlock';
import AccordionFaqBlock from './page-components/AccordionFaqBlock';

interface RenderComponentsProps {
  pageComponents?: Record<string, any>[];
  heroSection?: any;
}

const componentMap: Record<string, React.ComponentType<any>> = {
  value_proposition_section: (props: any) => <ValuePropositionSection data={props} />,
  feature_cards_grid: (props: any) => <FeatureCardsGrid data={props} />,
  testimonials_carousel: (props: any) => <TestimonialsCarousel data={props} />,
  stats_banner: (props: any) => <StatsBanner data={props} />,
  two_column_content_block: (props: any) => <TwoColumnContentBlock data={props} />,
  partners_logo_strip: (props: any) => <PartnersLogoStrip data={props} />,
  announcement_banner: (props: any) => <AnnouncementBanner data={props} />,
  resources_section: (props: any) => <ResourcesSection data={props} />,
  rich_text_block: (props: any) => <RichTextBlock data={props} />,
  image_block: (props: any) => <ImageBlock data={props} />,
  cta_block: (props: any) => <CtaBlock data={props} />,
  accordion_faq_block: (props: any) => <AccordionFaqBlock data={props} />,
};

export default function RenderComponents({ pageComponents, heroSection }: RenderComponentsProps) {
  return (
    <>
      {heroSection && <HeroSection hero_section={heroSection} />}
      {(pageComponents || []).map?.((section, idx) => {
        if (!section || typeof section !== 'object') return null;
        const keys = Object.keys(section);
        return keys.map((key) => {
          const Component = componentMap[key];
          if (!Component) return null;
          const data = section[key];
          if (!data || typeof data !== 'object') return null;
          return <Component key={`${idx}-${key}`} {...data} />;
        });
      })}
    </>
  );
}