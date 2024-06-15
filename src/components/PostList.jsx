import { useState, useEffect } from "react";
import Modal from "./Modal";
import Post from "./Post";
import styles from "./PostlList.module.css";
import NewPost from "./NewPost";

export default function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('http://localhost:8080/posts');
      const data = await response.json();
      setPosts(data.posts);
    }
    fetchPosts();
  }, []);

 function addPostHandler(postData) {
  fetch('http://localhost:8080/posts',
    {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
  setPosts((existingPosts) => [postData, ...existingPosts]);
 }
 

  let modalContent;

  if (isPosting) {
    modalContent = (
      <Modal onClose={onStopPosting}>
      <NewPost
        onCancel={onStopPosting}
        onAddPost={addPostHandler}
      />
    </Modal>
    );
    }

  return (
    <>
      {modalContent}
      {posts.length > 0 && (
      <ul className={styles.posts}>
        {posts.map((post, index) => (
          <Post key={index} body={post.body} author={post.author} />
        ))}
      </ul>
      )}
      {posts.length === 0 && <div style={{ textAlign: "center", color: "white" }}>
        <h2>No posts yet</h2>
        <p> Maybe you should add one?</p></div>}
    </>
  );
}
