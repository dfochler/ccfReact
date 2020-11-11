import React, { Component } from "react";
import Header from "./HeaderComponent";
import AboutUs from "./AboutUs";
import EventsTable from "./EventsTable";
import Footer from "./Footer";
import GoogleMap from "./GoogleMap";


export default class Main extends Component {
 

    render() {
        return (
            <React.Fragment>
              <Header />
              <AboutUs/>
              <EventsTable />
              <GoogleMap />
              <Footer />
            </React.Fragment>
        );
    }
}