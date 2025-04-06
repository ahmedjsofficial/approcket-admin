import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsBlogs extends Struct.ComponentSchema {
  collectionName: 'components_components_blogs';
  info: {
    displayName: 'Blogs';
  };
  attributes: {
    blog_image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    category_name: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsBrands extends Struct.ComponentSchema {
  collectionName: 'components_components_brands';
  info: {
    description: '';
    displayName: 'Brands';
  };
  attributes: {
    brand_image: Schema.Attribute.Media<'images' | 'files'>;
    short_text: Schema.Attribute.String;
  };
}

export interface ComponentsFooterColumns extends Struct.ComponentSchema {
  collectionName: 'components_components_footer_columns';
  info: {
    displayName: 'Footer Columns';
  };
  attributes: {
    footer_links: Schema.Attribute.Component<'components.footer-links', true>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsFooterLinks extends Struct.ComponentSchema {
  collectionName: 'components_components_footer_links';
  info: {
    displayName: 'Footer Links';
  };
  attributes: {
    text: Schema.Attribute.String;
    url: Schema.Attribute.Text;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    description: '';
    displayName: 'Button';
  };
  attributes: {
    bg_color: Schema.Attribute.String;
    color: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ComponentsPortfolio extends Struct.ComponentSchema {
  collectionName: 'components_components_portfolios';
  info: {
    description: '';
    displayName: 'Portfolio';
  };
  attributes: {
    cover_image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsServices extends Struct.ComponentSchema {
  collectionName: 'components_components_services';
  info: {
    displayName: 'Services';
  };
  attributes: {
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsTags extends Struct.ComponentSchema {
  collectionName: 'components_components_tags';
  info: {
    displayName: 'tags';
  };
  attributes: {
    tag_name: Schema.Attribute.String;
  };
}

export interface ComponentsTeam extends Struct.ComponentSchema {
  collectionName: 'components_components_teams';
  info: {
    description: '';
    displayName: 'Team';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    designation: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface ComponentsTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_components_testimonials';
  info: {
    displayName: 'Testimonial';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    Team: Schema.Attribute.Component<'components.team', false>;
    text: Schema.Attribute.Text;
  };
}

export interface LayoutsAwards extends Struct.ComponentSchema {
  collectionName: 'components_layouts_awards';
  info: {
    displayName: 'Awards';
  };
  attributes: {
    awards: Schema.Attribute.Component<'components.brands', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutsBlogs extends Struct.ComponentSchema {
  collectionName: 'components_layouts_blogs';
  info: {
    displayName: 'Blogs';
  };
  attributes: {
    blogs: Schema.Attribute.Component<'components.blogs', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutsBrandsSection extends Struct.ComponentSchema {
  collectionName: 'components_layouts_brands_sections';
  info: {
    displayName: 'Brands Section';
  };
  attributes: {
    brands: Schema.Attribute.Component<'components.brands', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutsFooter extends Struct.ComponentSchema {
  collectionName: 'components_layouts_footers';
  info: {
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    company_description: Schema.Attribute.Text;
    contact_info: Schema.Attribute.Component<'components.footer-links', true>;
    copyright: Schema.Attribute.Text;
    footer_column: Schema.Attribute.Component<
      'components.footer-columns',
      true
    >;
    legal_links: Schema.Attribute.Component<'components.footer-links', true>;
    logo: Schema.Attribute.Media<'images' | 'files'>;
    social_links: Schema.Attribute.Component<'components.footer-links', true>;
  };
}

export interface LayoutsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layouts_hero_sections';
  info: {
    description: '';
    displayName: 'hero section';
  };
  attributes: {
    cover_video: Schema.Attribute.Media<'files' | 'videos'>;
    link: Schema.Attribute.Component<'components.link', false>;
    short_text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LayoutsNavbar extends Struct.ComponentSchema {
  collectionName: 'components_layouts_navbars';
  info: {
    displayName: 'Navbar';
  };
  attributes: {
    call_to_action: Schema.Attribute.Component<'components.link', false>;
    logo: Schema.Attribute.Media<'images' | 'files'>;
    nav_links: Schema.Attribute.Component<'components.footer-links', true>;
  };
}

export interface LayoutsNewsletter extends Struct.ComponentSchema {
  collectionName: 'components_layouts_newsletters';
  info: {
    displayName: 'Newsletter';
  };
  attributes: {
    button: Schema.Attribute.Component<'components.link', false>;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface LayoutsOurExperts extends Struct.ComponentSchema {
  collectionName: 'components_layouts_our_experts';
  info: {
    displayName: 'Our Experts';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    services: Schema.Attribute.Component<'components.services', true>;
    short_text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LayoutsOurWork extends Struct.ComponentSchema {
  collectionName: 'components_layouts_our_works';
  info: {
    description: '';
    displayName: 'Our Work';
  };
  attributes: {
    button: Schema.Attribute.Component<'components.link', false>;
    portfolio: Schema.Attribute.Component<'components.portfolio', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_layouts_testimonials';
  info: {
    description: '';
    displayName: 'Testimonials';
  };
  attributes: {
    testimonial: Schema.Attribute.Component<'components.testimonial', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.blogs': ComponentsBlogs;
      'components.brands': ComponentsBrands;
      'components.footer-columns': ComponentsFooterColumns;
      'components.footer-links': ComponentsFooterLinks;
      'components.link': ComponentsLink;
      'components.portfolio': ComponentsPortfolio;
      'components.services': ComponentsServices;
      'components.tags': ComponentsTags;
      'components.team': ComponentsTeam;
      'components.testimonial': ComponentsTestimonial;
      'layouts.awards': LayoutsAwards;
      'layouts.blogs': LayoutsBlogs;
      'layouts.brands-section': LayoutsBrandsSection;
      'layouts.footer': LayoutsFooter;
      'layouts.hero-section': LayoutsHeroSection;
      'layouts.navbar': LayoutsNavbar;
      'layouts.newsletter': LayoutsNewsletter;
      'layouts.our-experts': LayoutsOurExperts;
      'layouts.our-work': LayoutsOurWork;
      'layouts.testimonials': LayoutsTestimonials;
    }
  }
}
