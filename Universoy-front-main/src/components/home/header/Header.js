import React, { Component } from 'react';
import './Header.css';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";
import burger from '../../../images/burger-home.png';

import {Grid } from '@material-ui/core';

class Header extends Component {
    render() {
        return (
            <div id="header">
                <div className="header-container">
                        <img className="burger_picture" src={burger} alt="burger_picture"></img>
                        <div className="header_child">
                                <div className="Div_Text_Header">
                                    <strong>L’univers du Goût et  des Gourmands !</strong> 
                                </div>
                                
                                <div className="Div_UnderText"> 
                                    Découvrez nos recettes <strong>gourmandes et variées</strong>, dans un cadre <strong>chaleureux et familial</strong> :) 
                                    Sur place, à emporter ou bien en livraison, <strong>à vous de choisir</strong> !

                                </div> 
                                <Button id="Btn_Commander_Accueil">
                                    <Link to="/carte" className="commanderHeader">
                                        <strong>COMMANDER</strong>
                                    </Link>
                                </Button>       
                        </div>
                </div>           
            </div>
        );
    }
}

export default Header;

