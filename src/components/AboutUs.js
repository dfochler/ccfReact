import React from 'react';
import Img from '../images/garden03.jpeg';


export default function AboutUs(){
    return (
        <div className="about">
                <div className="mt-5">
                    <img className="aboutImage" src={Img} alt="garden03"/>
                </div>
                <div className="m-5 px-5" >
                    <p> Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit 
                    esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia.</p>
            </div>
        </div>  
    );
}
