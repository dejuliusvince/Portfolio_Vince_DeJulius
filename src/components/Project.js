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
import image4 from './images/weather_dashboard_screenshot.png';
import image5 from './images/workday_planner_screenshot.png';
import image6 from './images/password_generator_screenshot.png'

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
          <MDBBtn className="m-2" href='https://github.com/dre7283/Project1'>GitHub Repo</MDBBtn>
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
          <MDBBtn className="m-2" href='https://github.com/dre7283/Project_2'>GitHub Repo</MDBBtn>
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
          <MDBCardTitle>Quick Code Quiz</MDBCardTitle>
          <MDBCardText>
            This is a quick and easy coding quiz to demonstrate my ability with vanilla Javascript.
            The user is taken through a series of easy questions about coding and their score is tracked as they answer questions right or wrong.
          </MDBCardText>
          <MDBBtn className="m-2" href='https://github.com/dejuliusvince/Coding_Quiz'>GitHub Repo</MDBBtn>
          <MDBBtn href='https://dejuliusvince.github.io/Coding_Quiz/'>Live App</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

    <MDBCol sm="4">
      <MDBCard>
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
          <MDBCardImage src={image4} fluid alt='...' />
          <a>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </MDBRipple>
        <MDBCardBody>
          <MDBCardTitle>Weather Search/Display App</MDBCardTitle>
          <MDBCardText>
            This app allows a user to enter in the name of a city into the search bar, and renders the current weather data for that city. The next 5-day forecast is also shown on a dashboard below with weather icons.
          </MDBCardText>
          <MDBBtn className="m-2" href='https://github.com/dejuliusvince/Intuitive_Weather'>GitHub Repo</MDBBtn>
          <MDBBtn href='https://dejuliusvince.github.io/Intuitive_Weather/'>Live App</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

    <MDBCol sm="4">
      <MDBCard>
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
          <MDBCardImage src={image5} fluid alt='...' />
          <a>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </MDBRipple>
        <MDBCardBody>
          <MDBCardTitle>Work Day Scheduler</MDBCardTitle>
          <MDBCardText>
            This app can be used to plan your work day hour-by-hour. Each hour time block can have a text value saved into local storage on your computer to be retrieved if you close and re-open the page. 
          </MDBCardText>
          <MDBBtn className="m-2" href='https://dejuliusvince.github.io/Workday_Planner/'>GitHub Repo</MDBBtn>
          <MDBBtn href='https://github.com/dejuliusvince/Workday_Planner'>Live App</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

    <MDBCol sm="4">
      <MDBCard>
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
          <MDBCardImage src={image6} fluid alt='...' />
          <a>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </MDBRipple>
        <MDBCardBody>
          <MDBCardTitle>Password Generator</MDBCardTitle>
          <MDBCardText>
            Randomly generated secure passwords are great for protecting accounts with sensitive data. This app lets a user generate a random password, specifying whether to use uppercase/lowercase letters, numbers, and special characters.
          </MDBCardText>
          <MDBBtn className="m-2" href='https://github.com/dejuliusvince/Challenge3_PasswordGenerator'>GitHub Repo</MDBBtn>
          <MDBBtn href='https://dejuliusvince.github.io/Challenge3_PasswordGenerator/'>Live App</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

    
    </MDBRow >
  );
}