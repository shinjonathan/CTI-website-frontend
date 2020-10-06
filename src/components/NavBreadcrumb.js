import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';



// TODO: Expose props.
// TODO: Likely structure to be passed:
// Need to preserve hierarchy. This component should take in 
export default function NavBreadcrumb(props) {

  const defaultBreadcrumb = {
    fontFamily: 'Work Sans',
    fontSize: '14px',
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '24px',
    letterSpacing: '0px',
    textAlign: 'left'
  }

  const crumbs = props.crumbs

  const displayCrumbs = crumbs.map((i) => {
    if (i.href != null || i.href != '') {
      return <Link color="inherit" href={i.href}> {i.name}</Link>
    } else {
      return <Typography color="inherit">{i.name}</Typography>
    }
  });

  return (
    <div style={defaultBreadcrumb}>
      <Breadcrumbs aria-label="breadcrumb">
        {displayCrumbs}
      </Breadcrumbs>
    </div>
  );
}

