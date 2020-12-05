import React, { Component } from "react";
import Header from "./HeaderComponent";
import AboutUs from "./AboutUs";
import Events from "./EventsTable";
import Footer from "./Footer";
import GoogleMap from "./GoogleMap";
import Accordions from "./Accordion2";



export default class Main extends Component {
  

    render() {
        return (
            <React.Fragment>
              <Header />
              <AboutUs/>
              <Events />
            <div className="row row-content mt-5">
                <Accordions/>
                <GoogleMap />
            </div>
              <Footer />
            </React.Fragment>
        );
    }
}