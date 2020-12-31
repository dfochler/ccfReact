import React, { Component } from "react";
import { Card, CardBody, CardHeader, Button } from "reactstrap";
import {StickyTable, Row, Cell} from 'react-sticky-table';
import { EVENTS } from '../shared/events.js';


export default class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
        events: EVENTS
    };
  }
  render() {
    return (
      <React.Fragment>
        <h4 className="section mb-5">Get Involved</h4>
        <div style={{display:"flex", justifyContent:"center", width: '100vw', height: '300px'}}>
          <StickyTable>
            <Row >
            <Cell style={{borderWidth: 0}} className="bg-success text-white">Upcoming Events</Cell>
            <Cell style={{borderWidth: 0}} className="bg-success text-white">Date</Cell>
            <Cell style={{borderWidth: 0}} className="bg-success text-white">Register</Cell>
            </Row>
            {this.state.events.map((item) => (
            <Row>
              <Cell>{item.name}</Cell>
              <Cell>{item.date}</Cell>
              <Cell><Button outline color="success" className="mb-3">yep</Button></Cell>
            </Row>))}
          </StickyTable>
        </div>
      </React.Fragment>
    );
  }
}

/*export default class Events extends Component {
  constructor(props) {
      super(props);

      this.state = {
          events: EVENTS
      };
    }


render() {
  return (
      <React.Fragment>
            <h4 className="section mb-5">Get Involved</h4>
        <div style={{display:"flex", justifyContent:"center"}}>
          <Card className="eventTable" style={{ height: '50%', width: '50vw' }}>
              <CardHeader className="bg-success text-white">
                <h4>Upcoming Events</h4>
              </CardHeader>
              <CardBody className="pb-2 pt-2" ></CardBody>
                  {this.state.events.map((item) => (
                  <CardBody key={item.uuid} className="pb-0 pt-1">
                    <dl className="row" style={{color:"grey"}}>
                      <dt className="col-3">{item.date}</dt>
                      <dd className="col-6">{item.name}</dd>
                    <Button outline color="success" className="mb-3">Register</Button>
                      <hr/>
                    </dl>
                  </CardBody>
                  ))}
          </Card>
          </div>
          </React.Fragment>
    );
}

}*/