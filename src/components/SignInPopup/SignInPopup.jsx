import { useForm } from "../../hooks/useForm";
import { authorize, checkToken } from "../../stub/auth";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import "./SignInPopup.css";

const SignInPopup = ({
  activePopup,
  closePopup,
  handleSignUpClick,
  handleSubmit,
  setIsLoggedIn,
  setCurrentUser,
}) => {
  const { values, handleChanges, setValues } = useForm({
    email: "",
    password: "",
  });

  const handleReset = () => {
    setValues({
      email: "",
      password: "",
    });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const makeRequest = () => {
      return authorize(values).then((token) => {
        checkToken(token).then(({ name, id }) => {
          setCurrentUser({ name, id });
          setIsLoggedIn(true);
          handleReset();
        });
      });
    };
    handleSubmit(makeRequest);
  };

  return (
    <PopupWithForm
      title="sign in"
      nameText="sign-in"
      formPopupNav="Sign up"
      isOpen={activePopup === "sign-in"}
      onCloseClick={closePopup}
      onNavClick={handleSignUpClick}
      onSubmitClick={handleSignIn}
    >
      <label htmlFor="signin-email" className="form-popup__input-title">
        email
        <input
          type="text"
          id="signin-email"
          className="form-popup__input form-popup__input_type_signin-email"
          placeholder="Enter email"
          name="email"
          value={values.email}
          onChange={handleChanges}
          required
        />
      </label>
      <label htmlFor="signin-password" className="form-popup__input-title">
        password
        <input
          type="password"
          className="form-popup__input form-popup__input_type_signin-password"
          id="signin-password"
          placeholder="Enter password"
          name="password"
          value={values.password}
          onChange={handleChanges}
          required
        />
      </label>
    </PopupWithForm>
  );
};

export default SignInPopup;
