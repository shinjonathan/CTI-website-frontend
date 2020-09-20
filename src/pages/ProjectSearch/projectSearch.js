import React from 'react';
import { Orbitals } from 'react-spinners-css';


import { Results, SearchBox, SearchProvider } from "@elastic/react-search-ui";
import { Layout } from "@elastic/react-search-ui-views";
import "./styles.css";
// import "@elastic/react-search-ui-views/lib/styles/styles.css";
import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";



const connector = new AppSearchAPIConnector({
  searchKey: "search-371auk61r2bwqtdzocdgutmg",
  engineName: "search-ui-examples",
  hostIdentifier: "host-2376rb"
});



const ProjectSearch = () => {

  const ViewContainer = {
    height: "75vh",
    alignContent: 'center',
    textAlign: 'center'
  };

  const Content = {
    alignContent: 'center',
    verticalAlign: 'middle',
    position: 'absolute',
    margin: '0',
    top: '50%',
    left: '50%',
    // marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }

  const breadCrumb = {
    alignContent: 'left'
  }

  const pageTitle = {
    textAlign: 'center'
  }


  return (

    // TODO: Breadcrumb... HOME / SEARCH



    <SearchProvider
      config={{
        apiConnector: connector
      }}
    >
      <div className="App">
        <h5>Home / Search</h5>
        <h1 style={pageTitle}>Search Projects</h1>
        <SearchBox style = />
      {/* <div style={ViewContainer}>
          <span style={Content}><Orbitals color="#0CB2E7" /><p>Coming Soon...</p></span>
      </div> */}
        {/* <Layout
          header={<SearchBox/>}
          bodyContent={<Results titleField="title" urlField="nps_link"  />}
        /> */}
      </div>
    </SearchProvider>


  )
}

export default ProjectSearch