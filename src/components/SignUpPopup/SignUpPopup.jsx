import PopupWithForm from "../PopupWithForm/PopupWithForm";
import "./SignUpPopup";

const SignUpPopup = ({ activePopup, closePopup, handleSignInClick }) => {
  return (
    <PopupWithForm
      title="sign up"
      nameText="sign-up"
      formPopupNav="Sign in"
      isOpen={activePopup === "sign-up"}
      onCloseClick={closePopup}
      onNavClick={handleSignInClick}
    >
      <label htmlFor="signup-email" className="form-popup__input-title">
        email
        <input
          type="text"
          id="signup-email"
          className="form-popup__input form-popup__input_type_signup-email"
          placeholder="Enter email"
          name="email"
          required
        />
      </label>
      <label htmlFor="signup-password" className="form-popup__input-title">
        password
        <input
          type="password"
          id="signup-password"
          className="form-popup__input form-popup__input_type_signup-password"
          placeholder="Enter password"
          name="password"
          required
        />
      </label>
      <label htmlFor="signup-username" className="form-popup__input-title">
        username
        <input
          type="text"
          id="signup-username"
          className="form-popup__input form-popup__input_type_signup-username"
          placeholder="Enter your username"
          name="username"
          required
        />
      </label>
    </PopupWithForm>
  );
};

export default SignUpPopup;
