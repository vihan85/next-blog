import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";
import styles from "./post-content.module.css";


function PostContent(props) {
  const { post } = props;
  console.log("PostContent:",post.slug)
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}
export default PostContent;
