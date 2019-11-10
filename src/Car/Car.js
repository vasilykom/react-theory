import React from 'react'
// function  Car() {
//     return(
//         <h2>This car component</h2>
//     )
// }
// const car=()=> (
//     <div>
//         This is cart from arrow
//         <strong>ddd</strong>
//         <p>this </p>
//         <strong>{1+1}</strong>
//     </div>
// );

export default (props)=>(
    <div>
        <h3>Car named: {props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
    </div>
)