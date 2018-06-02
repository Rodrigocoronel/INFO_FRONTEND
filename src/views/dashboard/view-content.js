 import React, { Component } from 'react';
import {
    AreaChart, Area,
    PieChart, Pie,
    XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, Sector,
    ResponsiveContainer,BarChart,Bar
} from 'recharts';
import {
    CardGroup, Card, CardBlock, CardTitle, Row, Button
} from 'reactstrap';

import ReactTable from "react-table";
import "react-table/react-table.css";

import {Link} from 'react-router-dom';
import {api} from '../../actions/_request.js';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

// icons
import IconDollar from 'react-icons/lib/fa/dollar';
import IconTrendUp from 'react-icons/lib/md/trending-up';
import IconCardTravel from 'react-icons/lib/md/card-travel';
import IconDot from 'react-icons/lib/md/fiber-manual-record';
import IconEdit from 'react-icons/lib/md/edit';

import Map from '../../components/maps';

import axios from 'axios';

/*Mapa Republica*/



import ReactDOM from 'react-dom';
import AmCharts from '@amcharts/amcharts3-react';

// import 'ammap3/ammap/ammap.js';
// import 'ammap3/ammap/maps/js/continentsLow.js';
// import 'ammap3/ammap/maps/js/san.js';
// import Mapa from'ammap3/ammap/maps/js/worldHigh.js';

const paginas=[           
            { value:"1",label:"Viancca Barreto"},
            { value:"2",label:"Celestino Salcedo Flores"},
            { value:"3",label:"Mario Madrigal"},
            { value:"4",label:"Adriana Lopez Quintero"},
            { value:"5",label:"Erika Santana"},
            { value:"6",label:"Génesis Márquez Rubalcava"},
            { value:"7",label:"Lauro Aréstegui"}
];

class ProspectsPer extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            data: [
            {
                "name":"Publicacion",
                "Me Encanta":1000,
                "Me Enoja":300,
                "Me Entristece":10,
                "Me Divierte":100,
                "Me Asombra":35,
                "Me Gusta":5000,

            },
            ],
            publicaciones:
            [

            ],
            lvl: 1,
            title: "Reacciones por Publicacion ",
            pagina_id:0,
        }; 

        
        this.iniciar = this.iniciar.bind(this);

    }

    componentDidMount() {

        this.iniciar();
   

    }



    iniciar()
    {
        // let self = this;

        // api()
        //     .get('api/dashboard/casillas_distrito/7')
        //     .then(function(response)
        //     {
        //         if(response.status === 200)
        //         {
        //             self.setState({
        //                 data: response.data,
        //                 title: 'Casillas por Municipio'
        //             });
                       
        //         }

        //     })
        //     .catch(function(error)
        //     {
            
        //     });
    }

   

    render() {
            // console.log(this.props.count)
        return(
            <CardGroup className="sales-card mb-4">
                <Card style={{'flex': '3 0 0'}}>
                    <CardBlock>
                        <CardTitle className="text-uppercase h6">{this.state.title}</CardTitle>
                        <div className="small mb-4 card-subtitle"></div>
                        <div style={{width: '100%', height: '280px'}}>
                            <ResponsiveContainer>
                                <BarChart width={730} height={250} data={this.props.count}>
                                  <CartesianGrid strokeDasharray="3 3" />
                                  <XAxis dataKey="name" />
                                  <YAxis />                                  
                                  <Tooltip/>                            
                                   
                                  <Legend />
                                  <Bar dataKey="like" fill='#0A22E0'  minPointSize={1} />
                                   <Bar dataKey="haha" fill='#E00AB8'  minPointSize={1} />
                                    <Bar dataKey="angry" fill='#E00A0A'  minPointSize={1} />
                                   <Bar dataKey="love" fill='#E0850A'  minPointSize={1} />
                                    <Bar dataKey="wow" fill='#E0E00A'  minPointSize={1} />
                                   <Bar dataKey="sad" fill='#31E00A'  minPointSize={1} />
                                   
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardBlock>
                </Card>
            </CardGroup>
        );
    }

}


