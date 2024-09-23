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
            onClick={() => setSelectedImage(image.urls.full)}
            author={image.user.name}
            likes={image.likes}
            description={image.description || image.alt_description}
          />
        </li>
      ))}
    </ul>
  );
};

// // if (images.length === 0) {
// //   return null;
// // }
// // return (
// //   <ul className={css.gallery}>
// //     {images.map((image) => {
// //       <li
// //         key={image.id}
// //         className={css.galleryitem}
// //         onClick={() => setSelectedImage(image)}
// //       >
// //         <ImageCard src={image.urls.small} alt={image.alt_description} />
// //       </li>;
// //     })}
// //   </ul>
// );

export default ImageGallery;
