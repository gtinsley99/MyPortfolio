import "./Navbar.css";

const Navbar = () => {
  
    return (
        <div className="navbar">
            <div>
                <h3 className="navName">George Tinsley</h3>
            </div>
            <div className="navSearch">
                <a className="navItem" href="#about">About Me</a>
                <a className="navItem" href="#skills">Skills</a>
                <a className="navItem" href="#projects">Projects</a>
            </div>
        </div>
    );
};

export default Navbar;