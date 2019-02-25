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
                                    <li><a href="#blog">BLOG</a> </li>
                                    <li><a href="#contact">CONTACT</a> </li>
                                </ul>
                            </nav>
                        </div>

                    </div>
                </div>
                <div className="container welcome-inner">
                    <div className="row">

                        <div className="col-sm-12 welcome-heading">
                            <h1 className="welcome-title wow fadeInDown" data-wow-delay="0.5s" data-wow-duration="0.5s"><span>Hello,</span> <br /> We're Shape Square</h1>
                            <p className="welcome-text wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="0.5s">Destibulum at magna tellus. Vivamus sagittis et nunc I am aliquet. Viva
                                <br/> mus porta Vestibulum at magna tellus.</p>
                        </div>

                    </div>
                </div>
                <div className="scroll-down">

                    <a href="#about" className="vline"><span></span></a>
                    <p>Scroll Down</p>
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
                        <a href="#" className="btn-rect btn-about">LEARN MORE!</a>

                    </div>
                    <div className="col-md-6 about-img wow fadeInRight">

                        <div className="block-center">
                            <img src="assets/img/about.jpg" alt="about" className="img-responsive" />
                        </div>

                    </div>
                </div>
            </div>
        </section>


        <section id="what-we-do">
            <div className="container section-padding">

                <header className="section-header text-center">
                    <h2 className="wow fadeInDown">What we do</h2>
                    <p className="wow fadeInUp">Lorem Ipsum is simply dummy text of the printing and typesetting industry
                        <br /> been the industry's standard dummy text</p>
                </header>

                <div className="row">
                    <div className="col-md-6">

                        <div className="box box-wide">
                            <i className="fa fa-desktop"></i>
                            <div className="box-wide-inner">
                                <h3>UI / UX Design</h3>
                                <div className="uline"></div>
                                <p>Lorem Ipsum is simply dummy text thprinting andthe industry's standard dummy text lorem Ipsum is simply dummy</p>
                            </div>
                        </div>


                        <div className="box box-wide">
                            <i className="fa fa-mobile"></i>
                            <div className="box-wide-inner">
                                <h3>APP DESIGN</h3>
                                <div className="uline"></div>
                                <p>Lorem Ipsum is simply dummy text thprinting andthe industry's standard dummy text lorem Ipsum is simply dummy</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6">

                        <div className="box box-wide">
                            <i className="fa fa-star"></i>
                            <div className="box-wide-inner">
                                <h3>BRANDING &amp; IDENTY </h3>
                                <div className="uline"></div>
                                <p>Lorem Ipsum is simply dummy text thprinting andthe industry's standard dummy text lorem Ipsum is simply dummy</p>
                            </div>
                        </div>


                        <div className="box box-wide">
                            <i className="fa fa-edit"></i>
                            <div className="box-wide-inner">
                                <h3>PRINT DESIGN</h3>
                                <div className="uline"></div>
                                <p>Lorem Ipsum is simply dummy text thprinting andthe industry's standard dummy text lorem Ipsum is simply dummy</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>


        <section id="counter">
            <div className="overlay">
                <div className="container section-padding">
                    <h2 className="hidden">Counter</h2>
                    <div className="row">

                        <div className="col-md-3 col-sm-6">
                            <div className="counter-box">
                                <p className="icon-counter"> <i className="fa fa-thumbs-o-up"></i>&nbsp;<span className="counting">1580</span></p>
                                <p className="counter-text">Project Done</p>
                                <div className="uline"></div>
                            </div>
                        </div>


                        <div className="col-md-3 col-sm-6">
                            <div className="counter-box">
                                <p className="icon-counter"> <i className="fa fa-heart-o"></i>&nbsp;<span className="counting">2850</span></p>
                                <p className="counter-text">People Loved</p>
                                <div className="uline"></div>
                            </div>
                        </div>


                        <div className="col-md-3 col-sm-6">
                            <div className="counter-box">
                                <p className="icon-counter"> <i className="fa fa-star-o"></i>&nbsp;<span className="counting">1500</span></p>
                                <p className="counter-text">Identify Earn</p>
                                <div className="uline"></div>
                            </div>
                        </div>


                        <div className="col-md-3 col-sm-6">
                            <div className="counter-box">
                                <p className="icon-counter"> <i className="fa fa-bullseye"></i>&nbsp;<span className="counting">1430</span></p>
                                <p className="counter-text">Business Donor</p>
                                <div className="uline"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>


        <section id="step">
            <div className="container section-padding text-center">

                <header className="section-header">
                    <h2 className="wow fadeInDown">THREE SIMPLE STEPS</h2>
                    <p className="wow fadeInUp">Lorem Ipsum is simply dummy text of the printing and typesetting industry
                        <br /> been the industry's standard dummy text</p>
                </header>

                <div className="row step-line">

                    <div className="col-sm-4 step-box algin-left">
                        <i className="fa fa-tablet"></i>
                        <h3>INTEGER VENEATIS</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                    </div>


                    <div className="col-sm-4 step-box align-center">
                        <i className="fa fa-signal"></i>
                        <h3>Moja Loss</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                    </div>


                    <div className="col-sm-4 step-box align-right">
                        <i className="fa fa-random"></i>
                        <h3>KEW AMARE MAIRALA</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                    </div>

                </div>
            </div>
        </section>


        <section id="featured-work">
            <div className="container-fluid section-padding padding-zero">

                <header className="section-header text-center">
                    <h2 className="wow fadeInDown">OUR FEATURED WORK</h2>
                    <p className="wow fadeInUp">Lorem Ipsum is simply dummy text of the printing and typesetting industry
                        <br /> been the industry's standard dummy text</p>
                </header>

                <div className="row">
                    <div className="col-sm-12 padding-zero">
                        <div id="featured-carousel" className="owl-carousel owl-theme">

                            <div className="featured-item">
                                <a href="#featured-1" className="project-link featured-project-trigger">
                                    <span className="hover-bg"></span>

                                    <img src="assets/img/featured-work/featured-work-one.jpg" alt="Featured Work" />

                                    <div className="item-info text-left">
                                        <h3>THE WINTER TAL’S</h3>
                                        <h4>RAF REDWAN</h4>
                                        <div className="uline"></div>
                                    </div>
                                </a>

                                <div id="featured-1" className="inline-popup mfp-hide">
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


                            <div className="featured-item">
                                <a href="#featured-2" className="project-link featured-project-trigger">
                                    <span className="hover-bg"></span>

                                    <img src="assets/img/featured-work/featured-work-two.jpg" alt="Featured Work" />

                                    <div className="item-info text-left">
                                        <h3>THE WINTER TAL’S</h3>
                                        <h4>RAF REDWAN</h4>
                                        <div className="uline"></div>
                                    </div>
                                </a>

                                <div id="featured-2" className="inline-popup mfp-hide">
                                    <div className="inline-popup-inner">
                                        <div className="row">
                                            <div className="col-md-8 project-main">

                                                <img src="assets/img/portfolio/project-view/portfolio-1.jpg" alt="" />
                                            </div>
                                            <div className="col-md-4 project-sidebar">

                                                <div className="project-sb-widget project-client">
                                                    <h2>Client:</h2>
                                                    <p className="client-name">Pain Joe</p>
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


                            <div className="featured-item">
                                <a href="#featured-3" className="project-link featured-project-trigger">
                                    <span className="hover-bg"></span>

                                    <img src="assets/img/featured-work/featured-work-three.jpg" alt="Featured Work" />

                                    <div className="item-info text-left">
                                        <h3>THE WINTER TAL’S</h3>
                                        <h4>RAF REDWAN</h4>
                                        <div className="uline"></div>
                                    </div>
                                </a>

                                <div id="featured-3" className="inline-popup mfp-hide">
                                    <div className="inline-popup-inner">
                                        <div className="row">
                                            <div className="col-md-8 project-main">

                                                <img src="assets/img/portfolio/project-view/portfolio-1.jpg" alt="" />
                                            </div>
                                            <div className="col-md-4 project-sidebar">

                                                <div className="project-sb-widget project-client">
                                                    <h2>Client:</h2>
                                                    <p className="client-name">Train Joe</p>
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


                            <div className="featured-item">
                                <a href="#featured-4" className="project-link featured-project-trigger">
                                    <span className="hover-bg"></span>

                                    <img src="assets/img/featured-work/featured-work-one.jpg" alt="Featured Work" />

                                    <div className="item-info text-left">
                                        <h3>THE WINTER TAL’S</h3>
                                        <h4>RAF REDWAN</h4>
                                        <div className="uline"></div>
                                    </div>
                                </a>

                                <div id="featured-4" className="inline-popup mfp-hide">
                                    <div className="inline-popup-inner">
                                        <div className="row">
                                            <div className="col-md-8 project-main">

                                                <img src="assets/img/portfolio/project-view/portfolio-1.jpg" alt="" />
                                            </div>
                                            <div className="col-md-4 project-sidebar">

                                                <div className="project-sb-widget project-client">
                                                    <h2>Client:</h2>
                                                    <p className="client-name">Claim Joe</p>
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
        </section>

        <section id="exploring">
            <div className="overlay">
                <h2 className="hidden">Xploring</h2>
                <div className="container section-padding text-center">
                    <div className="row">
                        <div className="col-sm-12">

                            <h2 className="wow fadeInLeft">CREATE YOUR OWN BUSINESS WITH OUR IDEAS !</h2>
                            <h3 className="wow fadeInRight">GET READY TO STAND OUT</h3>
                            <a href="#" className="btn-rect btn-xplore wow fadeInUp">KEEP EXPLORING</a>

                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section id="portfolio">
            <div className="section-padding">

                <header className="container section-header text-center">
                    <h2 className="wow fadeInDown">PORTFOLIO</h2>
                    <p className="wow fadeInUp">Lorem Ipsum is simply dummy text of the printing and typesetting industry
                        <br /> been the industry's standard dummy text</p>
                </header>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">

                            <ul id="filter">
                                <li><a className="active" href="#" data-group="all">All Categories</a></li>
                                <li><a href="#" data-group="print">Print</a></li>
                                <li><a href="#" data-group="identity">Identity</a></li>
                                <li><a href="#" data-group="branding">Branding</a></li>
                                <li><a href="#" data-group="web">Web</a></li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className="container-fluid padding-zero">
                    <div className="row">
                        <div className="col-sm-12 padding-zero">

                            <div id="pfolio-content">

                                <div className="item item-width " data-groups='["all", "print"]'>
                                    <div className="item-wrap">
                                        <div className="item-inner">
                                            <a href="#portfolio-1" className="project-link inline-popup-trigger">
                                                <span className="hover-bg"></span>

                                                <img src="assets/img/item/portfolio-one.jpg" alt="Featured Work" height="280" width="331" />

                                                <div className="item-info text-left">
                                                    <h3>THE WINTER TAL’S</h3>
                                                    <h4>RAF REDWAN</h4>
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


                                <div className="item item-width " data-groups='["all", "identity"]'>
                                    <div className="item-wrap">
                                        <div className="item-inner">
                                            <a href="#portfolio-2" className="project-link inline-popup-trigger">
                                                <span className="hover-bg"></span>

                                                <img src="assets/img/item/portfolio-two.jpg" alt="Featured Work" height="280" width="331" />

                                                <div className="item-info text-left">
                                                    <h3>THE WINTER TAL’S</h3>
                                                    <h4>RAF REDWAN</h4>
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


                                <div className="item item-width " data-groups='["all", "branding"]'>
                                    <div className="item-wrap">
                                        <div className="item-inner">
                                            <a href="#portfolio-3" className="project-link inline-popup-trigger">
                                                <span className="hover-bg"></span>

                                                <img src="assets/img/item/portfolio-three.jpg" alt="Featured Work" height="280" width="331" />

                                                <div className="item-info text-left">
                                                    <h3>THE WINTER TAL’S</h3>
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


                                <div className="item item-width " data-groups='["all", "identity"]'>
                                    <div className="item-wrap">
                                        <div className="item-inner">
                                            <a href="#portfolio-4" className="project-link inline-popup-trigger">
                                                <span className="hover-bg"></span>

                                                <img src="assets/img/item/portfolio-four.jpg" alt="Featured Work" height="280" width="331" />

                                                <div className="item-info text-left">
                                                    <h3>THE WINTER TAL’S</h3>
                                                    <h4>RAF REDWAN</h4>
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


                                <div className="item item-width " data-groups='["all", "web"]'>
                                    <div className="item-wrap">
                                        <div className="item-inner">
                                            <a href="#portfolio-5" className="project-link inline-popup-trigger">
                                                <span className="hover-bg"></span>

                                                <img src="assets/img/item/portfolio-five.jpg" alt="Featured Work" height="280" width="331" />

                                                <div className="item-info text-left">
                                                    <h3>THE WINTER TAL’S</h3>
                                                    <h4>RAF REDWAN</h4>
                                                    <div className="uline"></div>
                                                </div>
                                            </a>
                                        </div>

                                        <div id="portfolio-5" className="inline-popup mfp-hide">
                                            <div className="inline-popup-inner">
                                                <div className="row">
                                                    <div className="col-md-8 project-main">

                                                        <img src="assets/img/portfolio/project-view/portfolio-1.jpg" alt="" />
                                                    </div>
                                                    <div className="col-md-4 project-sidebar">

                                                        <div className="project-sb-widget project-client">
                                                            <h2>Client:</h2>
                                                            <p className="client-name">Mane Moe</p>
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
                                            <a href="#portfolio-6" className="project-link inline-popup-trigger">
                                                <span className="hover-bg"></span>

                                                <img src="assets/img/item/portfolio-six.jpg" alt="Featured Work" height="280" width="331" />

                                                <div className="item-info text-left">
                                                    <h3>THE WINTER TAL’S</h3>
                                                    <h4>RAF REDWAN</h4>
                                                    <div className="uline"></div>
                                                </div>
                                            </a>
                                        </div>

                                        <div id="portfolio-6" className="inline-popup mfp-hide">
                                            <div className="inline-popup-inner">
                                                <div className="row">
                                                    <div className="col-md-8 project-main">

                                                        <img src="assets/img/portfolio/project-view/portfolio-1.jpg" alt="" />
                                                    </div>
                                                    <div className="col-md-4 project-sidebar">

                                                        <div className="project-sb-widget project-client">
                                                            <h2>Client:</h2>
                                                            <p className="client-name">Sexana</p>
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


                                <div className="item item-width " data-groups='["all", "print"]'>
                                    <div className="item-wrap">
                                        <div className="item-inner">
                                            <a href="#portfolio-7" className="project-link inline-popup-trigger">
                                                <span className="hover-bg"></span>

                                                <img src="assets/img/item/portfolio-seven.jpg" alt="Featured Work" height="280" width="331" />

                                                <div className="item-info text-left">
                                                    <h3>THE WINTER TAL’S</h3>
                                                    <h4>RAF REDWAN</h4>
                                                    <div className="uline"></div>
                                                </div>
                                            </a>
                                        </div>

                                        <div id="portfolio-7" className="inline-popup mfp-hide">
                                            <div className="inline-popup-inner">
                                                <div className="row">
                                                    <div className="col-md-8 project-main">

                                                        <img src="assets/img/portfolio/project-view/portfolio-1.jpg" alt="" />
                                                    </div>
                                                    <div className="col-md-4 project-sidebar">

                                                        <div className="project-sb-widget project-client">
                                                            <h2>Client:</h2>
                                                            <p className="client-name">Sexona</p>
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
                                            <a href="#portfolio-8" className="project-link inline-popup-trigger">
                                                <span className="hover-bg"></span>

                                                <img src="assets/img/item/portfolio-eight.jpg" alt="Featured Work" height="280" width="331" />

                                                <div className="item-info text-left">
                                                    <h3>THE WINTER TAL’S</h3>
                                                    <h4>RAF REDWAN</h4>
                                                    <div className="uline"></div>
                                                </div>
                                            </a>
                                        </div>

                                        <div id="portfolio-8" className="inline-popup mfp-hide">
                                            <div className="inline-popup-inner">
                                                <div className="row">
                                                    <div className="col-md-8 project-main">

                                                        <img src="assets/img/portfolio/project-view/portfolio-1.jpg" alt="" />
                                                    </div>
                                                    <div className="col-md-4 project-sidebar">

                                                        <div className="project-sb-widget project-client">
                                                            <h2>Client:</h2>
                                                            <p className="client-name">Lol Baba</p>
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


        <section id="subscribe">
            <div className="overlay">
                <div className="container section-padding">
                    <div className="row">
                        <div className="col-md-6">

                            <header className="subscribe-header wow fadeInLeft">
                                <h2>SUBSCRIBE TO UPDATE</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            </header>

                        </div>
                        <div className="col-md-6">

                            <form id="mc-form" className="form-inline wow fadeInRight">

                                <input id="mc-email" type="email" placeholder="Enter email address" className="form-control input-label">
                                </input>
                                <button type="submit" className="btn">Subscribe</button>
                                <label for="mc-email"></label>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </section>




        <section id="blog">
            <div className="container section-padding">

                <header className="section-header text-center">
                    <h2 className="wow fadeInDown">LATEST BLOG</h2>
                    <p className="wow fadeInUp">Lorem Ipsum is simply dummy text of the printing and typesetting industry
                        <br /> been the industry's standard dummy text</p>
                </header>

                <div className="row">
                    <div className="col-md-6">

                        <div className="blog-post">
                            <div className="blog-media">

                                <img src="assets/img/blog/blog-one.jpg" alt="blog" />
                            </div>
                            <section className="blog-content">

                                <header className="blog-title">
                                    <a href="" className="blog-permalink"><h2>THE WINTER TAL’S</h2></a>
                                    <a href="#" className="blog-author">Raf Redwan</a>
                                    <div className="uline"></div>
                                </header>

                                <p className="post-excerpt">Lorem ipsum dol. Ut enim minim veniam, qub e eu fugiat anim id. thprinting andthe industrys standard </p>

                                <div className="blog-meta">
                                    <p><i className="fa fa-calendar"></i> 12 th September, 2015</p>
                                </div>
                            </section>
                        </div>

                    </div>
                    <div className="col-md-6">

                        <div className="blog-post">
                            <div className="blog-media">

                                <img src="assets/img/blog/blog-two.jpg" alt="blog" />
                            </div>
                            <section className="blog-content">

                                <header className="blog-title">
                                    <a className="blog-permalink" href=""><h2>THE WINTER TAL’S</h2></a>
                                    <a href="#" className="blog-author">Raf Redwan</a>
                                    <div className="uline"></div>
                                </header>

                                <p className="post-excerpt">Lorem ipsum dol. Ut enim minim veniam, qub e eu fugiat anim id. thprinting andthe industrys standard </p>

                                <div className="blog-meta">
                                    <p><i className="fa fa-calendar"></i> 12 th September, 2015</p>
                                </div>
                            </section>
                        </div>

                    </div>
                </div>
                <a href="blog.html" className="btn-rect btn-more wow fadeIn">View More</a>
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
                            <a href=""><i className="fa fa-facebook"></i></a>
                            <a href=""><i className="fa fa-dribbble"></i></a>
                            <a href=""><i className="fa fa-google-plus"></i></a>
                            <a href=""><i className="fa fa-linkedin"></i></a>
                            <a href=""><i className="fa fa-feed"></i></a>
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
