import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from './components/Navbar'
import Segmentation from './components/Segmentation'
import PhotoDetector from './components/PhotoDetector'
import HandPoseDetect from './components/HandPoseDetect';
import FaceLandMark from './components/FaceLandMark';

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
                        <Route path="/handpose" exact render={ routeProps => <HandPoseDetect {...routeProps}/>}/>
                        <Route path="/faceLandMark" exact render={ routeProps => <FaceLandMark {...routeProps}/>}/>
                </div>  
          </Router>    
        );
    }
}

export default App;