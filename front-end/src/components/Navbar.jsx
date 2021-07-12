import React, { useEffect, useState } from 'react';
import {
    MDBNavbar,
    MDBCol,
    Link,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBMask,
    MDBRow,
    MDBFormInline,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBIcon
} from 'mdbreact';
import '../assets/styles/Home.css';
import Logo from "../assets/images/Logo.png"


const Navbar = (props) => {

    const overlay = (
        <div
            id='sidenav-overlay'
            style={{ backgroundColor: 'transparent' }}
        />
    );

    return (
        <div  >

            <MDBNavbar
                color='secondary-color'
                light
                expand='md'
                fixed='top'
                scrolling
                transparent
            >

                <MDBContainer>
                    <MDBNavbarBrand className="loco-con">
                        <img
                            src={Logo}
                            alt=""
                            className="rounded-circle z-depth-2-half logo"
                        />
                    </MDBNavbarBrand>

                    <MDBNavbarToggler />
                    <MDBCollapse navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem className="mx-1">
                                <MDBNavLink className="navbarFS " to="/">Accueil</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem className="mx-1">
                                <MDBNavLink className="navbarFS " to="/qui-sommes-nous">Qui sommes-nous ?</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem className="mx-1">
                                <MDBNavLink className="navbarFS " to="/nos-programmes">Nos Programmes</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem className="mx-1">
                                <MDBNavLink className="navbarFS " to="/participer">Participer</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem className="mx-1">
                                <MDBNavLink className="navbarFS " to="/Contact">Contact</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <MDBBtn rounded className='btn-purple'>
                                    {/* <MDBIcon icon='user' className=' mr-2' />  */}
                                    {props.userConnected
                                        ?
                                        <MDBNavLink className='loco-con text-light' to="/" onClick={props.logout}>Se déconnecter</MDBNavLink>
                                        :
                                        <MDBNavLink className='loco-con text-light' to="/connexion">Se connecter</MDBNavLink>
                                    }
                                </MDBBtn>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>





                {/* <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Azimuto</Link>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">Accueil</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/qui-sommes-nous" className="nav-link active">Qui sommes-nous ?</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/nos-programmes" className="nav-link active">Nos Programmes</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/participer" className="nav-link active">Participer</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Contact" className="nav-link active">Contact</Link>
                            </li>

                        </ul>


                    </div>
                </div>
               */}
            </MDBNavbar>


        </div>
    );
}

export default Navbar;

