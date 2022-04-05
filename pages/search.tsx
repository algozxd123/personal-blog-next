import type { NextPage } from "next";
import Post from "../components/post";
import { PostType } from "../types/post";
import { getPosts } from "../lib/api";
import { PropsArrayType, SearchQuery } from "../types/util";
import Separator from "../components/separator";
import { Context } from "react";
import { GetServerSideProps } from "next";
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

export const getServerSideProps: GetServerSideProps = async ({query}) => {
  if(typeof query.q !== 'string') query.q = ''; 
  const posts : PostType[] = await getPosts(query.q);
  return {
    props: {
      collection: posts,
    },
  }
};

export default Home;
