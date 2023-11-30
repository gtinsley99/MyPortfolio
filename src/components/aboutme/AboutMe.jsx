import "./AboutMe.css";
import codeImg from "../../images/coding.avif"
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
    const { ref: textRef, inView: textVisible } = useInView({ triggerOnce: true });
    const { ref: imgRef, inView: imgVisible } = useInView({ triggerOnce: true });
    return(
        <div className="aboutMe" id="about">
            <div className={`textContent ${textVisible && "animate"}`} ref={textRef}>
                <h2>About me</h2>
                <p>As a Chemistry graduate with experience in industry, I developed a passion for problem solving and logical thinking. As a result I have applied these skills to pursue a career as a software developer through a 12-week course provided by Code Nation.</p>
                <p>During this course, I have become proficient in both front-end (HTML, CSS, JavaScript, React) and back-end (MySQL, MongoDB. Mongoose, Sequelize, Express) technologies. </p>
                <p>
                I am enthusiastic in continuing to learn and challenge myself as a junior software developer in industry.
                </p>
            </div>
            <img className={`codeImg ${imgVisible && "animate"}`} src={codeImg} alt="computer showing code" ref={imgRef}></img>
        </div>
    );
};

export default AboutMe;