import type { NextPage } from "next";
import Head from "next/head";
import Post from "../components/post";
import Nav from "../components/nav";
import { StrapiResponse, StrapiPost } from "../types/post";

const Home: NextPage<StrapiResponse> = ({ posts }) => {
  return (
    <div className="text-white">
      <Head>
        <title>Personal blog</title>
        <meta name="description" content="Personal blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
      <div className="flex justify-center">
        <div className="w-11/12 lg:w-7/12 flex justify-center flex-col">
          {posts.map((post: StrapiPost ) => {
            const description = post.attributes.content.slice(0,350);
            const img_url = "http://localhost:1337"+post.attributes.cover_image.data.attributes.url;
            const date_str = post.attributes.createdAt.slice(0,10);
            return (
              <Post key={post.attributes.slug} title={post.attributes.title} description={description} img={img_url} date={date_str}/>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {

  const res = await fetch('http://localhost:1337/api/posts?populate=*');
  const posts = await res.json();

  return {
    props: {
      posts: posts.data,
    },
  }
}

export default Home;
