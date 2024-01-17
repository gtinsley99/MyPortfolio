import "./Navbar.css";
import { useState } from "react";
import dropDown from "../../images/dropdown.png";

const Navbar = () => {
    const [menu, setMenu] = useState("dropDownMenuOff");

    const handleClick = () => {
        if (menu === "dropDownMenuOff"){
            setMenu("dropDownMenu");
        } else {
            setMenu("dropDownMenuOff");
        }
    }
  return (
    <div className="navbar">
      <div>
        <h3 className="navName">George Tinsley</h3>
      </div>
      <div className="navSearch">
        <a className="navItem" href="#about">
          About Me
        </a>
        <a className="navItem" href="#skills">
          Skills
        </a>
        <a className="navItem" href="#projects">
          Projects
        </a>
      </div>
        <div className="dropDown">
            <img src={dropDown} onClick={handleClick} />
            <div className={menu}>
                <a className="dropDownItem" href="#about">About</a>
                <a className="dropDownItem" href="#skills">Skills</a>
                <a className="dropDownItem" href="#projects">Projects</a>
            </div>
        </div>
      
    </div>
  );
};

export default Navbar;
