import React from "react"
import { useNavigate } from "react-router-dom"



// function OrderSummery(){
//     return(
//         navigate("OrderConfirmed") // use navigate cannot be used outside any component
//         )
//     }
    
    export default function Home(){
    const navigate = useNavigate()
    return (
    <div>
        <h4>
            Home page
        </h4>

        <button onClick={()=>navigate("OrderConfirmed")}>Place Order</button>
    
    </div>
    
    )
}