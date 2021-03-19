// component to render the changing content of page

import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

class Marquee extends Component{

    // set backgroundimage given image from content, could replace with external image link
    // considered replacing with css class but would need to manually create each class with image and different sized image
    // using this method for different sized images would require checking the size of the screen
    componentDidMount(){
        document.body.style.backgroundImage = `url(${process.env.PUBLIC_URL}/backgrounds/${this.props.blocks.background})`;
    }

    componentWillUnmount(){
        document.body.style.backgroundImage = null;
    }

    render(){
        
        
        return(
            <div className="marquee">
                {/* header section */}
                <div className="headers">
                    <h1 className="headline">{this.props.blocks.headline}</h1>
                    <p className="subhead">{this.props.blocks.subhead}</p>
                </div>
                {/* call to action section */}
                <div className="cta">
                    <h2 className="cta-text">{this.props.blocks.cta}</h2>
                    <button className="connect">Let's Talk.  <FontAwesomeIcon icon={faArrowRight} className="arrow"/></button>
                </div>
            </div>
        )
    }
}

export default Marquee;