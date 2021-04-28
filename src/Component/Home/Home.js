import React from 'react';
import coverPic from './../icon/cover-pic.png';
import Product from './Product/Product.js';
import './Home.css';

function Home() {
    return (
        <div className="Home">
            <div className="home__container">
                <img src= {coverPic} alt= "cover" className="home__pic" />
            </div>

            <div className="home__row">
                <Product
                    id = {1111}
                    title="All-new Echo Dot (4th Gen) | #1 smart speaker brand in India with Alexa (Black)"
                    img="https://images-na.ssl-images-amazon.com/images/I/61KIy6gX-CL._AC_SX569_.jpg"
                    rating= {4}
                    price= {3999.99}
                />
                
                <Product
                    id = {1112}
                    title="Yashika Women's Art Silk Saree With Blouse Piece(NAURTA_Free Size)"
                    img="https://m.media-amazon.com/images/I/91GKFgnS5uL._AC_UL640_FMwebp_QL65_.jpg"
                    rating= {5}
                    price= {799.99}
                />

            </div>

            
            <div className="home__row">
                <Product
                    id = {1113}
                    title="Berrylush Floral Print Shoulder Strap Casual Dress | Polyester"
                    img="https://images-na.ssl-images-amazon.com/images/I/710k2LFpGyL._AC_UY741_.jpg"
                    rating= {5}
                    price= {1999.00}
                />

                <Product
                    id = {1114}
                    title="OnePlus Bullets Wireless Z Bass Edition (Reverb Red)"
                    img="https://images-na.ssl-images-amazon.com/images/I/61DKcGr12OL._AC_SY450_.jpg"
                    rating= {4}
                    price= {1999.49}
                />

                <Product
                    id = {1115}
                    title="New Apple iPhone 12 Pro Max (512GB) - Pacific Blue"
                    img="https://images-na.ssl-images-amazon.com/images/I/71MHTD3uL4L._AC_SX679_.jpg"
                    rating= {5}
                    price= {155900.00}
                />
            </div>

            <div className="home__row">
                <Product
                    id = {1116}
                    title="OnePlus 80 cm (32 inches) Y Series HD Ready LED Smart Android TV 32Y1 (Black) (2020 Model)"
                    img="https://images-na.ssl-images-amazon.com/images/I/81qtALn%2BGpL._AC_SX679_.jpg"
                    rating= {4}
                    price= {15999.99}
                />
                
            </div>
        </div>
    )
}

export default Home
