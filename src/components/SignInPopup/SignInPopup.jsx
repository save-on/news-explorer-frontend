import PopupWithForm from "../PopupWithForm/PopupWithForm";
import "./SignInPopup.css";

const SignInPopup = ({ activePopup, closePopup, handleSignUpClick }) => {
  return (
    <PopupWithForm
      title="sign in"
      nameText="sign-in"
      popupNav="Sign up"
      isOpen={activePopup === "sign-in"}
      onCloseClick={closePopup}
      onNavClick={handleSignUpClick}
    >
      <label htmlFor="signin-email" className="popup__input-title">
        email
        <input
          type="text"
          id="signin-email"
          className="popup__input popup__input_type_signin-email"
          placeholder="Enter email"
          name="email"
          required
        />
      </label>
      <label htmlFor="signin-password" className="popup__input-title">
        password
        <input
          type="password"
          className="popup__input popup__input_type_signin-password"
          id="signin-password"
          placeholder="Enter password"
          name="password"
          required
        />
      </label>
    </PopupWithForm>
  );
};

export default SignInPopup;
