import "./PopupWithForm.css";

const PopupWithForm = ({ title, children, nameText, popupNav }) => {
  return (
    <div className={`popup popup_type_${nameText}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <button type="button" className="popup__close-btn" />
        <form className="popup__form" name={nameText}>
          {children}
          {/* a <p> tag for non avaliable emails */}
          <button type="submit" className="popup__submit-btn" disabled>
            {title}
          </button>
        </form>
        <p className="popup__footer-text">
          or
          <span className="popup__navigation">{popupNav}</span>
        </p>
      </div>
    </div>
  );
};

export default PopupWithForm;
