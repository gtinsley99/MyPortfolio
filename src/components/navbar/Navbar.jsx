import "./Navbar.css";

const Navbar = () => {
    const About = () => {
        window.scrollTo({top: 850, behavior: "smooth"});
    };
    const Skills = () => {
        window.scrollTo({top: 1600, behavior: "smooth"});
    };
    const Projects = () => {
        window.scrollTo({top: 2300, behavior: "smooth"});
    };
    return (
        <div className="navbar">
            <div>
                <h3 className="navName">George Tinsley</h3>
            </div>
            <div className="navSearch">
                <h3 className="navItem" onClick={() => About()}>About Me</h3>
                <h3 className="navItem" onClick={() => Skills()}>Skills</h3>
                <h3 className="navItem" onClick={() => Projects()}>Projects</h3>
            </div>
        </div>
    );
};

export default Navbar;