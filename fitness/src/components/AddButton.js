import React from 'react'
import './styles/AddButton.css'
import AddImg from '../images/add.png'
import {Link} from 'react-router-dom'

//Con BABEL
const AddButton = () => (
    <Link to="/exercise/new">
        <img src={AddImg} className="Fitness-Add" alt="exercise"/>
    </Link>
)

//Componente Funcional
/* function AddButton(){
    return(
        <Link to="/exercise/new">
        <img src={AddImg} className="Fitness-Add"/>
    </Link>
        
        )
} */
export default AddButton