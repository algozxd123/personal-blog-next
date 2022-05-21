export interface StrapiResponsePostType {
  attributes: {
    title: string,
    content: string,
    createdAt: string,
    slug: string,
    cover_image: {
      data: {
        attributes: {
          url: string
        }
      }
    }
  }
};

type StrapiResponseBodyType = [StrapiResponsePostType] | StrapiResponsePostType | [StrapiResponsePostSlugType] | StrapiResponseAboutType | StrapiResponseContactType | null;

export interface StrapiResponseType {
  data: StrapiResponseBodyType,
  error?: {
    status: string,
    name: string,
    message: string,
    details: {}
  }
}

export interface StrapiResponsePostSlugType {
  attributes: {
    slug: string,
  }
};

export interface StrapiResponseAboutType {
  attributes: {
    text: string,
    image: {
      data: {
        attributes: {
          url: string
        }
      }
    }
  }
};
export interface StrapiResponseContactType {
  attributes: {
    text: string,
    image: {
      data: {
        attributes: {
          url: string
        }
      }
    }
  }
};

export const isPost = (data : StrapiResponseBodyType): data is StrapiResponsePostType => {
  let postData = data as StrapiResponsePostType;

  if(postData.attributes.title === undefined ||
    postData.attributes.content == undefined ||
    postData.attributes.cover_image == undefined ||
    postData.attributes.createdAt == undefined ||
    postData.attributes.slug == undefined){
      return false;
  }else{
    return true;
  }
};

export const isPostArray = (data : StrapiResponseBodyType): data is [StrapiResponsePostType] => {
  let postArrayData = data as [StrapiResponsePostType];

  if(postArrayData.every(isPost)){
    return true;
  }else{
    return false;
  }
};

export const isPostSlug = (data : any): data is StrapiResponsePostSlugType => {
  let postData = data as StrapiResponsePostSlugType;

  if(postData.attributes.slug === undefined){
      return false;
  }else{
    return true;
  }
};

export const isPostSlugArray = (data : StrapiResponseBodyType): data is [StrapiResponsePostSlugType] => {
  let postArrayData = data as [StrapiResponsePostSlugType];

  if(postArrayData.every(isPostSlug)){
    return true;
  }else{
    return false;
  }
};

export const isAbout = (data : StrapiResponseBodyType): data is StrapiResponseAboutType => {

    let aboutData = data as StrapiResponseAboutType;

    if(aboutData.attributes.text === undefined ||
       aboutData.attributes.image.data.attributes.url === undefined){
        return false;
    }else{
      return true;
    }
};

export const isContact = (data : StrapiResponseBodyType): data is StrapiResponseAboutType => {

  let contactData = data as StrapiResponseAboutType;

  if(contactData.attributes.text === undefined ||
    contactData.attributes.image.data.attributes.url === undefined){
      return false;
  }else{
    return true;
  }
};