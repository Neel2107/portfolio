import React from "react";
import "./ContactSection.scss";
const ContactSection = () => {
  const handleButtonCLick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const linkdin = {
    border: "2px solid rgb(46, 166, 86)",
    boxShadow: "rgb(46, 166, 86) 1px 5px 40px",
  };

  const github = {
    border: "2px solid rgba(255, 180, 0, 0.51)",
    boxShadow: "rgba(255, 180, 0, 0.51) 1px 5px 40px",
  };

  const instagarm = {
    border: "2px solid rgba(219, 54, 205, 0.882)",
    boxShadow: " rgba(219, 54, 205, 0.882) 1px 5px 40px",
  };

  const twitter = {
    border: "2px solid rgba(0, 128, 255, 0.51)",
    boxShadow: " rgba(0, 128, 255, 0.51) 1px 5px 40px",
  };

  return (
    <div className="contactSection" id="contact">
      <div className="contactsContainer">
        <div className="contactDetailContainer">
          <span className="hidden show">05. What's Next?</span>
          <span className="GIT hidden show">Get In Touch</span>
          <p className="desc hidden show">
            Although I am currently new to the sector, based on my projects and
            talents, I would like to gain some industrial experience. I am
            delighted to begin a new chapter as a developer for the company.
          </p>
          <div className="platformContainer hidden show">
            <a href="https://www.linkedin.com/in/neelpatel2107/">
              <div className="platformTab" style={linkdin}>
                {/* <img className='platformIconImage' src="./linkdin.png" alt="" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                   strokeWidth="1"
                  stroke-linecap="round"
                  strokeLinecap="round"
                  class="icons platformIconImage"
                >
                  <title>LinkedIn</title>
                  <path
                    className="pathHover"
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                  ></path>
                  <rect
                    className="pathHover"
                    x="2"
                    y="9"
                    width="4"
                    height="12"
                  ></rect>
                  <circle className="pathHover" cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
            </a>
            <a href="https://github.com/Neel2107">
              <div className="platformTab" style={github}>
                {/* <img className='platformIconImage' src="./github.png" alt="" /> */}
                <svg
                  // style={{ width: "20px", padding: "5px" }}
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                   strokeWidth="1"
                  stroke-linecap="round"
                  strokeLinecap="round"
                  className="  icons platformIconImage"
                >
                  <path
                    className="pathHover"
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                  ></path>
                </svg>
              </div>
            </a>
            <a href="https://www.instagram.com/21_neeel/">
              <div className="platformTab" style={instagarm}>
                {/* <img className='platformIconImage' src="./instagram.png" alt="" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                   strokeWidth="1"
                  stroke-linecap="round"
                  strokeLinecap="round"
                  class="platformIconImage icons "
                >
                  <title>Instagram</title>
                  <rect
                    className="pathHover"
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    ry="5"
                  ></rect>
                  <path
                    className="pathHover"
                    d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                  ></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
            </a>
            <a href="https://twitter.com/notneeel">
              <div className="platformTab" style={twitter}>
                {/* <img className='platformIconImage' src="./twitter.png" alt="" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                   strokeWidth="1"
                  stroke-linecap="round"
                  strokeLinecap="round"
                  class="icons platformIconImage"
                >
                  {/* <title>Twitter</title> */}
                  <path
                    className="pathHover"
                    d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            className="contactBtn hidden show"
          >
            Say Hello!
          </a>
          <span className="devBy hidden show">Developed by</span>
          <span className="developer hidden show">Nova</span>
        </div>
      </div>
      <button className="backToTop" onClick={handleButtonCLick}>
        <div className="text">
          <span>Back</span>
          <span>to</span>
          <span>top</span>
        </div>
        <div className="clone">
          <span>Back</span>
          <span>to</span>
          <span>top</span>
        </div>
        <svg
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
           strokeWidth="2"
        >
          <path
            stroke-linecap="round"
            strokeLinecap="round"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default ContactSection;
