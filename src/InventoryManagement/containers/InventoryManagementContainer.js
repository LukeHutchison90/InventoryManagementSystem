import React, {Component} from 'react';
import NewInventoryItem from '../components/NewInventoryItem.js';

class InventoryManagementContainer extends Component{

    constructor(props){
        super(props)
        this.state = {

        }
    }
    //logic here

    
    //render here
    render(){
        return(
            <div>
                <p> "Hello InventoryManagementContainer!" </p>
                <NewInventoryItem/>
            </div>
        )
    }
}

export default InventoryManagementContainer