import React, { useState } from 'react';
import { RiMenu2Line } from 'react-icons/ri'
import { TiArrowUnsorted } from 'react-icons/ti'
import { BsPencil } from 'react-icons/bs'
import Slider from "react-slick";
import { MdAssessment } from 'react-icons/md'
import StarRatingComponent from 'react-star-rating-component';
import { Carousel } from 'reactstrap';
const Classified2 = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows:true,
    };

    const [rating, setRatting] = useState('');
    const onStarClick = () => {
        setRatting(rating)
    }

    return (
        <div className="container-fluid bg-light">
            <div className="row">
                <div className="col text-center">
                    <div
                        style={{
                            position: "relative",
                            color: 'white'
                        }}>
                        <img width="100%" src="https://images.unsplash.com/photo-1554774853-b3d587d95440?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1763&q=80" alt="Card image" />
                        <div style={{
                            position: "absolute",
                            top: '20%',
                            left: '30%',
                        }}>
                            <h1 style={{ fontSize: '60px' }}>Online Market Place</h1>
                            <p>By Sales of lease equipment
                        </p>
                            <button
                                style={{
                                    padding: '7px 30px',
                                    backgroundColor: '#eb3141',
                                    color: 'white',
                                    border: '1px solid grey',
                                    borderRadius: '4px'
                                }}
                            >Show Me The Tools</button>
                        </div>
                        <div style={{
                            position: "absolute",
                            bottom: '0%',
                            left: '0%',
                        }}>
                            <div style={{ backgroundColor: 'black', height: '60px', width: '1235px', opacity: '50%', borderRadius: '5px' }}>
                            </div>
                            <div style={{
                                position: "absolute",
                                top: '25%',
                                left: '1%'
                            }}>
                                <h5 style={{ color: 'red' }}>Healthcare Procedure <span style={{ color: 'white' }}>
                                    Healthcare Procedure Healthcare Procedure Healthcare Procedure
                                    Healthcare Procedure
                                </span>
                                </h5>
                            </div>
                            <div style={{
                                position: "absolute",
                                top: '0%',
                                left: '1%'
                            }}>
                                <div style={{ borderTop: '1px solid red', height: '10px', width: "200px" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <hr style={{ boxShadow: '1px 1px rgba(0,0,0,0.10)' }} />
                    <div>
                        <p>Departments</p>
                        <p style={{ marginLeft: '20px' }}>Play Station 4</p>
                        <ul style={{ listStyleType: 'none' }}>
                            <li>Accessories</li>
                            <li>Console</li>
                            <li>Accessories</li>
                            <li>Console</li>
                            <li>Accessories</li>
                            <li>Console</li>
                        </ul>
                        <p>Avg Customer review</p>

                        <ul style={{ listStyleType: 'none' }}>
                            <li style={{ display: 'flex' }}><StarRatingComponent
                                name="rate1"
                                starCount={5}
                                value={rating}
                                onStarClick={onStarClick}
                                emptyStarColor="black"
                                starColor="yellow"
                            /><span>& up</span></li>
                            <li style={{ display: 'flex' }}><StarRatingComponent
                                name="rate1"
                                starCount={5}
                                value={rating}
                                onStarClick={onStarClick}
                                emptyStarColor="black"
                                starColor="yellow"
                            /><span>& up</span></li>
                            <li style={{ display: 'flex' }}><StarRatingComponent
                                name="rate1"
                                starCount={5}
                                value={rating}
                                onStarClick={onStarClick}
                                emptyStarColor="black"
                                starColor="yellow"
                            /><span>& up</span></li>
                            <li style={{ display: 'flex' }}><StarRatingComponent
                                name="rate1"
                                starCount={5}
                                value={rating}
                                onStarClick={onStarClick}
                                emptyStarColor="black"
                                starColor="yellow"
                            /><span>& up</span></li>
                        </ul>
                    </div>
                    <div>
                        <p style={{ marginLeft: '10px' }}>Features Brands</p>
                        <ul style={{ listStyleType: 'none' }}>
                            <li><input type="checkbox" /><span style={{ marginLeft: '5px' }}>Accessories</span></li>
                            <li><input type="checkbox" /><span style={{ marginLeft: '5px' }}>Accessories</span></li>
                            <li><input type="checkbox" /><span style={{ marginLeft: '5px' }}>Accessories</span></li>
                            <li><input type="checkbox" /><span style={{ marginLeft: '5px' }}>Accessories</span></li>
                            <li><input type="checkbox" /><span style={{ marginLeft: '5px' }}>Accessories</span></li>
                            <li><input type="checkbox" /><span style={{ marginLeft: '5px' }}>Accessories</span></li>
                            <li><a>See More...</a></li>
                        </ul>
                    </div>
                    <div>
                        <p style={{ padding: '0px 10px' }}>Price</p>
                        <ul style={{ listStyleType: 'none' }}>
                            <li>Under $10</li>
                            <li>Under $10</li>
                            <li>Under $10</li>
                            <li>Under $10</li>
                            <li>Under $10</li>
                            <li>Under $10</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-12 mt-3">
                            <Carusel />
                        </div>
                        <div className="col-md-12 mt-3">
                            <Carusel />
                        </div>
                        <div className="col-md-12 mt-3">
                            <Carusel />
                        </div>
                        <div className="col-md-12 mt-3">
                            <Carusel />
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <COl3 />
                </div>
            </div>
        </div>
    )
}
export default Classified2

const Carusel = () => {
    return (
        <div className="row">
            <div className="col-md-4">
                <div style={{ maxWidth: '250px', margin: '0px 10px', position: 'relative' }} className="shadow p-3 mb-5 bg-white rounded">
                    <img width="100%" src="https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                    <p>Name</p>
                    <p>Category</p>
                    <div style={{
                        position: 'absolute',
                        top: '10%',
                        left: '10%',
                        backgroundColor: 'black',
                        width: '80px',
                        height: '28px',
                        opacity: '50%',
                        borderRadius: '5px'
                    }}>
                        <p style={{ color: 'white', textAlign: 'center' }}>For Sale</p>
                    </div>
                    <div style={{
                        position: 'absolute',
                        top: '47%',
                        left: '12%',
                    }}>
                        <button
                            style={{
                                backgroundColor: 'blue',
                                color: 'white',
                                padding: '2px 10px',
                                borderRadius: '4px',
                                border: '1px solid grey'
                            }}
                        >Price Contact for sale</button>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div style={{ maxWidth: '250px', margin: '0px 10px', position: 'relative' }} className="shadow p-3 mb-5 bg-white rounded">
                    <img width="100%" src="https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                    <p>Name</p>
                    <p>Category</p>
                    <div style={{
                        position: 'absolute',
                        top: '10%',
                        left: '10%',
                        backgroundColor: 'black',
                        width: '80px',
                        height: '28px',
                        opacity: '50%',
                        borderRadius: '5px'
                    }}>
                        <p style={{ color: 'white', textAlign: 'center' }}>For Sale</p>
                    </div>
                    <div style={{
                        position: 'absolute',
                        top: '47%',
                        left: '12%',
                    }}>
                        <button
                            style={{
                                backgroundColor: 'blue',
                                color: 'white',
                                padding: '2px 10px',
                                borderRadius: '4px',
                                border: '1px solid grey'
                            }}
                        >Price Contact for sale</button>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div style={{ maxWidth: '250px', margin: '0px 10px', position: 'relative' }} className="shadow p-3 mb-5 bg-white rounded">
                    <img width="100%" src="https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                    <p>Name</p>
                    <p>Category</p>
                    <div style={{
                        position: 'absolute',
                        top: '10%',
                        left: '10%',
                        backgroundColor: 'black',
                        width: '80px',
                        height: '28px',
                        opacity: '50%',
                        borderRadius: '5px'
                    }}>
                        <p style={{ color: 'white', textAlign: 'center' }}>For Sale</p>
                    </div>
                    <div style={{
                        position: 'absolute',
                        top: '47%',
                        left: '12%',
                    }}>
                        <button
                            style={{
                                backgroundColor: 'blue',
                                color: 'white',
                                padding: '2px 10px',
                                borderRadius: '4px',
                                border: '1px solid grey'
                            }}
                        >Price Contact for sale</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Side4Card=()=>{
    return(
        <div style={{ display: 'flex' }}>
                <div style={{ width: '50%' }}>
                    <img width="100%" src="https://images.unsplash.com/photo-1558978806-73073843b15e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                </div>
                <div style={{ fontSize: '9px', width: '50%', marginLeft: '3px' }}>
                    <p>Contact For Price</p>
                    <p>Name</p>
                    <p>Category</p>
                </div>
            </div>
    )
}

const COl3 = () => {
    return (
        <div className="mt-3 shadow-sm p-3 mb-5 bg-white rounded">
            <Side4Card />
            <hr />
            <Side4Card />
            <hr />
            <Side4Card />
            <hr />
            <Side4Card />
        </div>
    )
}