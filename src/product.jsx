import { Box, Divider, IconButton, Snackbar, SnackbarContent, Typography, } from '@mui/material';
import React, { useEffect, useState, } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Product1 from './images/cart-01.png';
import Product2 from './images/cart-02.png';
import Product3 from './images/cart-03.png';
import Product4 from './images/cart-04.png';
import Product5 from './images/cart-05.png';
import Product6 from './images/cart-06.png';
import Product7 from './images/cart-07.png';
import Product8 from './images/cart-08.png';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CloseIcon from '@mui/icons-material/Close';

const dummyProducts = [

    {
        id: 1,
        img: Product1,
        name: "product 1",
        price: "12"
    },

    {
        id: 2,
        img: Product2,
        name: "product 2",
        price: "12"
    },

    {
        id: 3,
        img: Product3,
        name: "product 3",
        price: "12"
    },

    {
        id: 4,
        img: Product4,
        name: "product 4",
        price: "12"
    },

    {
        id: 5,
        img: Product5,
        name: "product 5",
        price: "12"
    },

    {
        id: 6,
        img: Product6,
        name: "product 6",
        price: "12"
    },

    {
        id: 7,
        img: Product7,
        name: "product 7",
        price: "12"
    },

    {
        id: 8,
        img: Product8,
        name: "product 8",
        price: "12"
    },

];







const Product = () => {
    const [cartList, setCartList] = useState([]);
    const [operAlert, setOperAlert] = useState(false);

    const cartHandler = (product) => {
        const isExist = cartList.find((cart) => cart.id === product.id);

        if (!isExist) {
            setCartList((prev) => [...prev, product]);
        } else {
            setOperAlert(true);
        }
    };

    const handleClose = () => {
        setOperAlert(false);
    };


    useEffect(()=>{ 

let  StrCartList = JSON.stringify(cartList)

        localStorage.setItem("CartList",cartList)
    },[])

    return (
        <>


            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={operAlert}
                autoHideDuration={6000}
                onClose={handleClose}


            >
                <SnackbarContent style={{
                    backgroundColor: "#bb2124",
                }}

                    message={
                        <Box sx={{width:"100%"}} className="d-flex justify-content-between w-100 p-2">
                        <span id="client-snackbar">Product is Already in Cart list</span>
                        <CloseIcon className=' mx-3' onClick = {handleClose} ></CloseIcon>

                        </Box>
                        

                    }
                />
            </Snackbar>



            <Box className='text-center d-flex flex-wrap gap-3 mt-5 mb-5 container '>
                {dummyProducts.map((product, index) => (
                    <Box key={index} className='shadow-lg p-2 text-center'>
                        <img className='img-fluid' src={product.img} alt={product.name} />
                        <Typography variant='h4'>{product.name}</Typography>
                        <Divider className='fw-bolder border-black border-2 mt-3' />
                        <Box className="d-flex justify-content-between mt-2 p-5">
                            <ShareIcon />
                            <FavoriteIcon />
                            <AddShoppingCartIcon onClick={() => cartHandler(product)} />
                        </Box>
                    </Box>
                ))}
            </Box>
        </>
    );
};

export default Product;
