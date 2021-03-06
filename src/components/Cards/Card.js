import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
     width:500,
     display: 'inline-block', 
     margin:10,
     marginTop: 65,
     marginLeft:65,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.content}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.adjective}
        </Typography>
        <Typography variant="body2" component="p">
         {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={props.OnClick}>{props.buttonName}
                    </Button>
      </CardActions>
    </Card>
  );
}