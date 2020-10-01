import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';



// TODO: Expose props.
// TODO: Likely structure to be passed:
// Need to preserve hierarchy. This component should take in 
export default function NavBreadcrumb(props) {

  const defaultBreadcrumb = {
    fontSize: '14px'
  }
  return (
    <div style={defaultBreadcrumb}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/">
          Home
      </Link>
        {/* <Link color="inherit" href="{{crumbs.parent.href}}" >
        {this.props.parent.value}
      </Link> */}
        <Typography color="inherit">{props.pageName}</Typography>
      </Breadcrumbs>
    </div>
  );
}

