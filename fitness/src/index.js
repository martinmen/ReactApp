// const element = document.createElement('h1')
// element.innerText = 'Hello React..'
// const container = document.getElementById('root')
// container.appendChild(element)
// https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-256.png
import React from 'react'
import ReactDOM from 'react-dom'
import Card from './components/Card'
import 'bootstrap/dist/css/bootstrap.css'

const container = document.getElementById('root')

ReactDOM.render(<Card
                    title="Mi titulo"
                    description="Mi descripcion"
                    img="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06"
                    leftColor="#A74CF2"
                    rightColor="#617BFB"
                />, container)