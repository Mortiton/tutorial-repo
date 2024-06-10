import { useState } from "react";
import Modal from "./Modal";
import Post from "./Post";
import styles from "./PostlList.module.css";
import NewPost from "./NewPost";

export default function PostList() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(true);

  function hideModalHandler() {
    setModalIsOpen(false);
  }

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  let modalContent;

  if (modalIsOpen) {
    modalContent = (
      <Modal onClose={hideModalHandler}>
      <NewPost
        onBodyChange={bodyChangeHandler}
        onAuthorChange={authorChangeHandler}
      />
    </Modal>
    );
  }

  return (
    <>
      {modalContent}
      <ul className={styles.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Zoe" body="Learning isn't fun" />
        <Post author="Mortiton" body="BOOOO" />
      </ul>
    </>
  );
}
