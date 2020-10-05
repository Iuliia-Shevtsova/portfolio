import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Projects(props) {
  const classes = useStyles();

  function Item(props) {
    let items =[];
    let itemsRow = [];
    for (let i=0; i<3; i++) {
        props.projectData.map(project => (
            items.push(project)
        ))
    }
    for (let i=0; i<items.length; i++) {
        itemsRow.push(
            <Grid item xs={4}>
                <Paper className={classes.paper}>{items[i]}</Paper>
            </Grid>
        )
    }
    console.log(items, itemsRow);
  }

  function FormRow() {
    return (
        <React.Fragment>
            {Item(props)}
        </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        {/* <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid> */}
      </Grid>
    </div>
  );
}
