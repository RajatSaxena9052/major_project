import React from "react"

export default class Signup extends React.Component {
    render() {
        return (
            <div id="signup-main">

                <div id="signup-wrapper">
                    <div>
                        <img src="https://assets.splitwise.com/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg" alt="splitwiseLogo" />
                    </div>
                    
                    <div id="sigup-content">
                        <h2 id="intro-label">INTRODUCE YOURSELF</h2>

                        <form>

                            <div class="mb-3">
                                <label id="signup-name-lbl" for="name" class="form-label">Hi there! My name is</label>
                                <input type="text" class="form-control" id="name-signup-inpt" />
                            </div>

                            <div id="secondary">
                                <div class="mb-3">
                                    <label id="signup-email-lbl" for="email" class="form-label">Here's my <strong>email address</strong>:</label>
                                    <input type="text" class="form-control" id="email-signup-inpt" />
                                </div>
                                <div class="mb-3">
                                    <label id="signup-pswd-lbl" for="password" class="form-label">And here's my <strong>password</strong>:</label>
                                    <input type="password" class="form-control" id="password-signup-inpt" />
                                </div>
                            </div>

                            <div id="signup-google-btn-container">
                                <button type="button" class="btn btn-primary btn-lg">Large button</button>

                                <div id="or-signup" >
                                    <p>or</p>

                                    <div id="sign-up-with-google-container">
                                        <button id="sign-up-with-google-btn"><img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google logo" style={{ marginRight: '10px' }}></img>Sign up with Google</button>
                                    </div>

                                </div>

                            </div>


                        </form>

                    </div>
                </div>

            </div>
        )
    }
}