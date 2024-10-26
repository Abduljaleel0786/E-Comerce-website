import { Box, Divider, Typography, } from '@mui/material'
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Product1 from './images/cart-01.png'
import Product2 from './images/cart-02.png'
import Product3 from './images/cart-03.png'
import Product4 from './images/cart-04.png'
import Product5 from './images/cart-05.png'
import Product6 from './images/cart-06.png'
import Product7 from './images/cart-07.png'
import Product8 from './images/cart-08.png'
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const dummyproducts = [
    {
        img: Product1,
        name: "product 1",
        price: "12",
    },
    {
        img: Product2,
        name: "product 2",
        price: "12",
    },
    {
        img: Product3,
        name: "product 3",
        price: "12",
    },
    {
        img: Product4,
        name: "product 4",
        price: "12",
    },
    {
        img: Product5,
        name: "product 5",
        price: "12",
    },
    {
        img: Product6,
        name: "product 6",
        price: "12",
    },
    {
        img: Product7,
        name: "product 7",
        price: "12",
    },
    {
        img: Product8,
        name: "product 8",
        price: "12",
    },
]

const product = () => {
    return (

        <>
            <Box className=' text-center d-flex flex-wrap gap-3 mt-5 mb-5 container text-center '>

                {dummyproducts?.map((Product, index) => {
                    console.log(Product);

                    return (

                        <cards key={index} >
                            <Box className=' shadow-lg p-2  text-center '>
                                <img className=' img-fluid ' src={Product.img} alt={`${product.name}`} />
                                <Typography variant='h4' >{Product.name}</Typography>

                                <Divider className=' fw-bolder border-black border-2 mt-3' />

                                <Box className="d-flex justify-content-between mt-2 p-5" >
                                <ShareIcon></ShareIcon>
                                <FavoriteIcon></FavoriteIcon>
                                <AddShoppingCartIcon></AddShoppingCartIcon>
                                </Box>
                               

                            </Box>

                        </cards>


                    )



                })

                }

            </Box>
        </>
    )
}

export default product