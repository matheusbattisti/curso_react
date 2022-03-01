// CSS
import styles from "./Home.module.css";

// hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

// components
import PostDetail from "../../components/PostDetail";

const Home = () => {
  const { documents } = useFetchDocuments("posts");
  console.log(documents);

  return (
    <div>
      <h1>Home</h1>
      {documents &&
        documents.map((post) => <PostDetail key={post.id} post={post} />)}
    </div>
  );
};

export default Home;
