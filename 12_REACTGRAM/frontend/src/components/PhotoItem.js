import "./PhotoItem.css";

import { uploads } from "../utils/config";

const PhotoItem = ({ photo }) => {
  return (
    <div className="photo-item">
      {photo.image && (
        <img src={`${uploads}/photos/${photo.image}`} alt={photo.title} />
      )}
      <h2>{photo.title}</h2>
    </div>
  );
};

export default PhotoItem;
