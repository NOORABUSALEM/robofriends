import React ,{Component} from 'react';
import  './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield : ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({ robots: users})});
    }

    onSearchChange = (event)=>{
        this.setState({searchfield:event.target.value});
    }
    render() {
        const {robots ,searchfield } = this.state;
        const filterdRobots = robots.filter(robots =>{
        return robots.name.toLowerCase ().includes(searchfield.toLowerCase());
        })
        return !robots.length?
            <h1>Loading</h1>:
            <div className='tc'>
                <h1 className='f1'>RobFriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filterdRobots}/>
                </Scroll> 
            </div>
    }
}

export default App ;