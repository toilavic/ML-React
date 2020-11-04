import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from './components/Navbar'
import Segmentation from './components/Segmentation'
import PhotoDetector from './components/PhotoDetector'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }
    
 
    render() {
        return ( 
          
          <Router>
            <Navbar/>
                <div>
                        <Route path="/segmentation" exact render={ routeProps => <Segmentation {...routeProps}/>}/>
                        <Route path="/photodetect" exact render={ routeProps => <PhotoDetector {...routeProps}/>}/>
                </div>  
          </Router>    
        );
    }
}

export default App;