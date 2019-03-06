import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { Router, Route } from 'react-router-dom'
import PCApp from './views/pc'
import MobileApp from './views/mobile'
/*
* 解决react-router-dom@4+ 没有history
* recat-router-dom@2才会有hasHistory
* */
import createBrowserHistory from "history/createBrowserHistory";
const customHistory = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <div>
                <MediaQuery query='(min-device-width:1224px)'>
                    <Router history={customHistory}>
                        <Route exact path='/' component={PCApp} />
                    </Router>
                </MediaQuery>
                <MediaQuery query='(max-device-width:1224px)'>
                    <Router history={customHistory}>
                        <Route exact path='/' component={MobileApp} />
                    </Router>

                </MediaQuery>
            </div>
        );
    }
}

export default App;
