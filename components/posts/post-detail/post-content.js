import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";
import styles from './post-content.module.css'

const DUMMY_POSTS =
  {
    title: "Getting-startes-with-nextjs",
    image: "getting-startes-with-nextjs.png",
    date: "2022-02-10",
    slug: "getting-startes-with-nextjs",
    content: "# This is a first post",
  }

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`;
  return (
    <article className={styles.content}>
      <PostHeader title={DUMMY_POSTS.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POSTS.content}</ReactMarkdown>
    </article>
  );
}
export default PostContent;