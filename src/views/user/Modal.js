import React from 'react';
import { connect } from 'react-redux';
import {
    Modal, ModalHeader, ModalBody, ModalFooter,
    Button,Label,FormGroup, Input,InputGroup, InputGroupAddon,Card, CardBlock
} from 'reactstrap';

import Spinner from 'react-spinkit';

import swal from 'sweetalert2'
import ReactTable from "react-table";
import "react-table/react-table.css";

import IconSave from 'react-icons/lib/md/save';
import IconEdit from 'react-icons/lib/md/edit';

import * as actions from '../../actions/user';

import Select from 'react-select';

import {api} from '../../actions/_request';

const roles = [
    {label: 'Tecnico', value: 1},
    {label: 'Supervisor', value: 2},
    {label: 'Coordinador', value: 3},
    {label: 'Administrador', value: 4}
];
const SubmitLoad = () => (
    <div className="p-2">
        <Spinner name="ball-clip-rotate-multiple" color="#b5271f" />
    </div>
);


class ClienteModal extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            usuario:
            {
                id:null,
                name:"",
                email:"",
                password:"",
                departamento:0,
                rol:0,
                cliente_id:0,

            },
            departamentos:[],
            action: 'save_usuario',

        };

        
        this.handleInputChange2 = this.handleInputChange2.bind(this);
        this.CrearUsuario = this.CrearUsuario.bind(this);
         this.handleChangeDepartamento = this.handleChangeDepartamento.bind(this);
          this.handleChangeRol = this.handleChangeRol.bind(this);
       
    }
    componentDidMount()
    {
         
        let prospectoid = this.props.prospectoid;
        let self = this;
       
        
 api().get('/departamentos')
        .then(function(response)
        {
            self.setState({
                departamentos : response.data
            });
           
        })
        
      
        if(prospectoid > 0 && prospectoid != self.state.usuario.id)
        {

            api().get(`users/${prospectoid}`)
            .then(function(response)
            {
                  
                if(response.status === 200)
                {                
                    self.setState({
                        usuario: response.data,
                        action: 'update_usuario'
                    });
                    console.log(response.data);
                }

            });
            
        }
        else if(prospectoid == null && self.state.usuario.id)
        {            
            self.resetUser();
        }
    }

    componentWillReceiveProps(nextProps)
    {

    }

    

    resetUser(){
        this.setState({
         usuario:
            {
                id:null,
                name:"",
                email:"",
                password:"",
                departamento:0,
                rol:0,
                cliente_id:0,

            },
            action: 'save_usuario',
            });
    }



   
    handleInputChange2(event) {
        let {usuario} = this.state;
        const target    = event.target;
        const value     = target.type === 'checkbox' ? target.checked : target.value;
        const name      = target.name;

        usuario[name] = value;
        this.setState({
            usuario : usuario
        });
    }
    handleChangeDepartamento(departamento)
    {
        let {usuario}         = this.state;
        usuario.departamento    = departamento.value;
        this.setState({usuario: usuario});
    }
    handleChangeRol(departamento)
    {
        let {usuario}         = this.state;
        usuario.rol    = departamento.value;
        this.setState({usuario: usuario});
    }
    CrearUsuario(evt)
    {
        evt.preventDefault();
        let {usuario} = this.state;
        let self = this;
  
console.log(usuario);
      this.props[self.state.action](usuario, () => {
            swal({
                title: 'Usuario',
                text: 'Usuario Guardado correctamente!',
                type: 'success',
                // showCancelButton: true,
                // confirmButtonColor: '#3085d6',
                // cancelButtonColor: '#d33',
                confirmButtonText: 'Continue!'
            }).then((result) => {
                if (result.value) {
                    // swal(
                    //  'Deleted!',
                    //  'Your file has been deleted.',
                    //  'success'
                    //  )
                   self.props.toggle();
                    self.resetUser();
                }
            })
        });


    }

   

    render()
    {

        let {usuario,departamentos}=this.state;
  
        
        return(

           <Modal isOpen={this.props.open} toggle={this.props.toggle} className="default modal-lg modal_cliente">
                <form >
                <ModalHeader toggle={this.props.toggle}>{this.props.title}</ModalHeader>
                <ModalBody>
                  <div className="view-content view-components">
                    <Card>
                        <CardBlock>

                            <div className="">
                      <div className="row">
                        <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className>Departamento:</label>
                                                        <Select
                                                            placeholder=""
                                                            type="text"
                                                            name="departamento_id"
                                                            options={departamentos}
                                                            value={parseInt(usuario.departamento)}
                                                            onChange={ this.handleChangeDepartamento } 
                                                            clearable={false}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className>Rol:</label>
                                                        <Select
                                                            placeholder=""
                                                            type="text"
                                                            name="tipo_id"
                                                            options={roles}
                                                            value={parseInt(usuario.rol) || ""}
                                                            onChange={ this.handleChangeRol }
                                                            clearable={false}
                                                        />
                                                    </div>
                                                </div>


                            <div className="col-md-3">
                            <FormGroup>
                                <Label>Nombre</Label>
                                    <Input
                                    placeholder=""
                                    type="text"
                                    name="name"
                                    value={usuario.name}
                                    onChange={ this.handleInputChange2}
                                    />
                            </FormGroup>
                        </div>
                        <div className="col-md-3">
                            <FormGroup>
                                <Label>Correo</Label>
                                    <Input
                                    placeholder=""
                                    type="text"
                                    name="email"
                                    value={usuario.email}
                                    onChange={ this.handleInputChange2}
                                    />
                            </FormGroup>
                        </div>
                        <div className="col-md-3">
                            <FormGroup>
                                <Label>Password</Label>
                                    <Input
                                    placeholder=""
                                    type="password"
                                    name="password"
                                    value={usuario.password}
                                    onChange={ this.handleInputChange2}
                                    />
                            </FormGroup>
                        </div>

                      

                        
                        </div>
                        <br/><br/><br/><br/><br/>
                              
                            </div>
                           
                        </CardBlock>
                    </Card>
                </div>
                   
                </ModalBody>
                <ModalFooter>
                    {
                        this.props.user.saving ?
                        <SubmitLoad /> : 
                        <div>
                            <Button color="primary" type="submit"  onClick={this.CrearUsuario} >
                                <IconSave />&nbsp;Guardar
                            </Button>{' '}
                            <Button color="secondary" onClick={this.props.toggle_cliente}>
                                Cancel
                            </Button>
                        </div>
                    }
                </ModalFooter>
                </form>
            </Modal>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        user : state.user,
    }
};

export default connect(mapStateToProps, actions)(ClienteModal)