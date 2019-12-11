import React from "react";
import {apartments} from "../apartment/apartments";
import {cities} from "../cities/cities_list";
import ImagesGallery from "./imagesGallery";
import "./apartmentPage.css";
import {GoogleMap} from "@react-google-maps/api";
import GoogleMapReact from 'google-map-react';




class ApartmentPage extends React.Component{
    constructor(props){
        super(props);
        const apId = this.props.match.params.id;

        this.state ={
            apartment: apartments.find(apartment => apartment.id === parseInt(apId))
        }
    }
    render() {
        const {apartment} = this.state;
        const imagesList = apartment.images;
        imagesList.unshift(apartment.main_image);
        const city = cities.find(city=> city.id === apartment.cityId);


        return(
        <div className={"container itemWrapper"}>
            <p>Presented by: <br/> Dani Mashasha</p>
            <ImagesGallery imagesList={imagesList} />

            <div className={"d-flex itemDetail" }>
                <div>
                    <h2>${apartment.price}</h2>
                    <p><span>{apartment.number_of_beds}</span> bed <span>{apartment.number_of_rooms}</span> bath  <span>{apartment.sqft}</span> sqft lot</p>
                    <p><span>{apartment.address}</span> ,{city.label}</p>
                </div>
                <div>
                </div>


            </div>


            <div className={"itemButtons"}>
                <button className={"bntAsk"}>Ask a question</button>
                <button className={"bntShare"}>Share this home</button>
            </div>
        </div>


        )
    }
}


export default ApartmentPage;