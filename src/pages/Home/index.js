import React from 'react'
import Navbar from '../../components/Header'
import Product_Pagination from '../../components/Pagination'
import Products from '../../components/ProductItem'

const Home = () => {
  return (
    <>
    <Navbar/>
    <br/>
    <Products/>
    <Product_Pagination/>
    </>
  )
}

export default Home