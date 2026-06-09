export interface Asset {
  uid?: string;
  url?: string;
  filename?: string;
  title?: string;
  content_type?: string;
}

export interface CtaButton {
  button_text?: string;
  button_url?: string;
  button_style?: string;
}

export interface NavDropdownItem {
  item_label?: string;
  item_url?: string;
  item_description?: string;
}

export interface PrimaryNavItem {
  nav_label?: string;
  nav_url?: string;
  dropdown_items?: NavDropdownItem[];
}

export interface HeaderCtaButton {
  button_text?: string;
  button_url?: string;
  button_style?: string;
}

export interface HeaderEntry {
  title?: string;
  logo?: Asset;
  logo_alt_text?: string;
  logo_link_url?: string;
  primary_navigation?: PrimaryNavItem[];
  header_cta_buttons?: HeaderCtaButton[];
}

export interface FooterLink {
  link_label?: string;
  link_url?: string;
}

export interface FooterNavColumn {
  column_heading?: string;
  footer_links?: FooterLink[];
}

export interface SocialLink {
  platform_name?: string;
  platform_url?: string;
}

export interface LegalLink {
  link_label?: string;
  link_url?: string;
}

export interface FooterEntry {
  title?: string;
  footer_logo?: Asset;
  footer_logo_alt_text?: string;
  footer_navigation_columns?: FooterNavColumn[];
  social_links?: SocialLink[];
  legal_links?: LegalLink[];
  copyright_text?: string;
}

export interface HeroSectionPrimaryCta {
  button_text?: string;
  button_url?: string;
  button_style?: string;
}

export interface HeroSectionSecondaryCta {
  button_text?: string;
  button_url?: string;
  button_style?: string;
}

export interface HeroSection {
  heading?: string;
  subheading?: string;
  hero_image?: Asset;
  primary_cta?: HeroSectionPrimaryCta;
  secondary_cta?: HeroSectionSecondaryCta;
}

export interface ValuePropositionSection {
  section_heading?: string;
  body_content?: string;
  cta_button?: CtaButton;
}

export interface FeatureCard {
  card_title?: string;
  card_description?: string;
  card_image?: Asset;
  card_link?: {
    link_text?: string;
    link_url?: string;
  };
}

export interface FeatureCardsGrid {
  section_heading?: string;
  section_subheading?: string;
  feature_cards?: FeatureCard[];
}

export interface Testimonial {
  quote?: string;
  author_name?: string;
  author_title?: string;
  company_name?: string;
}

export interface TestimonialsCarousel {
  section_heading?: string;
  testimonials?: Testimonial[];
}

export interface Stat {
  stat_value?: string;
  stat_label?: string;
}

export interface StatsBanner {
  section_heading?: string;
  stats?: Stat[];
}

export interface TwoColumnContentBlock {
  heading?: string;
  left_column_content?: string;
  right_column_content?: string;
  section_image?: Asset;
  cta_button?: CtaButton;
}

export interface PartnerLogo {
  partner_name?: string;
  partner_logo?: Asset;
  partner_url?: string;
}

export interface PartnersLogoStrip {
  section_heading?: string;
  partner_logos?: PartnerLogo[];
}

export interface AnnouncementBanner {
  banner_text?: string;
  banner_cta?: CtaButton;
}

export interface ResourcesSection {
  section_heading?: string;
  section_subheading?: string;
  resource_items?: ArticleEntry[];
  view_all_link?: {
    link_text?: string;
    link_url?: string;
  };
}

export interface PageSection {
  value_proposition_section?: ValuePropositionSection;
  feature_cards_grid?: FeatureCardsGrid;
  testimonials_carousel?: TestimonialsCarousel;
  stats_banner?: StatsBanner;
  two_column_content_block?: TwoColumnContentBlock;
  partners_logo_strip?: PartnersLogoStrip;
  announcement_banner?: AnnouncementBanner;
  resources_section?: ResourcesSection;
}

export interface HomePageEntry {
  title?: string;
  url?: string;
  hero_section?: HeroSection;
  page_sections?: PageSection[];
  meta_title?: string;
  meta_description?: string;
  og_image?: Asset;
  canonical_url?: string;
}

export interface ArticleEntry {
  title?: string;
  url?: string;
  subtitle?: string;
  published_date?: string;
  author_name?: string;
  category?: string;
  featured_image?: Asset;
  excerpt?: string;
  body_content?: string;
  related_articles?: ArticleEntry[];
  meta_title?: string;
  meta_description?: string;
  og_image?: Asset;
  canonical_url?: string;
}

export interface ResourceEntry {
  title?: string;
  url?: string;
  resource_type?: string;
  subtitle?: string;
  description?: string;
  thumbnail_image?: Asset;
  downloadable_file?: Asset;
  published_date?: string;
  body_content?: string;
  cta_button?: CtaButton;
  meta_title?: string;
  meta_description?: string;
  og_image?: Asset;
  canonical_url?: string;
}

export interface GeneralPageSection {
  rich_text_block?: {
    heading?: string;
    content?: string;
  };
  image_block?: {
    image?: Asset;
    caption?: string;
    alt_text?: string;
  };
  cta_block?: {
    heading?: string;
    subtext?: string;
    cta_button?: CtaButton;
  };
  accordion_faq_block?: {
    section_heading?: string;
    faq_items?: {
      question?: string;
      answer?: string;
    }[];
  };
}

export interface GeneralPageEntry {
  title?: string;
  url?: string;
  page_header?: {
    heading?: string;
    subheading?: string;
    header_image?: Asset;
  };
  page_sections?: GeneralPageSection[];
  meta_title?: string;
  meta_description?: string;
  og_image?: Asset;
  canonical_url?: string;
}