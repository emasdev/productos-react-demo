import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Formulario = () => {

    const [formScheme, setFormScheme] = useState([])

    const fetchFormScheme = () => {
        axios.get('https://run.mocky.io/v3/2a5049a2-c09b-49e6-8fd1-09aa4f0bc7bb')
            .then(function (response) {
                // handle success
                console.log(response.data.items);
                setFormScheme(response.data.items)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    useEffect(() => {
        fetchFormScheme()
    }, [])

    return (
        <Container>
            <Box marginTop={2}>
                <Paper>
                    <Typography variant="h4">
                        Formulario dinámico
                    </Typography>
                    <Box component={"form"}>
                        <Grid container>
                            {formScheme.map((element) => {
                                return (
                                    <Grid item key={element.id} xs={12} sm={6}>
                                        element
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Box>
                </Paper>

            </Box>

        </Container>

    );
};

export default Formulario;
