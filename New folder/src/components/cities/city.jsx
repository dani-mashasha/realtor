import React from "react";
import "./cities.css";

class City extends React.Component{
    render() {
        const {id,label,name,description,country,image} = this.props;
        return(
            <div className={"cardWrapper col-sm-6 col-lg-4 col-xl-3"}>
                <div className={"card"}>
               <div className={"card_img"}>
                   <img className={"card_main_img"} src={image} alt=""/>
               </div>
                <div className={"card_body"}>
                    <h3>{label}</h3>
                    <h5>{description}</h5>
                    <p>country: {country}</p>
                </div>

            </div>
            </div>
        )
    }
}

export default City;