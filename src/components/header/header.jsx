import React from "react";
import {nav} from "./header_data";
import "./header.css";
import Navbar from "./navbar";
import MobileMenu from "./mobileMenu";



class Header extends React.Component{
    constructor(){
        super();

        this.state = ({
            isOpen:false
            }
        )
}
    handleBurger =()=>{
        this.setState({
                isOpen:true
            }
        )
        console.log(this.state)
    };
    render() {

        return(
            <div className={"headerWrapper"}>
            <div className={"header container-fluid"}>
                <div onClick={this.handleBurger} className={"d-lg-none burger"} >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <Navbar newClass={this.state.isOpen && "open"}/>
                <MobileMenu/>

            </div>
            </div>

        )
    }
}




export default Header;