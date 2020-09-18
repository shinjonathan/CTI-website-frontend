import React from 'react'
import { Orbitals} from 'react-spinners-css';



const ProjectSearch = () => {

  const ViewContainer = {
    height: "75vh",
    alignContent: 'center',
    textAlign: 'center'
  };

  const Content = {
    alignContent:'center',
    verticalAlign: 'middle',
    position: 'absolute',
    margin: '0',
    top: '50%',
    left: '50%',
    // marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
  

  return (
    <div style={ViewContainer}>
      <span style={Content}><Orbitals color="#0CB2E7" /><p>Coming Soon...</p></span>
    </div>
  )
}

export default ProjectSearch