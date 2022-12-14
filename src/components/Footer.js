import React from "react";
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer(){
  return (
    <div className="d-flex justify-content-center align-center">
      


      <MDBBtn className='m-1' style={{ backgroundColor: '#333333' }} href='https://github.com/dejuliusvince/Portfolio_Vince_DeJulius'>
        <MDBIcon fab icon='github' /> GitHub
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#0082ca' }} href='https://www.linkedin.com/in/vincent-dejulius-b16abb169/'>
        <MDBIcon fab icon='linkedin-in' /> Linkedin
      </MDBBtn>

      

    </div>
  )
}