import React from 'react';
import axios from 'axios';
import { Button} from 'reactstrap';
import ReactSVG from 'react-svg';

 export default class Axios extends React.Component{

 	constructor(props){
 		super(props);

 		this.state={
 			response : []
 		}
 	}

 	send(){

 		let query ="1145207905522688?fields=accounts"

 		let appid = '145634995501895';

 		//let query = "1101573426652324_1124583207684679?fields=reactions.type(LIKE).limit(0).summary(total_count).as(LIKE),reactions.type(LOVE).limit(0).summary(total_count).as(LOVE),reactions.type(SAD).limit(0).summary(total_count).as(SAD),reactions.type(WOW).limit(0).summary(total_count).as(WOW),reactions.type(ANGRY).limit(0).summary(total_count).as(ANGRY),reactions.type(HAHA).limit(0).summary(total_count).as(HAHA)"
 		//let token = "https://graph.facebook.com/v3.0/1101573426652324_1139300619546271?fields=reactions.type(LIKE).limit(0).summary(total_count).as(LIKE)%2Creactions.type(LOVE).limit(0).summary(total_count).as(LOVE)%2Creactions.type(SAD).limit(0).summary(total_count).as(SAD)%2Creactions.type(WOW).limit(0).summary(total_count).as(WOW)%2Creactions.type(ANGRY).limit(0).summary(total_count).as(ANGRY)%2Creactions.type(HAHA).limit(0).summary(total_count).as(HAHA)&access_token=EAACEdEose0cBACZBJfkSwIhmKQ05aZB5HWd3OFlSfpfNjTvZAMinZB27GrYMtnmBdDhofGCZBvEoKntx0wpvxbEDxMUbPeDGgXANbxqP3GJXPw8i51oqE1jQUOAZBTZC2IJqre5ZC345EDZAb99uAcqy5bHBsimaKesHuDd1F60AzWAwbZApiHpQEF2l2a45QOw3Kq6gk2CCgYmwZDZD"
 		console.log("mamadas");
 		axios.get('https://graph.facebook.com/v3.0/'+query/*+'&access_token='+token*/)
		.then(response => {
		     console.log(response)
		})
 	}

 	render(){
 		return(
 			<div>
 				<div>
 					<ReactSVG
					    path="/vectorpaint.svg"
					    onInjected={svg => {
					      console.log('onInjected', svg)
					    }}
					    svgClassName="svg-class-name"
					    className="wrapper-class-name"
					    onClick={() => {
					      console.log('wrapper onClick')
					    }}
					  />
 				</div>
 				<Button onClick={this.send}></Button>
 			</div>
 			)
 	}
 }

 //curl -i -X GET \
 //"https://graph.facebook.com/v3.0/me/feed?access_token=EAACEdEose0cBAI11TZCnLJCpuwOq7TQk7LzMMuJm18U7O6ZB2AZBYEU2DvsKVccFaeFKspQ0F3YIUHa8HBkZABZAlmZBRmbtHbYNETe0GOQrrvLHVUBN1oAinPNZCjuoRbEfE1oVF4cXx6oUAC13dYWyTinPMj4ZAIPzvwEjbgWRMZCmlKTfDaluzdxyc5FjDSgkZD"