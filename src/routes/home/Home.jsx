import React from 'react'
import { Outlet } from 'react-router-dom'
import ProductsGrid from '../../components/products/ProductsGrid'

export default function Home() {
    return (
        <>
            <ProductsGrid />
            <Outlet />
        </>
    )
}
