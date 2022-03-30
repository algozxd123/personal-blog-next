import type { NextPage } from "next";
import Image from "next/image";
import { PostType } from "../types/post";
import Link from "next/link";

const Post: NextPage<PostType> = (props) => {
  return (
    <div className="mt-6 bg-[#42414d] border border-solid border-transparent shadow-sm rounded-lg p-5 flex justify-between hover:border-blue-400">
      <div>
        <Link href={'/posts/' + props.slug}>
          <a>
            <Image src={props.img} alt="Logo" width={125} height={125} layout="fixed" />
          </a>
        </Link>
      </div>
      <div className="ml-5 flex flex-col justify-between">
        <div>
          <Link href={'/posts/' + props.slug}>
            <a className="hover:underline text-blue-300 hover:text-blue-400">
              <h1 className="text-2xl">{props.title}</h1>
            </a>
          </Link>

          <Link href={'/posts/' + props.slug}>
            <a className="hover:underline">
              <p className="line-clamp-3 text-ellipsis">{props.content}</p>
            </a>
          </Link>
        </div>
        <div className="mt-2 flex justify-end">
          <p className="text-gray-400">{props.date}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
