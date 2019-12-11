import React from "react";
import {nav} from "./header_data";
import "./header.css";
import Navbar from "./navbar";
import MobileMenu from "./mobileMenu";



class Header extends React.Component{

    render() {

        return(
            <div className={"headerWrapper"}>
            <div className={"header container-fluid"}>
                <div className={"d-xl-none burger "}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <Navbar/>
                <MobileMenu/>

            </div>
            </div>

        )
    }
}




export default Header;