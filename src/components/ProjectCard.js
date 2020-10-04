import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'; import Button from '@material-ui/core/Button';
import { Fork, Star, UsedBy, Watch } from 'react-github-buttons';

import LinkIcon from '@material-ui/icons/Link';

import Grid from '@material-ui/core/Grid';

const { REACT_APP_API_URL } = process.env;

const useStyles = makeStyles({
  root: {
    minWidth: 500,
    fontFamily: 'Work Sans',
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
  main: {
    textAlign: 'left',
    alignContent: 'left',
    padding: '20px'
  },
  main2: {
    textAlign: 'left',
    alignContent: 'left',
    paddingLeft: '20px'
  },
  projectTitle: {
    alignContent: 'left',
    textAlign: 'left',
    fontSize: '20px',
  },
  projectSubtitle: {

  }
});

// TODO: Fit to figma template with appropriate props.
export default function ProjectCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
  <script async defer src="https://buttons.github.io/buttons.js"></script>
      <CardContent>
        <Grid container>
          <Grid container xs={12}>
            <Grid item xs={2}><span><img src="/images/hack-for-la.png" /></span></Grid>
            <Grid container xs={10}>
              <Grid item xs={8} className={classes.main}><span className={classes.projectTitle}><u>civictechindex/<b>website</b></u></span></Grid>
              <Grid item xs={2}><span><Watch owner='facebook' repo='react' /></span></Grid>
              <Grid item xs={2}><span><Star owner='facebook' repo='react' /></span></Grid>
              <Grid item xs={10} className={classes.main2}>
                <span>Join a worldwide movement to catalog every open source civic tech project.</span>
              </Grid>
              <Grid item xs={10} className={classes.main2}>
                <span><img src="/images/link.svg" /> <Link to="#">cti-dev.herokuapp.com</Link></span>
              </Grid>
              <Grid item xs={4} className ={classes.main2}>
                <span>Updated on June 28, 2020</span>
              </Grid>
              <Grid item xs={2} className = {classes.main2}>
                <span><b>28</b> Open Issues</span>
              </Grid>
              <Grid item xs={2} className= {classes.main2}>
                <span><b>6</b> New Issues</span>
              </Grid>
              <Grid item xs={2} className= {classes.main2}>
                <span><b>2</b> Good First Issues</span>
              </Grid>
              <Grid item xs={10} className= {classes.main2}>
                <b>Affiliations Topic Tags:</b>
              </Grid>
              <Grid item xs={10} className= {classes.main2}>
                <b>Project Language:</b>
              </Grid>
              <Grid item xs={10} className= {classes.main2}>
                <b>Programming Language(s):</b>
              </Grid>
              <Grid item xs={10} className= {classes.main2}>
                <b>Location:</b>
              </Grid>
              <Grid item xs={10} className= {classes.main2}>
                <b>Topic Tags:</b>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}