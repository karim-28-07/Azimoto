import {
    MDBCol, MDBRow
} from 'mdbreact';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import'bootstrap-css-only/css/bootstrap.min.css';

const Programmes = () => {

    return (
        <div className="container my-5">

            <MDBRow>
                <MDBCol md='12' className='mb-4 text-center bg-light'>
                    <h1 className='display-4 font-weight-bold mb-4 pt-md-5 pt-5 py-5'>
                    Actions
                    </h1>
                   
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md='12' className='mb-4 text-center bg-light'>
                    <h1 className='display-4 font-weight-bold mb-4 pt-md-5 pt-5 py-5'>
                    Témoignages
                    </h1>
                   
                   
                </MDBCol>
            </MDBRow>
           
        </div>
    );
}

export default Programmes;