import React, { Component } from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import { robots } from './robots';

class App extends Component{
    constructor(){
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange(event) {
        console.log(event);
    } 

    render()
    {
    return (
        <div className='tc'>
        <h1>RoboFiends</h1>
        <SearchBox searchChange={this.onSearchChange}></SearchBox>
        <CardList robots={this.state.robots}></CardList>
        </div>       
    );
    }

}

export default App;