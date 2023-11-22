import React from "react";
import { useNavigate } from "react-router-dom";

export default function OrderConfirmed(){
    const navigate = useNavigate()
    return(
        <>
            <h4>Order Confirmed</h4>
            <button onClick={()=> navigate(-1)}>Go Back</button>
        </>
    )
}