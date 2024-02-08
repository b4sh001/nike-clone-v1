import "./Hero.css";
import nike_banner from "../../assets/nike-just-do-it.png";

function Hero() {
  return (
    <div className="hero">
      <div className="disclaimer">
        Disclaimer: No infringement of copyright intended and is for educational
        purposes only. All images are belong to Nike.
      </div>
      <div className="hero-container">
        <figure className="banner">
          <img src={nike_banner} alt="Ecommerce Banner" />
          <figcaption>
            <p>Arriving soon</p>
            <h3>Nike Air Max DN</h3>
            <p>Welcompe to the next generation of Air technology</p>
            <div className="btn btn-notif">
              <a href="/">Get Notified</a>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default Hero;
