import React from 'react';
import './Avatar.css';
import 'tachyons';


const AvatarList = (props) => {

    return (

        <div className="maindiv_style ma4 bg-light-blue dib pa4 grow shadow-4 tc">
        <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="avatar"/>
        <h1>{props.name}</h1>
        <p>{props.work}</p>
        </div>


    );
}

export default AvatarList;