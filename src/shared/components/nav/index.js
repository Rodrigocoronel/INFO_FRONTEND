import React from 'react';
// import {Link, IndexLink} from 'react-router';
import {Link, NavLink} from 'react-router-dom';
import {Collapse} from 'reactstrap';


// icons
import IconDashboard from 'react-icons/lib/md/dashboard';
import IconFileTextO from 'react-icons/lib/fa/file-text-o';
import IconTable from 'react-icons/lib/fa/table';
import IconCreditCardAlt from 'react-icons/lib/fa/credit-card-alt';
import IconCog from 'react-icons/lib/fa/cog';
import IconDown from 'react-icons/lib/md/chevron-right';
import ScrollArea from '../scrollbar';

import './style.css';
import logo from  './logo.png';


const NavHead = (props) => (
    <header className="nav-head">
        <NavLink to="/">
            <figure className="figure-140">
                <strong>Info-fb</strong>
            </figure>
        </NavLink>
        {/*<div className={`toggle-dot ${props.mini ? 'active': ''}`} onClick={props.toggleNav}></div>*/}
    </header>
);

class NavList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        }
    }
    handleClick = (index, e) => {
        let c = e.currentTarget.className;
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            selected: this.state.selected === index ? '' : index
        })

        console.log(index);
    }
    handleOpen = (index, e) => {
        e.stopPropagation();
        this.setState({
            selected: index
        })
    }

    render() {
        return <ScrollArea className="nav-list-container" horizontal={false} verticalScrollbarStyle={{width: '4px', marginLeft: '10px'}}>
            <ul className="list-unstyled nav-list clearfix">
                <li><div className="nav-list-title">Menu</div></li>
                <li>
                    <NavLink exact to="/" activeClassName="active">
                        <IconDashboard size="18" className="icon-dashboard"/>
                        <span className="name">Dashboard</span>
                    </NavLink>
                </li>
              {/*  <li className={(this.state.selected === 6) ? 'selected': ''}>
                    <Link to="" onClick={this.handleClick.bind(this, 6)}>
                        <IconFileTextO size="18" />
                        <span className="name">Tickets</span>
                        <IconDown size="14" className="icon-down"/>
                    </Link>
                    <Collapse isOpen={(this.state.selected === 6) ? true : false} onClick={this.handleOpen.bind(this, 6)}>
                        <ul className="inner-drop list-unstyled">
                            <li><NavLink to="/old_tickets" activeClassName="active">Viejos</NavLink></li>
                            <li><NavLink replace to="/tickets" activeClassName="active">Nuevos</NavLink></li>
                        </ul>
                    </Collapse>
                </li>
               
                */}
               
            </ul>
        </ScrollArea>
    }
}




export default (props) => (
    <nav className={`site-nav ${props.mini ? 'mini' : ''}`}>
        <NavHead {...props}/>
            <NavList user={props.user}/>

    </nav>
);
