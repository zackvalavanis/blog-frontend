import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";

export function PostsPage() {
  const name = "Test";
  const posts = [
    {
      id: 1,
      title: "Hello!",
      body: "Welcome to the first blog post!",
      image: "https://cdn.dribbble.com/users/720738/screenshots/3848385/media/6e20ee860448d9181010d652892aba33.gif",
    },
    {
      id: 2,
      title: "Welcome!",
      body: "Hope all is well, welcome to the blog!",
      image: "https://t3.ftcdn.net/jpg/02/41/32/08/360_F_241320835_Z2fuURdWsRgtTnkARGQqiorzH8p4fnE5.jpg",
    },
    {
      id: 3,
      title: "How are we!?",
      body: "Bienvenidos a mi blog!",
      image: "https://www.creativefabrica.com/wp-content/uploads/2018/09/Howdy-Cowboy-by-Studio-26-Design-Co-1-580x387.jpg",
    },
  ];

  return (
    <div>
      <PostsIndex name={name} posts={posts} />
      <PostsNew />
    </div>
  );
}
