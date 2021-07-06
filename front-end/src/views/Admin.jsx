// import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom'
// import Select from 'react-select'

// import axios from 'axios'

// import { getPowers, addHero } from '../utils/network'

// const Admin = ({ disconnectUser }) => {
//     let history = useHistory()

//     const [heroAdded, setHeroAdded] = useState(false);
//     const [powerOptions, setPowerOptions] = useState([]);

//     const [name, setName] = useState("");
//     const [color, setColor] = useState("");
//     const [isAlive, setIsAlive] = useState(false);
//     const [age, setAge] = useState(0);
//     const [powers, setPowers] = useState([]);
//     const [imageHero, setImageHero] = useState("");

//     useEffect(async () => {
//         try {
//             const token = localStorage.getItem("token") || false

//             if (!token) {
//                 history.push("/")
//                 return
//             }

//             const dataPowers = await getPowers()

//             if (dataPowers) {
//                 const options = dataPowers.map(elem => {
//                     return {
//                         value: elem._id,
//                         label: elem.name
//                     }
//                 })

//                 setPowerOptions(options)
//             } else {
//                 alert("There was a problem")
//             }


//         } catch (error) {

//         }
//     }, []);

//     const submit = async () => {
//         try {
//             const listPowers = powers.map(elem => elem.value)

//             const newHeroForm = new FormData()

//             newHeroForm.append("name", name)
//             newHeroForm.append("color", color)
//             newHeroForm.append("isAlive", isAlive)
//             newHeroForm.append("age", age)
//             newHeroForm.append("powers", listPowers)

//             newHeroForm.append("image-hero", imageHero)

//             const response = await addHero(newHeroForm)

//             if (response.status === 200) {
//                 setHeroAdded(true)
//             } else {
//                 if (response.status === 401) {
//                     disconnectUser()
//                     history.push("/")
//                 } else {
//                     alert("There was a problem")
//                 }
//             }
//         } catch (error) {
//             console.error(error)
//         }

//     }

//     return (
//         <div className="container">
//             <h2>Add a Hero </h2>

//             {heroAdded &&
//                 <div className="row">
//                     <div className="offset-3 col-6 mx-auto">
//                         <div className="alert alert-success" role="success">
//                             The hero {name} was added correctly!
//                         </div>
//                     </div>
//                 </div>
//             }

//             <div className="row">

//                 <div className="offset-3 col-6 mx-auto">
//                     <div className="mb-3 row">
//                         <label htmlFor="name" className="col-sm-4 col-form-label">Hero name</label>
//                         <div className="col-sm-8">
//                             <input type="text" className="form-control" id="name" onChange={(e) => setName(e.target.value)} />
//                         </div>
//                     </div>
//                     <div className="mb-3 row">
//                         <label htmlFor="color" className="col-sm-4 col-form-label">Color</label>
//                         <div className="col-sm-8">
//                             <input type="text" className="form-control" id="color" onChange={(e) => setColor(e.target.value)} />
//                         </div>
//                     </div>
//                     <div className="mb-3 row">
//                         <div className="form-check">
//                             <input className="form-check-input" type="checkbox" value="" id="isAlive" onChange={() => setIsAlive(!isAlive)} />
//                             <label className="form-check-label" for="isAlive">
//                                 Is the hero alive?
//                             </label>
//                         </div>
//                     </div>
//                     <div className="mb-3 row">
//                         <label htmlFor="age" className="col-sm-4 col-form-label">Age</label>
//                         <div className="col-sm-8">
//                             <input type="number" className="form-control" id="age" onChange={(e) => setAge(e.target.value)} />
//                         </div>
//                     </div>
//                     <div className="mb-3 row">
//                         <label htmlFor="powers" className="col-sm-4 col-form-label">Powers</label>
//                         <div className="col-sm-8">
//                             <Select isMulti options={powerOptions} onChange={(selectedOpts) => setPowers(selectedOpts)} />
//                         </div>
//                     </div>
//                     <div className="mb-3 row">
//                         <label htmlFor="imageHero" className="col-sm-4 col-form-label">Add one image of the hero</label>
//                         <div className="col-sm-8">
//                             <input type="file" id="imageHero" onChange={(event) => setImageHero(event.target.files[0])} class="form-control" name="image-hero" />
//                         </div>
//                     </div>

//                     <div className="mb-3 row">
//                         <button type="submit" className="btn btn-primary mb-3" onClick={submit}>Submit</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Admin;
