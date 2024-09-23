import css from "./ImageCard.module.css";

const ImageCard = ({ src, alt, onClick, author, likes, description }) => {
  return (
    <div className={css.card} onClick={onClick}>
      <img className={css.image} src={src} alt={alt} />
      <div className={css.info}>
        <p>Author: {author}</p>
        <p>Likes: {likes}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ImageCard;
