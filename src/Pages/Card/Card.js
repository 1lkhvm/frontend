import React, { useEffect, useState } from 'react'
import axios from "axios";
import './Style.scss'
function Card() {

    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/categories").then((response) => {
            setPost(response.data);
        });
    }, []);
    return (
        <>
            <div className='text'>Shopping site</div>
            <div className='card-flex'>

                {console.log(post)}
                {post.map((element) => {
                    return (
                        <body>
                            <div class="wrapper">
                                <div class="product-img">
                                    <img src={element.image} height="420" width="327" />
                                </div>
                                <div class="product-info">
                                    <div class="product-text">
                                        <h1>{element.title}</h1>
                                        <br></br>
                                        <p>{element.description}</p>
                                    </div>
                                    <div class="product-price-btn">
                                        <p><span>{element.price}</span>$</p>
                                        <br></br>

                                        <button class="glow-on-hover" type="button">buy now</button>
                                    </div>
                                </div>
                            </div>
                        </body>




                    )


                })}
            </div> </>
    )
}

export default Card