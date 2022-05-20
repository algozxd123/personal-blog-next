import type { NextPage } from "next";
import { PostType } from "../types/post";
import { getPosts } from "../lib/api";
import { PropsArrayType } from "../types/util";
import PostList from "../components/postList";

const Home: NextPage<PropsArrayType<PostType>> = ({ collection }) => {
  return (
      <div className="mt-7 flex justify-center">
        <div className="w-11/12 lg:w-7/12 flex justify-center flex-col">
          <PostList collection={collection}/>
        </div>
      </div>
  );
};

export async function getStaticProps() {

  const posts : PostType[] = await getPosts('');
  return {
    props: {
      collection: posts,
    },
  }
};

export default Home;
