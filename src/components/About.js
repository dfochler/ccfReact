import React, {Component} from 'react';
import ReactCardFlip from 'react-card-flip';
import { Media } from 'reactstrap';

export default class About extends React.Component {
    constructor() {
      super();
        this.state = {
        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
   
    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
   
    render() {
      return (
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
          <Front> <button onClick={this.handleClick}>Click to flip</button>
          </Front>
            <Back>
          </Back>
        </ReactCardFlip>
      );
    }
  }

function Front(){
        return (
            <div>
            <Media key="front" src='./images/chatt-ariel.jpg'/> 
            </div>  
        );
    }


function Back() {
        return(
            <div key="back">
                <p>About: 
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia.</p>
                <button>Click to flip</button>
            </div>
        );
    }
