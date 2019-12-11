import React from "react";
import "./apartment.css";
import {apartments} from "./apartments";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



class Apartment extends React.Component{

    imagesGallery =(e)=>{
       let id = e.target.id;
       let imagesList = apartments.find(item=> item.id == id).images;
       e.target.src=imagesList[1];
    }


    render() {
        const {id, title, description, cityId, owner,
            price, main_image, images, number_of_beds,
            number_of_rooms, address, sqft, status,
            for_rent, for_sale
        } = this.props;

        return(
            <div className={"cardWrapper col-sm-6 col-lg-4 col-xl-3"}>
                <div className={"card"}>
                <div className={"card_img"} >

                    <Link to={`/apartment/${id}`}>
                    <img src={main_image} className={"card_main_img"} id={id} onMouseOver={this.imagesGallery}/>
                    </Link>

                    <div className={"heart"}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" aria-labelledby="Save Listing"
                             width="40" height="40" tabIndex="-1" className="jsx-2877931502 ">
                            <path fill="rgba(0,0,0,0.4)" stroke="#fff" stroke-width="3"
                                  d="M20 8.3c4.9-8 18.5-5.9 18.5 5l-.1 1.9c-.8 4.6-4 9.3-8.9 14a66.6 66.6 0 0 1-8.7 7l-.7.6-.8-.5a27.6 27.6 0 0 1-2.8-1.7c-2-1.4-4-3-6-4.7-5.6-5-9-10.3-9-15.8A10 10 0 0 1 20 8.3z"
                                  className="jsx-2877931502"></path>
                        </svg>
                    </div>
                    <div className={"price"}>
                        <p>{title}</p>
                        <h2>${price}</h2>
                    </div>
                    <div className={"baner"}>
                        <p>{address}</p>
                    </div>
                </div>


                    <div className={"card_body"}>
                        <p>{number_of_beds} bedrooms  {number_of_rooms} bathrooms </p>
                        <p>{address}</p>
                        <p><a href="//">Emile Agent</a></p>
                    </div>
            </div>



            </div>
        )
    }

}

export default Apartment;