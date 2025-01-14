import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png";
import pdfFile from "../../documents/CV-Bogdan-Filip.pdf";

const Intro = () => {
  const openPdf = () => {
    window.open(pdfFile);
  };

  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className='"introText'>
          I'm <span className="introName">Bogdan</span> <br></br> Web Developer
        </span>
        <p className="introPara">
          I'm a highly skilled and detail-oriented web developer <br></br> with a strong
          focus on building modern, responsive <br></br> and scalable web applications.
          Passionate about creating <br></br> seamless user experiences, I excel at
          turning complex ideas <br></br> into innovative and efficient solutions.
        </p>
        <Link>
          <button className="btn" onClick={openPdf}>
            <img src={btnImg} className="btnImg" alt="Get my Resume" />
            Get my Resume
          </button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
