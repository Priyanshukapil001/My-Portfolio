import React, { useContext } from "react";
import "./Education.css";
import Fiverr from "../../img/fiverr.png";
import { themeContext } from "../../Context";
const Education = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="edu" id="edu">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Education
          </span>
          <span>Qualifications</span>
          <spane>
            Pursuing B.Tech (Computer Science and Engineering)
            <br />
            2021-25
            <br />
            Chandigarh Group of Colleges, Landran (Mohali)
            <br />
            Intrest : Web Development
          </spane>
          <a href="https://www.linkedin.com/in/priyanshu-kapil/y">
            <button className="button s-button">LinkedIn</button>
            </a>
          
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
          <div>
            <img src={Fiverr} alt="" />
          </div>
      </div>
    </div>
  );
};

export default Education;
