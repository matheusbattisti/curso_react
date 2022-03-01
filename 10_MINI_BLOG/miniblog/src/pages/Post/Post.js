// CSS
import styles from "./Post.module.css";

// hooks
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const { document } = useFetchDocument("posts", id);

  return <div>{document && <p>{document.title}</p>}</div>;
};

export default Post;
