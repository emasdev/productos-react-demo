import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import "./ProductCardStyle.scss"

export default function ProductCard({ product }) {

    const navigate = useNavigate();
    const { url, name, model } = product
    const detailURL = "/producto/" + url.replace("https://swapi.dev/api/vehicles/", "").slice(0, -1)
    const imgURL = url.replace("https://swapi.dev/api/vehicles/", "https://starwars-visualguide.com/assets/img/vehicles/").slice(0, -1) + ".jpg";
    const placeholderImage =
        'https://starwars-visualguide.com/assets/img/placeholder.jpg'

    const onImageError = (e) => {
        e.target.src = placeholderImage
    }

    return (
        <Card className='product-card'>
            <CardActionArea component={Link} to={detailURL} state={{ product: product }}>
                <CardMedia
                    component="img"
                    height="250"
                    image={imgURL ? imgURL : placeholderImage}
                    alt={name}
                    onError={onImageError}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {model}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}