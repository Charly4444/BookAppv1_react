import hamimg from "../images/hamburger_50.png"
import { useState } from "react";
import { Link } from "react-router-dom"


const Navbar = (props)=>{
    // Navbar recieves the userdetails for the user that is logged in.
    const theuser = props.theuser
    

    // console.log(theuser)
    // now we know who is in
    
    
    // user Logout [-specific]
    const userLogout = async (id) => {
        
        await fetch(`http://localhost:8080/books/users/logout/${id}`,
        {
            method: "GET",
            headers: {"Content-Type":"application/json"},
        })
        console.log('i logged out this user')
    }

    
    






    const [isOpen, setIsOpen] = useState(false)
    
    return<>
        <div className="logo-component">
            <a href="/">
                <div className="header-logo">
                    <img className="logo-icon" src="/" alt="Book Pie logo" width="189" height="47"/>
                </div>
            </a>
        </div>
        <ul className="navigation-component">
            <li>
                <div className="mybooks-component">
                    <Link to="/books">My Books</Link>
                </div>
            </li>
            <li>
                <div className="browse-component header-dropdown">
                    <details>
                        <summary>
                            Browse
                            <span className="shift">Menu</span>
                        </summary>

                        <div className="browse-dropdown-component">
                            <ul className="dropdown-menu browse-dropdown-menu">
                                <li>
                                    <a href="/">Subjects</a>
                                </li>
                                <li>
                                    <a href="/">Library Explorer</a>
                                </li>
                                <li>
                                    <a href="/">Lists</a>
                                </li>
                            </ul>
                        </div>
                    </details>
                </div>
            </li>
        </ul>

        <div className="search-component">
            <div className="search-bar-component">
                <div className="search-bar">
                    <div className="search-cat">
                        <label className="search-cat-selector">
                            <span aria-hidden="true" className="search-cat-value">All</span>
                            <select>
                                <option value="all">All</option>
                                <option value="title">Title</option>
                                <option value="author">Author</option>
                                <option value="text">Text</option>
                                <option value="subject">Subject</option>
                            </select>
                        </label>
                    </div>
                    <form className="search-bar-input" action="/" method="get">
                        <input type="text" name="q" placeholder="Search" autoComplete="off"/>
                        <input name="mode" type="checkbox" value="everything" id="ftokenstop" className="hidden instantsearch-mode"/>
                        <input type="submit" value="" className="search-bar-submit"/>
                        <div className="vertical-separator"></div>
                        <a id="barcode_scanner_link" className="search-by-barcode-submit" title="Search by barcode" href="/barcodescanner?returnTo=/isbn/$$$">
                        </a>
                    </form>
                </div>
                <div className="search-dropdown">
                    <ul className="search-results"></ul>
                </div>
            </div>
        </div>

        <ul className="auth-component">
            {/* <li className="hide-me">
                <Link className="btn">Log In</Link>
            </li> */}
            <li>
                <Link replace className="btn primary" to="/" onClick={()=>{userLogout(theuser.id)}}>Sign Out</Link>
            </li>
        </ul>
        
        <div className="hamburger-component header-dropdown">
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
                                <a className="login-links__secondary" href="/account/login">Log In</a>
                                <a className="login-links__primary" href="/account/create">Sign Out</a>
                            </li>
                            <li className="subsection">
                                Browse
                            </li>
                            <li>
                                <a href="/subjects">Subjects</a>
                            </li>
                            <li>
                                <a href="/trending">Trending</a>
                            </li>
                            <li>
                                <a href="/explore">Library Explorer</a>
                            </li>
                            <li>
                                <a href="/lists">Lists</a>
                            </li>
                            <li>
                                <a href="/collections">Collections</a>
                            </li>
                            <li>
                                <a href="/k-12">K-12 Student Library</a>
                            </li>
                            <li>
                                <a href="/booktalks">Book Talks</a>
                            </li>
                            <li>
                                <a href="/random">Random Book</a>
                            </li>
                            <li>
                                <a href="/advancedsearch">Advanced Search</a>
                            </li>
                            <li>
                                <a href="/books/add">Add a Book</a>
                            </li>
                            <li>
                                <a href="/librarians">Librarians Portal</a>
                            </li>
                        </ul>
                    </div>
                </div>
                }
                
            </div>
        </div>
    </>
}
export default Navbar