export default class Content extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            reacciones : [],
            page: '',
            publicaciones : [],
            long : -117.043863,
            lat : 32.493699,
            zoom : 13,
            population: 0,
            paginas:{
                pag_id : '', 
                access_token : '',
            },
            pagina : [],
            mapconfig: {
                type: "map",
                theme: "dark",
                areasSettings: {
                    autoZoom: false,
                    alpha: 0.8,
                    unlistedAreasAlpha: 0.1,
                    rollOverColor: "#9a7bca"
                },
                dataProvider: {
                    "map": "mexicoLow",
            "areas": [ 
             {
          "id":"Layer_7",
          
          "color": "#0A22E0",

        },
        {
          "id":"Layer_8",
          
           "color": "#0A22E0"

        },
        {
          "id":"Layer_6",          
          "color": "#0A22E0",

        },
        {
          "id":"Layer_5",
       
           "color": "#0A22E0"

        },
         {
          "id":"Layer_4",
       
           "color": "#0A22E0"

        },
        {
          "id":"Layer_3",
          
          "color": "#0A22E0",

        },
        {
          "id":"Layer_2",
         
           "color": "#0A22E0"

        }
               
            ]// fin de areas

                },//fin del dataProvider
                legend: {
    "width": "100%",
    "marginRight": 27,
    "marginLeft": 27,
    "equalWidths": false,
    "backgroundAlpha": 1,
    "backgroundColor": "#000000",
    "borderColor": "#000000",
    "color":"#ffffff",
    "borderAlpha": 0.4,
    "top": 463,
    "left": 0,
    "horizontalGap": 10,
    "data": [ {
      "title": "Likes",
      "color": "#0A22E0"
    }, {
      "title": "Me Encanta",
      "color": "#E00AB8"
    }, {
      "title": "Me Enoja",
      "color": "#E00A0A"
    } ,
    {
      "title": "Me Entristece",
      "color": "#E0850A"
    }, {
      "title": "Me Divierte",
      "color": "#E0E00A"
    }, {
      "title": "Me Asombra",
      "color": "#31E00A"
    }]
  }//fin del legend
            }//fin del mapconfig
        
        
        };//fin del state
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.publicaciones = this.publicaciones.bind(this);
    }

    componentDidMount() {

        let urlfb = 'https://graph.facebook.com/v3.0/me';
        let token = 'EAACEdEose0cBAJIN0ZBf2VGslW0OlJ9Xuj0uPLV6ZADZAM9WxCCaxczxJjVrWtUnSwvYdq0RUCMOERk3jUrwvbqwXSf8OSyNTe4ld3Ho8Qkz8eZCHRdmMWQ9kITWZBZCxWYImBfBflw3juZAqRnT0ny5TZBlKrWxE3R5blOYQ8D3fKENaqeRpAOFjxnnWV86cJlcBfxT06DfAQZDZD';
        let consulta = '?fields=accounts%7Bname%2Caccess_token%7D&access_token=';
        let paginas = [];
        axios.get(urlfb+consulta+token)
        .then(response => {
             response.data.accounts.data.some(function(obj) {
                    paginas.push({
                        
                        value : obj.id,
                        label : obj.name,
                        token : obj.access_token,


                    });
                                     
                });

            });   

        this.setState({
            pagina : paginas,
        }); 
    

    }

    handleSelectChange(select, name) {

        const value = select === null ? null : select.value;
        // console.log(select)
        let publicaciones=[];
        let self = this;
        this.setState({
            paginas: {
                ...this.state.paginas,
                [name]: value,
                ['access_token']  : select.token
            }
        });
        // console.log(value)
        let urlfb = 'https://graph.facebook.com/v3.0/me?fields=feed&access_token=';

        axios.get(urlfb+select.token)
        .then(response => {
            // console.log(response)
             response.data.feed.data.some(function(obj) {
                    publicaciones.push({
                        
                        value : obj.id,
                        label : obj.message,
                        token : obj.access_token,


                    });

                    self.setState({
                        publicaciones : publicaciones,
                    }); 
                                     
                });


            });
        

        this.setState({'page': value});

        // switch(value){

            // bianca tijuana
            // case "1627463167374165":
            //     this.setState({
            //         lat : 32.493699,
            //         long : -116.959654,
            //         zoom : 10,
            //         population: 5000,
            //     });
            // break;

            // case "1670414819732611":
            //     this.setState({
            //         lat : 32.619812,
            //         long : -115.456473,
            //         zoom : 12
            //     });
            // break;

            // madrigal
            // 32.476312,-117.0614007,17
            // case "411052376013391":
            //     this.setState({
            //         lat : 32.476312,
            //         long : -117.0614007,
            //         zoom : 11,
            //         population: 3000,

            //     });
            // break;

            // adriana lopez
            // case "1277594875598974":
            //     this.setState({
            //         lat : 32.155425,
            //         long : -116.133693,
            //         zoom : 8,
            //         population: 350000,
            //     });
            // break;

            // erika santan tijuana
            // case '496428537221963':
            //     this.setState({
            //         lat : 32.493699,
            //         long : -116.959654,
            //         zoom : 10,
            //         population: 5000,
            //     });

            // break;

            // genesis
            // case '351741994978553':
            //     this.setState({
            //         lat : 31.865930,
            //         long : -116.597069,
            //         zoom : 13,
            //         population: 1500,
            //     });
            // break;

            // lauro
            // case '242601132597540':
            //     this.setState({
            //         lat : 32.619812,
            //         long : -115.456473,
            //         zoom : 12,
            //         population: 3000,
            //     });
            // break;
        // }

        // console.log("-->", value)
        // console.log("-->", this.state.lat)
        // console.log("-->", this.state.long)
        // console.log("-->", this.state.population)

    }

    publicaciones(evt, idPublicacion , index){
        evt.preventDefault();
        let {paginas} = this.state;
        let reacciones = [];
        let self = this;
        let query = "?fields=reactions.type(LIKE).limit(0).summary(total_count).as(LIKE)%2Creactions.type(LOVE).limit(0).summary(total_count).as(LOVE)%2Creactions.type(SAD).limit(0).summary(total_count).as(SAD)%2Creactions.type(WOW).limit(0).summary(total_count).as(WOW)%2Creactions.type(ANGRY).limit(0).summary(total_count).as(ANGRY)%2Creactions.type(HAHA).limit(0).summary(total_count).as(HAHA)";
        let url_fb = "https://graph.facebook.com/v3.0/"
        let access_token = "&access_token="+paginas.access_token;
        // console.log(idPublicacion)
        // console.log(index)
        
        axios.get(url_fb+idPublicacion+query+access_token)
        .then(response => {
            // console.log(response.data.ANGRY.summary.total_count)
            reacciones.push({
                
                angry : response.data.ANGRY.summary.total_count,
                haha : response.data.HAHA.summary.total_count,
                love : response.data.LOVE.summary.total_count,
                like : response.data.LIKE.summary.total_count,
                sad : response.data.SAD.summary.total_count,
                wow : response.data.WOW.summary.total_count,


            });

            self.setState({
                reacciones : reacciones,
            }); 
                                     
            


            });

    }

