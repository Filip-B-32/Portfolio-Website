import React from "react";
import "./hobbies.css";
import Programming from "../../assets/programming.png";
import Gym from "../../assets/gym.png";
import Music from "../../assets/music.png";
import Guitar from "../../assets/guitar.png";
import Traveling from "../../assets/traveling.png";
import LanguageLearning from "../../assets/language.png";

const Hobbies = () => {
  return (
    <div className="hobbies-background-section">
      <section id="hobbies" className="hobbies">
        <span className="hobbies-title">My hobbies</span>
        <span className="hobbies-description">
          I find joy in a variety of activities that enrich my life both
          mentally and physically. From crafting lines of code to crafting
          melodies on my guitar, my hobbies span a diverse spectrum.
        </span>
        <div className="hobby-bars">
          <div className="hobby-bar">
            <img
              src={Programming}
              alt="Programming"
              className="hobby-bar-img"
            />
            <div className="hobby-bar-text">
              <h2>Programming</h2>
              <p>
                As a passionate programmer, I immerse myself in the world of
                coding, constantly seeking to innovate and solve problems
                through technology.
              </p>
            </div>
          </div>
          <div className="hobby-bar">
            <img src={Gym} alt="Gym" className="hobby-bar-img" />
            <div className="hobby-bar-text">
              <h2>Gym and Sports</h2>
              <p>
                Physical fitness is paramount to me. The gym is not just a place
                for exercise; it's where I push my limits, stay healthy, and
                find balance in both body and mind.
              </p>
            </div>
          </div>
          <div className="hobby-bar">
            <img src={Music} alt="Music" className="hobby-bar-img" />
            <div className="hobby-bar-text">
              <h2>Music</h2>
              <p>
                Music is my muse, woven into the fabric of my daily existence—be
                it unwinding to soothing melodies or energizing with upbeat
                rhythms. I am passionate about collecting and listening to vinyl
                records, finding solace and inspiration in their nostalgic
                soundscapes.
              </p>
            </div>
          </div>
          <div className="hobby-bar">
            <img src={Guitar} alt="Guitar" className="hobby-bar-img" />
            <div className="hobby-bar-text">
              <h2>Guitar</h2>
              <p>
                Strumming chords and composing melodies on my guitar is my
                creative outlet. It allows me to express myself in ways words
                cannot, filling the air with emotions and stories.
              </p>
            </div>
          </div>
          <div className="hobby-bar">
            <img src={Traveling} alt="Traveling" className="hobby-bar-img" />
            <div className="hobby-bar-text">
              <h2>Traveling</h2>
              <p>
                While I'm just beginning my journey as a traveler, I'm eager to
                explore new cultures, taste exotic cuisines, and create
                unforgettable memories around the globe.
              </p>
            </div>
          </div>
          <div className="hobby-bar">
            <img
              src={LanguageLearning}
              alt="Learning-new-languages"
              className="hobby-bar-img"
            />
            <div className="hobby-bar-text">
              <h2>Learning new Languages</h2>
              <p>
                Passionate about languages, I love discovering new ways to
                communicate, exploring different cultures through their words,
                and continuously expanding my linguistic skills to connect with
                people around the world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hobbies;
