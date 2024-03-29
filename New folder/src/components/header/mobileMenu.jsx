import React from "react";
import "./header.css";


class MobileMenu extends React.Component{
    constructor() {
        super();
        this.state = {
            activeMenu : null
        };
    }

    changeActiveMenu = (bool) => {
        this.setState({
            activeMenu: bool
        })
    }
    render() {
        const {activeMenu} = this.state;
        return(
            <div className={"logWrapper"}>
                <div className={"mobileLogo d-none d-xl-flex "} onMouseOver={()=> this.changeActiveMenu( true)} onMouseOut={() => this.changeActiveMenu(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="rdc-global-mobile-icon" width="16"
                         height="24">
                        <path fill="none" stroke="#000"
                              d="M13 23H2.3c-1 0-1.8-.7-1.8-1.7v-18c0-1 .8-1.8 1.8-1.8H13c1 0 1.8.8 1.8 1.8v18c0 1-.8 1.8-1.8 1.8z"></path>
                        <path d="M9.1 19.3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                    </svg>

                    {activeMenu &&
                    <div className={"mobileInnerMenu"}>
                        <div className={"mobileCard d-flex"}>
                            <div className={"mobileImg"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" y="66"><path d="M10.6 1.7h22.1c.8 0 1.4.6 1.4 1.4v38.8c0 .8-.6 1.4-1.4 1.4H10.6c-.8 0-1.4-.6-1.4-1.4V3.1c0-.8.6-1.4 1.4-1.4z" opacity=".1"></path><path d="M10.7 1.8h21.9c.8 0 1.4.6 1.4 1.4v38.4c0 .8-.6 1.4-1.4 1.4H10.7c-.8 0-1.4-.6-1.4-1.4V3.2c0-.8.6-1.4 1.4-1.4z" opacity=".1"></path><path d="M10.8 1.9h21.7c.8 0 1.4.6 1.4 1.4v38c0 .8-.6 1.4-1.4 1.4H10.8c-.8 0-1.4-.6-1.4-1.4v-38c0-.8.6-1.4 1.4-1.4z"></path><path fill="#929E9C" d="M11.6 4.8h20.1v32.8H11.6V4.8z"></path><path fill="#fff" d="M33.9 3.8v-.5c0-.8-.6-1.4-1.4-1.4H10.8c-.8 0-1.4.6-1.4 1.4v38c0 .3.1.7.3.9C12.1 15.5 28 6.3 33.9 3.8zm-5.6-1.9H10.8c-.8 0-1.4.6-1.4 1.4v19.5A34.4 34.4 0 0 1 28.3 1.9z" opacity=".1"></path><path d="M23.2 9.2H38c1.6 0 2.8 1.3 2.8 2.8v33c0 1.6-1.3 2.8-2.8 2.8H23.2a2.8 2.8 0 0 1-2.8-2.8V12c-.1-1.5 1.2-2.8 2.8-2.8z" opacity=".1"></path><path d="M23.3 9.3h14.6c1.6 0 2.8 1.3 2.8 2.8v32.6c0 1.6-1.3 2.8-2.8 2.8H23.3a2.8 2.8 0 0 1-2.8-2.8V12.1c-.1-1.5 1.2-2.8 2.8-2.8z" opacity=".1"></path><path fill="#fff" d="M23.4 9.4h14.4c1.6 0 2.8 1.3 2.8 2.8v32.3c0 1.6-1.3 2.8-2.8 2.8H23.4a2.8 2.8 0 0 1-2.8-2.8V12.2c-.1-1.5 1.2-2.8 2.8-2.8z"></path><path fill="#CCCBCB" d="M30.6 46.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5zm0-4.4a1.9 1.9 0 1 0 0 3.8 2 2 0 0 0 1.9-1.9c0-1.1-.9-1.9-1.9-1.9z"></path><path fill="#374445" d="M21.6 13.9h17.8v26.8H21.6V13.9z"></path><path fill="#BABABB" d="M28.7 11.6h3.8c.2 0 .4.2.4.4s-.2.4-.4.4h-3.8c-.2 0-.4-.2-.4-.4s.2-.4.4-.4z"></path><path fill="#fff" d="M40.6 11.8a2.8 2.8 0 0 0-2.8-2.4H23.4a2.8 2.8 0 0 0-2.8 2.8v32.3c0 .6.2 1.2.5 1.7C23.4 23 34.8 14.6 40.6 11.8zm-6.2-2.4h-11a2.8 2.8 0 0 0-2.8 2.8v14A28.3 28.3 0 0 1 34.4 9.4z" opacity=".1"></path></svg>
                            </div>
                            <div className={"mobileInfo"}>
                                <a href="">Realtor.com nobile apps</a>
                                <p>Find homes for sale or rent on <br/> iPhone, iPad, and Android</p>
                            </div>
                        </div>

                        <div className={"mobileCard d-flex"}>
                            <div className={"mobileImg"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" y="116"><path fill="#fff" d="M6.3 7h37.4v36.4H6.2z"></path><path fill="#EB0029" d="M40 0H10a10 10 0 0 0-10 10v30.1a10 10 0 0 0 10 10H40a10 10 0 0 0 10-10V10A10 10 0 0 0 40 0zM38 26v18.4H11V25.9H5.4L24.9 6.3l19.8 19.6H38zm-13.8-7.2c0-.2 0-.6-.7-.6h-8v.7h.5c.3.1.8.1 1.2.5.5.4.8.7 1 1.7v13.3c0 1.7 0 4-.2 4.9-.2 1.5-.5 1.6-1.7 2.1l-1 .3h-.2v.7h12.2v-.6H27a3 3 0 0 1-.8-.4c-1.3-.5-1.6-.6-1.9-2.1-.2-1-.2-3.2-.2-5V32l.1-4.3c1.2-6 3.5-7.1 4.2-7.3.2.1.3.4.5 1l.2.7c.7 1.6 1.7 2.5 3 2.5 2.3 0 3.3-1.6 3.3-3.1 0-1.3-.3-2.2-1-2.8-.8-1-2.1-1-2.8-1-1.5 0-2.8.6-3.5 1-.7.4-2.6 1.5-3.9 4v-3.9z"></path></svg>
                            </div>
                            <div className={"mobileInfo"}>
                                <a href="">Realtor.com nobile apps</a>
                                <p>Find homes for sale or rent on <br/> iPhone, iPad, and Android</p>
                            </div>
                        </div>

                        <div className={"mobileCard d-flex"}>
                            <div className={"mobileImg"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" y="166"><path fill="#eb0029" d="M12.5 0S0 0 0 12.5v25.1S0 50 12.5 50h25.1s12.5 0 12.5-12.5v-25C50 12.5 50 0 37.6 0H12.5z"></path><path fill="none" d="M13.4 39.5h-.8v1.4h.8l.5-.2.2-.5-.2-.5c0-.2-.2-.2-.5-.2zm10.9-15.9v-.7l.1-2.5c.7-3.5 2-4.1 2.4-4.2.2.1.2.2.3.5l.1.5c.4 1 1 1.5 1.7 1.5 1.3 0 1.8-.9 1.8-1.8 0-.7-.2-1.2-.5-1.6-.5-.5-1.3-.6-1.7-.6-.9 0-1.6.4-2 .6-.4.2-1.5.8-2.2 2.3v-2.3c0-.1 0-.4-.4-.4h-4.6v.4h.3c.2 0 .5.1.7.3.3.2.4.4.5 1v7.7l-.1 2.9c-.2.9-.3.9-1 1.2l-.5.2h-.1v.4h7v-.4H26l-.5-.2c-.7-.3-.9-.4-1.1-1.3l-.1-2.9v-.6z"></path><path fill="#fff" d="M6.8 7.3v28.6h36.3V7.3H6.8zm29.6 1.8L34 12.8H16l-2.4-3.7h22.8zm-12 18c.2.9.3.9 1.1 1.3l.5.2h.1v.4h-7v-.4h.1l.5-.2c.7-.3.9-.4 1-1.2l.1-2.9v-7.7c-.1-.6-.2-.8-.5-1l-.7-.3h-.3v-.4H24c.4 0 .4.3.4.4v2.3c.7-1.5 1.8-2.2 2.2-2.3.4-.3 1.1-.6 2-.6.4 0 1.2.1 1.7.6.4.4.5.9.5 1.6 0 .9-.6 1.8-1.8 1.8-.8 0-1.4-.5-1.7-1.5l-.1-.5c-.1-.3-.1-.5-.3-.5-.4.1-1.7.7-2.4 4.2l-.1 2.5v1.4a13 13 0 0 0 0 2.8zm16.8 7H8.6v-25h3.5l2.4 3.7H13c-.7 0-1.2.5-1.2 1.2v15.1c0 .7.5 1.2 1.2 1.2h23.9c.7 0 1.2-.5 1.2-1.2V14c0-.7-.5-1.2-1.2-1.2h-1.6l2.4-3.7h3.4v25zm-26.3 6.7l.2-.8c0-.4-.1-.8-.4-1-.3-.2-.7-.4-1.2-.4h-1.7v4.6h.9v-1.7h.7l.9 1.7h1l-1-1.9c.3-.1.5-.2.6-.5zm-.9-.2l-.5.2h-.8v-1.4h.8l.6.2.2.5a1 1 0 0 1-.3.5zm2.7.7h1.8v-.8h-1.8v-1h2.1v-.8h-3v4.6h3v-.8h-2.1zm5.4.4l-1.9-3h-.9v4.6h.9v-3l1.9 3h.9v-4.6h-.9zm5-3h-3.7v.8h1.4v3.8h.9v-3.8h1.4zm1.4 0l-1.7 4.6h1l.3-.9h1.6l.3.9h1l-1.7-4.6h-.8zm-.1 2.9l.6-1.7.6 1.7h-1.2zm4-2.9h-.9v4.6h2.9v-.8h-2zm3.6.8l.5-.1.6.2.2.5h.9l-.2-.7a1 1 0 0 0-.6-.5l-.9-.2-.9.2a1 1 0 0 0-.6.5l-.2.7c0 .5.3.9.8 1.1l.8.3.7.3.2.4-.2.4-.5.1c-.6 0-.9-.3-.9-.8h-.9l.2.8.7.5 1 .2c.5 0 .9-.1 1.2-.3.3-.2.4-.5.4-.9s-.1-.7-.4-.9l-1.2-.6-.7-.3-.2-.4c0-.3 0-.4.2-.5z"></path></svg>
                            </div>
                            <div className={"mobileInfo"}>
                                <a href="">Realtor.com nobile apps</a>
                                <p>Find homes for sale or rent on <br/> iPhone, iPad, and Android</p>
                            </div>
                        </div>


                    </div> }
                </div>


                <div className={"log"}>
                    <a href="">Log In</a>
                </div>
                <div className={"sign"}>
                    <a href="">Sign Up</a>
                </div>
                <div className={"Advertise d-none d-xl-block"}>
                    <a href="">Advertise</a>
                </div>

            </div>
        )
    }
}

export default MobileMenu;