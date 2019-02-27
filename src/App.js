import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

              <div className="preloader">
        <div className="cssload-preloader cssload-loading">
            <span className="cssload-slice"></span>
            <span className="cssload-slice"></span>
            <span className="cssload-slice"></span>
            <span className="cssload-slice"></span>
            <span className="cssload-slice"></span>
            <span className="cssload-slice"></span>
        </div>
    </div>


    <div className="wrapper">

        <header id="welcome" className="bg-slider parallax">
            <div className="overlay">

                <div className="navbar navbar-default navbar-fixed-top">
                    <div className="container">

                        <div className="col-sm-4 col-xs-6">
                            <a className="navbar-brand" href="index.html"><img src="assets/img/myName2.png" alt="site logo" /></a>

                        </div>

                        <div className="col-sm-8 col-xs-6">
                            <nav className="okayNav" id="nav-main">
                                <ul>
                                    <li><a href="#welcome">HOME</a> </li>
                                    <li><a href="#about">ABOUT</a> </li>
                                    <li><a href="#portfolio">PORTFOLIO</a> </li>
                                    <li><a>CONTACT</a></li>
                                    <li><a href="https://linkedin.com/in/rayke"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="mailto:shihcke@gmail.com"><i class="fa fa-envelope-o" aria-hidden="true"></i></a></li>
                                </ul>
                            </nav>
                        </div>

                    </div>
                </div>
                <div className="container welcome-inner">
                    <div className="row">

                        <div className="col-sm-12 welcome-heading">
                            <h1 className="welcome-title wow fadeInDown" data-wow-delay="0.5s" data-wow-duration="0.5s"><span>Full Stack Developer</span> <br /> based in Toronto, ON.</h1>
                            <p className="welcome-text wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="0.5s">The portfolio of Ray Ke
                                <br/> </p>
                        </div>

                    </div>
                </div>

            </div>
        </header>


        <section id="about">
            <div className="container section-padding">
                <div className="row">
                    <div className="col-md-6 about-content wow fadeInLeft">

                        <header className="about-header text-left">
                            <h2> RAY KE</h2>
                        </header>
                        I enjoy solving problems with technical knowledge and commercial skills. Former B2B account manager with extensive vision and business acumen in tech-driven industries. I am passionate at creating commercial values with science and engineering know-how. Highly interested and experienced in software and mobile apps for commercial applications.

                        <p className="about-text">
                        </p>

                        <a href="assets/resume-port.pdf" className="btn-rect btn-about">Resume</a>


                    </div>
                    <div className="col-md-6 about-img wow fadeInRight">

                        <div className="block-center">
                            <img src="assets/img/aboutme.png" alt="about" className="img-responsive" />
                        </div>

                    </div>
                </div>
            </div>
        </section>



        <section id="step">
            <div className="container section-padding text-center">

                <header className="section-header">
                    <h2 className="wow fadeInDown">Skills</h2>
                    <p className="wow fadeInUp"></p>
                </header>

                <div className="row step-line">

                    <div className="col-sm-4 step-box algin-left">
                        <i className="fa fa-desktop"></i>
                        <h3>Web Development</h3>
                        <p>
                          <span>Front end - React, HTML, CSS, Ajax, JQuery</span><br />
                          <span>Back end  - Javascript, Node.js, Express, Rails</span>
                        </p>
                    </div>


                    <div className="col-sm-4 step-box align-center">
                        <i className="fa fa-object-group"></i>
                        <h3>Programming</h3>
                        <p>
                          <span>Java, Javascript, Python, Ruby</span><br />
                          <span>SQL, MongoDB, PostgreSQL</span>
                        </p>
                    </div>


                    <div className="col-sm-4 step-box align-right">
                        <i className="fa fa-bar-chart"></i>
                        <h3>Business Management</h3>
                        <p>
                          <span>B2B selling, Account management, <br />
                          Supplier management, Strategic sourcing</span><br />
                        </p>
                    </div>

                </div>
            </div>
        </section>






        <section id="portfolio">
            <div className="section-padding">

                <header className="container section-header text-center">
                    <h2 className="wow fadeInDown">PORTFOLIO</h2>
                    <p className="wow fadeInUp"></p>
                </header>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">

                            <ul id="filter">
                                <li><a className="active" href="#" data-group="all">All Categories</a></li>
                                <li><a href="#" data-group="web">Web Development</a></li>
                                <li><a href="#" data-group="mobile">Mobile Applications</a></li>
                                <li><a href="#" data-group="games">Games</a></li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className="container-fluid padding-zero">
                    <div className="row">
                        <div className="col-sm-12 padding-zero">

                            <div id="pfolio-content">

                                <div className="item item-width " data-groups='["all", "games"]'>
                                    <div className="item-wrap">
                                        <div className="item-inner">
                                            <div><img src="assets/img/item/nodejs.png" height="49" width="80"/></div>
                                            <a href="#portfolio-1" className="project-link inline-popup-trigger">

                                                <img src="assets/img/item/jbgame4.png" alt="Featured Work" height="280" width="331" />


                                            </a>
                                        </div>

                                        <div id="portfolio-1" className="inline-popup mfp-hide">
                                            <div className="inline-popup-inner">
                                                <div className="row">
                                                    <div className="col-md-8 project-main">

                                                        <img src="assets/img/portfolio/project-view/jbcontent.png" alt="" />
                                                    </div>
                                                    <div className="col-md-4 project-sidebar">

                                                        <div className="project-sb-widget project-client">
                                                            <h2>Name</h2>
                                                            <p className="client-name">Jurrasic Brawl</p>
                                                        </div>

                                                        <div className="project-sb-widget project-task">
                                                            <h2>Description</h2>
                                                            <p className="task-name">Jurassic Brawl is a classic 2D multiplayer game in the vein of Nintendo's Super Smash Bros.</p>
                                                        </div>

                                                        <div className="project-sb-widget project-category">
                                                            <h2>Stack</h2>
                                                            <p className="cat-name">Node.js, Express, Socket.io, Phaser, MongoDB</p>
                                                        </div>

                                                        <a href="https://github.com/RayCJ87/jurassic_brawl" className="btn-rect btn-more">View Project</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <a className="inline-popup-close" href="#"><i className="fa fa-times"></i></a>
                                        </div>

                                    </div>
                                </div>


                                <div className="item item-width " data-groups='["all", "mobile"]'>
                                    <div className="item-wrap">
                                        <div className="item-inner">
                                        <div><img src="assets/img/item/Java.png" height="45" width="25"/></div>
                                            <a href="#portfolio-2" className="project-link inline-popup-trigger">


                                                <img src="assets/img/item/vcapp.png" alt="Featured Work" height="280" width="331" />


                                            </a>
                                        </div>

                                        <div id="portfolio-2" className="inline-popup mfp-hide">
                                            <div className="inline-popup-inner">
                                                <div className="row">
                                                    <div className="col-md-8 project-main">

                                                        <img src="assets/img/portfolio/project-view/vccontent.png" alt="" />
                                                    </div>
                                                    <div className="col-md-4 project-sidebar">

                                                        <div className="project-sb-widget project-client">
                                                            <h2>Name</h2>
                                                            <p className="client-name">Visit Canada</p>
                                                        </div>

                                                        <div className="project-sb-widget project-task">
                                                            <h2>Description</h2>
                                                            <p className="task-name">A basic Canaadian city information app for travelers. Built with Java for Android.</p>
                                                        </div>

                                                        <div className="project-sb-widget project-category">
                                                            <h2>Stack</h2>
                                                            <p className="cat-name">Java</p>
                                                        </div>

                                                        <a href="https://github.com/RayCJ87/VisitCanada" className="btn-rect btn-more">View Project</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <a className="inline-popup-close" href="#"><i className="fa fa-times"></i></a>
                                        </div>

                                    </div>
                                </div>


                                <div className="item item-width " data-groups='["all", "web"]'>
                                    <div className="item-wrap">
                                        <div className="item-inner">
                                            <div><img src="assets/img/item/ajax.png" height="48" width="90"/></div>

                                            <a href="#portfolio-3" className="project-link inline-popup-trigger">


                                                <img src="assets/img/item/tweeterlogo.png" alt="Featured Work" height="280" width="331" />

                                            </a>
                                        </div>

                                        <div id="portfolio-3" className="inline-popup mfp-hide">
                                            <div className="inline-popup-inner">
                                                <div className="row">
                                                    <div className="col-md-8 project-main">

                                                        <img src="assets/img/portfolio/project-view/tweetercontent.png" alt="" />
                                                    </div>
                                                    <div className="col-md-4 project-sidebar">

                                                        <div className="project-sb-widget project-client">
                                                            <h2>Name</h2>
                                                            <p className="client-name">Tweeter</p>
                                                        </div>

                                                        <div className="project-sb-widget project-task">
                                                            <h2>Description</h2>
                                                            <p className="task-name">Tweeter is a simple, single-page Twitter clone.</p>
                                                        </div>

                                                        <div className="project-sb-widget project-category">
                                                            <h2>Stack</h2>
                                                            <p className="cat-name">Node.js, Express, MongoDB, JQuery, AJAX</p>
                                                        </div>

                                                        <a href="https://github.com/RayCJ87/tweeter" className="btn-rect btn-more">View Project</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <a className="inline-popup-close" href="#"><i className="fa fa-times"></i></a>
                                        </div>

                                    </div>
                                </div>


                                <div className="item item-width " data-groups='["all", "web"]'>
                                    <div className="item-wrap">
                                        <div className="item-inner">
                                            <div><img src="assets/img/item/react.png" height="45" width="45"/></div>
                                            <a href="#portfolio-4" className="project-link inline-popup-trigger">
                                                <img src="assets/img/item/chattyapp.png" alt="Featured Work" height="280" width="331" />

                                            </a>
                                        </div>

                                        <div id="portfolio-4" className="inline-popup mfp-hide">
                                            <div className="inline-popup-inner">
                                                <div className="row">
                                                    <div className="col-md-8 project-main">

                                                        <img src="assets/img/portfolio/project-view/chattycontent.png" alt="" />
                                                    </div>
                                                    <div className="col-md-4 project-sidebar">

                                                        <div className="project-sb-widget project-client">
                                                            <h2>Name</h2>
                                                            <p className="client-name">Chatty App</p>
                                                        </div>

                                                        <div className="project-sb-widget project-task">
                                                            <h2>Description</h2>
                                                            <p className="task-name">The Chatty app is an user friendly, easy to use online chatroom made with React.</p>
                                                        </div>

                                                        <div className="project-sb-widget project-category">
                                                            <h2>Stack</h2>
                                                            <p className="cat-name">Node.js, Express, React, Sass</p>
                                                        </div>

                                                        <a href="https://github.com/RayCJ87/ChattyApp" className="btn-rect btn-more">View Project</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <a className="inline-popup-close" href="#"><i className="fa fa-times"></i></a>
                                        </div>

                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>




        <footer id="footer">
            <div className="container section-padding">
                <div className="row">
                    <div className="col-md-6">
                        <div className="copyright">

                            <p>&copy; Ray Ke  2019</p>
                        </div>
                    </div>
                    <div className="col-md-6">

                        <nav className="footer-nav">
                            <a href="#home">HOME</a>
                            <a href="#about">ABOUT</a>
                            <a href="#portfolio">PORTFOLIO</a>
                            CONTACT
                            <a href="https://linkedin.com/in/rayke"> &nbsp; &nbsp;<i className="fa fa-linkedin"></i></a>
                            <a href="mailto:shihcke@gmail.com"><i class="fa fa-envelope-o" aria-hidden="true"></i></a>
                        </nav>

                    </div>
                </div>
            </div>
        </footer>

    </div>


      </div>
    );
  }
}

export default App;
