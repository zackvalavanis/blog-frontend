// PostsNew Component
export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault ();
    const params = new FormData(event.target);
    props.onCreatePost(params, () => event.target.reset())
  }
  return (
    <div id="posts-new">
      <h1>New Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" required />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <textarea id="body" name="body" rows="5" required></textarea>
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input type="img" id="image" name="image" accept="image/*" required />
        </div>
        <button type="submit" href="/">Create Post</button>
      </form>
    </div>
  );
}
