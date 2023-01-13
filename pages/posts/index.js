import AllPosts from "../../components/posts/all-posts";
const DUMMY_POSTS = [
  {
    title: "Getting-startes-with-nextjs",
    image: "getting-startes-with-nextjs.png",
    excerpt: "getting-startes-with-nextjs",
    date: "2022-02-10",
    slug: "getting-startes-with-nextjs",
  },
  {
    title: "Getting-startes-with-nextjs2",
    image: "getting-startes-with-nextjs.png",
    excerpt: "getting-startes-with-nextjs",
    date: "2022-02-10",
    slug: "getting-startes-with-nextjs2",
  },
  {
    title: "Getting-startes-with-nextjs3",
    image: "getting-startes-with-nextjs.png",
    excerpt: "getting-startes-with-nextjs",
    date: "2022-02-10",
    slug: "getting-startes-with-nextjs3",
  },
  {
    title: "Getting-startes-with-nextjs4",
    image: "getting-startes-with-nextjs.png",
    excerpt: "getting-startes-with-nextjs",
    date: "2022-02-10",
    slug: "getting-startes-with-nextjs4",
  },
];
function AllPostPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}
export default AllPostPage;
