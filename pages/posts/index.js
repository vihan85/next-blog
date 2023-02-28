import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

function AllPostPage({ posts }) {
  const allPost = getAllPosts();
  console.log(allPost)
  return <AllPosts posts={allPost} />;
}
export async function getStaticProps(context) {
  const allPost = getAllPosts();
  return {
    props: {
      posts: allPost,
    },
  };
}
export default AllPostPage;
