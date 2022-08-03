import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import LogIn from '../auth/Login'
import Register from '../auth/Register'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showLogIn: true
        }

        this.onSignInClick = this.onSignInClick.bind(this)
        this.onLogInClick = this.onLogInClick.bind(this)
    }

    onSignInClick = () => {
        this.setState({showLogIn: false})
    }

    onLogInClick = () => {
        this.setState({showLogIn: true})
    }

    render() {
        return (
            <>
                <ButtonGroup size="lg" className="main-btns" aria-label="Basic example">
                    <Button className={this.state.showLogIn ? "active-btn": ""} onClick={this.onLogInClick} 
                        style = {{margin: 5, height:50, width: 300}} > מעבר להתחברות </Button>
                    <Button className={!this.state.showLogIn ? "active-btn": ""} onClick={this.onSignInClick}
                        style = {{margin: 5, height:50, width: 300}} > מעבר להרשמה </Button>
                </ButtonGroup>
                {this.state.showLogIn ? <LogIn/> : <Register/>}
           
            </>
        );
    };
};

export default Home