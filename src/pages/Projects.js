import React, { useState } from 'react';
import NavBreadcrumb from '../components/NavBreadcrumb'
import ProjectCard from '../components/ProjectCard'
import Header from '../components/Header'
import Footer from '../components/Footer'
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

import TextField from '@material-ui/core/TextField';


import Grid from '@material-ui/core/Grid';



const Projects = () => {

  const ViewContainer = {
    width: '80%',
    padding: "25px",
    alignContent: 'center',
    textAlign: 'center'
  };

  const searchStyle = {
    border: '1px solid #bdbdbd',
    borderTopRightRadius: '0.25rem',
    borderBottomRightRadius: '0.25rem'
  }


  const handleSubmit = (event) => {
    if (event.key === 'Enter') {
      console.log(query)
    }
  }

  const [query, setQuery] = useState('');


  const SearchBar = 
    <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              value = {query}
              onInput = { e => setQuery (e.target.value)}
              style={{ margin: 8 , width:'70%'}}
              placeholder="Search the Civic Tech Index"
              fullWidth
              margin="normal"
              onKeyPress={handleSubmit}
              InputLabelProps={{
                shrink: true,
              }}
            />


  return (
    <>
      <Header />
      <div style={ViewContainer}>
        <NavBreadcrumb pageName="Search" />
        <Grid container>
          <Grid item xs={12}><h1>Search Projects</h1></Grid>
          <Grid item xs={12}>
            {SearchBar}
          </Grid>
          <Grid container xs={12}>
            <Grid item xs={3}><h2 style={{textAlign:"left"}}>Expand Results +</h2><h2 style={{textAlign:"left"}}>Refine Results +</h2></Grid>
            <Grid item xs={9}>
              <Grid container={9}>
                <Grid item style={{ paddingTop: '10px' }}><ProjectCard /></Grid>
                <Grid item style={{ paddingTop: '10px' }}><ProjectCard /></Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  )
}

export default Projects