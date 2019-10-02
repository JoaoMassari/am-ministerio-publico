import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '../Cards/Card';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginLeft: 75,
    marginTop:75,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>

        <Grid container item xs={16} spacing={3}>
        <Card title={'title'} content={'content'} adjective={'adjective'} description={'description'} buttonName={'Dashboard'}/>
        </Grid>

        <Grid container item xs={16} spacing={3}>
        <Card title={'title'} content={'content'} adjective={'adjective'} description={'description'} buttonName={'Dashboard'}/>
        </Grid>

      </Grid>
    </div>
  );
}