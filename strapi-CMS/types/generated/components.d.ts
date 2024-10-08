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

export interface BlocksProgrammation extends Schema.Component {
  collectionName: 'components_blocks_programmations';
  info: {
    displayName: 'Programmation';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Text;
    card: Attribute.Component<'elements.programmation-card', true>;
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

export interface BlocksPartenaire extends Schema.Component {
  collectionName: 'components_blocks_partenaires';
  info: {
    displayName: 'Partenaire';
    description: '';
  };
  attributes: {
    partenaires: Attribute.Relation<
      'blocks.partenaire',
      'oneToMany',
      'api::partenaire.partenaire'
    >;
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

export interface BlocksFooter extends Schema.Component {
  collectionName: 'components_blocks_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.String;
    Reseaux: Attribute.Component<'elements.reseaux', true>;
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

export interface ElementsReseaux extends Schema.Component {
  collectionName: 'components_elements_reseaux';
  info: {
    displayName: 'Reseaux';
    description: '';
  };
  attributes: {
    list: Attribute.Enumeration<
      ['Facebook', 'Twitter', 'Instagram', 'Youtube']
    >;
    icon: Attribute.Media<'images'>;
    link: Attribute.String;
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

export interface ElementsProgrammationCard extends Schema.Component {
  collectionName: 'components_elements_programmation_cards';
  info: {
    displayName: 'Programmation Card';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    days: Attribute.Relation<
      'elements.programmation-card',
      'oneToMany',
      'api::day.day'
    >;
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
    Description: Attribute.Text;
    POI: Attribute.JSON &
      Attribute.CustomField<'plugin::google-maps.location-picker'>;
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

export interface ElementsImportance extends Schema.Component {
  collectionName: 'components_elements_importances';
  info: {
    displayName: 'importance';
  };
  attributes: {
    importance: Attribute.Enumeration<
      ['Tr\u00E8s important', 'Important', 'Mod\u00E9r\u00E9', 'Peu important']
    >;
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

export interface ElementsConcerts extends Schema.Component {
  collectionName: 'components_blocks_concerts';
  info: {
    displayName: 'Concerts';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    text: Attribute.RichText;
    date: Attribute.Date;
    heure: Attribute.Time;
    lieu: Attribute.Enumeration<['Paris', 'Vip', 'Classic']>;
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
    description: Attribute.String;
    text: Attribute.RichText;
    importance: Attribute.Enumeration<
      ['Tr\u00E8s important', 'Important', 'Mod\u00E9r\u00E9', 'Peu important']
    >;
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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'seo.meta-data': SeoMetaData;
      'blocks.programmation': BlocksProgrammation;
      'blocks.princing': BlocksPrincing;
      'blocks.partenaire': BlocksPartenaire;
      'blocks.map': BlocksMap;
      'blocks.infos': BlocksInfos;
      'blocks.hero': BlocksHero;
      'blocks.footer': BlocksFooter;
      'blocks.faq': BlocksFaq;
      'blocks.cta': BlocksCta;
      'blocks.article': BlocksArticle;
      'elements.section': ElementsSection;
      'elements.reseaux': ElementsReseaux;
      'elements.questions': ElementsQuestions;
      'elements.programmation-card': ElementsProgrammationCard;
      'elements.princing-card': ElementsPrincingCard;
      'elements.poi': ElementsPoi;
      'elements.input': ElementsInput;
      'elements.importance': ElementsImportance;
      'elements.form': ElementsForm;
      'elements.concerts': ElementsConcerts;
      'elements.card': ElementsCard;
      'elements.button-link': ElementsButtonLink;
    }
  }
}
