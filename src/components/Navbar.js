import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavLink,
  NavbarToggler,
  Collapse,
  NavItem,
} from "reactstrap";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col mt-5">
              <h1>ChattaCity Farms</h1>
              <h2>diggin' the city</h2>
            </div>
          </div>
        </div>
       

     
 <Navbar dark sticky="top" expand="md" >
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar >
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/getinvolved">
                    Get Involved
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
        </Navbar>
       
      </React.Fragment>
    );
  }
}
