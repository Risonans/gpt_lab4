import { heroData } from "../mockData/heroData";

export const Header = ({ header }) => (
  <h1 className="left__header">{header}</h1>
);

export const Description = ({ description }) => (
  <p className="left__description">{description}</p>
);

export const Button = ({ ctaButton: { type, title } }) => {
  switch (type) {
    case "input":
      return <input type="text" placeholder={title} />;

    case "button":
      return (
        <button className="cta_buttons__signin btn primary-btn">{title}</button>
      );

    default:
      return null;
  }
};

export const Buttons = ({ ctaButtons }) => {
  return (
    <div className="left__cta_buttons">
      {ctaButtons.map((ctaButton, index) => (
        <Button key={index} ctaButton={ctaButton} />
      ))}
    </div>
  );
};

export const Illustration = ({ illustration: { alt, src } }) => (
  <img src={src} alt={alt} />
);

export const SignUp = ({ signUp }) => {
  const { type, title, src, alt } = signUp;
  return (
    <>
      <div className="left__social_approve">
        <img src={src} alt={alt} />
        <p className={type}>{title}</p>
      </div>
    </>
  );
};

const Hero = () => {
  const { header, description, illustration, heroCtaButtons, signUp } = heroData;

  return (
    <>
      <div className="hero_section__left">
        <Header header={header} />
        <Description description={description} />
        <Buttons ctaButtons={heroCtaButtons} />
        <SignUp signUp={signUp} />
      </div>
      <div className="hero_section__right">
        <Illustration illustration={illustration} />
      </div>
    </>
  );
};

export default Hero;
