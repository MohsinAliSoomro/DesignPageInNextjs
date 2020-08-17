import React from 'react';
import { AiFillFacebook, AiTwotoneShopping } from 'react-icons/ai'
import { SocialMediaIconsReact } from 'social-media-icons-react';
import { FaGreaterThan } from 'react-icons/fa'
import { WiTime1 } from 'react-icons/wi'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { IoMdArrowDropright } from 'react-icons/io'
import { FiMessageCircle, FiEdit } from 'react-icons/fi'
const Blog = () => {
    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col-md-8 bg-light">
                    <img width="100%" src="https://images.unsplash.com/photo-1537532051625-c0468e17a4c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                    <Breadcrumb />
                    <BlogPostArticle />
                </div>
                <div className="col-md-4">
                    <div>
                        <FacebookPage />
                        <SubscribeEmail />
                        <SocialMediaLink />
                        <MainQuote />
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-8 bg-light">
                    <ArticleDetails />
                </div>
                <div className="col-4">
                    <TrendingTopics />
                </div>
            </div>
        </div>
    )
}
export default Blog

const BlogPostArticle = () => {
    return (
        <div>
            <h1>Earned $9,000,000 Per Year with a Magazine Website</h1>
            <FiMessageCircle size={18} /><span className="mr-3">5</span>
            <FiEdit size={18} /><span className="mr-3">Ten Nygeyen</span>
            <WiTime1 size={18} /><span>Jun 07,2015</span>
            <hr />
            <div className="row">
                <div className="col-md-6">
                    <img width="100%" src="https://images.unsplash.com/photo-1517178271410-0b2a6480952f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=867&q=80" />
                </div>
                <div className="col-md-6">
                    <div style={{ backgroundColor: '#c4c4c4' }}>
                        <p className="p-4">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s,
                    </p>
                    </div>
                    <div>
                        <p><IoMdArrowDropright /> <span style={{ color: 'orangered', fontSize: '18px' }}>Lorem Ipsum is simply dummy text of the</span></p>
                        <p><IoMdArrowDropright /> <span style={{ color: 'orangered', fontSize: '18px' }}>Lorem Ipsum is simply dummy text of the</span></p>
                    </div>
                </div>
            </div>
            <div>
                <p className="p-3">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard McClintock,
                    a Latin professor at Hampden-Sydney College in Virginia, looked
                    up one of the more obscure Latin words, consectetur, from a Lorem
                    Ipsum passage, and going through the cites of the word in
                    classical literature, discovered the undoubtable source.
                    Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                    Finibus Bonorum et Malorum" (The Extremes of Good and Evil)
                    by Cicero, written in 45 BC. This book is a treatise on the
                    theory of ethics, very popular during the Renaissance. The
                    first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                    comes from a line in section 1.10.32.

                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for
                    those interested. Sections 1.10.32 and 1.10.33 from "de Finibus
                    Bonorum et Malorum" by Cicero are also reproduced in their exact
                    original form, accompanied by English versions from the 1914 translation
                    by H. Rackham.
            </p>
            </div>
        </div>
    )
}

const ArticleDetails = () => {
    return (
        <p className="p-3">
            Contrary to popular belief, Lorem Ipsum is not simply random
            text. It has roots in a piece of classical Latin literature
            from 45 BC, making it over 2000 years old. Richard McClintock,
            a Latin professor at Hampden-Sydney College in Virginia, looked
            up one of the more obscure Latin words, consectetur, from a Lorem
            Ipsum passage, and going through the cites of the word in
            classical literature, discovered the undoubtable source.
            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
            Finibus Bonorum et Malorum" (The Extremes of Good and Evil)
            by Cicero, written in 45 BC. This book is a treatise on the
            theory of ethics, very popular during the Renaissance. The
            first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
            comes from a line in section 1.10.32.

            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for
            those interested. Sections 1.10.32 and 1.10.33 from "de Finibus
            Bonorum et Malorum" by Cicero are also reproduced in their exact
            original form, accompanied by English versions from the 1914 translation
            by H. Rackham.
            Contrary to popular belief, Lorem Ipsum is not simply random
            text. It has roots in a piece of classical Latin literature
            from 45 BC, making it over 2000 years old. Richard McClintock,
            a Latin professor at Hampden-Sydney College in Virginia, looked
            up one of the more obscure Latin words, consectetur, from a Lorem
            Ipsum passage, and going through the cites of the word in
            classical literature, discovered the undoubtable source.
            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
            Finibus Bonorum et Malorum" (The Extremes of Good and Evil)
            by Cicero, written in 45 BC. This book is a treatise on the
            theory of ethics, very popular during the Renaissance. The
            first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
            comes from a line in section 1.10.32.

            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for
            those interested. Sections 1.10.32 and 1.10.33 from "de Finibus
            Bonorum et Malorum" by Cicero are also reproduced in their exact
            original form, accompanied by English versions from the 1914 translation
            by H. Rackham.
            Contrary to popular belief, Lorem Ipsum is not simply random
            text. It has roots in a piece of classical Latin literature
            from 45 BC, making it over 2000 years old. Richard McClintock,
            a Latin professor at Hampden-Sydney College in Virginia, looked
            up one of the more obscure Latin words, consectetur, from a Lorem
            Ipsum passage, and going through the cites of the word in
            classical literature, discovered the undoubtable source.
            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
            Finibus Bonorum et Malorum" (The Extremes of Good and Evil)
            by Cicero, written in 45 BC. This book is a treatise on the
            theory of ethics, very popular during the Renaissance. The
            first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
            comes from a line in section 1.10.32.

            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for
            those interested. Sections 1.10.32 and 1.10.33 from "de Finibus
            Bonorum et Malorum" by Cicero are also reproduced in their exact
            original form, accompanied by English versions from the 1914 translation
            by H. Rackham.
        </p>
    )
}

