import type { NextPage } from "next";
import Post from "../components/post";
import { PostType } from "../types/post";
import { getPosts } from "../lib/api";
import { PropsArrayType } from "../types/util";
import Separator from "../components/separator";

const Home: NextPage<PropsArrayType<PostType>> = ({ collection }) => {
  return (
      <div className="mt-7 flex justify-center">
        <div className="w-11/12 lg:w-7/12 flex justify-center flex-col">
          {collection.map((post: PostType, i) => {
            return (
              <div key={post.slug}>
              <Post title={post.title} content={post.content} img={post.img} date={post.date} slug={post.slug}/>
              {(collection[i+1]) ? <Separator /> : <></>}
              </div>
            )
          })}
        </div>
      </div>
  );
};

export async function getStaticProps() {

  const posts : PostType[] = await getPosts();
  return {
    props: {
      collection: posts,
    },
  }
};

export default Home;
