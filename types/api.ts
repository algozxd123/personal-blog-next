export interface StrapiResponsePostType {
  attributes: {
    title?: string,
    content?: string,
    createdAt?: string,
    slug?: string,
    cover_image?: {
      data: {
        attributes: {
          url: string
        }
      }
    }
  };
}

export interface StrapiResponseType {
  data: [StrapiResponsePostType] | null,
  error?: {
    status: string,
    name: string,
    message: string,
    details: {}
  }
}