import React from 'react'
import CardList from '../components/CardList'
//import {robots} from './robots'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css'


class App extends React.Component{
    constructor(){
        super();
        this.state = {
            robots : [],
            searchField : ''
        }
        console.log('1');
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>this.setState({robots:users}));
    }

    onSearchChange=(event)=>{
        this.setState({
            searchField : event.target.value
        })  
    }

    render(){
        const {robots,searchField} = this.state;
        const filterRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return !robots.length ? <h1>Loading</h1> : 
         (
                <div className="tc">  
                <h1 className="f1">Robots Friends</h1>
            
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                <CardList robots = {filterRobots}/>
                </Scroll>
                </div>
        );
    } 
    
}

export default App;
