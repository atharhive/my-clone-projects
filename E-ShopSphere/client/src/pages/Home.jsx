import React,  { useEffect } from 'react';

import { Box, styled } from '@mui/material';

import NavBar from '../components/Home/NavBar';
import Banner from '../components/Home/Banner';
import MidSlide from '../components/Home/MidSlide';
import MidSection from '../components/Home/MidSection';
import Slide from '../components/Home/Slide';

import { useSelector, useDispatch } from 'react-redux'; // hooks
import { getProducts as listProducts } from '../core/redux/actions/productActions';

const Component = styled(Box)`
    padding: 20px 10px;
    background: #F2F2F2;
`;

const Home = () => {
    const getProducts = useSelector(state => state.getProducts);
    const { products } = getProducts;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <>
            <NavBar />
            <Component>
                <Banner />
                <MidSlide products={products} />
                <MidSection />
                <Slide
                    data={products} 
                    title='Discounts for You'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Suggested Items'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Top Selection'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Our Handpicked Collection'
                    timer={false} 
                    multi={true} 
                />
            </Component>
        </>
    )
}

export default Home;