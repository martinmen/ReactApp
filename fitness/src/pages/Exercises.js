import React from 'react'
import ExerciseList from '../components/ExerciseList'
import Welcome from '../components/Welcome'
import AddButtom from '../components/AddButton'

class Exercises extends React.Component{
 state = {
    data:[]
    }

   async componentDidMount(){
            await this.fetchExercises()
    }

fetchExercises = async () =>{
    let res = await fetch('http://localhost:8080/api/exercises')
    let data = await res.json()
    console.log(data)
    this.setState({
        data
    })
}


render(){
    return(
        <div>
        <Welcome 
        username="Martin" 
        />
        <ExerciseList
        exercises = {this.state.data}
        />
        <AddButtom
        />
    </div>
        )
}

}
export default Exercises;