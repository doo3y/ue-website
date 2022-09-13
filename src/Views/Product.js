import {React, useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";

function Product () {
    const {id} = useParams()
    const url = `https://631f6f9d58a1c0fe9f696230.mockapi.io/Product/${id}`
    const [product, setProduct] = useState({
        loading: false,
        data: null,
        error:false
    }) 

    let content = null

    useEffect (() => {
        setProduct({
            loading: true, 
            data: null,
            error: false
        })

        axios.get(url)
        .then(response => {
            setProduct({
                loading: false,
                data: response.data,
                error: false
            })
        }) 
        .catch(() => {
            setProduct({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])

    if(product.error) {
        content = <p>
            There was an error please refresh or try again later
        </p>
    }

    if (product.loading) {
        content = <Loader/>
    }
    
    if(product.data) {
        content =
            <div className="p-3">
                <h1 className="text-2xl font-bold mb-3">
                    {product.data.name}
                </h1>
                <div>
                    <img src={product.data.avatar}/>
                </div>
            </div>
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default Product