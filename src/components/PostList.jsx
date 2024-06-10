import { useState } from "react";
import Modal from "./Modal";
import Post from "./Post";
import styles from "./PostlList.module.css";
import NewPost from "./NewPost";

export default function PostList({ isPosting, onStopPosting }) {
 const [posts, setPosts] = useState([]);

 function addPostHandler(postData) {
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
      <ul className={styles.posts}>
        {posts.map((post, index) => (
          <Post key={index} body={post.body} author={post.author} />
        ))}
      </ul>
    </>
  );
}
