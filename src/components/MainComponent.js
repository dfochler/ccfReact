import React, { Component } from "react";
import Header from "./HeaderComponent";
import AboutUs from "./AboutUs";
import EventsTable from "./EventsTable";
import Footer from "./Footer";
import GoogleMap from "./GoogleMap";
import Accordions from "./Accordion";



export default class Main extends Component {
 

    render() {
        return (
            <React.Fragment>
              <Header />
              <AboutUs/>
              <EventsTable />
            <div className="row row-content">
                <Accordions/>
                <GoogleMap />
            </div>
              <Footer />
            </React.Fragment>
        );
    }
}