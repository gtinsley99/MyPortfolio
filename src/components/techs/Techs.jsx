import "./Techs.css";
import { useInView } from "react-intersection-observer";
import HTML from "../../images/techImg/html.png";
import CSS from "../../images/techImg/CSS3_logo.svg.png";
import JavaScript from "../../images/techImg/javascript.png";
import React from "../../images/techImg/React-icon.svg.png";
import MySQL from "../../images/techImg/mysql-logo.svg";
import MongoDB from "../../images/techImg/mongodb.svg";

const Techs = () => {
    const { ref: titleRef, inView: titleVisible } = useInView({ triggerOnce: true });
  const { ref: iconRef, inView: iconVisible } = useInView({ triggerOnce: true });
  return (
    <div className="techs" id="skills">
      <h2 className={`techsTitle ${titleVisible && "animateTitle"}`} ref={titleRef}>My Technologies</h2>
      <div className="techImgs">
        <div className={`iconDiv ${iconVisible && "animateIcon"}`} ref={iconRef} >
          <img className="techPic" alt="HTML" src={HTML} />
          <p>HTML</p>
        </div>
        <div className={`iconDiv ${iconVisible && "animateIcon"}`} ref={iconRef} >
          <img className="techPic" alt="CSS" src={CSS} />
          <p>CSS</p>
        </div>
        <div className={`iconDiv ${iconVisible && "animateIcon"}`} ref={iconRef} >
          <img className="techPic" alt="JavaScript" src={JavaScript} />
          <p>JavaScript</p>
        </div>
        <div className={`iconDiv ${iconVisible && "animateIcon"}`} ref={iconRef} >
          <img className="techPic" alt="React" src={React} />
          <p>React</p>
        </div>
        <div className={`iconDiv ${iconVisible && "animateIcon"}`} ref={iconRef} >
          <img className="techPic" alt="MySQL" src={MySQL} />
          <p>MySQL</p>
        </div>
        <div className={`iconDiv ${iconVisible && "animateIcon"}`} ref={iconRef} >
          <img className="techPic" alt="MongoDB" src={MongoDB} />
          <p>MongoDB</p>
        </div>
      </div>
    </div>
  );
};

export default Techs;
