import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Demo.css'

class Demo extends Component {

    render(){

        return  <div className = "maindiv_style">
                <h1> Again yaar? </h1>
                <p>Welcome {this.props.name} to React App</p>
                </div>

    }    

}

export default Demo;