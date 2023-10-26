// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/** Primary content in _Kitchen Sink → Slice zone → Quiet CTA → Primary_ */
export interface KitchenSinkDocumentDataBodyQuietCtaSlicePrimary {
  /**
   * Title field in _Kitchen Sink → Slice zone → Quiet CTA → Primary_
   *
   * - **Field Type**: Title
   * - **Placeholder**: _None_
   * - **API ID Path**: kitchen_sink.body[].quiet_cta.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * CTA Label field in _Kitchen Sink → Slice zone → Quiet CTA → Primary_
   *
   * - **Field Type**: Text
   * - **Placeholder**: _None_
   * - **API ID Path**: kitchen_sink.body[].quiet_cta.primary.cta_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_label: prismic.KeyTextField;

  /**
   * CTA Link field in _Kitchen Sink → Slice zone → Quiet CTA → Primary_
   *
   * - **Field Type**: Link
   * - **Placeholder**: _None_
   * - **API ID Path**: kitchen_sink.body[].quiet_cta.primary.cta_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField;
}

/** Slice for _Kitchen Sink → Slice zone_ */
export type KitchenSinkDocumentDataBodyQuietCtaSlice = prismic.Slice<
  "quiet_cta",
  Simplify<KitchenSinkDocumentDataBodyQuietCtaSlicePrimary>,
  never
>;

/** Primary content in _Kitchen Sink → Slice zone → Shouting CTA → Primary_ */
export interface KitchenSinkDocumentDataBodyShoutingCtaSlicePrimary {
  /**
   * Title field in _Kitchen Sink → Slice zone → Shouting CTA → Primary_
   *
   * - **Field Type**: Title
   * - **Placeholder**: _None_
   * - **API ID Path**: kitchen_sink.body[].shouting_cta.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;
}

/** Item content in _Kitchen Sink → Slice zone → Shouting CTA → Items_ */
export interface KitchenSinkDocumentDataBodyShoutingCtaSliceItem {
  /**
   * CTA Label field in _Kitchen Sink → Slice zone → Shouting CTA → Items_
   *
   * - **Field Type**: Text
   * - **Placeholder**: _None_
   * - **API ID Path**: kitchen_sink.body[].shouting_cta.items.cta_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_label: prismic.KeyTextField;

  /**
   * CTA Link field in _Kitchen Sink → Slice zone → Shouting CTA → Items_
   *
   * - **Field Type**: Link
   * - **Placeholder**: _None_
   * - **API ID Path**: kitchen_sink.body[].shouting_cta.items.cta_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField;
}

/** Slice for _Kitchen Sink → Slice zone_ */
export type KitchenSinkDocumentDataBodyShoutingCtaSlice = prismic.Slice<
  "shouting_cta",
  Simplify<KitchenSinkDocumentDataBodyShoutingCtaSlicePrimary>,
  Simplify<KitchenSinkDocumentDataBodyShoutingCtaSliceItem>
>;

/** Primary content in _Kitchen Sink → Slice zone → Beautiful CTA → Primary_ */
export interface KitchenSinkDocumentDataBodyBeautifulCtaSlicePrimary {
  /**
   * Title field in _Kitchen Sink → Slice zone → Beautiful CTA → Primary_
   *
   * - **Field Type**: Title
   * - **Placeholder**: _None_
   * - **API ID Path**: kitchen_sink.body[].beautiful_cta.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;
}

/** Item content in _Kitchen Sink → Slice zone → Beautiful CTA → Items_ */
export interface KitchenSinkDocumentDataBodyBeautifulCtaSliceItem {
  /**
   * CTA Label field in _Kitchen Sink → Slice zone → Beautiful CTA → Items_
   *
   * - **Field Type**: Text
   * - **Placeholder**: _None_
   * - **API ID Path**: kitchen_sink.body[].beautiful_cta.items.cta_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_label: prismic.KeyTextField;

  /**
   * CTA Link field in _Kitchen Sink → Slice zone → Beautiful CTA → Items_
   *
   * - **Field Type**: Link
   * - **Placeholder**: _None_
   * - **API ID Path**: kitchen_sink.body[].beautiful_cta.items.cta_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField;
}

/** Slice for _Kitchen Sink → Slice zone_ */
export type KitchenSinkDocumentDataBodyBeautifulCtaSlice = prismic.Slice<
  "beautiful_cta",
  Simplify<KitchenSinkDocumentDataBodyBeautifulCtaSlicePrimary>,
  Simplify<KitchenSinkDocumentDataBodyBeautifulCtaSliceItem>
>;

type KitchenSinkDocumentDataBodySlice =
  | KitchenSinkDocumentDataBodyQuietCtaSlice
  | KitchenSinkDocumentDataBodyShoutingCtaSlice
  | KitchenSinkDocumentDataBodyBeautifulCtaSlice;

/** Content for Kitchen Sink documents */
interface KitchenSinkDocumentData {
  /**
   * Slice zone field in _Kitchen Sink_
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: _None_
   * - **API ID Path**: kitchen_sink.body[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  body: prismic.SliceZone<KitchenSinkDocumentDataBodySlice>;
}

/**
 * Kitchen Sink document from Prismic
 *
 * - **API ID**: `kitchen_sink`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type KitchenSinkDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<KitchenSinkDocumentData>,
    "kitchen_sink",
    Lang
  >;

/** Primary content in _Kitchen Sink 2 → Slice zone → Quiet CTA → Primary_ */
export interface KitchenSink2DocumentDataBodyQuietCtaSlicePrimary {
  /**
   * Title field in _Kitchen Sink 2 → Slice zone → Quiet CTA → Primary_
   *
   * - **Field Type**: Title
   * - **Placeholder**: _None_
   * - **API ID Path**: kitchen_sink_2.body[].quiet_cta.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * CTA Label field in _Kitchen Sink 2 → Slice zone → Quiet CTA → Primary_
   *
   * - **Field Type**: Text
   * - **Placeholder**: _None_
   * - **API ID Path**: kitchen_sink_2.body[].quiet_cta.primary.cta_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_label: prismic.KeyTextField;

  /**
   * CTA Link field in _Kitchen Sink 2 → Slice zone → Quiet CTA → Primary_
   *
   * - **Field Type**: Link
   * - **Placeholder**: _None_
   * - **API ID Path**: kitchen_sink_2.body[].quiet_cta.primary.cta_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField;
}

/** Slice for _Kitchen Sink 2 → Slice zone_ */
export type KitchenSink2DocumentDataBodyQuietCtaSlice = prismic.Slice<
  "quiet_cta",
  Simplify<KitchenSink2DocumentDataBodyQuietCtaSlicePrimary>,
  never
>;

/** Primary content in _Kitchen Sink 2 → Slice zone → Shouting CTA → Primary_ */
export interface KitchenSink2DocumentDataBodyShoutingCtaSlicePrimary {
  /**
   * Title field in _Kitchen Sink 2 → Slice zone → Shouting CTA → Primary_
   *
   * - **Field Type**: Title
   * - **Placeholder**: _None_
   * - **API ID Path**: kitchen_sink_2.body[].shouting_cta.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;
}

/** Item content in _Kitchen Sink 2 → Slice zone → Shouting CTA → Items_ */
export interface KitchenSink2DocumentDataBodyShoutingCtaSliceItem {
  /**
   * CTA Label field in _Kitchen Sink 2 → Slice zone → Shouting CTA → Items_
   *
   * - **Field Type**: Text
   * - **Placeholder**: _None_
   * - **API ID Path**: kitchen_sink_2.body[].shouting_cta.items.cta_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_label: prismic.KeyTextField;
}

/** Slice for _Kitchen Sink 2 → Slice zone_ */
export type KitchenSink2DocumentDataBodyShoutingCtaSlice = prismic.Slice<
  "shouting_cta",
  Simplify<KitchenSink2DocumentDataBodyShoutingCtaSlicePrimary>,
  Simplify<KitchenSink2DocumentDataBodyShoutingCtaSliceItem>
>;

type KitchenSink2DocumentDataBodySlice =
  | KitchenSink2DocumentDataBodyQuietCtaSlice
  | KitchenSink2DocumentDataBodyShoutingCtaSlice;

/** Content for Kitchen Sink 2 documents */
interface KitchenSink2DocumentData {
  /**
   * Slice zone field in _Kitchen Sink 2_
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: _None_
   * - **API ID Path**: kitchen_sink_2.body[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  body: prismic.SliceZone<KitchenSink2DocumentDataBodySlice>;
}

/**
 * Kitchen Sink 2 document from Prismic
 *
 * - **API ID**: `kitchen_sink_2`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type KitchenSink2Document<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<KitchenSink2DocumentData>,
    "kitchen_sink_2",
    Lang
  >;

/** Primary content in _Kitchen Sink 3 → Slice zone → Beautiful CTA → Primary_ */
export interface KitchenSink3DocumentDataBodyBeautifulCtaSlicePrimary {
  /**
   * Title field in _Kitchen Sink 3 → Slice zone → Beautiful CTA → Primary_
   *
   * - **Field Type**: Title
   * - **Placeholder**: _None_
   * - **API ID Path**: kitchen_sink_3.body[].beautiful_cta.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;
}

/** Item content in _Kitchen Sink 3 → Slice zone → Beautiful CTA → Items_ */
export interface KitchenSink3DocumentDataBodyBeautifulCtaSliceItem {
  /**
   * CTA Label field in _Kitchen Sink 3 → Slice zone → Beautiful CTA → Items_
   *
   * - **Field Type**: Text
   * - **Placeholder**: _None_
   * - **API ID Path**: kitchen_sink_3.body[].beautiful_cta.items.cta_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_label: prismic.KeyTextField;

  /**
   * CTA Link field in _Kitchen Sink 3 → Slice zone → Beautiful CTA → Items_
   *
   * - **Field Type**: Link
   * - **Placeholder**: _None_
   * - **API ID Path**: kitchen_sink_3.body[].beautiful_cta.items.cta_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField;
}

/** Slice for _Kitchen Sink 3 → Slice zone_ */
export type KitchenSink3DocumentDataBodyBeautifulCtaSlice = prismic.Slice<
  "beautiful_cta",
  Simplify<KitchenSink3DocumentDataBodyBeautifulCtaSlicePrimary>,
  Simplify<KitchenSink3DocumentDataBodyBeautifulCtaSliceItem>
>;

type KitchenSink3DocumentDataBodySlice =
  KitchenSink3DocumentDataBodyBeautifulCtaSlice;

/** Content for Kitchen Sink 3 documents */
interface KitchenSink3DocumentData {
  /**
   * Slice zone field in _Kitchen Sink 3_
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: _None_
   * - **API ID Path**: kitchen_sink_3.body[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  body: prismic.SliceZone<KitchenSink3DocumentDataBodySlice>;
}

/**
 * Kitchen Sink 3 document from Prismic
 *
 * - **API ID**: `kitchen_sink_3`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type KitchenSink3Document<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<KitchenSink3DocumentData>,
    "kitchen_sink_3",
    Lang
  >;

/** Primary content in _Kitchen Sink 4 → Slice zone → Beautiful CTA → Primary_ */
export interface KitchenSink4DocumentDataBodyBeautifulCtaSlicePrimary {
  /**
   * Title field in _Kitchen Sink 4 → Slice zone → Beautiful CTA → Primary_
   *
   * - **Field Type**: Title
   * - **Placeholder**: _None_
   * - **API ID Path**: kitchen_sink_4.body[].beautiful_cta.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;
}

/** Item content in _Kitchen Sink 4 → Slice zone → Beautiful CTA → Items_ */
export interface KitchenSink4DocumentDataBodyBeautifulCtaSliceItem {
  /**
   * CTA Label field in _Kitchen Sink 4 → Slice zone → Beautiful CTA → Items_
   *
   * - **Field Type**: Text
   * - **Placeholder**: _None_
   * - **API ID Path**: kitchen_sink_4.body[].beautiful_cta.items.cta_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_label: prismic.KeyTextField;
}

/** Slice for _Kitchen Sink 4 → Slice zone_ */
export type KitchenSink4DocumentDataBodyBeautifulCtaSlice = prismic.Slice<
  "beautiful_cta",
  Simplify<KitchenSink4DocumentDataBodyBeautifulCtaSlicePrimary>,
  Simplify<KitchenSink4DocumentDataBodyBeautifulCtaSliceItem>
>;

type KitchenSink4DocumentDataBodySlice =
  KitchenSink4DocumentDataBodyBeautifulCtaSlice;

/** Content for Kitchen Sink 4 documents */
interface KitchenSink4DocumentData {
  /**
   * Slice zone field in _Kitchen Sink 4_
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: _None_
   * - **API ID Path**: kitchen_sink_4.body[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  body: prismic.SliceZone<KitchenSink4DocumentDataBodySlice>;
}

/**
 * Kitchen Sink 4 document from Prismic
 *
 * - **API ID**: `kitchen_sink_4`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type KitchenSink4Document<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<KitchenSink4DocumentData>,
    "kitchen_sink_4",
    Lang
  >;

/** Primary content in _Kitchen Sink 5 → Slice zone → Beautiful CTA → Primary_ */
export interface KitchenSink5DocumentDataBodyBeautifulCtaSlicePrimary {
  /**
   * Title field in _Kitchen Sink 5 → Slice zone → Beautiful CTA → Primary_
   *
   * - **Field Type**: Title
   * - **Placeholder**: _None_
   * - **API ID Path**: kitchen_sink_5.body[].beautiful_cta.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;
}

/** Item content in _Kitchen Sink 5 → Slice zone → Beautiful CTA → Items_ */
export interface KitchenSink5DocumentDataBodyBeautifulCtaSliceItem {
  /**
   * CTA Label field in _Kitchen Sink 5 → Slice zone → Beautiful CTA → Items_
   *
   * - **Field Type**: Text
   * - **Placeholder**: _None_
   * - **API ID Path**: kitchen_sink_5.body[].beautiful_cta.items.cta_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_label: prismic.KeyTextField;
}

/** Slice for _Kitchen Sink 5 → Slice zone_ */
export type KitchenSink5DocumentDataBodyBeautifulCtaSlice = prismic.Slice<
  "beautiful_cta",
  Simplify<KitchenSink5DocumentDataBodyBeautifulCtaSlicePrimary>,
  Simplify<KitchenSink5DocumentDataBodyBeautifulCtaSliceItem>
>;

type KitchenSink5DocumentDataBodySlice =
  KitchenSink5DocumentDataBodyBeautifulCtaSlice;

/** Content for Kitchen Sink 5 documents */
interface KitchenSink5DocumentData {
  /**
   * Slice zone field in _Kitchen Sink 5_
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: _None_
   * - **API ID Path**: kitchen_sink_5.body[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  body: prismic.SliceZone<KitchenSink5DocumentDataBodySlice>;
}

/**
 * Kitchen Sink 5 document from Prismic
 *
 * - **API ID**: `kitchen_sink_5`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type KitchenSink5Document<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<KitchenSink5DocumentData>,
    "kitchen_sink_5",
    Lang
  >;

/** Primary content in _Kitchen Sink 6 → Slice zone → Beautiful CTA → Primary_ */
export interface KitchenSink6DocumentDataBodyBeautifulCtaSlicePrimary {
  /**
   * Title field in _Kitchen Sink 6 → Slice zone → Beautiful CTA → Primary_
   *
   * - **Field Type**: Title
   * - **Placeholder**: _None_
   * - **API ID Path**: kitchen_sink_6.body[].beautiful_cta.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;
}

/** Item content in _Kitchen Sink 6 → Slice zone → Beautiful CTA → Items_ */
export interface KitchenSink6DocumentDataBodyBeautifulCtaSliceItem {
  /**
   * CTA Link field in _Kitchen Sink 6 → Slice zone → Beautiful CTA → Items_
   *
   * - **Field Type**: Link
   * - **Placeholder**: _None_
   * - **API ID Path**: kitchen_sink_6.body[].beautiful_cta.items.cta_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField;
}

/** Slice for _Kitchen Sink 6 → Slice zone_ */
export type KitchenSink6DocumentDataBodyBeautifulCtaSlice = prismic.Slice<
  "beautiful_cta",
  Simplify<KitchenSink6DocumentDataBodyBeautifulCtaSlicePrimary>,
  Simplify<KitchenSink6DocumentDataBodyBeautifulCtaSliceItem>
>;

type KitchenSink6DocumentDataBodySlice =
  KitchenSink6DocumentDataBodyBeautifulCtaSlice;

/** Content for Kitchen Sink 6 documents */
interface KitchenSink6DocumentData {
  /**
   * Slice zone field in _Kitchen Sink 6_
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: _None_
   * - **API ID Path**: kitchen_sink_6.body[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  body: prismic.SliceZone<KitchenSink6DocumentDataBodySlice>;
}

/**
 * Kitchen Sink 6 document from Prismic
 *
 * - **API ID**: `kitchen_sink_6`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type KitchenSink6Document<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<KitchenSink6DocumentData>,
    "kitchen_sink_6",
    Lang
  >;

/** Primary content in _Page → Slice Zone → Quiet CTA → Primary_ */
export interface PageDocumentDataSlicesQuietCtaSlicePrimary {
  /**
   * Title field in _Page → Slice Zone → Quiet CTA → Primary_
   *
   * - **Field Type**: Title
   * - **Placeholder**: _None_
   * - **API ID Path**: page.slices[].quiet_cta.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * CTA Label field in _Page → Slice Zone → Quiet CTA → Primary_
   *
   * - **Field Type**: Text
   * - **Placeholder**: _None_
   * - **API ID Path**: page.slices[].quiet_cta.primary.cta_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_label: prismic.KeyTextField;

  /**
   * CTA Link field in _Page → Slice Zone → Quiet CTA → Primary_
   *
   * - **Field Type**: Link
   * - **Placeholder**: _None_
   * - **API ID Path**: page.slices[].quiet_cta.primary.cta_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField;
}

/** Slice for _Page → Slice Zone_ */
export type PageDocumentDataSlicesQuietCtaSlice = prismic.Slice<
  "quiet_cta",
  Simplify<PageDocumentDataSlicesQuietCtaSlicePrimary>,
  never
>;

/** Primary content in _Page → Slice Zone → Shouting CTA → Primary_ */
export interface PageDocumentDataSlicesShoutingCtaSlicePrimary {
  /**
   * Title field in _Page → Slice Zone → Shouting CTA → Primary_
   *
   * - **Field Type**: Title
   * - **Placeholder**: _None_
   * - **API ID Path**: page.slices[].shouting_cta.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;
}

/** Item content in _Page → Slice Zone → Shouting CTA → Items_ */
export interface PageDocumentDataSlicesShoutingCtaSliceItem {
  /**
   * CTA Label field in _Page → Slice Zone → Shouting CTA → Items_
   *
   * - **Field Type**: Text
   * - **Placeholder**: _None_
   * - **API ID Path**: page.slices[].shouting_cta.items.cta_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_label: prismic.KeyTextField;
}

/** Slice for _Page → Slice Zone_ */
export type PageDocumentDataSlicesShoutingCtaSlice = prismic.Slice<
  "shouting_cta",
  Simplify<PageDocumentDataSlicesShoutingCtaSlicePrimary>,
  Simplify<PageDocumentDataSlicesShoutingCtaSliceItem>
>;

type PageDocumentDataSlicesSlice =
  | PageDocumentDataSlicesQuietCtaSlice
  | PageDocumentDataSlicesShoutingCtaSlice;

/** Content for Page documents */
interface PageDocumentData {
  /**
   * Title field in _Page_
   *
   * - **Field Type**: Title
   * - **Placeholder**: _None_
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in _Page_
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: _None_
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/** Item in _Partials → Nav_ */
export interface PartialsDocumentDataNavItem {
  /**
   * Label field in _Partials → Nav_
   *
   * - **Field Type**: Text
   * - **Placeholder**: _None_
   * - **API ID Path**: partials.nav[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Link field in _Partials → Nav_
   *
   * - **Field Type**: Link
   * - **Placeholder**: _None_
   * - **API ID Path**: partials.nav[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Display as CTA field in _Partials → Nav_
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: _None_
   * - **Default Value**: false
   * - **API ID Path**: partials.nav[].cta
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  cta: prismic.BooleanField;
}

/** Item in _Partials → Socials_ */
export interface PartialsDocumentDataSocialsItem {
  /**
   * Label field in _Partials → Socials_
   *
   * - **Field Type**: Text
   * - **Placeholder**: _None_
   * - **API ID Path**: partials.socials[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Link field in _Partials → Socials_
   *
   * - **Field Type**: Link
   * - **Placeholder**: _None_
   * - **API ID Path**: partials.socials[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/** Item in _Partials → Footer Nav_ */
export interface PartialsDocumentDataFooterNavItem {
  /**
   * Category field in _Partials → Footer Nav_
   *
   * - **Field Type**: Text
   * - **Placeholder**: _None_
   * - **API ID Path**: partials.footer_nav[].category
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  category: prismic.KeyTextField;

  /**
   * Links field in _Partials → Footer Nav_
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: _None_
   * - **API ID Path**: partials.footer_nav[].links
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  links: prismic.RichTextField;
}

/** Content for Partials documents */
interface PartialsDocumentData {
  /**
   * Nav field in _Partials_
   *
   * - **Field Type**: Group
   * - **Placeholder**: _None_
   * - **API ID Path**: partials.nav[]
   * - **Tab**: Header
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  nav: prismic.GroupField<Simplify<PartialsDocumentDataNavItem>>
  /**
   * Socials field in _Partials_
   *
   * - **Field Type**: Group
   * - **Placeholder**: _None_
   * - **API ID Path**: partials.socials[]
   * - **Tab**: Footer
   * - **Documentation**: https://prismic.io/docs/field#group
   */;
  socials: prismic.GroupField<Simplify<PartialsDocumentDataSocialsItem>>;

