

import Product from './model/productSchema.js';
import { products } from './constants/product.js';

const DefaultData = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(products);

            console.log('Data imported Successfully');
        
    } catch (error) {
        
    }
}

export default DefaultData;