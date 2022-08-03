import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './home/Home'
import Nav from './components/Nav'


class App extends React.Component {

    render() {
        return (
            <div className='app'>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        {/* <Route path='/authError' component={authError} /> */}

                    </Switch>
                <div className="div">
                    
                </div>
                </Router>
            </div>
        )
    }
}

export default App
