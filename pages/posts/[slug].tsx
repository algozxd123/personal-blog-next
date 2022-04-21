import type { NextPage } from "next";
import { PostType } from "../../types/post";
import Image from "next/image";
import markdownToHtml from "../../lib/markdownToHtml";
import { getPost, getPostsPaths } from "../../lib/api";
import Date from "../../components/date";

const Post: NextPage<PostType> = (post) => {
  return (
    <div className="flex justify-center mt-6">
      <div className="11/12 md:w-9/12 lg:w-7/12 flex justify-center flex-col p-5">
        <h1 className="text-3xl mb-10 font-serif font-thin">{post.title}</h1>
        <Image alt="Post cover image" src={post.img} width={700} height={400}></Image>
        <div className="text-lg leading-8 mt-6" dangerouslySetInnerHTML={{ __html: post.content }}></div>
        <div className="flex justify-end mt-6">
          <Date date={post.date}/>
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