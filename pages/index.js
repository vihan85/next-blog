import Hero from "../components/home-page/hero";
import FeaturedPost from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";

export default function HomePage(props) {
  return (
    <>
      <Hero />
      <FeaturedPost posts={props.posts} />
    </>
  );
}
export function getStaticProps() {
  const featuredPost = getFeaturedPosts();
  return {
    props: {
      posts: featuredPost,
    },
  };
}
