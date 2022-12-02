import axios from "axios";
import React, { useState, useEffect } from "react";

const ProductsSection = () => {

    const [allProducts, setAllProducts] = useState([]);

    const fetchProductsHandler = (limit) => [
        axios.get(`http://localhost:5005/api/products/getProductsPaginated/${limit}/${allProducts[allProducts.length - 1].id}`)
        .then(allProductsResponse => {
            console.log(allProductsResponse);
            if (allProductsResponse.status === 200) {
                if (allProductsResponse.data.length > 0) {
                    setAllProducts(allProducts => {
                        return [
                            ...allProducts,
                            ...allProductsResponse.data
                        ]
                    });
                } else if (allProductsResponse.data.length === 0) {
                    alert(`No more products.`)
                }
            } else {
                alert(`Couldn't fetch the products.`)
            }
        })
        .catch(err => {
            console.log(err);
        })
    ]

    useEffect(() => {
        axios.get(`http://localhost:5005/api/products/getProducts/6`)
        .then(allProductsResponse => {
            console.log(allProductsResponse);
            if (allProductsResponse.data) {
                setAllProducts(allProductsResponse.data);
            }
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <>
        <div style={{padding: '2rem 0'}}>
            <h1 style={{marginBottom: '0'}}>Enhance Your Portfolio Today.</h1>
            <p style={{marginTop: '0.5rem'}}>with Gold Bullion and Coins To Fit Any Budget</p>

            <div style={allProducts.length > 0 ? {display: 'grid', gridTemplateColumns: '30% 30% 30%', gap: '1rem', justifyContent: 'center'} : null}>
                {allProducts.length > 0 ? allProducts.map((product, idx) => {
                    return (
                        <React.Fragment key={idx}>
                            <div>
                                <h3>Title: {product.title}</h3>
                                <p>Price: {product.price}</p>
                                {product.image ? <img style={{width: '100%', height: '150px', objectFit: 'cover'}} src={product.image} alt="" /> : null}
                            </div>
                        </React.Fragment>
                    )
                }) : <p>No products to show. Add some products</p>}
            </div>

            <button style={{marginTop: '1rem'}} onClick={() => {
                fetchProductsHandler(4)
            }}>Load 4 more</button>
        </div>
        </>
    )
}

export default ProductsSection;