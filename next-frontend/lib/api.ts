import { PostType } from "../types/post";
import { StrapiResponseType, StrapiResponsePostType } from "../types/api";

const sanitizePost = (strapiPost : StrapiResponsePostType) => {
  if(strapiPost.attributes.title === undefined ||
    strapiPost.attributes.content == undefined ||
    strapiPost.attributes.cover_image == undefined ||
    strapiPost.attributes.createdAt == undefined ||
    strapiPost.attributes.slug == undefined){
      throw new Error('Data malformed');
  }

  let placeholder = false;
  //If image was deleted from the strapi server, the response will have the cover_image property but the contents of data will be null
  if(strapiPost.attributes.cover_image.data == undefined){
    strapiPost.attributes.cover_image.data = {attributes: {url: '/700.png'}};
    placeholder = true;
  }

  let post : PostType = {
    title: strapiPost.attributes.title,
    content: strapiPost.attributes.content,
    img: (placeholder) ? strapiPost.attributes.cover_image.data.attributes.url : `http://${process.env.API_HOST}:${process.env.API_PORT}${strapiPost.attributes.cover_image.data.attributes.url}`,
    date: strapiPost.attributes.createdAt.slice(0,10),
    slug: strapiPost.attributes.slug
  };
  return post;
};

export async function getPosts(search: string){
  
  let url : string;
  if(search){
    url = `http://${process.env.API_HOST}:${process.env.API_PORT}/api/posts?filters[$or][0][title][$containsi]=${search}&filters[$or][1][content][$containsi]=${search}&populate=cover_image`;
  }else{
    url = `http://${process.env.API_HOST}:${process.env.API_PORT}/api/posts?populate=cover_image`;
  }
  
  const res = await fetch(url);
  const json : StrapiResponseType = await res.json();
  
  if(json.error || json.data === null || !Array.isArray(json.data)){
    console.error(json.error);
    console.log(json);
    throw new Error('Failed to fetch API');
  }

  const posts: PostType[] = json.data.map(sanitizePost);

  return posts;
};

export async function getPost(slug: string){

  const res = await fetch(`http://${process.env.API_HOST}:${process.env.API_PORT}/api/posts/${slug}?populate=cover_image`);
  const json : StrapiResponseType = await res.json();
  
  if(json.error || json.data === null || Array.isArray(json.data)){
    console.error(json.error);
    throw new Error('Failed to fetch API');
  }
  
  const posts: PostType = sanitizePost(json.data);

  return posts;
};

export async function getPostsPaths(){
  const res = await fetch(`http://${process.env.API_HOST}:${process.env.API_PORT}/api/posts?fields[0]=slug`)
  const json : StrapiResponseType = await res.json();
  
  if(json.error || json.data === null || !Array.isArray(json.data)){
    console.error(json.error);
    throw new Error('Failed to fetch API');
  }

  const postsPaths: string[] = json.data.map((post) => {return post.attributes.slug || ''});

  return postsPaths;
}