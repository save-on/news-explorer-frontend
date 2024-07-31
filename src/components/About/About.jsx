import "./About.css";
import image from "../../assets/image-03.png";

const About = () => {
  return (
    <section className="about">
      <img src={image} alt="author picture" className="about__image" />
      <div className="about__text">
        <h2 className="about__title">About the author</h2>
        <p className="about__description">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.
          <br />
          <br />
          You can also talk about your experience with TripleTen, what you
          learned there, and how you can help potential customers.
        </p>
      </div>
    </section>
  );
};

export default About;