  /**
   * Footer Nav field in _Partials_
   *
   * - **Field Type**: Group
   * - **Placeholder**: _None_
   * - **API ID Path**: partials.footer_nav[]
   * - **Tab**: Footer
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  footer_nav: prismic.GroupField<Simplify<PartialsDocumentDataFooterNavItem>>;
}

/**
 * Partials document from Prismic
 *
 * - **API ID**: `partials`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PartialsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<PartialsDocumentData>,
    "partials",
    Lang
  >;

export type AllDocumentTypes =
  | KitchenSinkDocument
  | KitchenSink2Document
  | KitchenSink3Document
  | KitchenSink4Document
  | KitchenSink5Document
  | KitchenSink6Document
  | PageDocument
  | PartialsDocument;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      KitchenSinkDocument,
      KitchenSinkDocumentData,
      KitchenSinkDocumentDataBodyQuietCtaSlicePrimary,
      KitchenSinkDocumentDataBodyShoutingCtaSlicePrimary,
      KitchenSinkDocumentDataBodyShoutingCtaSliceItem,
      KitchenSinkDocumentDataBodyBeautifulCtaSlicePrimary,
      KitchenSinkDocumentDataBodyBeautifulCtaSliceItem,
      KitchenSinkDocumentDataBodySlice,
      KitchenSink2Document,
      KitchenSink2DocumentData,
      KitchenSink2DocumentDataBodyQuietCtaSlicePrimary,
      KitchenSink2DocumentDataBodyShoutingCtaSlicePrimary,
      KitchenSink2DocumentDataBodyShoutingCtaSliceItem,
      KitchenSink2DocumentDataBodySlice,
      KitchenSink3Document,
      KitchenSink3DocumentData,
      KitchenSink3DocumentDataBodyBeautifulCtaSlicePrimary,
      KitchenSink3DocumentDataBodyBeautifulCtaSliceItem,
      KitchenSink3DocumentDataBodySlice,
      KitchenSink4Document,
      KitchenSink4DocumentData,
      KitchenSink4DocumentDataBodyBeautifulCtaSlicePrimary,
      KitchenSink4DocumentDataBodyBeautifulCtaSliceItem,
      KitchenSink4DocumentDataBodySlice,
      KitchenSink5Document,
      KitchenSink5DocumentData,
      KitchenSink5DocumentDataBodyBeautifulCtaSlicePrimary,
      KitchenSink5DocumentDataBodyBeautifulCtaSliceItem,
      KitchenSink5DocumentDataBodySlice,
      KitchenSink6Document,
      KitchenSink6DocumentData,
      KitchenSink6DocumentDataBodyBeautifulCtaSlicePrimary,
      KitchenSink6DocumentDataBodyBeautifulCtaSliceItem,
      KitchenSink6DocumentDataBodySlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesQuietCtaSlicePrimary,
      PageDocumentDataSlicesShoutingCtaSlicePrimary,
      PageDocumentDataSlicesShoutingCtaSliceItem,
      PageDocumentDataSlicesSlice,
      PartialsDocument,
      PartialsDocumentData,
      AllDocumentTypes,
    };
  }
}