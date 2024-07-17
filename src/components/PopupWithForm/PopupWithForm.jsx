import "./PopupWithForm.css";

const PopupWithForm = ({
  title,
  children,
  nameText,
  formPopupNav,
  isOpen,
  onCloseClick,
  onNavClick,
  onSubmitClick,
}) => {
  const handleOnClick = (e) => {
    if (e.target.classList.contains("form-popup")) {
      onCloseClick("");
    }
  };

  return (
    <div
      className={`form-popup form-popup_type_${nameText} ${
        isOpen && "form-popup_opened"
      }`}
      onMouseDown={handleOnClick}
    >
      <div className="form-popup__container">
        <h2 className="form-popup__title">{title}</h2>
        <button
          type="button"
          className="form-popup__close-btn"
          onClick={onCloseClick}
        />
        <form
          className="form-popup__form"
          onSubmit={onSubmitClick}
          name={nameText}
        >
          {children}
          {/* a <p> tag for non avaliable emails */}
          <button type="submit" className="form-popup__submit-btn">
            {title}
          </button>
        </form>
        <p className="form-popup__footer-text">
          or
          <span className="form-popup__navigation" onClick={onNavClick}>
            {formPopupNav}
          </span>
        </p>
      </div>
    </div>
  );
};

export default PopupWithForm;
