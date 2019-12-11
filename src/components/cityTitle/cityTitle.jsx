import React from "react";


class CityTitle extends React.Component{
    render() {
        return(
            <div className={"container-fluid"}>
                <h3>{this.props.city.label} Real Estate & Homes for Sale</h3>
            </div>
        )
    }
}

export default CityTitle;