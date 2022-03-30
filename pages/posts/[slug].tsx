import type { NextPage } from "next";
import { PostType } from "../../types/post";
import Image from "next/image";
import markdownToHtml from "../../lib/markdownToHtml";
import { getPost, getPostsPaths } from "../../lib/api";

const Post: NextPage<PostType> = (post) => {
  return (
    <div className="flex justify-center mt-6">
      <div className="11/12 lg:w-7/12 flex justify-center flex-col bg-[#42414d] border border-solid border-transparent shadow-sm rounded-lg p-5">
        <Image alt="Post cover image" src={post.img} width={700} height={400}></Image>
        <h1 className="text-3xl mt-10">{post.title}</h1>
        <div className="text-lg leading-8 mt-6" dangerouslySetInnerHTML={{ __html: post.content }}></div>
        <div className="flex justify-end">
          <p className="text-base text-gray-400 mt-6">{post.date}</p>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({ params } : any) {
  const post : PostType = await getPost(params.slug);
  post.content = await markdownToHtml(post.content);
  return {
    props: {
     ...post
    },
  }
};

export async function getStaticPaths(){
  const slugs = await getPostsPaths();

  const paths = slugs.map((slug: string) => ({
    params: {slug}
  }));

  return {paths, fallback: false}
};

export default Post;