import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <h3 className="navName">George Tinsley</h3>
            </div>
            <div className="navSearch">
                <h3 className="navItem">About Me</h3>
                <h3 className="navItem">Skills</h3>
                <h3 className="navItem">Projects</h3>
            </div>
        </div>
    );
};

export default Navbar;