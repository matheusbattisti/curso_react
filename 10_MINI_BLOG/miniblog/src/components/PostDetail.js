import { Link } from "react-router-dom";
import styles from "./PostDetail.module.css";

const PostDetail = ({ post }) => {
  console.log(post.tags);
  return (
    <div>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      {post.tags.map((tag) => (
        <p key={tag}>{tag}</p>
      ))}
      <Link to={`/posts/${post.id}`}>Ler</Link>
    </div>
  );
};

export default PostDetail;
