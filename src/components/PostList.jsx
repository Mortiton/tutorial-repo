import { useState } from "react";
import Modal from "./Modal";
import Post from "./Post";
import styles from "./PostlList.module.css";
import NewPost from "./NewPost";

export default function PostList() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      <Modal>
        <NewPost
          onBodyChange={bodyChangeHandler}
          onAuthorChange={authorChangeHandler}
        />
      </Modal>
      <ul className={styles.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Zoe" body="Learning isn't fun" />
        <Post author="Mortiton" body="BOOOO" />
      </ul>
    </>
  );
}
