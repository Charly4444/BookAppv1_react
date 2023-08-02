import hamimg from "../images/hamburger_50.png"
import { useState } from "react";
import { Link } from "react-router-dom"


const OtherBar = ()=>{

    
    const [isOpen, setIsOpen] = useState(false)
    return<>
        <div className="logo-component">
            <a href="/">
                <div className="header-logo">
                    <img className="logo-icon" src="/" alt="Book Pie logo" width="189" height="47"/>
                </div>
            </a>
        </div>

        

        <ul className="auth-component">
            <li className="hide-me">
                <Link replace className="btn" to="/">Log In</Link>
            </li>
            <li>
                <Link className="btn primary" to="/auth1">Sign Up</Link>
            </li>
        </ul>
        
        {/* <div className="hamburger-component header-dropdown">
            <div className="hamburger">
                <img className="hamburger__icon" src={hamimg} alt="additional options menu" onClick={()=>{setIsOpen(!isOpen)}}/>
                {isOpen && <div className="Hamburger-details">
                    <div className="mask-menu"></div>
                    <div className="app-drawer">
                        <ul className="dropdown-menu hamburger-dropdown-menu">
                            <li className="subsection">
                                My Book Pie
                            </li>
                            <li className="login-links">
                                <Link className="login-links__secondary" to="/">Log In</Link>
                                <Link className="login-links__primary" to="/auth1">Sign Up</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                }
                
            </div>
        </div> */}
    </>
}
export default OtherBar
