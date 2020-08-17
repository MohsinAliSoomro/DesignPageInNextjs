import React, { useState } from 'react';
import { RiMenu2Line } from 'react-icons/ri'
import { TiArrowUnsorted } from 'react-icons/ti'
import { BsPencil } from 'react-icons/bs'
import Slider from "react-slick";
import { MdAssessment } from 'react-icons/md'
import StarRatingComponent from 'react-star-rating-component';
const Classified1 = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows:true,
    };

    const [rating, setRatting] = useState('');
    const onStarClick = () => {
        setRatting(rating)
    }

    const starcolor = "#FFFF00";
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
                        </div>
                        <div style={{
                            position: "absolute",
                            top: '50%',
                            left: '10%',
                        }}>
                            <div style={{ backgroundColor: 'black', height: '60px', width: '1000px', opacity: '50%', borderRadius: '5px' }}>

                            </div>
                            <div style={{
                                position: "absolute",
                                top: '10%',
                                left: '1%'
                            }}>
                                <input style={{
                                    padding: '11px 25px',
                                    border: '1px solid grey',
                                    borderRadius: '2px',

                                }} type="text" placeholder="All Category" />
                            </div>
                            <div style={{
                                position: "absolute",
                                top: '10%',
                                left: '25%'
                            }}>
                                <input style={{
                                    padding: '11px 400px 11px 30px',
                                    border: '1px solid grey',
                                    borderRadius: '2px',

                                }} type="text" placeholder="Search Keyword" />
                            </div>
                            <div style={{
                                position: "absolute",
                                top: '10%',
                                left: '87%'
                            }}>
                                <button style={{
                                    padding: '11px 35px',
                                    border: '1px solid grey',
                                    borderRadius: '2px',
                                    backgroundColor: 'blue',
                                    color: 'white'

                                }} >Search</button>
                            </div>
                            <div style={{
                                position: "absolute",
                                top: '28%',
                                left: '1%'
                            }}>
                                <RiMenu2Line color="grey" size={20} style={{ marginLeft: '5px' }} />
                            </div>
                            <div style={{
                                position: "absolute",
                                top: '28%',
                                left: '21%'
                            }}>
                                <TiArrowUnsorted color="grey" size={20} />
                            </div>
                            <div style={{
                                position: "absolute",
                                top: '28%',
                                left: '26%'
                            }}>
                                <BsPencil color="grey" size={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <EquipmentIcons />
                        </div>
                        <div className="col-md-6">
                            <EquipmentIcons />
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
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-md-12 mt-3">
                            <Carousels />
                        </div>
                        <div className="col-md-12 mt-3">
                        <Carousels />
                        </div>
                        <div className="col-md-12 mt-3">
                        <Carousels />
                        </div>
                        <div className="col-md-12 mt-3">
                        <Carousels />
                        </div>
                        <div className="col-md-12 mt-3">
                        <Carousels />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Classified1

const EquipmentIcons = () => {
    return (
        <div className="row">
            <div className="col-md-3">
                <div>
                    <MdAssessment size={80} />
                    <p>Accessories</p>
                </div>
            </div>
            <div className="col-md-3">
                <div>
                    <MdAssessment size={80} />
                    <p>Accessories</p>
                </div>
            </div>
            <div className="col-md-3">
                <div>
                    <MdAssessment size={80} />
                    <p>Accessories</p>
                </div>
            </div>
            <div className="col-md-3">
                <div>
                    <MdAssessment size={80} />
                    <p>Accessories</p>
                </div>
            </div>
        </div>
    )
}

const Carousels = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
    };
    return (
        <Slider {...settings}>
            <div>
                <div style={{ maxWidth: '200px', margin: '0px 10px' }}>
                    <img width="100%" src="https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                    <p>Name</p>
                    <p>Price</p>
                    <div style={{ backgroundColor: '#cfcbc0' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <button style={{ margin: '5px 5px', backgroundColor: 'transparent', border: '1px solid grey', borderRadius: '3px' }}>Button1</button>
                            <button style={{ margin: '5px 5px', backgroundColor: 'transparent', border: '1px solid grey', borderRadius: '3px' }}>Button2</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div style={{ maxWidth: '200px', margin: '0px 10px' }}>
                    <img width="100%" src="https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                    <p>Name</p>
                    <p>Price</p>
                    <div style={{ backgroundColor: '#cfcbc0' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <button style={{ margin: '5px 5px', backgroundColor: 'transparent', border: '1px solid grey', borderRadius: '3px' }}>Button1</button>
                            <button style={{ margin: '5px 5px', backgroundColor: 'transparent', border: '1px solid grey', borderRadius: '3px' }}>Button2</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div style={{ maxWidth: '200px', margin: '0px 10px' }}>
                    <img width="100%" src="https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                    <p>Name</p>
                    <p>Price</p>
                    <div style={{ backgroundColor: '#cfcbc0' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <button style={{ margin: '5px 5px', backgroundColor: 'transparent', border: '1px solid grey', borderRadius: '3px' }}>Button1</button>
                            <button style={{ margin: '5px 5px', backgroundColor: 'transparent', border: '1px solid grey', borderRadius: '3px' }}>Button2</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div style={{ maxWidth: '200px', margin: '0px 10px' }}>
                    <img width="100%" src="https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                    <p>Name</p>
                    <p>Price</p>
                    <div style={{ backgroundColor: '#cfcbc0' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <button style={{ margin: '5px 5px', backgroundColor: 'transparent', border: '1px solid grey', borderRadius: '3px' }}>Button1</button>
                            <button style={{ margin: '5px 5px', backgroundColor: 'transparent', border: '1px solid grey', borderRadius: '3px' }}>Button2</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div style={{ maxWidth: '200px', margin: '0px 10px' }}>
                    <img width="100%" src="https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                    <p>Name</p>
                    <p>Price</p>
                    <div style={{ backgroundColor: '#cfcbc0' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <button style={{ margin: '5px 5px', backgroundColor: 'transparent', border: '1px solid grey', borderRadius: '3px' }}>Button1</button>
                            <button style={{ margin: '5px 5px', backgroundColor: 'transparent', border: '1px solid grey', borderRadius: '3px' }}>Button2</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div style={{ maxWidth: '200px', margin: '0px 10px' }}>
                    <img width="100%" src="https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                    <p>Name</p>
                    <p>Price</p>
                    <div style={{ backgroundColor: '#cfcbc0' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <button style={{ margin: '5px 5px', backgroundColor: 'transparent', border: '1px solid grey', borderRadius: '3px' }}>Button1</button>
                            <button style={{ margin: '5px 5px', backgroundColor: 'transparent', border: '1px solid grey', borderRadius: '3px' }}>Button2</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div style={{ maxWidth: '200px', margin: '0px 10px' }}>
                    <img width="100%" src="https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                    <p>Name</p>
                    <p>Price</p>
                    <div style={{ backgroundColor: '#cfcbc0' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <button style={{ margin: '5px 5px', backgroundColor: 'transparent', border: '1px solid grey', borderRadius: '3px' }}>Button1</button>
                            <button style={{ margin: '5px 5px', backgroundColor: 'transparent', border: '1px solid grey', borderRadius: '3px' }}>Button2</button>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
    )
}