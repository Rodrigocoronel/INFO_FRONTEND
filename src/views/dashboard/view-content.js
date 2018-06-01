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

import 'ammap3/ammap/ammap.js';
import 'ammap3/ammap/maps/js/continentsLow.js';
import 'ammap3/ammap/maps/js/san.js';
import Mapa from'ammap3/ammap/maps/js/worldHigh.js';

const paginas=
            [           
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

        return(
            <CardGroup className="sales-card mb-4">
                <Card style={{'flex': '3 0 0'}}>
                    <CardBlock>
                        <CardTitle className="text-uppercase h6">{this.state.title}</CardTitle>
                        <div className="small mb-4 card-subtitle"></div>
                        <div style={{width: '100%', height: '280px'}}>
                            <ResponsiveContainer>
                                <BarChart width={730} height={250} data={this.state.data}>
                                  <CartesianGrid strokeDasharray="3 3" />
                                  <XAxis dataKey="name" />
                                  <YAxis />                                  
                                  <Tooltip/>                            
                                   
                                  <Legend />
                                  <Bar dataKey="Me Gusta" fill='#0A22E0'  minPointSize={1} />
                                   <Bar dataKey="Me Encanta" fill='#E00AB8'  minPointSize={1} />
                                    <Bar dataKey="Me Enoja" fill='#E00A0A'  minPointSize={1} />
                                   <Bar dataKey="Me Entristece" fill='#E0850A'  minPointSize={1} />
                                    <Bar dataKey="Me Divierte" fill='#E0E00A'  minPointSize={1} />
                                   <Bar dataKey="Me Asombra" fill='#31E00A'  minPointSize={1} />
                                   
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
            long : -117.043863,
            lat : 32.493699,
            zoom : 13,
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
    }

    componentDidMount() {

        let urlfb = 'https://graph.facebook.com/v3.0/me';
        let token = 'EAACEdEose0cBAKqi9EZA1pZALeEJkRAbFZCZBksO1cqQE1DFd4T46I4Vv34OZB8ZBL2aAoyHkBum0cQk9PqXaLE8W5rIA9gVDVBN7zFTi4CMeuVlTuf5JmBYA3G1Ef0F8IQixUVZBpjtTGtFIKWZAzCdhNqcB9nARjx65jkgVZAkkySKGx0aMiGQyiSZAx9WDh6iBpikF8GFmEewZDZD';
        let consulta = '?fields=accounts%7Bname%2Caccess_token%7D&access_token=';
        let paginas = [];
        axios.get(urlfb+consulta+token)
        .then(response => {
             response.data.accounts.data.some(function(obj) {

                    console.log(obj)
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
        console.log(select)
        this.setState({
            paginas: {
                ...this.state.paginas,
                [name]: value,
                ['access_token']  : select.token
            }
        });
        console.log(value)
        let urlfb = 'https://graph.facebook.com/v3.0/me?fields=feed&access_token=';

        axios.get(urlfb+select.token)
        .then(response => {
            console.log(response)
             response.data.feed.data.some(function(obj) {

                    console.log(obj)
                    // paginas.push({
                        
                    //     value : obj.id,
                    //     label : obj.name,
                    //     token : obj.access_token,


                    // });
                                     
                });

            });

        switch(value){
            case "1":
                this.setState({
                    lat : 32.493699,
                    long : -116.959654,
                    zoom : 12,
                });
            break;

            case "2":
                this.setState({
                    lat : 32.619812,
                    long : -115.456473,
                    zoom : 12
                });
                console.log(this.state.lat)
                console.log(this.state.long)
            break; 
            case "3":
                this.setState({
                    lat : 32.461746,
                    long : -117.043863,
                    zoom : 12
                });
            break;

            case "4":
                this.setState({
                    lat : 32.155425,
                    long : -116.133693,
                    zoom : 8
                });
            break;
            case '5':
                this.setState({
                    lat : 32.493699,
                    long : -116.959654,
                    zoom : 12,
                });

            break;

            case '6':
                this.setState({
                    lat : 31.865930,
                    long : -116.597069,
                    zoom : 13
                });
            break;

            case '7':
                this.setState({
                    lat : 32.619812,
                    long : -115.456473,
                    zoom : 12
                });
            break;
        }



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
        console.log('nuevas')
        console.log(this.state.lat)
        console.log(this.state.long)

        return(
            <div className="view ">
                <div className="view-header">
                    <header className="title text-white">
                        <h1 className="h4 text-uppercase">Dashboard</h1>
                    </header>
                </div>
                <div className="view-content view-components mt-4 ">         
                   
                <div className="row">
                    <div className="col-sm-4 ">
                        <div className="row">
                            <div className="col-md-12">
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
                                    <ReactTable
                                      data      = {[]}
                                      className = "-striped -highlight"
                                      columns   = {[
                                       
                                        {Header: 'Publicacion', accessor: 'label' , maxWidth: 220},
                                        {
                                            Header: 'Controles',
                                            filterable: false,
                                            sortable: false,
                                            maxWidth: 80,
                                            Cell: (row) =>
                                            {
                                                return(
                                                    <div className="text-right">
                                                        <Button
                                                         color="success" 
                                                         className="btn-sm" 
                                                         onClick={(evt)=>this.toggle(evt, row.original.value, 'Editar Cliente')}>
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
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <Map lat={this.state.lat} long={this.state.long} zoom={this.state.zoom}/>
                    </div>
                     
                </div>
                <br/><br/>
                <div className="row">
                    <div className="col-4"></div>

                    <div className="col-8">
                        <div className="push-right">
                            <ProspectsPer/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
