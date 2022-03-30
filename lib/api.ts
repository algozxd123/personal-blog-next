import { PostType } from "../types/post";
import { StrapiResponseType, StrapiResponsePostType } from "../types/api";

const sanitizePost = (strapiPost : StrapiResponsePostType, slice=false) => {
  if(strapiPost.attributes.title === undefined ||
    strapiPost.attributes.content === undefined ||
    strapiPost.attributes.cover_image === undefined ||
    strapiPost.attributes.createdAt === undefined ||
    strapiPost.attributes.slug === undefined){
      throw new Error('Data malformed');
  }

  let post : PostType = {
    title: strapiPost.attributes.title,
    content: (slice) ? strapiPost.attributes.content!.slice(0,350) : strapiPost.attributes.content,
    img: 'http://localhost:1337'+strapiPost.attributes.cover_image.data.attributes.url,
    date: strapiPost.attributes.createdAt.slice(0,10),
    slug: strapiPost.attributes.slug
  };
  return post;
};

export async function getPosts(){
  const res = await fetch('http://localhost:1337/api/posts?populate=cover_image');
  const json : StrapiResponseType = await res.json();
  
  if(json.error || json.data === null){
    console.error(json.error);
    throw new Error('Failed to fetch API');
  }

  const posts: PostType[] = json.data.map((post) => sanitizePost(post,true));

  return posts;
};

export async function getPost(slug: string){

  const res = await fetch(`http://localhost:1337/api/posts?filters[slug][$eq]=${slug}&populate=cover_image`);
  const json : StrapiResponseType = await res.json();
  
  if(json.error || json.data === null){
    console.error(json.error);
    throw new Error('Failed to fetch API');
  }
  
  const posts: PostType = json.data.map((post) => sanitizePost(post))[0];

  return posts;
};

export async function getPostsPaths(){
  const res = await fetch('http://localhost:1337/api/posts?fields[0]=slug')
  const json : StrapiResponseType = await res.json();
  
  if(json.error || json.data === null){
    console.error(json.error);
    throw new Error('Failed to fetch API');
  }

  const postsPaths: string[] = json.data.map((post) => {return post.attributes.slug || ''});

  return postsPaths;
}