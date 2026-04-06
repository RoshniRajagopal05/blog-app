import { posts } from "../../data";

export default async function PostPage({ params }) {
  const { id } = await params;
  const post = posts.find((p) => p.id == id);

  if (!post) {
    return <h1>Post Not Found</h1>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
