import React from 'react'
import { Grid } from '@material-ui/core';
import Logo_Fb from '../../images/Logo_Fb.png';
import Logo_Insta from '../../images/Logo_Insta.png';
import Logo_Universoy from '../../images/logo_soy.png';
import './Footer.css';
import { useLocation } from "react-router-dom";
import CGV from "../../Documents/CGV_MUSTANG_BONDY.pdf";
import ML from "../../Documents/ML_MUSTANG_BONDY.pdf";


const Footer = () => {
  const location = useLocation();

  const regex = /^\/admin/g;
  //   ne pas afficher dans la page admin
  if (!location.pathname.match(regex)) {
    return (
      <div >
            <Grid container id="footer">
              <Grid container className="footer-logo-border" justifyContent="center" xs={12} md={2}>
                <a href="/#header">
                  <img className="logo_footer" src={Logo_Universoy} alt="logo Universoy Footer"></img>
                </a>
              </Grid>
              <Grid container className="footer-text" direction="row" xs={12} md={10}>
                  <Grid item xs={12} sm={6} md={3} className="grid_informations">
                    <h5 className="h5">ADRESSE</h5>
                    <p>
                      <a 
                        className="footer-link"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.google.com/maps/place/10+Boulevard+Descartes,+78180+Montigny+Le+Bretonneux/"                    
                      >
                        10 Boulevard Descartes
                        <br></br> 78180 Montigny Le Bretonneux 
                      </a>
                    </p>
                  </Grid>
                  
                  <Grid item xs={12} sm={6} md={3} className="grid_informations">
                    <h5 className="h5">CONTACT</h5>
                    <p>
                    <a className="footer-link" href="tel:01-76-58-93-53"> 01 72 56 31 08 </a>
                       <br></br> 
                    <a 
                      className="footer-link" 
                      href="mailto:mettremail.site@gmail.com"
                      rel="noreferrer"
                    > mettremail@gmail.com</a>
                    </p>
                  </Grid >
                  <Grid item xs={12} sm={6} md={3} className="grid_informations">
                    <h5 className="h5_links" >REJOIGNEZ-NOUS !</h5>
                    <p className="fbinsta" >
                      <a href="/" target="_blank" rel="noreferrer" >
                        <img src={Logo_Fb}></img>
                      </a>
                       &nbsp; 
                      <a href="https://www.instagram.com/universoy78180/?hl=fr" target="_blank" rel="noreferrer" >
                      <img src={Logo_Insta}></img>
                      </a>
                    </p>
                  </Grid>

                  

              </Grid>
            </Grid>
            <div className="footer-grid">
            <Grid container justifyContent="center">
                
                    <span className="footer-copyright">Copyright 2021 ©  |  Made by <a 
                      className="footer-l" 
                      target="_blank" 
                      rel="noreferrer" 
                      href="http://www.ceostech.fr/"
                    > Ceos Tech </a>  |  <a className="footer-l" href={CGV} target="_blank">CGV</a>  |  <a className="footer-l" href={ML} target="_blank">Mentions Légales </a></span>
                
            </Grid>
            </div>
        </div>
  
    ) }

    return null;
  };
  export default Footer;
