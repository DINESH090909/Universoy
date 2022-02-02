import React, { useEffect, useState  } from 'react';
import Grid from '@material-ui/core/Grid';
import "./Plats.css";

import image1 from "../../../images/Plats/bigmac.png";
import image2 from "../../../images/Plats/tacos.png";
import image3 from "../../../images/Plats/kebab.png";
import image4 from "../../../images/Plats/TIRA.png";
import image5 from "../../../images/Plats/Rectangle1.png";
import image6 from "../../../images/Plats/Rectangle2.png";

import Carousel from "react-bootstrap/Carousel";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';


import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";


  const data = [
      {
          id: 1,
          titre: "Burgers",
          photo: image1
      },
      {
        id: 2,
        titre: "Tacos",
        photo: image2
    },
    {
        id: 3,
        titre: "Sandwichs",
        photo: image3
    },
    {
        id: 4,
        titre: "Desserts",
        photo: image4
    },
  ]
  
  //AUTRE VERSION AVEC CARD

/* 
const Plats = () => {

    return (
        <div id="plat_contenant">
            <div><h1 id="plat_title"> NOTRE CARTE </h1></div>
            <div className="plat_img-grid">
                    <Grid container spacing={5}  justifyContent="space-between" className="grid-parent" >
                        { data.map(image => (
                        <Grid  item xs={2} sm={3} md={3}  className="plat_grid-child">    
                            <Card sx={{ maxWidth: 10 }}>
                                <CardContent className="plat_img_div" >
                                    <CardMedia component="img" src={image.photo} alt={image.titre}/>
                                    <p className="plat_img_titre">{image.titre}</p>
                                </CardContent>
                            </Card>
                        </Grid> )) }
                    </Grid>

            </div>
        </div>
        );
    }

*/

    const Plats = () => {

        return (
            <div id="plat_contenant">
                <div><h1 id="plat_title"> NOTRE CARTE </h1></div>
                <div className="plat_img-grid">
                        <Grid container spacing={5}  justifyContent="space-between" className="plat_grid-parent" >
                            { data.map(image => (
                            <Grid  item xs={12} sm={6} md={6} lg={3}  align="center" className="plat_grid-child" key={image.id}>
                                <div className="plat_img_div" >
                                    <img src={image.photo} alt={image.titre}/>
                                    <p className="plat_img_titre">{image.titre}</p>
                                </div> 
                            </Grid>)) }
                        </Grid>
                </div>
                <div className="command_button">
                    <Link to="/carte" className="telecharger_btn values__button">
                        COMMANDER
                    </Link>
                </div>
            </div>
            );
        }

export default Plats;

