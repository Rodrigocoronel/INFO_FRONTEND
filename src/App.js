import React from 'react';
import { connect } from 'react-redux';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import Nav from './shared/components/nav';
import SiteHead from './shared/components/header';

import Dashboard from './views/dashboard';

import Page404 from './views/errors/404';

import User from './views/user';

import * as actions from './actions/auth';

import './app.css';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            navMini : false,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        let { authenticated } = this.props.auth;

        if(authenticated) {
            this.props.whoiam();
        }
    }

    toggleNav = (e) => {
        e.preventDefault();
        this.setState({navMini: !this.state.navMini});
    }

    hideNav = (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.setState({navMini: false})
    }

    handleClick() {
        this.props.signout();
    }

    render() {

        let navMini = this.state.navMini;

        let {authenticated, user} = this.props.auth;
        console.log(user)
        if(!authenticated)
            return (<Redirect to={{pathname: '/'}} />);

        return (
            <HashRouter basename='app'>
                <div className="app-wrapper">

                    <Nav mini={navMini} toggleNav={this.toggleNav} />

                    <div className={`content-container ${navMini ? 'full' : ''}`}>
                       
                        <div 
                         className="menu-dropshadow" 
                         style={{display: (navMini ? 'block': 'none')}} 
                         onClick={this.hideNav}></div>
                        
                        <SiteHead toggleNav={this.toggleNav} onClick={this.handleClick} user={user} />

                        <Switch>
                            <Route exact path="/" component={Dashboard} />
                            <Route path="/usuarios" component={User} />
                            <Route component={Page404} />
                            
                        </Switch>

                    </div>

                </div>
            </HashRouter>
        );

    }
};

function mapStateToProps(state, ownProps) {
    return {
        auth : state.auth
    }
}

export default connect(mapStateToProps, actions)(App);
