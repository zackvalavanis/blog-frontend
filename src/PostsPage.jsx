import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import axios from "axios";

export function PostsPage() {
  const posts = [];
  const handleIndex = () => { 
    axios.get("http://localhost:3000/posts.json").then(response => { 
      console.log(response);
    });
  }
  return (
    <div>
      <PostsIndex name={name} posts={posts} />
      <PostsNew />
      <button onClick={handleIndex}>Get Data</button>
    </div>
  );
}
