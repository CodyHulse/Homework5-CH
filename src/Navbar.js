// Code adapted from https://www.youtube.com/watch?v=SLfhMt5OUPI 
// Hamburger menu code adapted from https://www.youtube.com/watch?v=smhpMQQmNRI
import {useState} from "react";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="nav">
            <img className="companyImage" src="genericCompany.png" alt="Company Logo"></img>
            <button className="hamburgerMenu" onClick={toggleMenu}>&#9776;</button>
            <ul className={`menuItems ${isOpen ? 'open' : ''}`}>
                <li className="active">
                    <a href="./">Home</a>
                </li>
                <li>
                    <a href="./">Portfolio</a>
                </li>
                <li>
                    <a href="./">Blog</a>
                </li>
                <li>
                    <a href="./">About Me</a>
                </li>
                <li>
                    <a href="./">Contact Me</a>
                </li>
            </ul>
        </nav>
    );
}