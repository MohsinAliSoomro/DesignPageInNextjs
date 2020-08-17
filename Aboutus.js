import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
const Aboutus = () => {
    return (
        <div className="row">
            <div className="col-12">
                <div
                    style={{
                        position: "relative",
                        textAlign: 'center',
                        color: 'white'
                    }}>
                    <img width="100%" src="https://images.unsplash.com/photo-1531303919131-9df51d2b0cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Card image" />
                    <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
                        <h1>LOGO</h1>
                    </div>
                    <div style={{
                        position: "absolute",
                        top: '50%',
                        left: '30%'
                    }}>
                        <h1>PLAY IS BUILT INTO OUR DAY</h1>
                        <p>We ceate smart experience We ceate smart experience</p>
                    </div>
                </div>
            </div>
            <div className="col-12 mt-5">
                <div
                    style={{
                        position: "relative",
                        color: 'white'
                    }}>
                    <img width="100%" src="https://images.unsplash.com/photo-1531303919131-9df51d2b0cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Card image" />
                    <div style={{
                        position: "absolute",
                        top: '5%',
                        left: '55%',
                        right: '5%'
                    }}>
                        <h1>James word</h1>
                        <p style={{ color: 'grey' }}><i>creative director</i></p>
                        <p>We ceate smart experience We ceate smart experience
                        We ceate smart experience We ceate smart experience
                        We ceate smart experience We ceate smart experience
                        We ceate smart experience We ceate smart experience
                        We ceate smart experience We ceate smart experience
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-12 mt-5">
                <div
                    style={{
                        position: "relative",
                        color: 'white'
                    }}>
                    <img width="100%" src="https://images.unsplash.com/photo-1531303919131-9df51d2b0cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Card image" />
                    <div style={{
                        position: "absolute",
                        top: '70%',
                        left: '30%'
                    }}>
                        <h1>Let's build an amazing team together </h1>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <button style={{
                                padding: '5px 20px',
                                backgroundColor: '#cc2944',
                                color: 'white',
                                border: '0px',
                                borderRadius: '4px'
                            }}>HIRE YOUR TEAM
                        <span style={{ marginLeft: '5px' }}>
                                    <BsArrowRightShort size={20} />
                                </span>
                            </button>
                            <button style={{
                                padding: '5px 20px',
                                backgroundColor: '#cc2944',
                                color: 'white',
                                border: '0px',
                                borderRadius: '4px'
                            }}>JOIN OUR TEAM
                        <span style={{ marginLeft: '5px' }}>
                                    <BsArrowRightShort size={20} />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 mt-5">
                <div
                    style={{
                        position: "relative",
                        color: 'white'
                    }}>
                    <img width="100%" src="https://images.unsplash.com/photo-1531303919131-9df51d2b0cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Card image" />
                    <div style={{
                        position: "absolute",
                        top: '10%',
                        left: '10%'
                    }}>
                        <div style={{ borderTop: '3px solid white', width: '70px', height: '10px' }}>
                        </div>
                        <h1>Our Values </h1>
                        <div style={{ display: 'flex' }}>
                            <div style={{ margin: '40px 0px', fontSize: '20px' }}>
                                <p>Always cretive</p>
                                <p>Stay young</p>
                                <p>Be proactive</p>
                            </div>
                            <div style={{ margin: '40px 0px',marginLeft:'200px', fontSize: '20px' }}>
                                <p>Always cretive</p>
                                <p>Stay young</p>
                                <p>Be proactive</p>
                            </div>
                            <div style={{ margin: '40px 0px',marginLeft:'200px', fontSize: '20px' }}>
                                <p>Always cretive</p>
                                <p>Stay young</p>
                                <p>Be proactive</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Aboutus;