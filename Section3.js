import React from 'react';
import { FiMessageCircle } from 'react-icons/fi';
import { WiTime1 } from 'react-icons/wi'
import { FaGreaterThan } from 'react-icons/fa'
import Slider from "react-slick";
const Section3 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 2,
    }
    return (
        <div className="container bg-light">
            <div className="row">
                <div className="col-sm-12 col-md-8">
                    <div className="business-heading">
                        <h5>BUSINESS</h5>
                        <p>VIEW ALL</p>
                    </div>
                    <div className="row">
                        <div className="col mt-1">
                            <div class="card">
                                <img class="card-img-top" src="https://images.unsplash.com/photo-1536528679846-3c5a38e3026b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" alt="Card image cap" />
                                <div class="card-img-overlay mt-5 text-white">
                                    <h5 class="card-title bg-orange">Build Job</h5>
                                    <p class="card-text">How do you land that job after collage?<br /><span>by Tiem Neguyn</span></p>
                                </div>
                                <div class="card-body">
                                    <p class="card-text font-news">Some quick example text to build on the card title and make up the bulk of the card's content...<span className="heading-business-news">readmore</span></p>
                                    <div>
                                        <FiMessageCircle color="orangered" /><span className="business-news-heading">5</span>
                                        <WiTime1 style={{ marginLeft: '20px' }} color="orangered" /><span className="business-news-heading">Jun 07,2015</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="business-news">
                                <p><span className="business-news-heading">People</span><br />Save $700 a year by outsource your house hold bill</p>
                            </div>
                            <div className="business-news">
                                <p><span className="business-news-heading">People</span><br />Save $700 a year by outsource your house hold bill</p>
                            </div>
                            <div className="business-news">
                                <p><span className="business-news-heading">People</span><br />Save $700 a year by outsource your house hold bill</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="business-heading">
                            <h5>TREVEL</h5>
                            <p>VIEW ALL</p>
                        </div>
                        <Slider {...settings}>
                            <div>
                                <div class="card">
                                    <img class="card-img-top" src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" alt="Card image cap" />
                                    <div class="card-img-overlay mt-5 text-white">
                                        <h5 class="card-title bg-orange">Build Job</h5>
                                        <p class="card-text">How do you land that job after collage?<br /><span>by Tiem Neguyn</span></p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="card">
                                    <img class="card-img-top" src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" alt="Card image cap" />
                                    <div class="card-img-overlay mt-5 text-white">
                                        <h5 class="card-title bg-orange">Build Job</h5>
                                        <p class="card-text">How do you land that job after collage?<br /><span>by Tiem Neguyn</span></p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="card">
                                    <img class="card-img-top" src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" alt="Card image cap" />
                                    <div class="card-img-overlay mt-5 text-white">
                                        <h5 class="card-title bg-orange">Build Job</h5>
                                        <p class="card-text">How do you land that job after collage?<br /><span>by Tiem Neguyn</span></p>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4">
                    <div class="card" style={{ width: '100%' }}>
                        <img class="card-img-top" src="https://images.unsplash.com/photo-1530319067432-f2a729c03db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=980&q=80" alt="Card image cap" />
                        <div class="card-img-overlay text-white">
                            <div className="main-quote">
                                <h5 class="card-title">MAIN QUOTE</h5>
                            </div>
                            <p className="quote-text" class="card-text">Desgin is not just what it look like and feels like. Desgin is how it work</p>
                            <p style={{ float: "right" }}>- Steve Jobs</p>
                        </div>
                    </div>
                    <div className="working-tends-container mb-2 mt-2">
                        <div className="shadow-sm p-2 bg-white">
                            <WiTime1 size={24} /><span>WEEK TRENDING</span>
                        </div>
                        <div className="trending-list">
                            <div>Custom Title,Styles,Subtitle,Long Post Pagination and More</div>
                            <div style={{ marginTop: '10  px' }}><FaGreaterThan size={20} color="orangered" /></div>
                        </div>
                        <hr />
                        <div className="trending-list">
                            <div>Custom Title,Styles,Subtitle,Long Post Pagination and More</div>
                            <div style={{ marginTop: '10  px' }}><FaGreaterThan size={20} color="orangered" /></div>
                        </div>
                        <hr />
                        <div className="trending-list">
                            <div>Custom Title,Styles,Subtitle,Long Post Pagination and More</div>
                            <div style={{ marginTop: '10  px' }}><FaGreaterThan size={20} color="orangered" /></div>
                        </div>
                        <hr />
                        <div className="trending-list">
                            <div>Custom Title,Styles,Subtitle,Long Post Pagination and More</div>
                            <div style={{ marginTop: '10  px' }}><FaGreaterThan size={20} color="orangered" /></div>
                        </div>
                        <hr />
                        <div className="trending-list">
                            <div>Custom Title,Styles,Subtitle,Long Post Pagination and More</div>
                            <div style={{ marginTop: '10  px' }}><FaGreaterThan size={20} color="orangered" /></div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}
export default Section3