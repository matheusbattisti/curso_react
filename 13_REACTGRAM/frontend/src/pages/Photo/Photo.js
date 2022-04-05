import "./Photo.css";

import { uploads } from "../../utils/config";

// components
import Message from "../../components/Message";
import PhotoItem from "../../components/PhotoItem";
import LikeContainer from "../../components/LikeContainer";

// hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

// Redux
import { getPhoto, like, resetMessage, comment } from "../../slices/photoSlice";

const Photo = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { photo, loading, error, message } = useSelector(
    (state) => state.photo
  );

  const [commentText, setCommentText] = useState();

  // Load photo data
  useEffect(() => {
    dispatch(getPhoto(id));
  }, [dispatch, id]);

  // Like a photo
  function resetComponentMessage() {
    setTimeout(() => {
      dispatch(resetMessage());
    }, 2000);
  }

  const handleLike = () => {
    dispatch(like(photo._id));

    resetComponentMessage();
  };

  // Insert a comment
  const handleComment = (e) => {
    e.preventDefault();

    const photoData = {
      comment: commentText,
      id: photo._id,
    };

    dispatch(comment(photoData));

    setCommentText("");

    resetComponentMessage();
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  console.log(user);

  return (
    <div id="photo">
      <PhotoItem photo={photo} />
      <LikeContainer photo={photo} user={user} handleLike={handleLike} />
      <div className="message-container">
        {error && <Message msg={error} type="error" />}
        {message && <Message msg={message} type="success" />}
      </div>
      <div className="comments">
        {photo.comments && (
          <>
            <h3>Comentários ({photo.comments.length}):</h3>
            <form onSubmit={handleComment}>
              <input
                type="text"
                placeholder="Insira seu comentário..."
                onChange={(e) => setCommentText(e.target.value)}
                value={commentText || ""}
              />
              <input type="submit" value="Enviar" />
            </form>
            {photo.comments.length === 0 && <p>Não há comentários...</p>}
            {photo.comments.map((comment) => (
              <div className="comment">
                <div className="author">
                  <img
                    src={`${uploads}/users/${comment.userImage}`}
                    alt={comment.userName}
                  />
                  <p>{comment.userName}</p>
                </div>
                <p>{comment.comment}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Photo;
