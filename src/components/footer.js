import React from "react";
import { GrFacebook, GrTwitter, GrInstagram } from "react-icons/gr";

export default class Footer extends React.Component {
    render() {
        return (
            <div class="container mt-5">
                <div class="d-flex flex-row flex-wrap justify-content-between col-lg">
                    <div class="row d-flex flex-row flex-nowrap justify-content-between col-lg-7 ">

                        <div class="col fs-5 text-start">
                            <p class="text-success font-weight-bold ">splitwise</p>
                            <ul class="text-secondary list-unstyled">
                                <li><a href="#nolink" class="remove-link-decoration text-secondary">About</a></li>
                                <li><a href="#nolink" class="remove-link-decoration text-secondary">Press</a></li>
                                <li><a href="#nolink" class="remove-link-decoration text-secondary">Blog</a></li>
                                <li><a href="#nolink" class="remove-link-decoration text-secondary">Jobs</a></li>
                                <li><a href="#nolink" class="remove-link-decoration text-secondary">Calculations</a></li>
                                <li><a href="#nolink" class="remove-link-decoration text-secondary">Api</a></li>
                            </ul>
                        </div>

                        <div class="col fs-5 text-start" >
                            <p class="text-danger font-weight-bold">Account</p>
                            <ul class="list-unstyled">
                                <li><a href="#nolink" class="remove-link-decoration text-secondary">Log in</a></li>
                                <li><a href="#nolink" class="remove-link-decoration text-secondary">Sign up</a></li>
                                <li><a href="#nolink" class="remove-link-decoration text-secondary">Reset password</a></li>
                                <li><a href="#nolink" class="remove-link-decoration text-secondary">Settings</a></li>
                                <li><a href="#nolink" class="remove-link-decoration text-secondary">SplitWise Pro</a></li>
                            </ul>
                        </div>

                        <div class="col fs-5 text-start">
                            <p class="text-dark font-weight-bold text-left">More</p >
                            <ul class="list-unstyled">
                                <li><a href="#nolink" class="remove-link-decoration text-secondary">Contact us</a></li>
                                <li><a href="#nolink" class="remove-link-decoration text-secondary">FAQ</a></li>
                                <li><a href="#nolink" class="remove-link-decoration text-secondary">Terms of Services</a></li>
                                <li><a href="#nolink" class="remove-link-decoration text-secondary">Privacy Policy</a></li>
                            </ul>
                            <div class="d-flex justify-content-space  text-secondary">
                                <a class="pr-3 remove-link-decoration" href="https://twitter.com/splitwise"><GrTwitter /></a>
                                <a class="pr-3 remove-link-decoration" href="https://facebook.com/splitwise"><GrFacebook /></a>
                                <a class="pr-3 remove-link-decoration" href="https://www.instagram.com/splitwise/"><GrInstagram /></a>
                            </div>

                        </div>

                    </div>

                    <div class="container col-lg-5">
                        <div class="row d-flex justify-content-center mb-3">

                            <a href="https://play.google.com/store/apps/details?id=com.Splitwise.SplitwiseMobile">
                                <img class="float-right download-app" src="playStore.png" alt="get it on playstore" />
                            </a>

                            <a href="https://apps.apple.com/us/app/splitwise/id458023433">
                                <img class=" float-left download-app justify-content-between" src="appleplay.png" alt="get it on Apple store" />
                            </a>
                        </div>
                        <p>Made with :) in Providence, RI, USA</p>
                    </div>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 91" class="w-full s">
                    <path fill="#ACE4D6" d="M349 76.499L286 113V40z"></path>
                    <path fill="#0C3C32" d="M480 74.5L446 94V55z"></path>
                    <path fill="#1CC29F" d="M223 76.5l63 36.5V40zm182 1.999L446 102V55z"></path>
                    <path fill="#137863" d="M169 48v82l71-41z"></path>
                    <path fill="#1CC29F" d="M121 75.499L169 103V48z"></path>
                    <path fill="#373B3F" d="M456 101h-96V46z"></path>
                    <path fill="#52595F" d="M360 46v55h-96z"></path>
                    <path fill="#A473DB" d="M436 93h63V57z"></path>
                    <path fill="#D0B3EB" d="M499 57v36h63z"></path>
                    <path fill="#0C3C32" d="M491 93h84.18V44z"></path>
                    <path fill="#1CC29F" d="M575.18 93h84.179l-84.18-49z"></path>
                    <path fill="#FF2900" d="M601 94h48V66z"></path>
                    <path fill="#FF692C" d="M649 66v28h48z"></path>
                    <path fill="#FF815C" d="M170.385 93h76V49z"></path>
                    <path fill="#FF2900" d="M246.385 49v44h76z"></path>
                    <path fill="#373B3F" d="M166 93H70V38z"></path>
                    <path fill="#52595F" d="M70 38v55h-96z"></path>
                </svg>


            </div>
        )
    }
}