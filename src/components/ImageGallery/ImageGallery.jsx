import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, setSelectedImage }) => {
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <li key={image.id} className={css.galleryItem}>
          <ImageCard
            src={image.urls.small}
            alt={image.alt_description}
            onClick={() => setSelectedImage(image)}
            author={image.user.name}
            likes={image.likes}
            description={image.description || image.alt_description}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
