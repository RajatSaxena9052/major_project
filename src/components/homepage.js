import React from "react";
import Footer from "./footer";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
    render() {
        return (
            <div class="container-fluid">

                {/* <div class="row bg-info" id="bgi">
                    first row
                </div>*/}
                <div class="row">
                    <div class="col bg-dark text-white" id="bgi">
                        <div class="pt-4 pb-4">
                            <h1>Track balances</h1>
                            <p>Keep track of shared expenses,<br></br> balances, and who owes who.</p>

                        </div>
                        <div class="text-center">
                            <img src="https://secure.splitwise.com/assets/home_page/fixtures/asset1.png" class="rounded" alt="..."></img>
                        </div>
                    </div>

                    <div class="col bg-success text-white " id="bgi">
                        <div class="pt-4 pb-4">
                            <h1>Organize expenses</h1>
                            <p>Split expenses with any group: trips,<br></br> housemates, friends, and family.</p>

                        </div>
                        <div class="text-center">
                            <img src="https://secure.splitwise.com/assets/home_page/fixtures/asset2.png" class="rounded" alt="..."></img>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col bg-danger text-white" id="bgi">
                        <div class="pt-4 pb-4">
                            <h1>
                                Add expenses easily
                            </h1>
                            <p>
                                Quickly add expenses on the go before<br></br> you forget who paid.
                            </p>

                        </div>
                        <div class="text-center">
                            <img src="https://secure.splitwise.com/assets/home_page/fixtures/asset3.png" class="rounded" alt="..."></img>
                        </div>
                    </div>
                    <div class="col bg-dark text-white" id="bgi">

                        <div class="pt-4 pb-4">
                            <h1 class="text-2xl">
                                Pay friends back
                            </h1>
                            <p class="text-lg">
                                Settle up with a friend and record any <br></br>cash or online payment.
                            </p>

                        </div>
                        <div class="text-center text-white">
                            <img src="https://secure.splitwise.com/assets/home_page/fixtures/asset4.png" class="rounded" alt="..."></img>
                        </div>
                    </div>
                </div>

                <div class="row d-flex align-items-center bg-info mb-5" id="bgi">


                    <div class="col col-md-6 mt-4 mb-3 text-white">
                        <h1 clas="text-2xl" >
                            Get even more with PRO
                        </h1>
                        <p class="text-lg mx-auto max-w-95">
                            Get even more organized with receipt scanning,<br></br> charts and graphs, currency conversion, and<br></br> more!
                        </p>
                        <Link to="/signup" ><button type="button" class="btn border-white btn-lg shadow-sm signup-home">Sign up</button></Link>
                    </div>

                    <div class="col">
                        <div class="text-center mt-3">
                            <img src="https://secure.splitwise.com/assets/home_page/fixtures/asset4.png" class="rounded" alt="signup"></img>
                        </div>
                    </div>

                </div>

                <div class="container mb-5">

                    <div class="row mt-5 mb-4">
                        <h1>The whole nine yards</h1>
                    </div>

                    <ul class="row text-start row-cols-sm-2 row-cols-lg-3" >

                        <div class="col">
                            <ul className="list-unstyled">
                                <li><img src="https://assets.splitwise.com/assets/core/core-feature.svg" alt="icon"></img>Add groups and friends</li>
                                <li><img src="https://assets.splitwise.com/assets/core/core-feature.svg" alt="icon" ></img>Split expenses, record debts</li>
                                <li><img src="https://assets.splitwise.com/assets/core/core-feature.svg" alt="icon" ></img>Equal or unequal splits</li>
                                <li><img src="https://assets.splitwise.com/assets/core/core-feature.svg" alt="icon" ></img>Split by % or shares</li>
                                <li><img src="https://assets.splitwise.com/assets/core/core-feature.svg" alt="icon" ></img>Calculate total balances</li>
                                <li><img src="https://assets.splitwise.com/assets/core/core-feature.svg" alt="icon" ></img>Suggested repayments</li>
                                <li><img src="https://assets.splitwise.com/assets/core/core-feature.svg" alt="icon" ></img>Simplify debts</li>
                                <li><img src="https://assets.splitwise.com/assets/core/core-feature.svg" alt="icon" ></img>Recurring expenses</li>
                            </ul>

                        </div>

                        <div class="col">
                            <ul className="list-unstyled">
                                <li><img src="https://assets.splitwise.com/assets/core/core-feature.svg" alt="icon" ></img> Offline mode</li>
                                <li><img src="https://assets.splitwise.com/assets/core/core-feature.svg" alt="icon" ></img>Cloud sync</li>
                                <li><img src="https://assets.splitwise.com/assets/core/core-feature.svg" alt="icon" ></img>Spending totals</li>
                                <li><img src="https://assets.splitwise.com/assets/core/core-feature.svg" alt="icon" ></img>Categorize expenses</li>
                                <li><img src="https://assets.splitwise.com/assets/core/core-feature.svg" alt="icon" ></img>Easy CSV exports</li>
                                <li><img src="https://assets.splitwise.com/assets/core/core-feature.svg" alt="icon" ></img>7+ languages</li>
                                <li><img src="https://assets.splitwise.com/assets/core/core-feature.svg" alt="icon" ></img>100+ currencies</li>
                                <li><img src="https://assets.splitwise.com/assets/core/core-feature.svg" alt="icon" ></img>Payment integrations</li>
                            </ul>

                        </div>

                        <div class="col">
                            <ul className="list-unstyled">
                                <li><img src="https://assets.splitwise.com/assets/core/core-feature.svg" alt="icon"  ></img>A totally ad-free experience</li>
                                <li><img src="https://assets.splitwise.com/assets/core/core-feature.svg" alt="icon"  ></img>Currency conversion</li>
                                <li><img src="https://assets.splitwise.com/assets/core/core-feature.svg" alt="icon"  ></img>Receipt scanning</li>
                                <li><img src="https://assets.splitwise.com/assets/core/core-feature.svg" alt="icon"  ></img>Itemization </li>
                                <li><img src="https://assets.splitwise.com/assets/core/core-feature.svg" alt="icon"  ></img>Charts and graphs </li>
                                <li><img src="https://assets.splitwise.com/assets/core/core-feature.svg" alt="icon"  ></img>Expense search</li>
                                <li><img src="https://assets.splitwise.com/assets/core/core-feature.svg" alt="icon"  ></img>Save default splits </li>
                                <li><img src="https://assets.splitwise.com/assets/core/core-feature.svg" alt="icon"  ></img>Early access to new features</li>
                            </ul>
                        </div>

                    </ul>

                </div>

                <div class="row justify-content-center flex-row text-xs mt-7 mb-5">
                    <span ><img src="https://assets.splitwise.com/assets/core/core-feature.svg" alt="icon" />Pro features <img src="https://assets.splitwise.com/assets/core/core-feature.svg" alt="icon" />Core features</span>
                </div>


                <div className="container mb-5">

                    <div class="row row-cols-md-2 row-cols-lg-3 row-cols-sm-1">

                        <div class="col box border rounded home-card mb-3 ">
                            <a href="https://www.ft.com/content/8ccd6f0e-18bb-11e9-b93e-f4351a53f1c3" className="remove-link-decoration">
                                <div class="px-5 pt-4 pb-4 flex-column">
                                    <p class="text-start">“Fundamental” for tracking finances. As good as WhatsApp for containing awkwardness.</p>
                                    <div class="d-flex flex-start h-12 align-items-center">
                                        <img class="mr-3  rounded img-fluid home-card-icon" src="https://secure.splitwise.com/assets/home_page/logos/ft.png" alt="Financial times logo" />
                                        <span class="font-italic p-2">Financial Times</span>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div class="col box border rounded home-card mb-3 " >

                            <div class="px-5 pt-4 pb-4 d-flex flex-column flex-between">
                                <p class="text-start mb-4">Life hack for group trips. Amazing tool to use when traveling with friends! Makes life so easy!!</p>
                                <div class="h-12 text-start align-items-center">
                                    <span class="font-italic">Ahah S, iOS</span>
                                </div>
                            </div>

                        </div>

                        <div class="col box border rounded text-start home-card mb-3">
                            <a href="https://www.nytimes.com/2018/08/28/smarter-living/money-finance-apps-tools.html" className="remove-link-decoration">
                                <div class="px-5 pt-4 pb-4 flex-column">
                                    <p>Makes it easy to split everything from your dinner bill to rent.</p>
                                    <div class="d-flex flex-start h-12 align-items-center">
                                        <img class="mr-3  rounded img-fluid home-card-icon" src="https://secure.splitwise.com/assets/home_page/logos/nyt.png" alt="Financial times logo" />
                                        <span class="font-italic p-2">NY Times</span>
                                    </div>
                                </div>
                            </a>
                        </div>



                        <div class="col box border rounded text-left home-card mb-3">

                            <div class="px-5 pt-4 pb-4 flex-column ">
                                <p class="text-start mb-4">So amazing to have this app manage balances and help keep money out of relationships. love it!</p>
                                <div class="h-12 text-start align-items-center">
                                    <span class="font-italic">Haseena C, Android</span>
                                </div>
                            </div>

                        </div>

                        <div class="col box border rounded text-start home-card mb-3">
                            <a href="https://www.businessinsider.com.au/best-apps-for-splitting-expenses-friends-2017-3#/#i-discovered-splitwise-when-i-moved-into-an-apartment-with-three-male-roommates-we-shared-the-cost-of-pretty-much-everything-from-furniture-to-take-out-from-wingstop-1" class="remove-link-decoration">
                                <div class="px-5 pt-4 pb-4 flex-column">
                                    <p>I never fight with roommates over bills because of this genius expense-splitting app</p>
                                    <div class="d-flex flex-start h-12 align-items-center">
                                        <img class="mr-3  rounded img-fluid home-card-icon" src="https://secure.splitwise.com/assets/home_page/logos/bi.png" alt="Financial times logo" />
                                        <span class="font-italic p-2">business Insider</span>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div class="col box border rounded text-start home-card mb-3">

                            <div class="px-5 pt-4 pb-4 mb-2 flex-column ">
                                <p class="text-left mb-4">So amazing to have this app manage balances and help keep money out of relationships. love it!</p>
                                <div class="h-12 text-start align-items-center">
                                    <span class="font-italic">Trickseyus, IOS</span>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
                <Footer />
            </div >
        )
    }
}