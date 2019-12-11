import React from 'react';
import logo from './logo.svg';
import './App.css';
import {apartments} from "./components/apartment/apartments.js";
import {cities} from "./components/cities/cities_list";
import Apartment from "./components/apartment/apartment";
import City from "./components/cities/city"
import Header from "./components/header/header";
import GetPre from "./components/get_pre_aproved/get_pre";
import Form from "./components/form/form";
import Gallery from "./components/gallery/gallery";

import Main from "./components/home/main";
import {mainData} from "./components/home/main_data";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ApartmentPage from "./components/apartmentPage/apartmentPage";





class App extends React.Component{
  render() {
    const apartmentList = apartments;
    const citiesList = cities;
    return(
        <div className={"myBody"}>
             <Router>
                <Header/>


                <Switch>
                    <Route path={"/apartment/:id"} component={ApartmentPage}>
                    </Route>
                    <Route path={"/Buy"}>
                        <Main title={"Rent houses"} pageType={'rent'} />
                        <Gallery apartmentList={apartmentList} citiesList={citiesList}/>
                    </Route>
                    <Route path={"/Sell"}>
                        <Gallery apartmentList={apartmentList} citiesList={citiesList}/>
                    </Route>
                    <Route path={"/Rent"}>
                        <Main title={"Rent houses"} pageType={'rent'} />
                        <Gallery apartmentList={apartmentList} citiesList={citiesList}/>
                    </Route>
                    <Route path={"/Mortgage"} >
                        <Gallery apartmentList={apartmentList} citiesList={citiesList}/>
                    </Route>
                    <Route path={"/Find_Realtors"}>
                        <Gallery apartmentList={apartmentList} citiesList={citiesList}/>
                    </Route>
                    <Route path={"/"}>
                        <GetPre/>
                        <Main title={"Homepage"}/>
                        <Gallery apartmentList={apartmentList} citiesList={citiesList}/>
                    </Route>
                    <Route path={"/New_&_Insights"}>
                        <Gallery apartmentList={apartmentList} citiesList={citiesList}/>
                    </Route>

                </Switch>

             </Router>



        </div>

    );
  }
}


export default App;

function Home() {
    return(
        <div className={"myBody"}>
            <GetPre/>

        </div>
    )
}