import './hero.css';
import googleIcon from '../../assets/google-icon.jpg';
const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__inner hero__left">
          <h1>Slack is where the future works</h1>
          <p>
            Transform the way you work with one place for <br />
            everyone and everything you need to get stuff done.
          </p>
          <div className="hero__left-links">
            <div className="try__link">
              <a href="#">Try For Free</a>
            </div>
            <div className="google__link">
              <div className="google__link-image-container">
                <img src={googleIcon} alt="" />
              </div>
              <a href="#">Sign Up With Google</a>
            </div>
          </div>
        </div>
        <div className="hero__inner hero__right">
          <video width="100%" loop muted autoPlay>
            <source
              src="https://a.slack-edge.com/0cedc3b/marketing/img/homepage/true-prospects/hero-revamp/animation/hero@2x.IN.webm"
              type="video/webm"
            />
          </video>
        </div>
      </section>
    </>
  );
};

export default Hero;
