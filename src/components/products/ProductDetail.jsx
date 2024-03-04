import { Alert, Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

export default function ProductDetail({ product }) {

    const { url, name, model, crew, max_atmosphering_speed, passengers } = product

    const imgURL = url.replace("https://swapi.dev/api/vehicles/", "https://starwars-visualguide.com/assets/img/vehicles/").slice(0, -1) + ".jpg";
    const placeholderImage =
        'https://starwars-visualguide.com/assets/img/placeholder.jpg'

    const onImageError = (e) => {
        e.target.src = placeholderImage
    }

    return (
        <>
            {!product ?
                <Alert severity="warning">No se encontró este producto.</Alert>
                :
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    padding={4}
                >
                    <Card>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <CardMedia
                                    component="img"
                                    width={"100%"}
                                    image={imgURL ? imgURL : placeholderImage}
                                    alt={name}
                                    onError={onImageError}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Nombre: {name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Modelo: {model}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Crew: {crew}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Velocidad: {max_atmosphering_speed}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Pasajeros: {passengers}
                                    </Typography>
                                </CardContent>
                            </Grid>

                        </Grid>



                    </Card>
                </Box>


            }
        </>

    )
}
