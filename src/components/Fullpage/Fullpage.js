import React from "react";
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";

import Home from '../../pages/Home';

import './styles.css'

class Fullpage extends React.Component {
    render() {
        return (
            <>
                <ReactFullpage
                    id="asda"
                    scrollOverflow={true}
                    scrollingSpeed={1500}
                    scrollHorizontally={true}
                    navigation
                    navigation
                    render={({ state, fullpageApi }) => {
                        return (
                            <ReactFullpage.Wrapper>
                                <div id="home" className="section section1">
                                    <Home>home</Home>
                                </div>
                                <div id="about" className="section section1">
                                    <Home>About</Home>
                                </div>
                                <div id="contact" className="section">
                                    <h3>Contact</h3>
                                    <button onClick={() => fullpageApi.moveTo(1, 0)}>
                                        Move top
                                </button>
                                </div>
                            </ReactFullpage.Wrapper>
                        );
                    }}
                />
            </>
        );
    }
}

export default Fullpage;
