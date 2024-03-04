import { Alert, Box, CircularProgress } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import ProductDetail from '../../components/products/ProductDetail';

export default function Product(props) {

    const { productId } = useParams();
    const [isLoading, setIsLoading] = useState(true)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const { state: { product } } = useLocation();


    const fetchData = async () => {
        setIsLoading(true);
        axios.get('https://swapi.dev/api/vehicles/' + productId, {
            params: {
                "format": "json"
            }
        })
            .then(function (response) {


                setSelectedProduct(response.data)
            })
            .catch(function (error) {
                console.log(error);
                notFound(true)
            })
            .finally(function () {
                setIsLoading(false)
                // always executed
            });
    }

    useEffect(() => {
        if (productId) {
            if (product) {
                setSelectedProduct(product)
                setIsLoading(false)
            } else {
                fetchData()
            }
        } else {
            setIsLoading(false)
        }

    }, [productId, product])

    return (
        <>
            {!isLoading ?
                <ProductDetail product={selectedProduct} />
                :
                <Box padding={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            }

        </>
    )
}
