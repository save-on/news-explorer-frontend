import { useForm } from "../../hooks/useForm";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import "./SignUpPopup";

const SignUpPopup = ({
  activePopup,
  closePopup,
  handleSignInClick,
  handleRegisteredClick,
  handleSubmit,
  isLoading,
}) => {
  const { values, handleChanges, setValues } = useForm({
    email: "",
    password: "",
    username: "",
  });

  const handleReset = () => {
    setValues({
      email: "",
      password: "",
      username: "",
    });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    handleRegisteredClick();
    handleReset();
    const makeRequest = () => {
      // makeRequest here
    };
    // handleSubmit(makeRequest);
  };
  return (
    <PopupWithForm
      title="sign up"
      nameText="sign-up"
      formPopupNav="Sign in"
      isOpen={activePopup === "sign-up"}
      onCloseClick={closePopup}
      onNavClick={handleSignInClick}
      onSubmitClick={handleSignUp}
      isLoading={isLoading}
      loadingText="Signing up..."
    >
      <label htmlFor="signup-email" className="form-popup__input-title">
        email
        <input
          type="text"
          id="signup-email"
          className="form-popup__input form-popup__input_type_signup-email"
          placeholder="Enter email"
          name="email"
          value={values.email}
          onChange={handleChanges}
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
          value={values.password}
          onChange={handleChanges}
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
          value={values.username}
          onChange={handleChanges}
          required
        />
      </label>
    </PopupWithForm>
  );
};

export default SignUpPopup;
