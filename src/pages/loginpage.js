import bookmg from "../images/book_64.png"
import { useState } from "react"

import { Navigate} from "react-router-dom"
import OtherBar from "../components/otherbar"




const LoginPage = () => {
    // return <Base propElement={AuthLogin}/>
    // Base element plus, Authlogin

    // (some specific functions related to login and verification)
    // lets keep a note of which user is logged in
    
    const blankuser={
        id:0,
        name:"",
        libcode:0,
        password:"",
        isLoggedin:false,
        userBooks:[]
    }
    const [user, setUser] = useState(blankuser)



    const [kip, setKip] = useState(0)
    const [formFields, setFormFields] = useState({libcode:0, password:""})

    
    
    const handleLogin = async (formFields)=> {
        
        console.log(formFields)
        const reply = await fetch('http://localhost:8080/books/user/login',
        {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body : JSON.stringify(formFields) 
        }).then(res => res.json())
        
        console.log("have submitted form")
        
        if (reply===1){

            // 
            // if correct user, we fetch user
            const userin = await fetch(`http://localhost:8080/books/user?lib=${parseInt(formFields.libcode)}`,
            {
                method: "GET",
                headers: {"Content-Type":"application/json"},
            }).then(res => res.json())

            setUser(userin)

            setKip(reply)
            
        }
        
    }
    
    
    
    
    
    


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
            
            {/* Navbar */}
            <OtherBar />
            
        </header>
        
        
        
        
        {/* where individual content fits */}
        {/* the whole logic of the login down here*/}
        

        


        {/*so we created a little option as to what we can display after login */}
        {kip===0 ? <div id="sign-up-body">
            <div id="contentHead">
                <h1>Login</h1>
            </div>
            <div id="contentBody">
                <p className="instruct">Complete the login form below.
                    <span className="attn remind">Each field is required</span>
                </p>

                {/* the form part*/}
                <form className="olform create validate" name="signin" noValidate="novalidate">
                    <div className="formElement">
                        <div className="label">
                            <label htmlFor="libcode">Library code</label>
                        </div>
                        <div className="input">
                            <input className="required" name="libcode" id="libcode" type="text" value={formFields.libcode || ""} onChange={(e)=>(setFormFields({...formFields, [e.target.name]:parseInt(e.target.value)}))}/>
                            <span className="sansserif smaller lighter"></span>
                        </div>
                    </div>
                    <div className="formElement">
                        <div className="label">
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="input">
                            <input className="required" name="password" id="password" type="password" value={formFields.password} onChange={(e)=>(setFormFields({...formFields, [e.target.name]:e.target.value}))}/>
                            <span className="invalid clearfix" id="passwordMessage"></span>
                            <span className="sansserif smaller lighter"></span>
                        </div>
                    </div>
                    <br/>

                    <div className="formElement bottom">
                        <br/>
                        {/* change button back to submit for it to effect */}
                        <button type="button" name="login" id="signup" className="larger" onClick={()=>{handleLogin(formFields)}}>Login</button>
                    </div>

                </form>
                
            </div>
{/* this calls Homepage if logs in --and passes the user along to HomePage*/}
        </div> : <Navigate replace to="/home" state={ {user:user,} }/>}

        

        
        


        


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
                        <span>Book Pie is an initiative of the 
                            <a href="//archive.org/">Charized</a>, a 501(c)(3) non-profit, building a digital library of Internet sites and other cultural artifacts in  digital form. Other <a href="//archive.org/projects/">projects</a> include the <a href="//archive.org/web/">Wayback Machine</a>, <a href="//archive.org/">archive.org</a> and <a href="//archive-it.org">archive-it.org</a></span>
                    </div>
                    <div id="version-details">
                        <span className="version">version <a href="/">1092106</a></span>
                    </div>
                </div>
            </div>    
                
        </footer>
        
    </div>

}
export default LoginPage
