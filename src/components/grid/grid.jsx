import React from "react";
import Apartment from "../apartment/apartment";
import "./grid.css";


class Grid extends React.Component{
    render() {
        const {list} = this.props;
        return(
            <div className={"container grid"}>
                <h2>New Listing..</h2>
                <div className={"card-deck"}>
                    {list.map((item,i)=>  <Apartment {...item} key={i} />)}
                </div>

            </div>
        )
    }
}

export default Grid;