export type PostProps = {
  title: string,
  description: string,
  img: string,
  date: string
};

export type StrapiPost = {
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
}

export type StrapiResponse = {
  posts: [StrapiPost]
}