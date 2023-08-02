import bookmg from "../images/book_64.png"

import Navbar from "./navbar"


/*  came back to it
    an initial base component I intended to build the other items inside it
    i had to abandon it at some point, it tried to take me to other
    directions of propdrilling which i wasnt ready for this basic
    application
*/


const Base = (props) => {
    
    return <div className="basic-body">
        
        <div className="banner">
            <a className="logo" href="/">
                <img alt="Charized logo" src="/static/images/ia-logo.svg"/>
            </a>
            <a className="donate-btn" href="/">
                Donate <span className="heart">♥</span>
            </a>
        </div>
        
        <header id="header-bar" className="header-bar">
            
            {/* NavBar when logged in */}
            {/* Base pg passes down the person thats logged in to NavBar*/}
            <Navbar theuser={props.theuser} />
            
            
            
        </header>
        
        


        
        
        
        {/* where individual content fits */}
        {props.propElement}
        
        

        
        


        


        {/* footer section */}
        <footer>
            <div id="footer-content">
                <div id="footer-links">
                    <div>
                        <h2>Book Pie</h2>
                        <ul>
                        <li><a href="/">Vision</a></li>
                        <li><a href="/">Partner With Us</a></li>
                        <li><a href="/">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2>Discover</h2>
                        <ul>
                        <li><a href="/" title="Go home">Home</a></li>
                        <li><a href="/subjects" title="Explore subjects">Subjects</a></li>
                        <li><a href="/collections" title="Explore collections">Collections</a></li>
                        <li><a href="#top" title="Navigate to top of this page">Return to Top</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2>Develop</h2>
                        <ul>
                        <li><a href="/" title="Explore Book Pie Developer Center">Developer Center</a></li>
                        <li><a href="/" title="Explore Book Pie APIs">API Documentation</a></li>
                        <li><a href="/" title="Bulk Book Pie data">Bulk Data Dumps</a></li>
                        <li><a href="/" title="Write a bot">Writing Bots</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2>Help</h2>
                        <ul>
                        <li><a href="/">Help Center</a></li>
                        <li><a href="/" title="Problems">Report A Problem</a></li>
                        </ul>
                        <aside id="footer-icons">
                        <a className="footer-icons__twitter" href="https://twitter.com/charleyxclusive">twitter</a>
                        <a className="footer-icons__github" href="https://github.com/charly4444">github</a>
                        </aside>
                    </div>
                    {/* removed language options */}
                </div>
            
                <div id="footer-details">
                    <img id="archive-logo" src={bookmg} alt="Book Pie logo"/>
                    <div id="legal-details">
                        <span>Book Pie is an initiative of the <a href="//archive.org/">Charized</a>, a 501(c)(3) non-profit, building a digital library of Internet sites and other cultural artifacts in  digital form. Other <a href="//archive.org/projects/">projects</a> include the <a href="//archive.org/web/">Wayback Machine</a>, <a href="//archive.org/">archive.org</a> and <a href="//archive-it.org">archive-it.org</a></span>
                    </div>
                    <div id="version-details">
                        <span className="version">version <a href="/">1092106</a></span>
                    </div>
                </div>
            </div>    
                
        </footer>
        
    </div>
}

export default Base;
