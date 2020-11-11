import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
} from "reactstrap";

export default function EventsTable() {
    return(
        <React.Fragment >
            <h4 className="section mb-5">Get Involved</h4>
        <div style={{display:"flex", justifyContent:"center",
        alignItems:"center"}}>
          <Card >
            <CardHeader className="bg-success text-white">
              <h4>Upcoming Events</h4>
            </CardHeader>
            <CardBody>
              <dl className="row" style={{color:"green"}}>
                <dt className="col-6">Sept 30th</dt>
                <dd className="col-6">Life's A Garden, Dig it</dd>
                <hr/>
                <dt className="col-6">Oct 1st</dt>
                <dd className="col-6">Growing Pains</dd>
                <hr/>
                <dt className="col-6">Oct 3rd</dt>
                <dd className="col-6">Wallflowers</dd>
              </dl>
            </CardBody>
          </Card>
          </div>
          </React.Fragment>
    );
}