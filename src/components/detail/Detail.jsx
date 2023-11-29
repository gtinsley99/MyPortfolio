import "./Detail.css";
import github from "../../images/github-mark-c791e9551fe4/github-mark/github-mark-white.svg";
import linkedin from "../../images/socialsImg/LinkedIn_icon.svg.png";
import CV from "../../static/GeorgeTinsleyCV.pdf";
import pdf from "../../images/socialsImg/pdf.svg";

const Detail = () => {
  return (
    <div className="detail">
      <div className="content">
        <div className="greet">
          <h2>Hey, I'm George</h2>
        </div>
        <div className="info">
          <p>
            I'm a full stack developer with a passion for building responsive
            websites and REST APIs.
          </p>
          <div className="socials">
            <span>
              <a href="https://github.com/gtinsley99" target="_blank">
                <img src={github} alt="GitHub"/>
              </a>
            </span>
            <span>
                <a href="https://www.linkedin.com/in/george-tinsley-05047217b/" target="_blank">
                    <img src={linkedin} width={100} alt="LinkedIn"/>
                </a>
            </span>
            <span>
                <a href={CV} target="_blank">
                    <img src={pdf} width={100} alt="CV"/>
                </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
