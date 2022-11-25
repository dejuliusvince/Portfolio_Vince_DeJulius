import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

import design1 from './images/designs/conferencelogo3.jpg'
import design2 from './images/designs/DOORDASH_Mockups_Edit1.png'
import design3 from './images/designs/ThankingStaff_Updated.jpg'
import design4 from './images/designs/CCGHD_Logo4.jpg'
import design5 from './images/designs/AudioBay_Logo.jpg'
import design6 from './images/designs/DOORDASH_Mockups_3b.png'
import design7 from './images/designs/conferencelogo1.jpg'

export default function App() {
  return (
    <MDBRow>
      <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
        <img
          src={design1}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='2020 Vision design'
        />

        <img
          src={design2}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Wintry Mountain Landscape'
        />
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src={design3}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Mountains in the Clouds'
        />

        <img
          src={design4}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Boat on Calm Water'
        />

        <img
          src={design5}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Boat on Calm Water'
        />
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src={design6}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Waves at Sea'
        />

        <img
          src={design7}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Yosemite National Park'
        />
      </MDBCol>
    </MDBRow>
  );
}