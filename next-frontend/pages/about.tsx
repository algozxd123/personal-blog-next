import { NextPage } from "next";
import Image from "next/image";
import { getAbout } from "../lib/api";
import { AboutType } from "../types/singles";

const About: NextPage<AboutType> = (about) => {
  return (
    <div className="flex justify-center mt-6">
      <div className="w-9/12 p-5">
        <h1 className="text-4xl mb-10 font-serif font-thin">About</h1>
        <Image alt="Post cover image" src={about.image} height={600} width={1380}></Image>
        <div className="mt-6 text-lg leading-8" dangerouslySetInnerHTML={{ __html: about.text }}></div>
      </div>
    </div>
  );
};

export async function getStaticProps() {

  const aboutData = await getAbout();
  return {
    props: {
      ...aboutData,
    },
  }
};


export default About;