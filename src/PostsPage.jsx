import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./modal";
import { PostsShow } from "./PostsShow";
import axios from "axios";
import { useState, useEffect } from 'react';

export function PostsPage() {
  const [ posts, setPosts ] = useState([]);
  const [ isPostsShowVisible, setIsPostsShowVisible ] = useState(false);
  const [ currentPost, setCurrentPost ] = useState({});

  const handleIndex = () => { 
    axios.get("http://localhost:3000/posts.json").then(response => { 
      console.log(response.data);
      setPosts(response.data);
    });
  }

  const getPostShow = () => { 
    axios.get("http://localhost:3000/posts/1.json").then(response => { 
    console.log(response.data);
  });
}

const handleCreate = (params, successCallback) => { 
  axios.post("http://localhost:3000/posts.json", params).then(response => { 
    console.log(response.data);
    setPosts([...posts, response.data]);
    successCallback();
  });
}

  const handleShow = (post) => { 
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  }

  const handleClose = () => { 
    setIsPostsShowVisible(false);
  }
  

  useEffect(handleIndex, [])


  return (
    <div>
      <PostsIndex posts={posts} onShow={handleShow} />
      <PostsNew onCreatePost={handleCreate}/>
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostsShow post={currentPost} />
      </Modal>
    </div>
  );
}

