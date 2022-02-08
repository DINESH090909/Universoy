import React from 'react';
import "./Galerie.css";
import Grid from '@material-ui/core/Grid';
import {images} from './images';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';

const Galerie = () => {
    const  img  = images;

     return (
        <div id="contenant">
            <div><h1 id="title"> GALERIE PHOTOS</h1></div>
            <div className="img-grid">
                <Grid container spacing={3} justifyContent="flex-start" className="grid-parent" >
                    { img.map(image => (
                        <Grid  item xs={6} sm={6} md={4}  className="grid-child">
                            <div className="image_div" key={image.id}>
                                <Card>
                                    <CardMedia component="img" src={image.url} alt={image.titre}/>
                                </Card>
                            </div> 
                        </Grid>)) }
                </Grid>
            </div>
        </div>
     );
}


export default Galerie;