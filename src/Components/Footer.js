import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: 'rgb(33, 37, 41)' }}>
      <MDBContainer className='p-4'></MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        ©nigam_sharma 2023 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
         
        </a>
      </div>
    </MDBFooter>
  );
}