import React from 'react'
import Product from './Product'

function Products(){

    var Products = [
        {
            title: "arqitel", 
            description: "Arqu Executive Development and its products continue to receive the latest",
            live:"true",
            case:"false"
        },
        {
            title: "TTR", description: "We've created an interactive site using generative AI to allow to engage with our thinking about AI, industry trends and design", 
            live:"true", 
            case:"false"
        },
        {
            title: "YIR 2025", description: "   Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate", 
            live:"true", 
            case:"false"
        },
        {
            title: "Yahoo!",
            description: "We enhanced the new york fashion week. by creating a fully digital AR fashion experience for Yahoo and maiseie", 
            live:"true",
            case:"false"
        },
        {
            title: "Rainfall", description: "We crafted a website, developing prototype and custom code that ultimately allows their team to update content regularly and with ease.", 
            live:"true", 
            case:"false"
        },
        {
            title: "CMS",
            description: "Webflow created by Refokus (yes, us!) that range from small boosters that improve a specific Webflow’s functionality (like CMS load more) to bigger features built from scratch (like CMS filters).", 
            live:"true", 
            case:"false"
        },
        {
            title: "no-code", description: "One of the biggest misconceptions of no-code is that you are limited to the tool you are using, and that code is not part of the equation", 
            live:"true", 
            case:"false"
        },

    ]

    return(
        <div>
            {Products.map((val, index)=> <Product val={val} />)}
            <Product />
        </div>
    )
}

export default Products