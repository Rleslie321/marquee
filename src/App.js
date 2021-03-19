// app component for rendering all of the content for all of our pages

import React, {Component} from 'react';
import Navbar from './Components/Navbar';
import {Redirect, Route, Switch} from 'react-router-dom';

import Error from './Components/Error';
import content from './content.json';
import Marquee from './Components/Marquee';


class App extends Component{
    constructor(){
        super();
        this.state = {
            content
        }
    }

    render(){
        return(
            <>  
                {/* layout for every page of our website */}
                <div className="layout">
                    <div className="nav-container">
                        <img src="abc_logo.svg" className="logo" alt="logo"></img>
                        <Navbar content={this.state.content}/>
                    </div>

                    <button className="contact">Contact Us</button>
                </div>
                
                {/* router that creates a marquee for every link in our content.json */}
                <main>
                    <Switch>

                        {/* would remove this if / was provided in the content.json */}
                        <Route exact path="/">
                            <Redirect to="/services"/>
                        </Route>

                        {this.state.content.pages.map((item, index) => {
                            return <Route key={index} path={`/${item.slug}`} render={(props) => (
                                        <Marquee {...props} blocks={item.blocks[0]} />
                                    )}/>
                        })}

                        {/* handle bad urls */}
                        <Route component={Error} />
                    </Switch>
                </main>
            </> 
        );
    }
}

export default App;