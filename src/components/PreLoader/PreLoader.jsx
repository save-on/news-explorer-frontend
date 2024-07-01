import "./PreLoader.css";

const PreLoader = () => {
  return (
    <div className="preloader">
      <div className="preloader-circle" />
      <div className="preloader-text">Searching for news...</div>
    </div>
  );
};

export default PreLoader;
