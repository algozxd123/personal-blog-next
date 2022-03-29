import type { NextPage } from "next";
import { StrapiResponsePath, StrapiPostSlug, StrapiPost } from "../../types/post";
import Image from "next/image";
import markdownToHtml from "../../lib/markdownToHtml";

const Post: NextPage<StrapiPost> = (post) => {
  const img_url = "http://localhost:1337"+post.attributes.cover_image.data.attributes.url;
  const date_str = post.attributes.createdAt.slice(0,10);
  return (
    <div className="flex justify-center mt-6">
      <div className="11/12 lg:w-7/12 flex justify-center flex-col bg-[#42414d] border border-solid border-transparent shadow-sm rounded-lg p-5">
        <Image alt="Post cover image" src={img_url} width={700} height={400}></Image>
        <h1 className="text-3xl mt-10">{post.attributes.title}</h1>
        <p className="text-lg leading-8 mt-6" dangerouslySetInnerHTML={{ __html: post.attributes.content }}></p>
        <div className="flex justify-end">
          <p className="text-base text-gray-400 mt-6">{date_str}</p>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({ params } : any) {
  
  const res = await fetch(`http://localhost:1337/api/posts?filters[slug][$eq]=${params.slug}&populate=cover_image`);
  const post = (await res.json()).data[0];
  post.attributes.content = await markdownToHtml(post.attributes.content);

  return {
    props: {
     ...post
    },
  }
};

export async function getStaticPaths(){
  const res = await fetch('http://localhost:1337/api/posts?populate=cover_image');
  const posts : StrapiResponsePath = (await res.json()).data;

  const paths = posts.map((post: StrapiPostSlug) => ({
    params: {slug: post.attributes.slug}
  }));

  return {paths, fallback: false}
};

export default Post;