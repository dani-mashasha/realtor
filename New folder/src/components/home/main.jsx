import React from "react";
import {mainData} from "./main_data";
import "./home.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            item:mainData[0]
        };
    }

    render() {

        return(

            <div className={"main_wrapper"}>
                <div className={"main"}>
                <h1>{this.state.item.title}</h1>
                <p>{this.state.item.p}</p>
                <ul className={"main_menu"}>
                    {mainData.map((item,i)=> <li>
                        <Link to={item.path}>{item.label}</Link>
                    </li>)}
                </ul>
                    <input type="text"/>
                    <button>Search</button>
                </div>
            </div>
        )
    }
}

export default Main;