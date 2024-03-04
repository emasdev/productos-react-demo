import { Box, Button, CircularProgress, Container, Grid, Paper, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import CustomInput from "../../components/form/CustomInput";

const Formulario = () => {

    const [formScheme, setFormScheme] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const fetchFormScheme = () => {
        setIsLoading(true)
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
                setIsLoading(false)
            });
    }

    useEffect(() => {
        fetchFormScheme()
    }, [])

    const onSuccess = (data) => {
        alert("se enviaron los siguientes datos correctamente: " + JSON.stringify(data))
    }

    return (
        <Container>
            <Box marginTop={2}>
                <Paper elevation={4}>
                    <Box padding={2}>
                        <Typography variant="h4" marginBottom={2}>
                            Formulario dinámico
                        </Typography>
                        {isLoading ?
                            <Box padding={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <CircularProgress />
                            </Box>
                            :
                            <FormContainer

                                onSuccess={onSuccess}
                            >
                                <Grid container spacing={2}>
                                    {/* <Grid item xs={12}>
                                <TextFieldElement name="Test 4" label="Test 4" required />
                            </Grid>
                            <Grid item xs={12}>
                                <TextFieldElement name="Test 3" label="Test 3" required />
                            </Grid> */}
                                    {formScheme.map((element) => {
                                        return (
                                            <Grid item key={element.id} xs={12} sm={6}>
                                                <CustomInput inputScheme={element} />
                                            </Grid>
                                        )
                                    })}
                                    <Grid item xs={12}>
                                        <Button type="submit">Enviar</Button>
                                    </Grid>
                                </Grid>



                                {/* <Grid container>
                            {formScheme.map((element) => {
                                return (
                                    <Grid item key={element.id} xs={12} sm={6}>
                                        element
                                    </Grid>
                                )
                            })}
                        </Grid> */}
                            </FormContainer>
                        }

                    </Box>

                </Paper>

            </Box>

        </Container>

    );
};

export default Formulario;
