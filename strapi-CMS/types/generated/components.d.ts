import type { Schema, Attribute } from '@strapi/strapi';

export interface SeoMetaData extends Schema.Component {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'Meta Data';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    metaImage: Attribute.Media<'images'>;
  };
}

export interface ElementsSection extends Schema.Component {
  collectionName: 'components_elements_sections';
  info: {
    displayName: 'Section';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    title: Attribute.String;
    text: Attribute.Text;
    button: Attribute.Component<'elements.button-link'>;
  };
}

export interface ElementsQuestions extends Schema.Component {
  collectionName: 'components_elements_questions';
  info: {
    displayName: 'Questions';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Text;
  };
}

export interface ElementsPrincingCard extends Schema.Component {
  collectionName: 'components_elements_princing_cards';
  info: {
    displayName: 'Princing Card';
    description: '';
  };
  attributes: {
    planType: Attribute.String;
    planPrice: Attribute.String;
    isFeatured: Attribute.Boolean & Attribute.DefaultTo<false>;
    services: Attribute.Relation<
      'elements.princing-card',
      'oneToMany',
      'api::service.service'
    >;
    button: Attribute.Component<'elements.button-link'>;
  };
}

export interface ElementsPoi extends Schema.Component {
  collectionName: 'components_elements_pois';
  info: {
    displayName: 'POI';
    description: '';
  };
  attributes: {
    Name: Attribute.String;
    Type: Attribute.Enumeration<
      [
        'Sc\u00E8nes',
        'Toilettes',
        'Campings',
        'VIP',
        'Bars',
        'Restaurants',
        'Boutiques'
      ]
    >;
    Latitude: Attribute.Decimal;
    Longitude: Attribute.Decimal;
    Description: Attribute.Text;
  };
}

export interface ElementsInput extends Schema.Component {
  collectionName: 'components_elements_inputs';
  info: {
    displayName: 'Input';
  };
  attributes: {
    placeholder: Attribute.String;
    label: Attribute.String;
    inputType: Attribute.String;
  };
}

export interface ElementsForm extends Schema.Component {
  collectionName: 'components_elements_forms';
  info: {
    displayName: 'Form';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    input: Attribute.Component<'elements.input', true>;
    button: Attribute.Component<'elements.button-link'>;
  };
}

export interface ElementsCard extends Schema.Component {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media<'images'>;
    text: Attribute.Text;
    description: Attribute.String;
  };
}

export interface ElementsButtonLink extends Schema.Component {
  collectionName: 'components_elements_button_links';
  info: {
    displayName: 'Button Link';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String & Attribute.DefaultTo<'#'>;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    type: Attribute.Enumeration<['primary', 'secondary']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>;
  };
}

export interface BlocksProgrammation extends Schema.Component {
  collectionName: 'components_blocks_programmations';
  info: {
    displayName: 'Programmation';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Text;
    card: Attribute.Component<'elements.card', true>;
    image: Attribute.Media<'images'>;
    image2: Attribute.Media<'images'>;
  };
}

export interface BlocksPrincing extends Schema.Component {
  collectionName: 'components_blocks_princings';
  info: {
    displayName: 'Princing';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.String;
    plan: Attribute.Component<'elements.princing-card', true>;
  };
}

export interface BlocksMap extends Schema.Component {
  collectionName: 'components_blocks_maps';
  info: {
    displayName: 'Map';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Text;
    POI: Attribute.Component<'elements.poi', true>;
  };
}

export interface BlocksInfos extends Schema.Component {
  collectionName: 'components_blocks_infos';
  info: {
    displayName: 'Infos';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Text;
    carrousel: Attribute.Component<'elements.card', true>;
  };
}

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Text;
    BtnLink: Attribute.Component<'elements.button-link', true>;
    image: Attribute.Media<'images'>;
    section: Attribute.Component<'elements.section'>;
  };
}

export interface BlocksFaq extends Schema.Component {
  collectionName: 'components_blocks_faqs';
  info: {
    displayName: 'FAQ';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    questions: Attribute.Component<'elements.questions', true>;
  };
}

export interface BlocksCta extends Schema.Component {
  collectionName: 'components_blocks_ctas';
  info: {
    displayName: 'Cta';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    form: Attribute.Component<'elements.form'>;
  };
}

export interface BlocksArticle extends Schema.Component {
  collectionName: 'components_elements_articles';
  info: {
    displayName: 'Article';
    description: '';
  };
  attributes: {
    Article: Attribute.Component<'elements.card', true>;
    link: Attribute.Component<'elements.button-link'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'seo.meta-data': SeoMetaData;
      'elements.section': ElementsSection;
      'elements.questions': ElementsQuestions;
      'elements.princing-card': ElementsPrincingCard;
      'elements.poi': ElementsPoi;
      'elements.input': ElementsInput;
      'elements.form': ElementsForm;
      'elements.card': ElementsCard;
      'elements.button-link': ElementsButtonLink;
      'blocks.programmation': BlocksProgrammation;
      'blocks.princing': BlocksPrincing;
      'blocks.map': BlocksMap;
      'blocks.infos': BlocksInfos;
      'blocks.hero': BlocksHero;
      'blocks.faq': BlocksFaq;
      'blocks.cta': BlocksCta;
      'blocks.article': BlocksArticle;
    }
  }
}
