import React from "react";
import "./whats_happening.css";


class WhatsHappening extends React.Component{
    constructor(){
        super();

    }
    render() {
        return(
            <div className={"container whWrapper"}>
                <h2>Whats happening in New York</h2>

                    <ul className={"numUl row"}>
                        <li className={"col"}>
                            <h3>9,215</h3>
                            <h4>Homes for sale</h4>
                        </li>
                        <li className={"col"}>
                            <h3>500</h3>
                            <h4>Open houses</h4>
                        </li>
                        <li className={"col"}>
                            <h3>841</h3>
                            <h4>Recently sold</h4>
                        </li>
                        <li className={"col"}>
                            <h3>1,513</h3>
                            <h4>Foreclosures</h4>
                        </li>
                        <li className={"col"}>
                            <h3>441</h3>
                            <h4>Price reduced</h4>
                        </li>
                    </ul>

            </div>
        )
    }
}

export default WhatsHappening;