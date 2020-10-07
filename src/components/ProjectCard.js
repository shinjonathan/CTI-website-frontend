import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'; import Button from '@material-ui/core/Button';
import { Star, Watch } from 'react-github-buttons';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
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
});

// TODO: Fit to figma template with appropriate props.
export default function ProjectCard(props) {
  const classes = useStyles();
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid container xs={12}>
            {/* Handles Image */}
            <Grid item sm={1} xs={12}>
              <span><img style={{padding:'20px', alignContent:'center'}} src={props.organizationAvatarUrl} width='72px'/></span>
            </Grid>
            <Grid container xs={10}>
              <Grid item xs={8} className={classes.main}><span className={classes.projectTitle}><u>{props.ownerName}/<b>{props.projectName}</b></u></span></Grid>
              <Grid item xs={2}><span><Watch owner={props.ownerName} repo={props.projectName} /></span></Grid>
              <Grid item xs={2}><span><Star owner={props.ownerName} repo={props.projectName}/></span></Grid>
              <Grid item xs={10} className={classes.main2}>
                <span>{props.projectDescription}</span>
              </Grid>
              <Grid item xs={10} className={classes.main2}>
                <span><img src="/images/link.svg" /> <a href={props.homepage}>{props.homepage}</a></span>
              </Grid>
              <Grid item xs={12} sm={4} className ={classes.main2}>
                <span>Updated {props.lastUpdate} day(s) ago</span>
                {/* TODO: Requires dynamic windows. Hours, Days, Month needs to return Date. */}
              </Grid>
              <Grid item xs={12} sm={2} className = {classes.main2}>
                {/* TODO: Link to open issues */}
                <span><b>{props.issueCount}</b> Open Issues</span> 
              </Grid>
              <Grid item xs={12} sm={2}  className= {classes.main2}>
                {/* TODO: Open issues - Map + Collect count of new Issues */}
                <span><b>6</b> New Issues</span>
              </Grid>
              <Grid item xs={12} sm={2} className= {classes.main2}>
                {/* TODO: Same as open issues. */}
                <span><b>2</b> Good First Issues</span>
              </Grid>
              <Grid item xs={10} className= {classes.main2}>
                <b>Affiliations Topic Tags:</b> {props.projectTags}
              </Grid>
              <Grid item xs={10} className= {classes.main2}>
                {/* TODO: Format */}
                <b>Project Language:</b> {props.projectLanguage}
              </Grid>
              <Grid item xs={10} className= {classes.main2}>
                {/* TODO: Format */}
                <b>Programming Language(s):</b> {props.programmingLangauge}
              </Grid>
              <Grid item xs={10} className= {classes.main2}>
                <b>Location:</b>
              </Grid>
              <Grid item xs={10} className= {classes.main2}>
                <b>Topic Tags:</b> {props.topics}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}