import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './home/Home'
import Nav from './components/Nav'
import Feeds from './feeds/Feeds'


class App extends React.Component {

    render() {
        return (
            <div className='app'>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        {/* <Route path='/authError' component={authError} /> */}
                        <Route  path='/feeds' component={Feeds} />

                    </Switch>
                <div className="div">
                    <Nav />
                </div>
                </Router>
            </div>
        )
    }
}

export default App
