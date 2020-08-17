import React from 'react';
import { AiFillPhone } from 'react-icons/ai';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import Classified1 from './Classified'
import Classified2 from './Classified2'
import Classified3 from './Classified3'
import Section1 from '../blog/Section1'
import Section2 from '../blog/Section2'
import Section3 from '../blog/Section3'
import Blog from './Blog';
const Footer = () => {

  return (
    <div>
    <div className="footer-container" style={{ height: '400px', width: '100%', color: '#afb4bf', backgroundColor: '#001f24' }}>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-sm-12 col-md-3">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ margin: '20px' }}>
                <img style={{ width: '150px' }} src="../../static/images/logo/logonb.png" />
                <p>&copy; MagOne <br /> All rights reserve</p>
                <div style={{ display: "flex" }} className="mb-3">
                  <div><AiFillPhone /></div>
                  <div style={{ marginLeft: '10px' }}>124-2342-234</div>
                </div>
                <div style={{ display: "flex" }} className="mb-3">
                  <div><MdEmail /></div>
                  <div style={{ marginLeft: '10px' }}>Youremailaddress@gmail.com</div>
                </div>
                <div style={{ display: "flex" }}>
                  <div><MdLocationOn /></div>
                  <div style={{ marginLeft: '10px' }}>1718 Park Bouleverd<br /> Marshalltown,IA 50101</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="row mt-5">
              <div className="col-4">
                <p style={{ fontSize: '20px', fontWeight: 'bold' }}>FEATURES</p>
                <div style={{ fontSize: '14px', color: 'grey' }}>
                  <p><a>About</a></p>
                  <p><a>Contact</a></p>
                  <p><a>About</a></p>
                  <p><a>Contact</a></p>
                  <p><a>Contact</a></p>
                </div>
              </div>
              <div className="col-4">
                <p style={{ fontSize: '20px', fontWeight: 'bold' }}>COMPANY</p>
                <div style={{ fontSize: '14px', color: 'grey' }}>
                  <p><a>About</a></p>
                  <p><a>Contact</a></p>
                  <p><a>About</a></p>
                  <p><a>Contact</a></p>
                  <p><a>Contact</a></p>
                </div>
              </div>
              <div className="col-4">
                <p style={{ fontSize: '20px', fontWeight: 'bold' }}>GET STARTED</p>
                <div style={{ fontSize: '14px', color: 'grey' }}>
                  <p><a>About</a></p>
                  <p><a>Contact</a></p>
                  <p><a>About</a></p>
                  <p><a>Contact</a></p>
                  <p><a>Contact</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-3 mt-5">
            <form>
                <label>Weekly Newslatter</label><br/>
                <input type="text" 
                style={{width:'80%',
                backgroundColor:'#afb4bf',
                padding:'5px',
                border:'0px',
                margin:'10px 0px'
                }} placeholder="Your Name" />
                <input type="text" 
                style={{width:'80%',
                backgroundColor:'#afb4bf',
                padding:'5px',
                border:'0px',
                margin:'10px 0px'
                }} placeholder="Your Email" />
                <br/><button 
                style={{width:'80%',
                backgroundColor:'blue',
                fontWeight:'bold',
                color:'white',
                padding:'5px',
                border:'0px',
                margin:'10px 0px'
                }} >Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* <Section1 />
    <Section2 />
    <Section3 /> */}
    <Blog />
    </div>
  )
}

export default Footer;