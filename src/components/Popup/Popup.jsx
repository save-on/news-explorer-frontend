import "./Popup.css";

const Popup = ({ children, onCloseClick, isOpen }) => {
  return (
    <div className={`popup ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-btn"
          onClick={onCloseClick}
        />
        {children}
      </div>
    </div>
  );
};

export default Popup;
