import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import PostProps from "../types/PostProp";

const Post: NextPage<PostProps> = (props) => {

  return (
    <div className="mt-6 bg-[#42414d] border border-solid border-transparent shadow-sm rounded-lg p-5 flex justify-between hover:border-blue-400">
      <div>
        <a href="#">
          <Image src="/post1.jpg" alt="Logo" width={125} height={125} layout="fixed" />
        </a>
      </div>
      <div className="ml-5 flex flex-col justify-between">
        <div>
          <a href="#" className="hover:underline text-blue-300 hover:text-blue-400">
            <h1 className="text-2xl">{props.title}</h1>
          </a>

          <a href="#" className="hover:underline">
            <p className="line-clamp-3">
              {props.description}
            </p>
          </a>
        </div>
        <div className="mt-2 flex justify-end">
          <p className="text-gray-400">{props.date}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
