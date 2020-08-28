import React from 'react'
import 'rsuite/dist/styles/rsuite-default.css'
import './style.scss'

export default class App extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
        }
    }

    render () {
        return (
            <div>
                <h1>Hola pmbok.</h1>
            </div>
        )
    }
}
