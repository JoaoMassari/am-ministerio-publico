import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
     /* margin: theme.spacing(3), */
   /*  marginLeft:'auto',
    marginRight:'auto', */
    margin:'auto',
    marginTop:200,
   
  },
}));


export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    dadosPessoais: false,
    enderecos: false,
    pessoasRelacionadas: false,
    empresas:false,
    antecedentes:false,
    armas:false,
    processos:false,
    diarioOficial:false,
    redesSociais: false,
    todos:false,
  });



  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });

    if(name == 'todos' && todos === false){
      setState({...state, 
        dadosPessoais: true,
        enderecos: true,
        pessoasRelacionadas: true,
        empresas:true,
        antecedentes:true,
        armas:true,
        processos:true,
        diarioOficial:true,
        redesSociais: true,
        todos:true,
        })
    }
    else if(name == 'todos' && todos === true){
      setState({...state, 
        dadosPessoais: false,
        enderecos: false,
        pessoasRelacionadas: false,
        empresas:false,
        antecedentes:false,
        armas:false,
        processos:false,
        diarioOficial:false,
        redesSociais: false,
        todos:false,
    })
  }
}
  const {dadosPessoais,enderecos,pessoasRelacionadas,empresas,antecedentes,armas,processos,diarioOficial,redesSociais,todos } = state;

  return (
    <React.Fragment>
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend"></FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={dadosPessoais} onChange={handleChange('dadosPessoais')} value="dadosPessoais" />}
            label="Dados Pessoais"
          />
          <FormControlLabel
            control={<Checkbox checked={enderecos} onChange={handleChange('enderecos')} value="enderecos" />}
            label="Enderecos"
          />
          <FormControlLabel
            control={
              <Checkbox checked={pessoasRelacionadas} onChange={handleChange('pessoasRelacionadas')} value="pessoasRelacionadas" />
            }
            label="Pessoas Relacionadas"
          />
          <FormControlLabel
            control={
              <Checkbox checked={empresas} onChange={handleChange('empresas')} value="empresas" />
            }
            label="Empresas"
          />
          <FormControlLabel
            control={
              <Checkbox checked={antecedentes} onChange={handleChange('antecedentes')} value="antecedentes" />
            }
            label="Antecedentes"
          />
        </FormGroup>
       {/*  <FormHelperText>texto</FormHelperText> */}
      </FormControl>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend"></FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={armas} onChange={handleChange('armas')} value="armas" />}
            label="Armas"
          />
          <FormControlLabel
            control={<Checkbox checked={processos} onChange={handleChange('processos')} value="processos" />}
            label="Processos"
          />
          <FormControlLabel
            control={
              <Checkbox checked={diarioOficial} onChange={handleChange('diarioOficial')} value="diarioOficial" />
            }
            label="Diario Oficial"
          />
          <FormControlLabel
            control={
              <Checkbox checked={redesSociais} onChange={handleChange('redesSociais')} value="redesSociais" />
            }
            label="Redes Sociais"
          />
          <FormControlLabel
            control={
              <Checkbox checked={todos} onChange={handleChange('todos')} value="todos" />
            }
            label="Todos"
          />
        </FormGroup>
       {/*  <FormHelperText>error</FormHelperText> */}
      </FormControl>    
    </div>
    <Button fullWidth  variant="outlined" 
    style={{
        
        /* marginTop:60,
        marginLeft: 20,
        marginRight: 40, */
        
    }}
    /* onClick={() => {this.props.history.push({pathname: '/dashboard'});}}>Buscar</Button> */
    /* onClick={() => {this.setState({buscar:true})}} */>Confirmar</Button>
    </React.Fragment>
  );
}