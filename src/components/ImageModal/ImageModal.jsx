import css from "./ImageModale.module.css";

const ImageModale = ({ isOpen, image, onRequestClose }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    className={css.modal}
    overlayClassName={css.overlay}
  >
    <div className={css.modalcontent}>
      <img
        className={css.img}
        src={image.urls.regular}
        alt={image.alt_description}
      />
      <div className={css.modalinfo}>
        <p>Author: {image.user.name}</p>
        <p>Likes: {image.likes}</p>
        <p>Description: {image.alt_description}</p>
      </div>
    </div>
  </Modal>
);

export default ImageModale;
