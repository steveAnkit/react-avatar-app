import React, { Component } from 'react';
import './Avatar.css';
import 'tachyons';
import AvatarList from './AvataList';



class Avatar extends Component {

    constructor(){
        super();
        this.state = {
            name : "Welcome to Avatar Application!!!"
        }
    }

    nameChange (){
        this.setState({
            name : "You Have clicked on the subscribe button"
        } );
    }

    render(){

        const avatarArray = [

            {
               id : 1,
               "name" : "Tom",
               "work" : "Java Developer" 
            },
            {
                id : 2,
                "name" : "Dick",
                "work" : "Python Developer" 
             },
             {
                id : 3,
                "name" : "Harry",
                "work" : "PHP Developer" 
             },
             {
                id : 4,
                "name" : "Joseph",
                "work" : "C Developer" 
             }
    
        ]


        const avatarCards = avatarArray.map((cards , i) => 
        {
               return( <AvatarList id={avatarArray[i].id} 
                name={avatarArray[i].name} 
                work={avatarArray[i].work}  />);
                  
               
        })

        return(
            <div>
            <h1 className="tc">{this.state.name}</h1>
            {avatarCards}
            <button onClick= {() => this.nameChange()}>Subscribe</button>
            </div>
        );
            
        


    }

}


export default Avatar;