import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

function AllPostPage({ posts }) {
  return <AllPosts posts={posts} />;
}
export function getStaticProps() {
  const allPost = getAllPosts();
  return {
    props: {
      posts: allPost,
    },
  };
}
export default AllPostPage;
