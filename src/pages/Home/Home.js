import Button from '@material-ui/core/Button'
import CountUp from 'react-countup'
import Group from '@material-ui/icons/Group'
import React, { Component } from 'react'
import { Activity, Scrollbar } from 'rmw-shell'
import { GitHubIcon } from 'rmw-shell/lib/components/Icons'
import { Line, Bar, Doughnut } from 'react-chartjs-2'
import IconButton from '@material-ui/core/IconButton'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import { withFirebase } from 'firekit-provider'
import { withTheme } from '@material-ui/core/styles'
import Card from '../../components/Cards/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '../../components/Grid/Grid';
import { withRouter } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  
  render() {
    const { theme, intl, days, months, providers, usersCount } = this.props


    return(
        
        <Activity
        
        root={{flexGrow:1}}     
        title={intl.formatMessage({ id: 'Home' })}>      
        <Scrollbar>
        <div className="Posts">
        <Card title={'Dashboard'} content={'content'} adjective={'adjective'} description={'description'} buttonName={'Dashboard'} OnClick={() => {this.props.history.push({pathname: '/dashboard'});}} />
        <Card title={'Relatorios'} content={'content'} adjective={'adjective'} description={'description'} buttonName={'Relatorios'} OnClick={() => {this.props.history.push({pathname: '/companies'});}}/>
        <Card title={'Formulario'} content={'content'} adjective={'adjective'} description={'description'} buttonName={'Formulario'} OnClick={() => {this.props.history.push({pathname: '/tasks'});}}/>
        <Card title={'title'} content={'content'} adjective={'adjective'} description={'description'} buttonName={'Dashboard'}/>
        </div>
        </Scrollbar>
        </Activity>


    );
};
}
export default injectIntl(withRouter(Home));
