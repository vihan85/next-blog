import fs from "fs";
import path from "path";
import matter from "gray-matter";
const postsDirectory = path.join(process.cwd(), "posts");

function getPostData(fileName) {
  const filePasth = path.join(process.cwd(), fileName);
  const fileContent = fs.readFileSync(filePasth, "utf-8");
  const { data, content } = matter(fileContent);
  const postSlug = fileName.replace(/\.md$/, ""); // remove the file extenstion
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
}
function getAllPosts() {
  const postFiles = fs.readFileSync(postsDirectory);
  const allPosts = postFiles.map((postFile) => getPostData(postFile));
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );
  return sortedPosts;
}
function getFeaturePost() {
  const allPosts = getAllPosts();
  const featurePosts = allPosts.filter((post) => post.isFeatured);
  return featurePosts;
}
export { getPostData, getFeaturePost, getAllPosts };
