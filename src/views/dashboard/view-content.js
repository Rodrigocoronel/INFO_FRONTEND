import React from 'react';
import {
    AreaChart, Area,
    PieChart, Pie,
    XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, Sector,
    ResponsiveContainer
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

export default class Content extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
           
        };

    }

    componentWillMount() {

      /*  var self = this;

        // tickets por mes
        api().get('tickets/month').then((response) => {
            if(response.status === 200) {

                self.setState({
                    tickets_mes: response.data
                });

            }
        });

        // ultimos 10 tickets
        api().get('tickets/?start=1&end=5').then((response) => {
            if(response.status === 200) {

                self.setState({
                    last_10: response.data
                });

            }
        });

        // top clientes
        api().get('tickets/top').then((response) => {
            if(response.status === 200) {

                self.setState({
                    top_clientes: response.data
                });

            }
        });*/

    }

    render() {

        return(
        <div className="view-content view-dashboard">

            <CardGroup className="sales-card mb-4">
            {/*    <Card style={{'flex': '3 0 0'}}>
                    <CardBlock>
                        <CardTitle className="text-uppercase h6">Tickets por Mes</CardTitle>
                        <div className="small mb-4 card-subtitle">Total de tickets por mes</div>
                        <div style={{width: '100%', height: '280px'}}>
                           
                        </div>
                    </CardBlock>
                </Card>
               <Card>
                    <CardBlock>
                        <h6 className="text-uppercase title font-weight-bold small">Net Income</h6>
                        <h4 className="font-weight-normal mb-0"><IconDollar size="16" color="#00c853"/>23,500</h4>
                    </CardBlock>
                    <CardBlock>
                        <h6 className="text-uppercase title font-weight-bold small text-nowrap">Forecast Income</h6>
                        <h4 className="font-weight-normal mb-0"><IconDollar size="16" color="#00c853"/>83,230</h4>
                    </CardBlock>
                    <CardBlock>
                        <h6 className="text-uppercase title font-weight-bold small">Another yyy</h6>
                        <h4 className="font-weight-normal mb-0"><IconTrendUp size="16" color="#00c853"/>21,32,520</h4>
                    </CardBlock>
                </Card>*/} 
            </CardGroup>

            

        </div>
        )
    }
}
