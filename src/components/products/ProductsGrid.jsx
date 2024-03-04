import { Alert, Box, Button, CircularProgress, Grid, TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import ProductCard from './ProductCard';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from '../../store/products/products.selector';
import { setProducts } from '../../store/products/products.slice';

export default function ProductsGrid() {

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("")
    const [infiniteScroll, setInfiniteScroll] = useState(true)
    const dispatch = useDispatch()
    const products = useSelector(selectProducts)


    const fetchData = async (isSearch = false) => {

        setIsLoading(true);
        setError(null);
        let url = "https://swapi.dev/api/vehicles"
        let params = {
            "page": page,
            "format": "json"
        }
        if (isSearch) {
            if (search !== "") {
                url = `${url}/?search=${search}`
                params = {}
                setInfiniteScroll(false)
            } else {
                setInfiniteScroll(true)
            }
        }

        axios.get(url, {
            params: params
        })
            .then(function (response) {

                response.data.next ? setPage(page + 1) : setPage(null)
                if (isSearch) {

                    //setProducts(response.data.results)
                    dispatch(setProducts(response.data.results));
                } else {
                    //setProducts(products.concat(response.data.results))
                    dispatch(setProducts(products.concat(response.data.results)));
                }

            })
            .catch(function (error) {
                setError(error)
            })
            .finally(function () {
                setIsLoading(false)
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchData(true)
    }

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
            return;
        }
        infiniteScroll && page && fetchData();
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading]);

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Box padding={2}>
            <Box component={"form"} onSubmit={handleSubmit}>
                <Grid container marginBottom={2}>
                    <Grid item xs={8} md={5}>
                        <TextField
                            label="Buscar"
                            variant="standard"
                            name='search'
                            value={search}
                            onChange={(e) => { setSearch(e.target.value) }}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={4} md={7}>
                        <Button type="submit" variant="standard" endIcon={<SearchIcon />}></Button>
                    </Grid>
                </Grid>
            </Box>

            <Grid container spacing={{ xs: 2, md: 3, lg: 4 }} columns={{ xs: 2, sm: 8, md: 12, lg: 12 }}>
                {products.map((product, index) => (
                    <Grid item xs={2} sm={4} md={4} lg={3} key={index}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
            {products.length === 0 && !isLoading &&
                <Box marginY={8} justifyContent={"center"} display={"flex"}>
                    <Alert variant="outlined" severity="info">
                        No se encontraron productos con ese criterio de busqueda.
                    </Alert>
                </Box>

            }
            {isLoading &&
                <Box padding={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            }
            {error && <p>Error: {error.message}</p>}
            <Outlet />
        </Box>
    )
}
