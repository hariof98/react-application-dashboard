import { useState } from "react";

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [navOpen, setNavOpen] = useState(false);

    return (
        <div className="container">
            <header className="header">
                <div className="header-left">
                    <img src="/logo.svg" alt="Proactively logo" className="logo" />

                    <div className="hamburger" onClick={() => setNavOpen(!navOpen)}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                    <nav className={`nav ${navOpen ? "show" : ""}`}>
                        <a href="#browse" className="nav-item">
                            Browse
                        </a>
                        <a href="#employers" className="nav-item">
                            For Employers
                        </a>
                        <a href="#partners" className="nav-item">
                            Partner with us
                        </a>
                        <a href="#doctors" className="nav-item">
                            For Doctors
                        </a>
                        <a href="#care" className="nav-item">
                            Personalized care
                        </a>
                    </nav>
                </div>

                <div className={`header-right ${navOpen ? "show" : ""}`}>
                    <div className="login-wrapper">
                        <button className="login-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
                            Login <span className="arrow">&#9662;</span>
                        </button>

                        {dropdownOpen && (
                            <div className="dropdown">
                                <div className="menu-section">
                                    <div className="menu-title">Patient</div>
                                    <a href="#" className="menu-link">
                                        Login
                                    </a>
                                </div>
                                <hr className="divider" />
                                <div className="menu-section">
                                    <div className="menu-title">Doctor</div>
                                    <a href="#" className="menu-link">
                                        Login
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>

                    <button className="signup-btn">Sign Up</button>
                </div>
            </header>
        </div>
    );
};

export default Header;
