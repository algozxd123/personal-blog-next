import type { NextPage } from "next";
import Head from "next/head";
import Post from "../components/post";
import Nav from "../components/nav";
import PostProps from "../types/PostProp";

const Home: NextPage = () => {
  let postData: PostProps = {
    title: "Post title 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, reprehenderit consectetur nobis, tenetur sit, nam esse veniam itaque eaque delectus quae vel numquam eum corporis beatae suscipit. Doloremque, culpa iusto?",
    img: "/post1.jpg",
    date: "2020-10-11"
  }
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
          <Post title={postData.title} description={postData.description} img={postData.img} date={postData.date}/>
          <Post title={postData.title} description={postData.description} img={postData.img} date={postData.date}/>
          <Post title={postData.title} description={postData.description} img={postData.img} date={postData.date}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
