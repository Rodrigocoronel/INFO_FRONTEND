import React from 'react';
import screenfull from 'screenfull';
import {
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Button, Progress
} from 'reactstrap';

// icons
import IconNotification from 'react-icons/lib/md/notifications-none';
import IconFullScreen from 'react-icons/lib/md/crop-free';
import IconMail from 'react-icons/lib/md/mail';
import IconLogout from 'react-icons/lib/md/power-settings-new';
import IconDownload from 'react-icons/lib/md/cloud-download';
import IconCake from 'react-icons/lib/md/cake';
import IconMenu from 'react-icons/lib/md/menu';

// style
import './style.css';
import profile from  './profile.jpg';

export default (props) => (
    <header className="site-head d-flex align-items-center justify-content-between">
        
        <div className="right-elems ml-auto d-flex">
            <div className="wrap hidden-sm-down">
                <IconFullScreen size="22" color="#fff" onClick={() => screenfull.toggle()}/>
            </div>
            {/*<div className="wrap notify hidden-sm-down">

                <UncontrolledDropdown>
                    <DropdownToggle tag="div">
                        <IconNotification size="22" color="#fff"/>
                        <span className="badge badge-danger">4</span>
                    </DropdownToggle>

                    <DropdownMenu right style={{minWidth: '18rem'}}>
                        <DropdownItem header>You have 4 new notifications</DropdownItem>
                        <DropdownItem divider/>
                        <DropdownItem className="mb-2">
                            <p>Server Upgrade Required</p>
                            <Progress value={70} color="danger" style={{height: '3px'}}/>
                        </DropdownItem>
                        <DropdownItem className="d-flex align-items-center">
                            <IconDownload size="28" className="text-success"/>
                            <div className="ml-3">
                                <div>5 App Downloaded</div>
                                <small className="text-muted">5 min ago</small>
                            </div>
                        </DropdownItem>
                        <DropdownItem className="d-flex align-items-center">
                            <IconMail size="28" className="text-warning"/>
                            <div className="ml-3">
                                <div>Roni sent you a message</div>
                                <small className="text-muted">2 hours ago</small>
                            </div>
                        </DropdownItem>
                        <DropdownItem className="d-flex align-items-center">
                            <IconCake size="28" className="text-primary"/>
                            <div className="ml-3">
                                <div>You're earned a badge</div>
                                 <small className="text-muted">12 hours ago</small>
                            </div>
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>*/}

            <div className="wrap profile">
                <UncontrolledDropdown>
                    <DropdownToggle tag="div">
                        {/*<img src="http://i.imgur.com/0rVeh4A.jpg" alt="avatar"/>*/}
                        <img src={profile} alt="user profile" />
                    </DropdownToggle>
                    <DropdownMenu right style={{minWidth: '12rem'}}>
                        <DropdownItem header>{props.user && props.user.name}</DropdownItem>
                        <DropdownItem divider/>
                        <div className="text-right ml-3 mr-3 mt-2">
                            <Button block color="success" size="sm" onClick={props.onClick}>
                                <IconLogout size="15"/>&emsp;Logout
                            </Button>
                        </div>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
            
        </div>
    </header>
);
