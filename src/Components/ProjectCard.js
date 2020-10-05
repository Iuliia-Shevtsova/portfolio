import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import {Link} from 'react-router-dom'

// const useStyles = makeStyles({
//     root: {
//       maxWidth: 345,
//     },
//     media: {
//       height: 140,
//     },
//   });


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 300,
      flexGrow: 1,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      backgroundColor: 'black',

    //   shadowColor: "black",
    //   shadowOffset: {
    //     width: 0,
    //     height: 14,
    //   },
    //   shadowOpacity: 0.30,
    //   shadowRadius: 4.65,

    //   elevation: 8,
     },
    media: {
      height: 240,
      // width: 240
    },
    paper: {
      height: 140,
		  width: 140,  
		// color: 'white'
    },
    control: {
      padding: theme.spacing(3),
    },

    card: {
      justifyContent: "center",
		  maxWidth: 400,
		// color: 'white'
    }

}));
  
function ProjectCard({ Name, Notes, image, link}) { 
    const classes = useStyles();

    return (
      <Card className={classes.root} style={{ shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'red',
        shadowOffset: { height: 0, width: 0 },
    }}>
        <CardActionArea>
          <CardMedia 
            className={classes.media}
            image={image[0].url}
            title={Name}
          />
          <CardContent >
            <Typography style={{ color: 'Fuchsia'}} gutterBottom variant="h5" component="h2">
              {Name}
            </Typography>
            <Typography style={{ color: 'white'}} variant="body2" color="textSecondary" component="p">
            {Notes}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Button size="small" style={{ color: 'purple'}} >
              Website
            </Button>
          </a>
          {/* <Button size="small" style={{ color: 'purple'}}>
            Learn More
          </Button> */}
        </CardActions>
      </Card>
    );
  }





// function ProjectCard({ Name, Notes, image}) {
// 	const classes = useStyles()
// 	return (
// 		<div className={classes.root}>
// 			<Grid item xs={10}>
// 				<Card className={classes.card}>
// 					<CardActionArea>
// 						<CardMedia className={classes.media} image={image[0].url} title='React' />
// 						<CardContent>
// 							<Typography gutterBottom variant='h5' component='h2'>
// 								{Name}
// 							</Typography>
// 						</CardContent>
// 					</CardActionArea>
// 					<CardContent>
// 						<Typography paragraph variant='body2' component='h2'>
// 							{Notes.length > 150 ? Notes.slice(0, 150) + `...` : Notes}
// 						</Typography>
// 					</CardContent>
// 					<CardActions>
// 						{/* <Button size='small' variant='outlined' color='primary'>
// 							{published}
// 						</Button> */}
// 					</CardActions>
// 				</Card>
// 			</Grid>
// 		</div>
// 	)
// }

export default ProjectCard;