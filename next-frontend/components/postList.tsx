import { PostType } from "../types/post";
import { PropsArrayType } from "../types/util";
import NoResults from "./noResults";
import Post from "./post";
import Separator from "./separator";

const PostList = ({collection}: PropsArrayType<PostType>) => {
  return (
    <>
      {
      (collection.length > 0) ? 
      collection.map((post: PostType, i) => {
        return (<div key={post.slug}>
          <Post
            title={post.title}
            content={post.content}
            img={post.img}
            date={post.date}
            slug={post.slug}
          />
          {collection[i + 1] ? <Separator /> : <></>}
        </div>);
      }) : <NoResults/>
      }
    </>
  );
};

export default PostList;
