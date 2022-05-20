import Image from "next/image";
import { PostType } from "../types/post";
import Link from "next/link";
import Date from "./date";

const Post = (props : PostType) => {
  return (
    <div className="mt-7 mb-7 border border-solid border-transparent flex justify-between">
      <div>
        <Link href={'/posts/' + props.slug}>
          <a>
            <Image src={props.img} alt="Logo" width={200} height={200} layout="fixed" />
          </a>
        </Link>
      </div>
      <div className="ml-5 flex flex-col justify-between">
        <div className="space-y-2">
          <Link href={'/posts/' + props.slug}>
            <a className=" text-[#EB5A3E] hover:text-white">
              <h1 className="text-4xl font-serif font-thin">{props.title}</h1>
            </a>
          </Link>
          <Date date={props.date}/>
          <p className="line-clamp-3 text-ellipsis">{props.content}</p>
        </div>
        <Link href={'/posts/' + props.slug}>
          <a>
            <div className="flex justify-end items-center space-x-2 hover:text-[#EB5A3E]">
              <span>Read More</span>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Post;
