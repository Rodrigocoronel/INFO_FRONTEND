import React from 'react';
import { connect } from 'react-redux';
import { Card, CardBlock, CardTitle , Button} from 'reactstrap';

import ReactTable from "react-table";
import "react-table/react-table.css";
import IconEdit from 'react-icons/lib/md/edit';
import IconPersonAdd from 'react-icons/lib/md/person-add';

import * as actions from '../../actions/user';
import Modal from "./Modal";


class Departamentos extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            modal       : false,
            prospectoid : null,
            title       : "",
        };
        this.toggle 			= this.toggle.bind(this);

    }

   toggle(evt, prospectoid = null, title = "Agregar Cliente")
    {
        let {modal} = this.state;

        this.setState({
            modal       : !modal,
            prospectoid : prospectoid,
            title       : title,
            
        });
    }

    componentDidMount() {

        this.props.get();
    }

    render() {

        return(
            <div className="view">

                <div className="view-header">
                    <header className="title text-white">
                        <h1 className="h4 text-uppercase">Usuarios</h1>
                    </header>
                </div>

                <div className="view-content view-components">
                    <Card>
                        <CardBlock>
                        <div className="text-right">
                                <Button color="success" className="mb-2" onClick={this.toggle}>
                                    <IconPersonAdd />&nbsp;Agregar
                                </Button>
                            </div>
                            <ReactTable
                              data      = {this.props.user.data}
                              className = "-striped -highlight"
                              columns   = {[
                               
                                {Header: 'Empleado', accessor: 'label'},
                                {Header: 'Correo', accessor: 'correo'},
                                {Header: 'Departamento', accessor: 'departamento'},
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
                                                 onClick={(evt)=>this.toggle(evt, row.original.value, 'Editar Cliente')}>
                                                    <IconEdit />
                                                </Button>{' '}
                                                 
                                            </div>
                                        )
                                    }
                                }
                              
                              ]}
                              filterable 
                              defaultPageSize={10} 
                              
                             
                            />
                        </CardBlock>
                    </Card>
                </div>
                {
                   this.state.modal&& 
                   <Modal 
                 open={this.state.modal} 
                 toggle={this.toggle} 
                 title={this.state.title} 
                 prospectoid={this.state.prospectoid}
                />
                }
                 

            </div>
        );
    }

};

function mapStateToProps(state, ownProps) {
    return {
        user : state.user,
    }
};

export default connect(mapStateToProps, actions)(Departamentos)