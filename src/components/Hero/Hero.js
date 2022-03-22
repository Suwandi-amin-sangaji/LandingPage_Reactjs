import React from "react";
import w from "../../images/w.png";
import { FaChevronRight } from "react-icons/fa";
import { useGlobalContext } from "../../context";
import "./Hero.css";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>
            Suwandi Amin Sangaji
          </h1>
          <p className="hero-text">
            I am a Full Stack Web Developer.
          </p>
          <span className="group">
            <button className="btn">
              Start now{" "}
              <span className="right-arrow">
                <FaChevronRight />
              </span>
            </button>
            <div className="contact">
              <a href="https://github.com/Suwandi-amin-sangaji" target="_blank" >Github </a>
              <span className="right-arrow">
                <FaChevronRight />
              </span>
            </div>
          </span>
        </article>
        <article className="hero-images">
          <img src={w} alt="phone image" className="phone-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;