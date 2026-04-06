import { posts } from "./data";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>My Blog</h1>

      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/post/${post.id}`}>
            <h2>{post.title}</h2>
            <p>this is an extra pragraph for checking pull request</p>
          </Link>
        </div>
      ))}
    </div>
  );
}