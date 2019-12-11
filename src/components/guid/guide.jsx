import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "./guid.css";


class Guide extends React.Component{
    render() {
        return(
            <div className={"container-fluid"}>
                    <div className={"col-12 buying"}>
                        <div className={"overlay"}>

                        <div className={"buybody"}>
                            <p>GUIDES</p>
                            <h2>The insiders guide to buying a home in new york city</h2>
                            <Link to={`/guid/buying`}>
                                <button>Read More</button>
                            </Link>
                        </div>
                    </div>
                    </div>


                    <div className={"container"}>
                        <div className={"row card-deck"}>
                                <div className={"col-12 col-md-6 renting card"}>
                                    <Link to={`/guid/renting`}>
                                        <h2>The insiders guide to renting in new york city</h2>
                                    </Link>
                                </div>

                                <div className={"col-12 col-md-6 selling card"}>
                                    <Link to={`/guid/selling`}>
                                        <h2>The insiders guide to selling a home inn new york city</h2>
                                    </Link>
                                </div>
                        </div>
                    </div>


            </div>
        )
    }
}

export default Guide;