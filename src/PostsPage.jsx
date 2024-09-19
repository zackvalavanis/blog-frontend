import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";
import axios from "axios";
import { useState, useEffect } from 'react';

export function PostsPage() {
  const [ posts, setPosts ] = useState([]);

  const handleIndex = () => { 
    axios.get("http://localhost:3000/posts.json").then(response => { 
      console.log(response.data);
      setPosts(response.data);
    });
  }
  

  useEffect(handleIndex, [])


  return (
    <div>
      <PostsIndex posts={posts} />
      <PostsNew />
      <Modal show={true}>
      <p>TEST</p>
      </Modal>
      <button onClick={handleIndex}>Get Data</button>
    </div>
  );
}
