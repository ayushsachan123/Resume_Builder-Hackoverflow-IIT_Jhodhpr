import React from 'react';
import { useNavigate } from 'react-router-dom';
const Home =() =>{
    let navigate = useNavigate(); 
    
       return(<div>
       
       <div className="container">
        <header>
            <nav className="header__nav w-120">
                <div className="header__logo">
                    <img src="/imagess/logof.png" alt="Logo"/>
                </div>
                <div className="header__nav__content">
                    <div className="nav-close-icon"></div>
                    <ul className="header__menu">
                        <li className="menu__item">
                            <a href="#" className="menu__link active">Resume Template</a>
                        </li>
                        <li className="menu__item">
                            {/* <a href="#" className="menu__link">Builder Dashboard</a> */}
                            <a className="btn" class="menu__link" onClick={()=>{navigate(`/resume-builder`)}}>Builder Dashboard</a> 
                        </li>
                        <li className="menu__item">
                            <a href="#test1" className="menu__link">Contact</a>
                        </li>
                        <li className="menu__item">
                            <a href="#about1" className="menu__link">About</a>
                        </li>
                        <li className="menu__item">
                            <a href="#test" className="menu__link">FAQ</a>
                        </li>
                    </ul>
                    <div className="header__signup">
                       <a className="btn btn__signup" onClick={()=>{navigate(`/login`)}}>
                            <i className="fas fa-user-plus"></i> Login/Sign Up
                        </a>
                    </div>
                </div>

                <div className="hamburger-menu-wrap">
                    <div className="hamburger-menu">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </div>
            </nav>
        </header>

        <section className="hero w-120">
            <div className="hero__content">
                <div className="hero__text">
                    <h1 className="hero__title">The Online Resume Builder</h1>
                    <p className="hero__description">
                   Build Your Desirable And Attractive Resume And Get Yourself Placed At Top-Tier Companies Like Amazon, Mircrosoft etc.
                    </p>
                    {/* <a href="#" className="btn btn__hero">Create Resume</a> */}
                    <a className="btn btn__hero" onClick={()=>{navigate(`/login`)}}>Create Resume</a>
                </div>

                    <div className="img2">
                        <img src="/imagess/front2.png" alt=""/>
                    </div>


            </div>
        </section>

        <section className="opportunities">
            <div className="opportunities__img">
                <img src="imagess/purple_leaf.png" alt=""/>
            </div>
            <div className="opportunities__content w-105">
                <div className="opportunities__head">
                    <h2 className="opportunities__title">Build Your Resume for every career</h2>
                    <p className="opportunities__description">You can pick one of our handcrafted resume templates above. You can start building your resume in less than 5 seconds, using predefined sections approved by recruiters worldwide. You can also customize it to your own needs and personality and hit 'Download'. It's THAT easy to use, even if you've never made a resume in your life before!.</p>
                </div>
                <div className="opportunities__body">
                    <div className="opportunity">

                        <img src="imagess/sample_template1.png" alt="sample template1"/>
                    </div>

                    <div className="opportunity active">
                        <img src="imagess/sample_template4.png" alt="sample template2"/>

                    </div>
                    <div className="opportunity">
                        <img src="imagess/sample_template5.png" alt="Sample Template3"/>

                    </div>
                </div>
            </div>
        </section>

        <section className="invest  w-105">
            <div className="invest__content">
                <div className="invest__head">
                    <h2 className="invest__title">Resume Resources</h2>
                    <p className="invest__description">A resume is a brief summary of personal and professional experiences, skills, and education history. Its main purpose is to show off your best self to potential employers.</p>
                </div>
                <div className="invest__body">
                    <div className="invest__item">
                        <div className="invest__item__head">
                            <h3 className="invest__item__subtitle resummee" >How to Write a Resume for Your First Job?</h3>
                        </div>
                        <div className="invest__item__body">

                            <p className="invest__item_description resources" >
                                The process of writing a resume might seem super scary to you. After all, most resume examples you see on the web are 80% about work experience. So, what the heck can you include in your resume if you have none?

                                Well, here's some good news. If you're applying for an entry-level job or an internship, no one expects you to have ANY work experience.

                                Instead, you should focus on what you DO have: education, projects, volunteering experience, hobbies & interests
                            </p>
                        </div>

                    </div>
                    <div className="invest__item">
                        <div className="invest__item__head">
                            <h3 className="invest__item__subtitle" resummee>What is the Best Resume Template?</h3>
                        </div>
                        <div className="invest__item__body">

                            <p className="invest__item_description resources">
                                There's no such thing as “the best resume template” - every recruiter/employer has their own personal preference. Our general recommendation is to do your research on the company and what their values are'.If you're still not sure which type of template is right for the job you're applying for, you can just use a simple resume template just to be safe.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <section className="how-is-works w-120">
            <div className="works__content">
                <div className="works__head">
                    <h2 className="works__title">How it works</h2>
                    <p className="works__description">
                       Fine Resume is a optimising website. No long and tedious process. No multi-part sign-up form. Just a straightforward process.
                    </p>
                </div>
                <div className="works__body">
                    <ul className="form_progressbar">
                        <li className="progressbar__step active" data-step="1">01</li>
                        <li className="progressbar__step" data-step="2">02</li>
                        <li className="progressbar__step" data-step="3">03</li>
                        <li className="progressbar__step" data-step="4">04</li>
                    </ul>
                </div>
                <div className="works__footer">
                    <div className="works__step__content first_step">
                        <h3 className="works__step_title workk"> Pick a Template.</h3>
                        <p className="works__step_description workk">
                          Choose from our user friendly , hand-crafted templates.
                        </p>
                    </div>
                    <div className="works__step__content">
                        <h3 className="works__step_title workk"> Customize Your Layout.</h3>
                        <p className="works__step_description workk">
                           Customize your layout on your experience level.
                        </p>
                    </div>
                    <div className="works__step__content">
                        <h3 className="works__step_title workk">Fill in the Blanks</h3>
                        <p className="works__step_description workk">
                          See your changes dynamically in real time.
                        </p>
                    </div>
                    <div className="works__step__content">
                        <h3 className="works__step_title workk">Click 'Download!' </h3>
                        <p className="works__step_description workk">
                            Once you complete your basic details , you can download your resume at free of cost.
                        </p>
                    </div>
                </div>
            </div>


        </section>

        <section id="test"className="testimonials">
            <div className="testimonials__content">
                <div className="testimonials__head w-105">

                    <h2 className="testimonials__title">Frequently Asked Questions</h2>
                </div>
                <div className="testimonials__body">
                    <div className="testimonials__list">
                        <div className="testimonial">
                            <div className="testimonial__profile">
                                <div className="testimonial__img">
                                    <img src="imagess/;lmk.jpg" alt="Testimonial"/>
                                </div>
                                <div className="testimonial__info">
                                    <h4 className="testimonial__name">No Experience in Workforce ?</h4>
                                    <h4 className="testimonial__title">No need to worry !</h4>
                                </div>
                            </div>
                            <p className="testimonial__description">Even if you haven't had a lot of experience, we recommend skills to target for the job!

                            </p>
                        </div>
                        <div className="testimonial">
                            <div className="testimonial__profile">
                                <div className="testimonial__img">
                                    <img src="imagess/bkbkk.png" alt="Testimonial"/>
                                </div>
                                <div className="testimonial__info">
                                    <h4 className="testimonial__name"> I have finished my resume , can I download it ?</h4>
                                    <h4 className="testimonial__title">Ofcourse you can !</h4>
                                </div>
                            </div>
                            <p className="testimonial__description">
                               You can simply download your resume by simply clicking on the download button.
                            </p>
                        </div>
                        <div className="testimonial">
                            <div className="testimonial__profile">
                                <div className="testimonial__img">
                                    <img src="imagess/bkbk.png" alt="Testimonial"/>
                                </div>
                                <div className="testimonial__info">
                                    <h4 className="testimonial__name"> Is Fine Resume is safe and legit?</h4>
                                    <h4 className="testimonial__title">Yes , It Is !</h4>
                                </div>
                            </div>
                            <p className="testimonial__description">
                              Your personal data is safe. You can read more about it in the terms of use, privacy policy and cookie policy.
                            </p>
                        </div>
                        <div className="testimonial">
                            <div className="testimonial__profile">
                                <div className="testimonial__img">
                                    <img src="imagess/doarrow.png" alt="Testimonial"/>
                                </div>
                                <div className="testimonial__info">
                                    <h4 className="testimonial__name"> I can't finish my resume right now. Can I come back to it ?</h4>
                                    <h4 className="testimonial__title">Yes , You can !</h4>
                                </div>
                            </div>
                            <p className="testimonial__description">
                                Your resume content is saved and you can edit is as per your convenience.
                            </p>
                        </div>
                        <div className="testimonial">
                            <div className="testimonial__profile">
                                <div className="testimonial__img">
                                    <img src="assets/img/testimonials/1.png" alt="Testimonial"/>
                                </div>
                                <div className="testimonial__info">
                                    <h4 className="testimonial__name"> Is Fine Resume is free?</h4>
                                    <h4 className="testimonial__title">Totally Free.</h4>
                                </div>
                            </div>
                            <p className="testimonial__description">
                               Fine Resume is free to create a resume online with user-friendly interface.
                            </p>
                        </div>

                    </div>
                </div>
                <div className="testimonials__footer  w-105">
                    <div className="testimonials__directions">
                        <button className="btn__testimonials btn__testimonials__prev disable">
                            <i className="fa fa-chevron-left"></i>
                        </button>
                        <button className="btn__testimonials btn__testimonials__next">
                            <i className="fa fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <section id="test1" className="farm-invest w-105">
            <h2 className="farm-invest__title">Write Your <span>Query</span> to us. </h2>
            <a href="mailto:siddhansh1232003@gmail.com" className="btn btn__farm--invest">Email Id</a>
           
        </section>

        <footer className="footer">
            
            <div className="footer__body w-105"/>

            <div className="footer__bottom">
            <h1 id="about1"className="about">About Us</h1>
                <div className="footer__bottom__content w-105">
                    
                <h3>Our mission is to help job seekers grow careers.
                      We love helping people stand out in their job search and get hired faster.
                      We’ve helped over successfully build job-winning resumes, as well as helping countless others win jobs at elite companies.</h3>
                    <div className="footer__logo imgg">
                        <img src="imagess/logof.png" alt="Logo"/>
                    </div>
                    
                </div>
                <p className="footer_copyright">
                        © 2023 Fine Resume. Designed By Team-Xoraz
                    </p>
                <img src="imagess/purple_mountainedited.png" alt="Mountain" className="footer_img"/>
            </div>
        </footer>
    </div>
    </div>);  

}
export default Home;