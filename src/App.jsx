import { useState } from "react";
import PostList from "./components/PostList";
import MainHeader from "./components/MainHeader";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function hideModalHandler() {
    setModalIsOpen(false);
  }

  function showModalHandler() {
    setModalIsOpen(true);
  }

  return (
    <>
    <MainHeader onCreatePost={showModalHandler} />

    <main>
      <PostList isPosting={modalIsOpen} onStopPosting={hideModalHandler}/>
    </main>
        </>
  );
}

export default App;
