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
                                    <li><a href="#contact">CONTACT</a> </li>
                                </ul>
                            </nav>
                        </div>

                    </div>
                </div>
                <div className="container welcome-inner">
                    <div className="row">

                        <div className="col-sm-12 welcome-heading">
                            <h1 className="welcome-title wow fadeInDown" data-wow-delay="0.5s" data-wow-duration="0.5s"><span>Full Stack Developer</span> <br /> Web developer based in Toronto, ON.</h1>
                            <p className="welcome-text wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="0.5s">Destibulum at magna tellus. Vivamus sagittis et nunc I am aliquet. Viva
                                <br/> mus porta Vestibulum at magna tellus.</p>
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
                        I am a full stack developer based in beautiful Toronto, Canada.

                        <p className="about-text">
                        </p>
                        <a href="#" class="btn-rect btn-about">Resume</a>


                    </div>
                    <div className="col-md-6 about-img wow fadeInRight">

                        <div className="block-center">
                            <img src="assets/img/aboutme.jpg" alt="about" className="img-responsive" />
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

                                <div className="item item-width " data-groups='["all", "web", "games"]'>
                                    <div className="item-wrap">
                                        <div className="item-inner">
                                            <a href="#portfolio-1" className="project-link inline-popup-trigger">
                                                <span className="hover-bg"></span>

                                                <img src="assets/img/item/jbgame.png" alt="Featured Work" height="280" width="331" />

                                                <div className="item-info text-left">
                                                    <h4>Jurrasic Brawl</h4>
                                                    <div className="uline"></div>
                                                </div>
                                            </a>
                                        </div>

                                        <div id="portfolio-1" className="inline-popup mfp-hide">
                                            <div className="inline-popup-inner">
                                                <div className="row">
                                                    <div className="col-md-8 project-main">

                                                        <img src="assets/img/portfolio/project-view/portfolio-1.jpg" alt="" />
                                                    </div>
                                                    <div className="col-md-4 project-sidebar">

                                                        <div className="project-sb-widget project-client">
                                                            <h2>Client:</h2>
                                                            <p className="client-name">Sam Johad</p>
                                                        </div>

                                                        <div className="project-sb-widget project-task">
                                                            <h2>Task:</h2>
                                                            <p className="task-name">A4 SIZE BROCHURE DESIGN</p>
                                                        </div>

                                                        <div className="project-sb-widget project-category">
                                                            <h2>Category:</h2>
                                                            <p className="cat-name">Print Design</p>
                                                        </div>

                                                        <a href="#" className="btn-rect btn-more">View Project</a>
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
                                            <a href="#portfolio-2" className="project-link inline-popup-trigger">
                                                <span className="hover-bg"></span>

                                                <img src="assets/img/item/portfolio-two.jpg" alt="Featured Work" height="280" width="331" />

                                                <div className="item-info text-left">
                                                    <h4>Visit Canada</h4>
                                                    <div className="uline"></div>
                                                </div>
                                            </a>
                                        </div>

                                        <div id="portfolio-2" className="inline-popup mfp-hide">
                                            <div className="inline-popup-inner">
                                                <div className="row">
                                                    <div className="col-md-8 project-main">

                                                        <img src="assets/img/portfolio/project-view/portfolio-1.jpg" alt="" />
                                                    </div>
                                                    <div className="col-md-4 project-sidebar">

                                                        <div className="project-sb-widget project-client">
                                                            <h2>Client:</h2>
                                                            <p className="client-name">Jane Joe</p>
                                                        </div>

                                                        <div className="project-sb-widget project-task">
                                                            <h2>Task:</h2>
                                                            <p className="task-name">A4 SIZE BROCHURE DESIGN</p>
                                                        </div>

                                                        <div className="project-sb-widget project-category">
                                                            <h2>Category:</h2>
                                                            <p className="cat-name">identity</p>
                                                        </div>

                                                        <a href="#" className="btn-rect btn-more">View Project</a>
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
                                            <a href="#portfolio-3" className="project-link inline-popup-trigger">
                                                <span className="hover-bg"></span>

                                                <img src="assets/img/item/portfolio-three.jpg" alt="Featured Work" height="280" width="331" />

                                                <div className="item-info text-left">
                                                    <h4>RAF REDWAN</h4>
                                                    <div className="uline"></div>
                                                </div>
                                            </a>
                                        </div>

                                        <div id="portfolio-3" className="inline-popup mfp-hide">
                                            <div className="inline-popup-inner">
                                                <div className="row">
                                                    <div className="col-md-8 project-main">

                                                        <img src="assets/img/portfolio/project-view/portfolio-1.jpg" alt="" />
                                                    </div>
                                                    <div className="col-md-4 project-sidebar">

                                                        <div className="project-sb-widget project-client">
                                                            <h2>Client:</h2>
                                                            <p className="client-name">Pane poe</p>
                                                        </div>

                                                        <div className="project-sb-widget project-task">
                                                            <h2>Task:</h2>
                                                            <p className="task-name">A4 SIZE BROCHURE DESIGN</p>
                                                        </div>

                                                        <div className="project-sb-widget project-category">
                                                            <h2>Category:</h2>
                                                            <p className="cat-name">identity</p>
                                                        </div>

                                                        <a href="#" className="btn-rect btn-more">View Project</a>
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
                                            <a href="#portfolio-4" className="project-link inline-popup-trigger">
                                                <span className="hover-bg"></span>

                                                <img src="assets/img/item/portfolio-four.jpg" alt="Featured Work" height="280" width="331" />

                                                <div className="item-info text-left">
                                                    <h4>Chatty app</h4>
                                                    <div className="uline"></div>
                                                </div>
                                            </a>
                                        </div>

                                        <div id="portfolio-4" className="inline-popup mfp-hide">
                                            <div className="inline-popup-inner">
                                                <div className="row">
                                                    <div className="col-md-8 project-main">

                                                        <img src="assets/img/portfolio/project-view/portfolio-1.jpg" alt="" />
                                                    </div>
                                                    <div className="col-md-4 project-sidebar">

                                                        <div className="project-sb-widget project-client">
                                                            <h2>Client:</h2>
                                                            <p className="client-name">Dongoni</p>
                                                        </div>

                                                        <div className="project-sb-widget project-task">
                                                            <h2>Task:</h2>
                                                            <p className="task-name">A4 SIZE BROCHURE DESIGN</p>
                                                        </div>

                                                        <div className="project-sb-widget project-category">
                                                            <h2>Category:</h2>
                                                            <p className="cat-name">identity</p>
                                                        </div>

                                                        <a href="#" className="btn-rect btn-more">View Project</a>
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



        <section id="contact">
            <div className="container section-padding">

                <header className="section-header text-center">
                    <h2 className="wow fadeInDown">GET IN TOUCH</h2>
                    <p className="wow fadeInUp"></p>
                </header>

                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="footer-logo">

                            <img src="assets/img/myName2.png" alt="logo" />
                        </div>

                        <p className="footer-about-text">
                          Business, Technology, Creativity with Passion.
                        </p>

                        <div className="follow-us">
                            <h4>Contact me</h4>
                            <a href=""><i className="fa fa-google-plus"></i></a>
                            <a href=""><i className="fa fa-linkedin"></i></a>
                        </div>

                    </div>
                    <div className="col-sm-6 col-md-offset-2 col-md-6">

                        <form id="contact-form" action="assets/inc/send.php" method="post" name="send">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">

                                        <label for="name">Your Name</label>
                                        <input id="name" name="name" placeholder="Full Name" className="form-control requiredField name input-label" type="text">
                                        </input>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">

                                        <label for="mail">Email</label>
                                        <input id="mail" name="email" placeholder="E-mail" className="form-control requiredField email input-label" type="text">
                                        </input>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">

                                <label for="message">Message</label>
                                <textarea id="message" name="message" placeholder="Message" className="form-control requiredField input-label"></textarea>

                            </div>
                            <p>
                                <button name="submit" type="submit" className="btn btn-contact">SEND MAIL</button>
                            </p>
                        </form>

                    </div>
                </div>
            </div>
        </section>


        <footer id="footer">
            <div className="container section-padding">
                <div className="row">
                    <div className="col-md-6">
                        <div className="copyright">

                            <p>&copy; Ray Ke</p>
                        </div>
                    </div>
                    <div className="col-md-6">

                        <nav className="footer-nav">
                            <a href="#home">HOME</a>
                            <a href="#about">ABOUT</a>
                            <a href="#portfolio">PORTFOLIO</a>
                            <a href="#blog">BLOG</a>
                            <a href="#contact">CONTACT</a>
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
