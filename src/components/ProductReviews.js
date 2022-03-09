import React from 'react'
import ProductReviewsCard from "../components/ProductReviewsCard.js"
import "../styles/ProductReviews.css"

const ProductReviews = ({productReviews}) => {
    return (
        <div className="productReviews">
            {productReviews.map((item,index)=>(
                <ProductReviewsCard key={item.image} name={item.name} image={item.image} review={item.review} index={index} price={item.price} />
            ))}
        </div>
    )
}

export default ProductReviews
