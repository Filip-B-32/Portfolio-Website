import React, { useRef, useState } from "react";
import "./contact.css";
import Linkedin from "../../assets/linkedin.png";
import Twitter from "../../assets/twitter.png";
import Instagram from "../../assets/instagram.png";
import Github from "../../assets/github.png";
import emailjs from "@emailjs/browser";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button, CircularProgress } from "@mui/material";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            background: "white",
            color: "black",
            border: "none",
            padding: "0.75rem 3.5rem",
            borderRadius: "0.5rem",
            margin: "2rem",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "#f0f0f0",
            },
          },
        },
      },
    },
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("clicked");

    emailjs
      .sendForm("service_323b3px", "template_ed66awk", form.current, {
        publicKey: "2AV4pDaS03KwXZvw0",
      })
      .then(
        () => {
          setLoading(false);
          toast.success("Your message has been sent!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
          toast.error("Your message couldn't be sent! Please try again", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        }
      );
  };

  return (
    <ThemeProvider theme={theme}>
      <div id="contact">
        <h1 className="contact-title">Contact me</h1>
        <span className="contact-description">
          Feel free to reach out to me for discussions regarding potential work
          opportunities and to obtain a copy of my CV. I eagerly welcome the
          chance to explore potential collaborations and opportunities together.
        </span>
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            name="user_name"
            placeholder="Your name / Company name"
            disabled={loading ? true : false}
            required
          />
          <input
            type="email"
            name="user_email"
            className="email"
            placeholder="Your email"
            disabled={loading ? true : false}
            required
          />
          <textarea
            name="message"
            className="msg"
            rows="10"
            placeholder="Your message"
            disabled={loading ? true : false}
            required
          ></textarea>
          <Button
            className="submit-button"
            type="submit"
            value="Send"
            disabled={loading ? true : false}
          >
            {loading ? <CircularProgress size={25} /> : "Submit"}
          </Button>
        </form>
        <div className="links">
          <a href="https://www.linkedin.com/in/bogdan-filip-21b709220/">
            <img src={Linkedin} alt="linkedin" className="link" />
          </a>
          <a href="https://twitter.com/b_filip32">
            <img src={Twitter} alt="twitter" className="link" />
          </a>
          <a href="https://www.instagram.com/filip._.bogdan/">
            <img src={Instagram} alt="instagram" className="link" />
          </a>
          <a href="https://github.com/Filip-B-32">
            <img src={Github} alt="github" className="link" />
          </a>
        </div>
      </div>
      <ToastContainer />
    </ThemeProvider>
  );
};

export default Contact;
