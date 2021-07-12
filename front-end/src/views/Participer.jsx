import {
    MDBCol, MDBRow, MDBMask, MDBView
} from 'mdbreact';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import '../assets/styles/Home.css';

const Participer = () => {

    return (

        <MDBView className="purple-slight ">

            <div className="container my-5 ">
                <MDBMask className='rgba-purple-slight ' />

                <section className="mb-5" style={{ marginTop: "15vmax" }}>



                    <MDBRow>
                        <MDBCol md='12' className='mb-4 text-center bg-light'>
                            <h1 className='display-4 font-weight-bold mb-4 pt-md-5 pt-5 py-5'>
                                Faire un don
                            </h1>


                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md='12' className='mb-4 text-center bg-light'>
                            <h1 className='display-4 font-weight-bold mb-4 pt-md-5 pt-5 py-5'>
                                Devenir bénévole
                            </h1>


                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md='12' className='mb-4 text-center bg-light'>
                            <h1 className='display-4 font-weight-bold mb-4 pt-md-5 pt-5 py-5'>
                                Offres de services civiques
                            </h1>


                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md='12' className='mb-4 text-center bg-light'>
                            <h1 className='display-4 font-weight-bold mb-4 pt-md-5 pt-5 py-5'>
                                VIE
                            </h1>


                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md='12' className='mb-4 text-center bg-light'>
                            <h1 className='display-4 font-weight-bold mb-4 pt-md-5 pt-5 py-5'>
                                Nos Partenaires
                            </h1>


                        </MDBCol>
                    </MDBRow>

                </section>

            </div>
        </MDBView>

    );
}

export default Participer;
