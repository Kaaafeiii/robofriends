import React , { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import { robots } from '../robots';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
} 
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (!robots.length) {
            return <h1>Loading</h1>
        } else {
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                 <CardList robots = {filteredRobots} />
                </Scroll>
            </div>
        );
        }
    }
}

export default App;