// <div className="col-sm-8 fondo_oscuro_mapa">
//                         <AmCharts.React
//                                 ref="reactmap"
//                                 style={{  width: "100%",  height: "500px"  }}
//                                 options={this.state.mapconfig}
//                             />   
//                     </div>
    render() {

        const style = {
          width: '600px',
          height: '400px'
        };

        console.log(this.state.page);

        return(
            <div className="view ">
                <div className="view-header">
                    <header className="title text-white">
                        <h1 className="h4 text-uppercase">Dashboard</h1>
                    </header>
                </div>
                <div className="view-content view-components mt-4 ">         
                   
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label >Paginas:</label>
                            <Select
                                placeholder=""
                                type="text"
                                name="pag_id"
                                options={this.state.pagina}
                                value={this.state.paginas.pag_id}
                                onChange={ (select) => { this.handleSelectChange(select, 'pag_id') } } 
                                clearable={false}
                            />
                            <br/><br/>
                        </div>
                    </div>
                    <div className="col-md-8">
                    <ReactTable
                              data      = {this.state.publicaciones}
                              className = "-striped -highlight"
                              columns   = {[
                               
                                {Header: 'Publicacion', accessor: 'label' },
                                {
                                    Header: 'Controles',
                                    filterable: false,
                                    sortable: false,
                                   
                                    Cell: (row) =>
                                    {
                                        return(
                                            <div className="text-right">
                                                <Button
                                                 color="success" 
                                                 className="btn-sm" 
                                                 onClick={(evt)=>this.publicaciones(evt, row.original.value,row.index)}>
                                                    <IconEdit />
                                                </Button>{' '}
                                                 
                                            </div>
                                        )
                                    }
                                }
                              
                              ]}
                              filterable 
                              defaultPageSize={5}
                              pageSizeOptions={[5]}
                            />
                    </div>
                </div>
                <br/><br/>

            </div>
            <Card>
                <CardBlock>
                    <div className="row">
                        <div className="col-6">
                            <Map page={this.state.page} />
                        </div>

                        <div className="col-6">
                            <div className="push-right">
                            <br/>
                                <ProspectsPer count={this.state.reacciones}/>
                            </div>
                        </div>
                    </div>
                </CardBlock>
            </Card>
        </div>
        )
    }
}
