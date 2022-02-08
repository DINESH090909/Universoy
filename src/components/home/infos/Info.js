import React, { Component } from 'react';
import "./Info.css";
import { makeStyles } from '@material-ui/core/styles';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import logosoy2 from "../../../images/logosoy2.png"
import {horaire} from './horaire';
import burger from '../../../images/burger-home.png';
import tel_icone from '../../../images/tel.svg';

const Info = () => {
    

    return (
      <div id="info">
        <div className="giant_burger_cont">
          <img id="giant_burger" src={burger} alt="Giant bruger"></img>
        </div>
        <div className="nous_retrouver">
           <h1>NOUS RETROUVER</h1>
        </div>
        <div className="img_div">
          <img className='logo_home_info' src={logosoy2}  alt="Logo Universoy"></img>
        </div>
        <div>
          <h2 className="adresse">Adresse</h2>
        </div>
        <div>
          <p className="rue">10 Boulevard Descartes<br/>
                  78180 Montigny Le Bretonneux</p>
        </div>
        <div>
          <h2 className="contact">Contact</h2>
        </div>
        <div>
          <Button id="Btn_Telephoner_Info">
            <a href= "tel:+01-30-68-90-33" className="tel">
              <img src={tel_icone} style={{paddingRight:10}} alt="Numéro de téléphone universoy"></img>
              <strong>01 30 68 90 33</strong>
            </a>
          </Button>        
        </div>
        <div>
          <h2 className="horaire_title">Horaires d'ouverture</h2>
          <div className="horaire">
            {horaire.map(data => (
              <div className="div_horaire" key={data.id}>
                <p className="date_title">{data.id+" :"}</p>  <p className="date_horaire">{data.horaire}</p>
              </div>)) }
          </div>
        </div>
      </div>

        
    );
}


export default Info;

