import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";
import axios from "axios";
import { useState, useEffect } from 'react';

export function PostsPage() {
  const [ posts, setPosts ] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);

  const handleIndex = () => { 
    axios.get("http://localhost:3000/posts.json").then(response => { 
      console.log(response.data);
      setPosts(response.data);
    });
  }

  const handleShow = () => { 
    console.log('hello');
    setIsPostsShowVisible(true);
  }

  const handleClose = () => { 
    setIsPostsShowVisible(false);
  }
  

  useEffect(handleIndex, [])


  return (
    <div>
      <PostsIndex posts={posts} onShow={handleShow} />
      <PostsNew />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
      <p>TEST</p>
      </Modal>
    </div>
  );
}
