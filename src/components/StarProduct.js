import React from 'react'
import "../styles/StarProduct.css"

const StarProduct = ({product}) => {
    return (
        <div className="startProduct">
            <div>
                <a href={product[0].url}><img src={product[0].image} /></a>
            </div>
            <div>
                <a href={product[1].url}><img src={product[1].image} /></a>
                <a href={product[2].url}><img src={product[2].image} /></a>
                <a href={product[3].url}><img src={product[3].image} /></a>
            </div>
        </div>
    )
}

export default StarProduct
