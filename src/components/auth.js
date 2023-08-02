
const Auth = () => {

    return <>
        {/* sign up component */}
        <div id="sign-in-body">
            <div id="contentHead">
                <h1>Sign Up</h1>
            </div>
            <div id="contentBody">
                <p className="instruct">Complete the form below to create a new Charized account.
                    <span className="attn remind">Each field is required</span>
                </p>

                {/* the form */}
                <form className="olform create validate" name="signup" method="post" action="" noValidate="novalidate">
                <div className="formElement">
                        <div className="label">
                            <label htmlFor="name">Your name</label>
                        </div>
                        <div className="input">
                            <input className="required" id="name" type="text" name="name" value=""/>
                            <span className="sansserif smaller lighter"></span>
                        </div>
                    </div>
                    <div className="formElement">
                        <div className="label">
                            <label htmlFor="emailAddr">Your email address</label>
                        </div>
                        <div className="input">
                            <input className="required" id="emailAddr" type="text" name="email" value=""/>
                            <span className="invalid clearfix" id="emailAddrMessage"></span>
                            <span className="sansserif smaller lighter"></span>
                        </div>
                    </div>
                    <div className="formElement">
                        <div className="label">
                            <label htmlFor="username">Choose a screen name. Screen names are public and cannot be changed later. </label>
                            <span className="smaller lighter">Letters and numbers only please, and at least 3 characters.</span>
                        </div>
                        <div className="input">
                            <input autocapitalize="none" className="required" id="username" type="text" name="username" value=""/>
                            <span className="invalid clearfix" id="usernameMessage"></span>
                            <span className="sansserif smaller lighter">    Your URL: https://myfakeurl.org/notreal/<span id="userUrl">screenname</span></span>
                        </div>
                    </div>
                    <div className="formElement">
                        <div className="label">
                            <label htmlFor="password">Choose a password</label>
                        </div>
                        <div className="input">
                            <input className="required" id="password" type="password" name="password" value=""/>
                            <span className="invalid clearfix" id="passwordMessage"></span>
                            <span className="sansserif smaller lighter"></span>
                        </div>
                    </div>
                    <br/>
                    <label>
                        <input id="ia_newsletter" type="checkbox" name="ia_newsletter" value=""/> I want to receive news, announcements, and resources from the <a href="/">Charized</a>, the non-profit that runs Book Pie.
                    </label>
                    <small>By signing up, you agree to the Charized's 
                        <a href="/" target="_blank">Terms of Service</a>.
                    </small>

                    <div className="formElement bottom">
                        <br/>
                        <button type="submit" name="signup" id="signup" className="larger">Sign Up</button>
                        <a href="/" className="smaller attn">Cancel</a>
                    </div>

                </form>
            </div>

        </div>
    </>
}

export default Auth;
