import AltIconAvatar from 'rmw-shell/lib/components/AltIconAvatar'
import Delete from '@material-ui/icons/Delete'
import CollectionActivity from 'rmw-shell/lib/containers/Activities/CollectionActivity'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import React, { Component, Suspense } from 'react'
import { compose } from 'redux'
import { injectIntl } from 'react-intl'
import { withRouter } from 'react-router-dom'
import { withTheme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Activity } from 'rmw-shell'
import Button from '@material-ui/core/Button';
import Filter from '../../components/Filter/Filter'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Tasks.css'

const LazyNewPost = React.lazy(() => {
  return import('../../components/Filter/Filter');
});


const currencies = [
  {
    value: 'Fisica',
    label: 'Pessoa Fisica',
  },
  {
    value: 'Juridica',
    label: 'Pessoa Juridica',
  },
];

const estados = [
  {
    value: 'SP',
    label: 'São Paulo',
  },
  {
    value: 'RJ',
    label: 'Rio de Janeiro',
  },

  {
    value: 'RS',
    label: 'Rio grande do sul',
  },

  {
    value: 'PR',
    label: 'Parana',
  },
];

class Tasks extends Component {
  
  state = {
    PersonalData:{
      name: '',
      nascimento: '',
      tipoPessoa:'',
      comprovante:'',
      rg:''
    },

    DadosEndereco:{
      cep:'',
      logadrouro:'',
      bairro:'',
      cidade:'',
      estado:'',
      numero:''
    },
    buscar:false,
  }

  handleChange = name => ({target: {value} }) => {
    this.setState({ 
      PersonalData: {
        ...this.setState.PersonalData,
        [name]: value
      },
      DadosEndereco: {
        ...this.setState.PersonalData,
        [name]: value
      }
      })  
  };
  
  render() {


    const { intl } = this.props
    const { PersonalData: {name, nascimento, tipoPessoa, comprovante, rg,}, DadosEndereco:{cep, logadrouro, bairro, cidade, estado, numero} } = this.state
    
    return(
        <React.Fragment >
        <Activity 
        root={{flexGrow:1}}     
        title={intl.formatMessage({ id: 'Buscar' })}>   
        <Switch>
        <div >

        {!this.state.buscar?<form noValidate autoComplete="off" style={{
        
                display: 'flex',
                flexWrap: 'wrap',
        }}>
          <div /* className="Posts" */>
            <h1 style={{ marginLeft:20, marginTop:40}}>Dados Pessoais</h1>
           
              <TextField style={{
              marginTop: 15,
              marginLeft: 20,
              marginRight: 40,
              width: 400,
              }}  
                label="Tipo de Pessoa"
                variant="filled" 
                select
                value={tipoPessoa}
                onChange={this.handleChange('tipoPessoa')}
                SelectProps ={{
                  MenuProps: {
                  /* className = classes.menu  */
                  },
                  
                }}
                helperText="Por favor selecione uma opção"
                >
                {currencies.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
              
                ))}
                </TextField>
              <TextField style={{
              marginLeft: 20,
              marginRight: 40,
              width: 600,
              }}  
                label="Nome Completo"
                variant="outlined" 
                value={name}
                onChange={this.handleChange('name')}
                margin="normal"
            />
              <TextField style={{
              marginLeft: 20,
              marginRight: 40,
              width: 400,
              }}  
                label="CPF/CNPJ"
                variant="outlined" 
                value={comprovante}
                onChange={this.handleChange('comprovante')}
                margin="normal"
            />
              <TextField style={{
              marginLeft: 20,
              marginRight: 40,
              width: 200,
              }}  
                label="RG"
                value={rg}
                onChange={this.handleChange('rg')}
                margin="normal"
                variant="outlined"
            />
               <TextField style={{
              marginLeft: 20,
              marginRight: 40,
              marginTop:40,
              width: 200,
              }}  
                label="Data de Nascimento"
                type="date"
                variant="outlined" 
                value={nascimento}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={this.handleChange('nascimento')}
                margin="normal"
            />
            </div>

            <div /* className="Posts" */>
            <h1 style={{ marginLeft:20, marginTop:40}}>Dados Endereço</h1>
              <TextField style={{
              marginTop: 15,
              marginLeft: 20,
              marginRight: 40,
              width: 400,
              }}  
                label="Estado"
                variant="filled" 
                select
                value={estado}
                onChange={this.handleChange('estado')}
                SelectProps ={{
                  MenuProps: {
                /*    className = useStyles.menu */
                  },
                  
                }}
                helperText="Por favor selecione uma opção"
                >
                {estados.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
              
                ))}
                </TextField>
              <TextField style={{
              marginLeft: 20,
              marginRight: 40,
              width: 600,
              }}  
                label="Logadrouro"
                variant="outlined" 
                value={logadrouro}
                onChange={this.handleChange('logadrouro')}
                margin="normal"
            />
              <TextField style={{
              marginLeft: 20,
              marginRight: 40,
              width: 400,
              }}  
                label="Bairro"
                variant="outlined" 
                value={bairro}
                onChange={this.handleChange('bairro')}
                margin="normal"
            />
              <TextField style={{
              marginLeft: 20,
              marginRight: 40,
              width: 200,
              }}  
                label="Numero"
                value={numero}
                onChange={this.handleChange('numero')}
                margin="normal"
                variant="outlined"
            />
               <TextField style={{
              marginLeft: 20,
              marginRight: 40,
              width: 200,
              }}  
                label="CEP"
                value={cep}
                onChange={this.handleChange('cep')}
                margin="normal"
                variant="outlined"
            />
            <TextField style={{
              marginLeft: 20,
              marginRight: 40,
              width: 200,
              }}  
                label="Cidade"
                value={cidade}
                onChange={this.handleChange('cidade')}
                margin="normal"
                variant="outlined"
            />
               
          </div>
          <Button variant="outlined" 
          style={{
              marginTop:60,
              marginLeft: 20,
              marginRight: 40,
              width: 200,
          }}
          /* onClick={() => {this.props.history.push({pathname: '/dashboard'});}}>Buscar</Button> */
          onClick={() => {this.setState({buscar:true})}}>Confirmar</Button>
          </form>:<Filter />}
        </div>
        </Switch>
        </Activity>
        </React.Fragment>
    );
};
}

export default compose(
  injectIntl,
  withRouter,
  withTheme
)(Tasks)
