import Popup from "../Popup/Popup";
import "./SuccessModal.css";

const SuccessModal = ({ activePopup, closePopup, onNavClick }) => {
  return (
    <Popup onCloseClick={closePopup} isOpen={activePopup === "registered"}>
      <h2 className="popup__title">Registration successfully completed!</h2>
      <button type="button" className="popup__nav" onClick={onNavClick}>
        Sign in
      </button>
    </Popup>
  );
};

export default SuccessModal;
