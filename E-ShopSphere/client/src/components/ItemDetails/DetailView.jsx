import { useState, useEffect } from 'react';

import { styled, Box, Typography, Grid } from '@mui/material';

import ProductDetail from './ProductDetail';
import ActionItem from './ActionItem';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { getProductDetails } from '../../core/redux/actions/productActions';
import RecentlyViewed from '../RecentlyViewed/RecentlyViewed';

const Component = styled(Box)`
    margin-top: 55px;
    background: #F2F2F2;
`;

const Container = styled(Grid)(({ theme }) => ({
    background: '#FFFFFF',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}))

const RightContainer = styled(Grid)`
    margin-top: 50px;
    & > p {
        margin-top: 10px;
    }
`;

const DetailView = () => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    
    const { id } = useParams();

    const { product } = useSelector(state => state.getProductDetails);

    const dispatch = useDispatch();
    
    useEffect(() => {
        if (id) {
            dispatch(getProductDetails(id));
        }
    }, [dispatch, id]);

    useEffect(() => {
        if (product && Object.keys(product).length) {
            const storedProducts = JSON.parse(localStorage.getItem('recentlyViewedProducts')) || [];
            const existingIndex = storedProducts.findIndex(item => item.id === product.id);

            let updatedProducts;
            if (existingIndex !== -1) {
                // If product already exists, remove it to re-add it at the beginning
                storedProducts.splice(existingIndex, 1);
            }
            updatedProducts = [product, ...storedProducts];
            // Limit to last 5 viewed products
            if (updatedProducts.length > 5) {
                updatedProducts = updatedProducts.slice(0, 5);
            }
            localStorage.setItem('recentlyViewedProducts', JSON.stringify(updatedProducts));
        }
    }, [product]);

    return (
        <Component>
            <Box></Box>
            { product && Object.keys(product).length &&
                <Container container> 
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItem product={product} />
                    </Grid>
                    <RightContainer item lg={8} md={8} sm={8} xs={12}>
                        <Typography>{product.title.longTitle}</Typography>
                        <Typography style={{marginTop: 5, color: '#878787', fontSize: 14 }}>
                            8 Ratings & 1 Reviews
                            <span><img src={fassured} style={{width: 77, marginLeft: 20}} /></span>
                        </Typography>
                        <Typography>
                            <span style={{ fontSize: 28 }}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                            <span style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#388E3C' }}>{product.price.discount} off</span>
                        </Typography>
                        <ProductDetail product={product} />
                    </RightContainer>
                </Container>
            }   
            <RecentlyViewed />
        </Component>
    )
}

export default DetailView;