import React, {Component} from 'react';
import NewInventoryItem from '../components/NewInventoryItem.js';

class InventoryManagementContainer extends Component{
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