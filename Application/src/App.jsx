import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './home/Home'
import Nav from './components/Nav'
import Feeds from './feeds/Feeds'
import CreatePost from './feeds/CreatePost'


class App extends React.Component {

    render() {
        return (
            <div className='app'>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route  path='/feeds' component={Feeds} />
                        <Route  path='/newPost' component={CreatePost} />

                    </Switch>
                <div className="div">
                    
                </div>
                </Router>
            </div>
        )
    }
}

export default App
