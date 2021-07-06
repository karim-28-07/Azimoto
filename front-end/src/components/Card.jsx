// import React from 'react';

// const Card = ({ nameHero, age, isAlive, powers, color, image }) => {

//     const urlBaseImage = "http://localhost:8000/"

//     const showImage = () => {
//          if (image) {
//              return <img src={urlBaseImage + image} className="card-img-top" alt={nameHero} />
//          }

//          return <></>
//     }

//     return (
//         <div className="card" style={{ width: "18rem" }}>
//             {showImage()}
//             <div className="card-body">
//                 <h5 className="card-title">{nameHero}</h5>
//                 <p className="card-text">{nameHero} is {age} years old and he is {isAlive ? "" : "not"} alive. It's color is the {color}</p>
//             </div>
//             <ul className="list-group list-group-flush">
//                 {
//                     powers.map(elem => {
//                         return <li className="list-group-item">Power: {elem.name} - Force: {elem.force}</li>
//                     })
//                 }
//             </ul>
//             {/* <div className="card-body">
//                 <a href="#" className="card-link">Card link</a>
//                 <a href="#" className="card-link">Another link</a>
//             </div> */}
//         </div>
//     )
// }

// export default Card;
