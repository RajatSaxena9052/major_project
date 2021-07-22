import React from "react";
import Footer from "./footer";

export default class Login extends React.Component {
    render() {
        return (
            <div>
                <div id="login-body">
                    <div id="login-container">
                        <div>
                            <div id="login-content">


                                <div id="login-label">Log in</div>

                                <form id="login-form-wrap" action="/login">

                                    <div class="mb-3">
                                        <label id="email-lbl" for="email" class="form-label">Email address </label>
                                        <input type="text" name="email" class="form-control" id="email-inpt" />
                                    </div>
                                    <div class="mb-3">
                                        <label id="password-lbl" for="Password" class="form-label">Password</label>
                                        <input type="password" name="password" class="form-control" id="Pswd-inpt" />

                                    </div>
                                    <button id="login-submit-btn">Log in</button>
                                </form>

                                <a id="frgt-passwd" href="#passwordreset">Forgot your password?</a>

                                <div id="or">

                                    <hr id="hr1" class="inline-block" />
                                    <div class="inline-block">or</div>
                                    <hr id="hr1" class="inline-block" />

                                </div>

                                <div id="sign-in-with-google-container">
                                    <button id="sign-in-with-google-btn"><img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google logo" style={{ marginRight: '10px' }}></img>Sign in with Google</button>
                                </div>


                            </div>
                        </div>


                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}