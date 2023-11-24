import "./AboutMe.css";
import codeImg from "../../images/coding.avif"

const AboutMe = () => {
    return(
        <div className="aboutMe">
            <div className="textContent">
                <h2>About me</h2>
                <p>About me text here...</p>
            </div>
            <img className="codeImg" src={codeImg}></img>
        </div>
    );
};

export default AboutMe;