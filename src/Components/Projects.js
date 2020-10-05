import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProjectCard from './ProjectCard';

import { makeStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import ListSubheader from '@material-ui/core/ListSubheader';


const useStyles = makeStyles((theme) => ({
    root: {
      // display: 'flex',
      // flexDirection: 'row',
      // flexWrap: 'wrap',
      // justifyContent: 'space-between',
      overflow: 'hidden',
    //   backgroundColor: theme.palette.background.paper, 
    },
    gridList: {
      width: 1000,
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));

function Projects (props) {
    console.log(props);

    const classes = useStyles();
    
    return (
        // <Grid container direction='row' spacing={2}>
        
        <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={6}>
        {props.projectData.map(project => (
                <Grid key={project.fields.id} item>
                <ProjectCard {...project.fields} key={project.fields.id} />
                </Grid>
            ))}
        </Grid>
      </Grid>
     </Grid> 

    )
     
};

export default Projects;