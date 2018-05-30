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

import {Link} from 'react-router-dom';
import {api} from '../../actions/_request.js';

// icons
import IconDollar from 'react-icons/lib/fa/dollar';
import IconTrendUp from 'react-icons/lib/md/trending-up';
// import IconLevelUp from 'react-icons/lib/fa/level-up';
// import IconLevelDown from 'react-icons/lib/fa/level-down';
// import IconAndroid from 'react-icons/lib/fa/android';
import IconCardTravel from 'react-icons/lib/md/card-travel';
// import IconDvr from 'react-icons/lib/md/dvr';
// import IconBalance from 'react-icons/lib/md/account-balance';
import IconDot from 'react-icons/lib/md/fiber-manual-record';

/*Mapa Republica*/



import ReactDOM from 'react-dom';
import AmCharts from '@amcharts/amcharts3-react';

import 'ammap3/ammap/ammap.js';
import 'ammap3/ammap/maps/js/continentsLow.js';
import 'ammap3/ammap/maps/js/san.js';
import Mapa from'ammap3/ammap/maps/js/worldHigh.js';



/*const TicketsMonth = ({data}) => (
    <ResponsiveContainer>
        <AreaChart data={data} margin={{top: 10, right: 10, left: -15, bottom: 0}}>
            <XAxis dataKey="month" axisLine={false} fontSize={10} tickLine={false} padding={{left: 0, right: 5}}/>
            <YAxis fontSize={10} axisLine={false} tickLine={false}/>
            <CartesianGrid stroke="#eee" vertical={false}/>
            <Tooltip wrapperStyle={{borderColor: '#eee'}}/>
            <Legend />
            <Area type='monotone' dataKey='total' stackId="1" strokeWidth={2} stroke="#448AFF" fill='#448AFF' fillOpacity=".8"/>
        </AreaChart>
    </ResponsiveContainer>
);

const TicketsTable = ({data}) => (
    <table className="table">

        <tbody>
            {data.map((item, i) => <tr key={i}>
                <td className="d-flex flex-column">
                    <strong>{item.No}</strong>
                    <small>{item.Fecha}</small>
                </td>
                <td className="align-middle">{item.cliente}</td>
                <td className="align-middle text-nowrap">
                    <IconDot size="12" color={item.estatus === 'Inicial' ? '#00c853'
                                              : item.estatus === 'Proceso' ? '#ffbf00'
                                              : item.estatus === 'Finalizado' ? '#2962ff'
                                              : '#ff1f1f'}/>&nbsp;{item.estatus}
                </td>
            </tr>)}
        </tbody>
    </table>
);*/
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
            paginas:
            [           
            { value:"1627463167374165",label:"Viancca Barreto"},
            { value:"1670414819732611",label:"Celestino Salcedo Flores"},
            { value:"411052376013391",label:"Mario Madrigal"},
            { value:"1277594875598974",label:"Adriana Lopez Quintero"},
            { value:"496428537221963",label:"Erika Santana"},
            { value:"351741994978553",label:"Génesis Márquez Rubalcava"},
            { value:"242601132597540",label:"Lauro Aréstegui"}
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

    }

    componentWillMount() {
       

    

    }


    render() {
const style = {
      width: '600px',
      height: '400px'
    };
        return(
            <div className="view ">

                <div className="view-header">
                    <header className="title text-white">
                        <h1 className="h4 text-uppercase">Dashboard</h1>
                    </header>
                </div>
        <div className="view-content view-components mt-4 ">         
        
        <div className="row">
         <div className="col-sm-8 fondo_oscuro_mapa">
            <AmCharts.React
                    ref="reactmap"
                    style={{  width: "100%",  height: "500px"  }}
                    options={this.state.mapconfig}
                />   
        </div>
        <div className="col-sm-4 ">
            <div className="row">
                        <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className>Departamento:</label>
                                                        <Select
                                                            placeholder=""
                                                            type="text"
                                                            name="departamento_id"
                                                            options={this.state.paginas}
                                                            value={parseInt(this.state.pagina_id)}
                                                            onChange={ this.handleChangeDepartamento} 
                                                            clearable={false}
                                                        />
                                                    </div>
                                                </div>
                                                </div>
        </div>
        <div className="col-sm-8 ">
             <ProspectsPer/>
        </div>
            
        </div>
                    
         

            

        </div>
        </div>
        )
    }
}
