import PostsGrid from "../posts/posts-grid";
import styles from "./featured-posts.module.css";
function FeaturedPost({posts}) {
  return (
    <section className={styles.latest}>
      <h2> Featured posts</h2>
      alist of posts
      <PostsGrid posts={posts}/>
    </section>
  );
}
export default FeaturedPost;
