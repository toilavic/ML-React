import React  from 'react';
import {Link} from "react-router-dom";

export default class Navbar extends React.Component {  
  
    render() {
        return (
            <div>
              {/* Navigation*/}
              <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">
                  <Link to="/" className="navbar-brand js-scroll-trigger"><b className="navbar-items">Vic</b></Link>
                  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item"><Link to="/segmentation" className="nav-link js-scroll-trigger nav-items"><b className="navbar-items">Body Segmentation</b></Link></li>
                      <li className="nav-item"><Link to="/photodetect" className="nav-link js-scroll-trigger nav-items"><b className="navbar-items">Photo detector</b></Link></li>
                      <li className="nav-item"><Link to="/handpose" className="nav-link js-scroll-trigger nav-items"><b className="navbar-items">Hand Pose Detect</b></Link></li>
                      <li className="nav-item"><Link to="/faceLandMark" className="nav-link js-scroll-trigger nav-items"><b className="navbar-items">Face Landmark Detect</b></Link></li>
                    </ul>
                  </div>
                </div>
              </nav>
              
             </div>
          );
    }
}