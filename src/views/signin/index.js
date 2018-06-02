import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import {Button} from 'reactstrap';

import * as actions from '../../actions/auth';
import FacebookLogin from 'react-facebook-login';

import loginbackground from '../../images/check.png';

class SignIn extends React.Component {

	constructor(props) {

		super(props)

		this.state = {
			email: '',
			password: ''
		};

		this._submit = this._submit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.responseFacebook = this.responseFacebook.bind(this);
	}

    componentDidMount()
    {
        //this.props.checktoken();
    }
	_submit(event) {

		event.preventDefault();
		
		let {email, password} = this.state;
		console.log("we are login");
		

		this.props.signin(email,password);

	}


	responseFacebook(evt){
		console.log(evt)
	}
	  
	

	handleInputChange(event) {
        const target    = event.target;
        const value     = target.type === 'checkbox' ? target.checked : target.value;
        const name      = target.name;

        this.setState({
            [name] : value
        });
    }

	render() {

		const { from } = this.props.location.state || { from: { pathname: "/app" } };

		if(this.props.auth.authenticated)
			return <Redirect to={from} />;

		return(
			<div style={styles.container}>
				<div style={styles.wrapper}>
					<div className="login-container">
						<div style={styles.loginForm}>
							<h4 style={styles.title}>SIGN IN</h4>
							<form onSubmit={this._submit}>
								<input style={styles.input} placeholder="Email" name="email" type="email" onChange={this.handleInputChange}/>
								<input style={styles.input} placeholder="Password" name="password" type="password"  onChange={this.handleInputChange}/>
								<button className="btn-maxicomm" type="submit">SIGN IN</button>
							</form>
						</div>
						<FacebookLogin
						    appId="1543242095975382"
						    autoLoad={true}
						    fields="name,email,picture"
						    scope="manage_pages"
						    callback={this.responseFacebook} />
					</div>
					<div style={styles.rightside}></div>
				</div>
			</div>
		)
	}

}

const styles = {

	container: {
		width: '100%',
		height: '100vh',
	},

	wrapper: {
		display: 'flex',
		height: '100%',
	},

	loginForm: {
		width: '60%'
	},

	title: {
		textAlign: 'center',
		fontSize: '27px',
		marginBottom: '2em'
	},

	input: {
		fontSize: '18px',
		display: 'block',
		width: '100%',
		padding: '6px 12px',
		borderRadius: '6px',
		border: 'solid 1px #ACACAC',
		color: '#ACACAC',
		marginBottom: '1.5em',
	},

	rightside: {
		flex: '1',
		backgroundImage: 'url('+loginbackground+')',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'right top',
	}

};

function mapStateToProps(state, ownProps) {
	return {
		auth: state.auth,
	}
};

export default connect(mapStateToProps, actions)(SignIn)

