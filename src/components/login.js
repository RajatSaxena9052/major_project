import React from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import Joi from "joi";

export default class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            isDisabled: false,
            error: ""
        }
    }
    eMail = (event) => {

        this.setState({
            email: event.target.value
        })
        console.log(event.target.value);

    }

    passWord = (event) => {

        this.setState({
            password: event.target.value
        })
        console.log(event.target.value);
    }

    login = (event) => {

        const { email, password } = this.state;

        const schema = Joi.object({
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
            password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/)
        })

        const result = schema.validate({ email, password });

        if (result.error) {
            event.preventDefault();

            const errorMessage = result.error.details[0].message.replaceAll('"', "");


            if (result.error) {
                if (result.error.details[0].context.key === "password") {
                    this.setState({
                        error: "The password can contain lower case, upper case, special characters and should have a length between 3 to 30.",
                    });
                }

                else {
                    this.setState({
                        error: errorMessage
                    });
                }
            }
            return
        }
    }
    render() {
        return (
            <div >
                <div id="login-body">



                    <div class="bg-danger d-flex justify-content-center align-items-center text-white pd-2">
                        {this.state.error}
                    </div>




                    <div id="login-container">
                        <div id="kam-size">
                            <div id="login-content">


                                <div id="login-label">Log in</div>

                                <form id="login-form-wrap" action="/login">

                                    <div class="mb-3">
                                        <label id="email-lbl" for="email" class="form-label">Email address </label>
                                        <input type="text" name="email" class="form-control" id="email-inpt" onChange={this.eMail} placeholder="Please enter your Email Id here!" />
                                    </div>
                                    <div class="mb-3">
                                        <label id="password-lbl" for="Password" class="form-label">Password</label>
                                        <input type="password" name="password" class="form-control" id="Pswd-inpt" onChange={this.passWord} placeholder="Please enter your Password here!" />

                                    </div>

                                    <Link to="/loggedin"><button id="login-submit-btn" onClick={this.login}>Log in</button></Link>

                                </form>

                                <a id="frgt-passwd" href="#passwordreset">Forgot your password?</a>


                            </div>
                        </div>


                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}