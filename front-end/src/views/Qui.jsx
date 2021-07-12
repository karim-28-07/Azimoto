import {
    MDBCol, MDBRow, MDBMask, MDBView
} from 'mdbreact';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';

const Qui = () => {

    return (
        <MDBView className="purple-slight">
            <MDBMask className='rgba-purple-slight ' />
            <div className="container my-5">
                <section className="mb-5" style={{ marginTop: "15vmax" }}>


                    <MDBRow>
                        <MDBCol md='12' className='mb-4 text-center bg-light'>
                            <h1 className='display-4 font-weight-bold mb-4 pt-md-5 pt-5 py-5'>
                                Vision
                            </h1>

                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md='12' className='mb-4 text-center bg-light'>
                            <h1 className='display-4 font-weight-bold mb-4 pt-md-5 pt-5 py-5'>
                                Equipe
                            </h1>


                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md='12' className='mb-4 text-center bg-light'>
                            <h1 className='display-4 font-weight-bold mb-4 pt-md-5 pt-5 py-5'>
                                Chiffres clés
                            </h1>


                        </MDBCol>
                    </MDBRow>

                </section>
            </div>
        </MDBView>
    );
}

export default Qui;