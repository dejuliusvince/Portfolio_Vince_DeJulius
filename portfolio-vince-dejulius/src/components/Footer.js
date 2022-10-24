import React from "react";
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer(){
  return (
    <div>
      
      <MDBBtn className='m-1' style={{ backgroundColor: '#333333' }} href='https://github.com/dejuliusvince/Portfolio_Vince_DeJulius'>
        <MDBIcon fab icon='github' /> GitHub
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#0082ca' }} href='https://www.linkedin.com/in/vincent-dejulius-b16abb169/'>
        <MDBIcon fab icon='linkedin-in' /> Linkedin
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#55acee' }} href='https://twitter.com/dejuliusv'>
        <MDBIcon fab icon='twitter' /> Twitter
      </MDBBtn>

    </div>
  )
}