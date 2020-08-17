import React from 'react'
import { GrCloudlinux } from 'react-icons/gr'
import {AiOutlineBulb} from 'react-icons/ai'
import {MdLaptopChromebook} from 'react-icons/md'
import {RiBuilding2Line} from 'react-icons/ri'
const Service = () => {
    return (
        <div className="container-fluid">
        <div className="row mt-5 mb-5">
            <div className="col-12">
                <div
                    style={{
                        position: "relative",
                        color: 'white'
                    }}>
                    <img width="100%" src="https://images.unsplash.com/photo-1554774853-b3d587d95440?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1763&q=80" alt="Card image" />
                    <div style={{
                        position: "absolute",
                        top: '50%',
                        left: '50%',
                        right:'10%'
                    }}>
                        <h1>PLAY IS BUILT <br/>INTO OUR DAY</h1>
                        <p>We ceate smart experience We ceate smart experience
                        We ceate smart experience We ceate smart experience
                        </p>
                        <button style={{
                                padding: '5px 20px',
                                backgroundColor: '#cc2944',
                                color: 'white',
                                border: '0px',
                                borderRadius: '15px'
                            }}>Free Consolation
                        
                            </button>
                    </div>
                </div>
            </div>
            <div className="col-12 mt-5 text-center">
                    <div style={{padding:'0px 25%'}}>
                        <h1 style={{fontSize:'40px',fontWeight:'bold',marginBottom:'20px'}}>COMPREHENSIVE SERVICE</h1>
                        <p>We ceate smart experience We ceate smart experience
                        We ceate smart experience We ceate smart experience
                        We ceate smart experience We ceate smart experience
                        We ceate smart experience We ceate smart experience
                        We ceate smart experience We ceate smart experience
                        </p>
                    </div>
            </div>
            <div className="col-12 mt-5">
                <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="ml-4">
                        <GrCloudlinux size={100} />
                        </div>
                        <div className="mr-3">
                            <h3>Innovation <br/> strategy</h3>
                            <p>Innovation as a service 
                            Design thinking service
                            Innovation sprint
                            system design
                            </p>
                        </div>
                    </div>
                    <div className="col">
                    <div className="ml-4">
                        <RiBuilding2Line size={100} />
                        </div>
                        <div className="mr-3">
                            <h3>Innovation <br/> strategy</h3>
                            <p>Innovation as a service 
                            Design thinking service
                            Innovation sprint
                            system design
                            </p>
                        </div>
                    </div>
                    <div className="col">
                    <div className="ml-4">
                        <MdLaptopChromebook size={100} />
                        </div>
                        <div className="mr-3">
                            <h3>Innovation <br/> strategy</h3>
                            <p>Innovation as a service 
                            Design thinking service
                            Innovation sprint
                            system design
                            </p>
                        </div>
                    </div>
                    <div className="col">
                    <div className="ml-4">
                        <AiOutlineBulb size={100} />
                        </div>
                        <div className="mr-3">
                            <h3>Innovation <br/> strategy</h3>
                            <p>Innovation as a service 
                            Design thinking service
                            Innovation sprint
                            system design
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="col-12 mt-5">
                <div className="container bg-light">
                     <div className="row mt-3">
                        <div className="col m-3">
                            <h3>Our Practice area<span className="ml-3 ">_____</span></h3>
                            <p>Innovation as a service 
                            Design thinking service
                            Innovation sprint
                            system design
                            Innovation as a service 
                            Design thinking service
                            Innovation sprint
                            system design</p>
                        </div>
                    </div>
                    <div className="row m-1">
                        <div className="col-md-3">
                            <img width="100%" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="woman" />
                        </div>
                        <div className="col-md-3">
                            <img width="100%" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="woman" />
                        </div>
                        <div className="col-md-3">
                            <img width="100%" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="woman" />
                        </div>
                        <div className="col-md-3 ">
                            <img width="100%" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="woman" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-12 bg-dark">
                <div className="container text-white">
                    <div className="row">
                        <div className="col mt-5 mb-5 text-center">
                            <div className="mt-5">
                                <h1>WE'D LOVE TO HEAR FROM YOU</h1>
                                <button
                                style={{padding:'10px 40px',
                                backgroundColor:'transparent',
                                border:"1px solid white",
                                color:'white',
                                borderRadius:'3px',
                                marginTop:'10px'
                            }}
                                >CONTACT US</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Service;