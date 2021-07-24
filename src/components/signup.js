import React from "react";
import { Link } from "react-router-dom";
import Joi from "joi";

export default class Signup extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            password: "",
            error: ""
        }
    }

    uname = (event) => {

        this.setState({
            uname: event.target.value
        })
        console.log(event.target.value);

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

    signup = (event) => {

        const { uname: username, email, password } = this.state;

        const schema = Joi.object({
            username: Joi.required(),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
            password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/)
        })

        const result = schema.validate({ username, email, password });
        console.log(result)

        if (result.error) {
            event.preventDefault();

            const errorMessage = result.error.details[0].message.replaceAll('"', "");


            if (result.error) {

                if (result.error.details[0].context.key === "password") {
                    this.setState({
                        error: "The password should have a length between 3 to 30.",
                    });
                }

                else {
                    this.setState({
                        error: errorMessage
                    });
                }
            }

        }
    }



    render() {
        return (
            <div id="signup-main" class="container d-flex justify-content-center align-items-center">

                <div id="signup-wrapper">
                    <div id="hide-karo-on-phone">
                        <Link to="/"><img id="split-wise-logo-signup" src="https://assets.splitwise.com/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg" alt="splitwiseLogo" /></Link>
                    </div>

                    <div id="sigup-content" class="col mx-5">
                        <h2 id="intro-label">INTRODUCE YOURSELF</h2>

                        <div class=" bg-danger d-flex justify-content-center align-items-center text-white pd-2">
                            {this.state.error}
                        </div>

                        <form>

                            <div class="mb-3">
                                <label id="signup-name-lbl" for="name" class="form-label">Hi there! My name is</label>
                                <input type="text" class="form-control" id="name-signup-inpt" onChange={this.uname} placeholder="Name" />
                            </div>

                            <div id="secondary">
                                <div class="mb-3">
                                    <label id="signup-email-lbl" for="email" class="form-label">Here's my <strong>email address</strong>:</label>
                                    <input type="text" class="form-control " id="email-signup-inpt" onChange={this.eMail} placeholder="Email" />
                                </div>
                                <div class="mb-3">
                                    <label id="signup-pswd-lbl" for="password" class="form-label">And here's my <strong>password</strong>:</label>
                                    <input type="password" class="form-control" id="password-signup-inpt" onChange={this.passWord} placeholder="Password" />
                                </div>
                            </div>

                            <div id="signup-google-btn-container">
                                <button id="signupform-btn" type="button" class="btn btn-primary btn-lg" onClick={this.signup}>Sign me up!</button>

                            </div>


                        </form>

                    </div>
                </div>

            </div>
        )
    }
}