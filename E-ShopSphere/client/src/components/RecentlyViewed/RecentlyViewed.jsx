import React, { useState, useEffect } from 'react';
import { Box, Typography, styled } from '@mui/material';
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const Component = styled(Box)`
    margin-top: 20px;
    background: #FFFFFF;
    padding: 10px 20px;
`;

const ProductImage = styled('img')({
    width: 'auto',
    height: 150,
    objectFit: 'contain'
});

const Text = styled(Typography)`
    font-size: 14px;
    margin-top: 5px;
`;

const RecentlyViewed = () => {
    const [recentlyViewedProducts, setRecentlyViewedProducts] = useState([]);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('recentlyViewedProducts')) || [];
        setRecentlyViewedProducts(storedProducts);
    }, []);

    return (
        recentlyViewedProducts.length > 0 && (
            <Component>
                <Typography style={{ fontSize: 22, fontWeight: 600, marginBottom: 10 }}>Recently Viewed</Typography>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    responsive={responsive}
                    infinite={false}
                    autoPlay={false}
                    keyBoardControl={true}
                    showDots={false}
                    slidesToSlide={1}
                    containerClass="carousel-container"
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {recentlyViewedProducts.map(product => (
                        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Box textAlign="center" style={{ padding: '25px 15px' }}>
                                <ProductImage src={product.url} alt="product" />
                                <Text style={{ fontWeight: 600, color: '#212121' }}>{product.title.shortTitle}</Text>
                                <Text style={{ color: 'green' }}>{product.discount}</Text>
                                <Text style={{ color: '#212121', opacity: '.6' }}>{product.tagline}</Text>
                            </Box>
                        </Link>
                    ))}
                </Carousel>
            </Component>
        )
    );
};

export default RecentlyViewed;