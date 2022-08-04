import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './home/Home'
import Nav from './components/Nav'
import Feeds from './feeds/Feeds'
import Profile from './profile/Profile'
import CreatePost from './feeds/CreatePost'


class App extends React.Component {

    render() {
        return (
            <div className='app'>
                <Router>
                    <div className="nav">
                        <Nav />
                    </div>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/feeds' component={Feeds} />
                        <Route path='/newPost' component={CreatePost} />
                        <Route path='/profile' component={Profile} />

                    </Switch>

                </Router>
            </div>
        )
    }
}

export default App
