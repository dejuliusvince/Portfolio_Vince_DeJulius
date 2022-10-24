import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';

import image1 from './images/BC_UI.png';
import image2 from './images/Project2_Screenshot.png';
import image3 from './images/quiz_screenshot_2.png';

export default function App() {
  return (
    <MDBRow>
      <MDBCol sm="4">
      <MDBCard>
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
          <MDBCardImage src={image1} href="#" fluid alt='...' />
          <a>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </MDBRipple>
        <MDBCardBody>
          <MDBCardTitle>Simple Currency Converter</MDBCardTitle>
          <MDBCardText>
            This simple app was made for my first group project in my Ohio State Coding Bootcamp. It allows a user to calculate currency exchange rates betweeen the US, Canadian, and Australian Dollar
          </MDBCardText>
          <MDBBtn href='https://github.com/dre7283/Project1'>GitHub Repo</MDBBtn>
          <MDBBtn href='https://dre7283.github.io/Project1/ '>Live App</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

    <MDBCol sm="4">
      <MDBCard>
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
          <MDBCardImage src={image2} href="#"fluid alt='...' />
          <a>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </MDBRipple>
        <MDBCardBody>
          <MDBCardTitle>What's Good Columbus?</MDBCardTitle>
          <MDBCardText>
          This Blog allows anyone to put in their experience with anything including events, dining or places that they visit. It will let you to add the events or places you personally experienced and added to the homepage.
          </MDBCardText>
          <MDBBtn href='https://github.com/dre7283/Project_2'>GitHub Repo</MDBBtn>
          <MDBBtn href='https://project2-dc.herokuapp.com'>Live App</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

    <MDBCol sm="4">
      <MDBCard>
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
          <MDBCardImage src={image3} fluid alt='...' />
          <a>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </MDBRipple>
        <MDBCardBody>
          <MDBCardTitle>Quiz Code Quiz</MDBCardTitle>
          <MDBCardText>
            This is a quick and easy coding quiz to demonstrate my ability with vanilla Javascript.
            The user is taken through a series of easy questions about coding and their score is tracked as they answer questions right or wrong.
          </MDBCardText>
          <MDBBtn href='https://github.com/dejuliusvince/Coding_Quiz'>GitHub Repo</MDBBtn>
          <MDBBtn href='https://dejuliusvince.github.io/Coding_Quiz/'>Live App</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

    <MDBCol sm="4">
      <MDBCard>
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
          <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
          <a>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </MDBRipple>
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
          <MDBBtn href='#'>Button</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

    <MDBCol sm="4">
      <MDBCard>
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
          <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
          <a>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </MDBRipple>
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
          <MDBBtn href='#'>Button</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

    <MDBCol sm="4">
      <MDBCard>
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
          <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
          <a>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </MDBRipple>
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
          <MDBBtn href='#'>Button</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

    
    </MDBRow >
  );
}