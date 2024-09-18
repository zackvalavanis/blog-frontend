// PostsNew Component
export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New Post</h1>
      <form action="/create-post" method="POST" encType="multipart/form-data">
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
          <input type="file" id="image" name="image" accept="image/*" required />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
