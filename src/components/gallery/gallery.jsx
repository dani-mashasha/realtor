import React from "react";
import Apartment from "../apartment/apartment";
import City from "../cities/city";
import Form from "../form/form";
import CityTitle from "../cityTitle/cityTitle";


class Gallery extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            apartmentList: this.props.apartmentList,
            citiesList: this.props.citiesList,
            currentCity:""
        };
    }

    updateGallery =(data)=>{
        const {city,min,max,beds,baths} = data;
        let apartmentList = this.props.apartmentList;
        if(min){
            apartmentList = apartmentList.filter(item =>{return (item.price*1000000) > min} );
        }
        if(max){
            apartmentList = apartmentList.filter(item =>{return  (item.price*1000000) < max} );
        }
        if(beds){
            apartmentList = apartmentList.filter(item =>{return item.number_of_beds === parseInt(beds)} );
        }
        if(baths){
            apartmentList = apartmentList.filter(item =>{return item.number_of_rooms === parseInt(baths)} );
        }
        if(city){
            const myCity = this.props.citiesList.find((item) => {return item.label.toLowerCase().includes(city.toLowerCase()) ? item : null});
            if (myCity){
                apartmentList = apartmentList.filter(item =>{return item.cityId === myCity.id});
                this.setState({currentCity:myCity})
                console.log(myCity)
            }

        } else {
            this.setState({currentCity:""})
        }

        this.setState({
           apartmentList:apartmentList
       })
    }

    render() {
        const {apartmentList,citiesList,currentCity} = this.state;
        return(
            <div>

                <Form updateGallery={this.updateGallery}/>
                <CityTitle city={currentCity}/>
            <div className={"row card-deck "}>
                {apartmentList.map((apartment, i) => <Apartment id={apartment.id} title={apartment.title}
                                                                description={apartment.description} cityId={apartment.cityId} owner={apartment.owner}
                                                                price={apartment.price} main_image={apartment.main_image} images={apartment.images} number_of_beds={apartment.number_of_beds}
                                                                number_of_rooms={apartment.number_of_rooms} address={apartment.address} sqft={apartment.sqft} status={apartment.status}
                                                                for_rent={apartment.for_rent} for_sale={apartment.for_sale} key={i}/>)}
            {/*</div>*/}
            {/*    <div className={"row card-deck space"}>*/}
            {/*        {citiesList.map((city,i) => <City id={city.id} label={city.label} name={city.name} description={city.description} country={city.country} image={city.image} key={city.id}/>)}*/}
                </div>
            </div>
        )
    }
}

export default Gallery;