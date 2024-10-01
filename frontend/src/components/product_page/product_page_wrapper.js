import React, { useEffect, useState } from 'react'
import {Card} from 'react-bootstrap'
import ProductItem from './product_item';

function ProductPageWrapper() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/api/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();  // Use text() to catch incomplete or invalid JSON responses
            })
            .then(text => {
                if (text) {
                    return JSON.parse(text);  // Parse JSON only if there is a valid response
                } else {
                    return [];  // Return an empty array if the response body is empty
                }
            })
            .then(data => {
                setProducts(data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        <div>
            <h1></h1>
    <div className="row">
            {products.map((product) => (
                <ProductItem product={product} />
            ))}
    </div>
    </div>
    );
}

export default ProductPageWrapper;