const Breadcrumb = () => {
    return (
        <div className="mt-2">
            <ul style={{ listStyleType: 'none', display: 'inline-flex' }}>
                <li><a style={{ textDecoration: 'none', color: 'orangered' }} href="#"> Home</a> <MdKeyboardArrowRight /></li>
                <li><a style={{ textDecoration: 'none', color: 'orangered' }} href="#"> Business</a> <MdKeyboardArrowRight /></li>
                <li><a style={{ textDecoration: 'none', color: 'orangered' }} href="#"> Stuff Pick</a> <MdKeyboardArrowRight /></li>
            </ul>
        </div>
    )
}


const TrendingTopics = () => {
    return (
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
    )
}


const MainQuote = () => {
    return (
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
    )
}

const SocialMediaLink = () => {
    return (
        <div className="working-tends-container mb-2 mt-2">
            <div className="shadow-sm p-2 bg-white">
                <span>100+ Social Counters</span>
            </div>
            <div className="trending-list mt-3">
                <div>
                    <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="twitter" iconColor="rgba(29,161,242,1)" backgroundColor="rgba(255,255,255,1)" iconSize="5" roundness="50%" url="https://some-website.com/my-social-media-url" size="34" />
                    <span>266 <i style={{ color: "gray" }}>Follewers</i></span>
                </div>
                <div className="twitter-background-color"><p className="follow-font">Follow</p></div>
            </div>
            <hr />
            <div className="trending-list ">
                <div>
                    <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="facebook" iconColor="rgba(59,89,152,1)" backgroundColor="rgba(255,255,255,1)" iconSize="5" roundness="50%" url="https://some-website.com/my-social-media-url" size="34" />
                    <span>266 <i style={{ color: "gray" }}>Likes</i></span>
                </div>
                <div className="facebook-background-color"><p className="follow-font">Like</p></div>
            </div>
            <hr />
            <div className="trending-list ">
                <div>
                    <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="googleplus" iconColor="rgba(219,74,57,1)" backgroundColor="rgba(255,255,255,1)" iconSize="5" roundness="50%" url="https://some-website.com/my-social-media-url" size="34" />
                    <span>266 <i style={{ color: "gray" }}>Follewers</i></span>
                </div>
                <div className="googleplus-background-color"><p className="follow-font">Follow</p></div>
            </div>
            <hr />
            <div className="trending-list ">
                <div>
                    <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="pinterest" iconColor="rgba(230,0,35,1)" backgroundColor="rgba(255,255,255,1)" iconSize="5" roundness="50%" url="https://some-website.com/my-social-media-url" size="34" />
                    <span>266 <i style={{ color: "gray" }}>Follewers</i></span>
                </div>
                <div className="pinterest-background-color"><p className="follow-font">Follow</p></div>
            </div>
            <hr />
            <div className="trending-list ">
                <div>
                    <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="linkedin" iconColor="rgba(14,118,168,1)" backgroundColor="rgba(255,255,255,1)" iconSize="5" roundness="50%" url="https://some-website.com/my-social-media-url" size="34" />
                    <span>266 <i style={{ color: "gray" }}>Connections</i></span>
                </div>
                <div className="linkedin-background-color"><p className="follow-font">Connect</p></div>
            </div>
            <hr />
            <div className="trending-list ">
                <div>
                    <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="behance" iconColor="rgba(5,62,255,1)" backgroundColor="rgba(255,255,255,1)" iconSize="5" roundness="50%" url="https://some-website.com/my-social-media-url" size="34" />
                    <span>266 <i style={{ color: "gray" }}>Follewers</i></span>
                </div>
                <div className="behance-background-color"><p className="follow-font">Follow</p></div>
            </div>
            <hr />
            <div className="trending-list">
                <div>
                    <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="rss" iconColor="rgba(238,128,47,1)" backgroundColor="rgba(255,255,255,1)" iconSize="5" roundness="50%" url="https://some-website.com/my-social-media-url" size="34" />
                    <span>266 <i style={{ color: "gray" }}>Readers</i></span>
                </div>
                <div className="rss-background-color"><p className="follow-font">Follow</p></div>
            </div>
        </div>
    )
}


const SubscribeEmail = () => {
    return (
        <div class="card mb-3 mt-4">
            <div class="card-header shadow-sm p-3 bg-white rounded">Email News Latter</div>
            <div class="card-body ">
                <form>
                    <label>Subscribe to receive inspiration, ideas, and news in your inbox</label>
                    <div style={{ marginTop: '10px', marginLeft: '5px' }}>
                        <input type="text" className="newslatter-inp" placeholder="Email Address" />
                        <button className="btn-submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}



const FacebookPage = () => {
    return (
        <div>
            <img className="card-img-top" src="https://images.unsplash.com/photo-1536528679846-3c5a38e3026b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" alt="Card image cap" />
            <div className="card-img-overlay text-white">
                <div className="facebook-links">
                    <img src="https://images.unsplash.com/photo-1505489435671-80a165c60816?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=831&q=80" />
                    <p>Page Name <br /> 1111 Likes</p>
                </div>
                <div className="facebook-link-bottom">
                    <button><AiFillFacebook size={14} color="blue" /><a href="#">Like Page</a></button>
                    <button><AiTwotoneShopping size={14} color="black" /><a href="#">Shop Now</a></button>
                </div>
            </div>
        </div>
    )
}