import React from 'react';
import { Container } from 'react-bootstrap';
import "./About.css"
import img from '../../images/Banglay-IELTS-Profile.jpg'
import qsnImg from '../../images/question.jpg'

const About = () => {

    // This is about section where i set instructor about and course details.

    return (
        <div>
            <Container>
                <div className='p-3'>
                    <div>
                        <h3>About Me</h3>
                        <p>This is Rashed. Founder of "Banglay IELTS". I studied from University of Dhaka. Currently I'am teaching as an IELTS instructor on online.
                            Thank you for reading about me!
                        </p>
                        <img className='about-img-style' src="https://scontent.fdac5-1.fna.fbcdn.net/v/t1.6435-9/43131414_1837912532928938_4495300994640379904_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=19026a&_nc_eui2=AeF4EuDVQZ15JExFFxcz8ZVOZlQx7tcBp8BmVDHu1wGnwJr9F1x0V3UWRNDbchM7rpj9W07uaZIBYFvDTiLtFue6&_nc_ohc=nhFD8HatFnIAX_90QLd&_nc_ht=scontent.fdac5-1.fna&oh=00_AT_7fJf_bFKVnN7XeE5M3Dteed51ncv6p8gyhdOYBI6q3A&oe=622070C5" alt="" />
                    </div>
                    <div>
                        <p className='ielts-result'>আপনার স্কোরের গ্যারান্টি দিতে পারবো না, তবে IELTS এর ভয়ডর দূর করে দিবো।
                            No worries, <b>InSha'Allah</b> valo kicu paben 😊</p>
                    </div>
                    <div className='d-flex'>
                        <div className='w-50'>
                            <div>
                                <h4>Course Details</h4>
                                <p>☆ 2 months duration.</p>
                            </div>
                            <div>
                                <h4>Classes</h4>
                                <p>☆ Total 30+ classes. <br />
                                    ☆ MINIMUM Number of Classes: <br />
                                    ☆ Reading 10 classes <br />
                                    ☆ Writing 10 classes <br />
                                    ☆ Listening 8 classes <br />
                                    ☆ Speaking 5 classes <br />
                                    ☆ Grammar and Structure 2 classes <br />
                                    ☆ Friday Night Free Live Class <br />
                                    ☆ Unlimited Solve Classes <br />
                                    ☆ Per Week 5 classes = 3 main classes + 1 Solve Class + 1 Free live class (every Friday night with a lot of unknown bhai brothers 😊)</p>
                            </div>
                            <div>
                                <h4>Platform:</h4>
                                <h5>☆ Online (Zoom)</h5>
                            </div>
                            <div>
                                <h4>About you</h4>
                                <p>☆ We will ask a few questions before adding you in the DREAM BATCH ❤️</p>
                            </div>
                        </div>
                        <div className='w-50'>
                            <img className='img-fluid' src={img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4>Please Read Carefully:</h4>
                        <p>☆ This is a two-month plan. COURSE FEE TOTAL 8,000 TAKA. You have to pay at the BEGINNING.
                            <span className='ielts-result'> NO instalment and NO Consideration.</span> So, Please DON’T Ask!
                        </p>
                    </div>
                    <div>
                        <h4>If you are HIGHLY interested then please answer the FOLLOWING QUESTIONS on <b>WhatsApp</b>:</h4>
                        <h5>1/ Apnar nam ki?</h5>
                        <h5>2/ Apni ki koren? Job or student?</h5>
                        <h5>3/ Kon institution theke porashuna kortesen/koresen?</h5>
                        <h5>4/ Academic or GT?</h5>
                        <h5>5/ Cambridge boi ase? Thakle Cambridge boi theke ekhn kmn correct hoy, like listening and reading e 40 e koyta correct hoy?
                            r Cambridge boi na thakle, age boi kinen then exam (a full listening and a full reading) diye amk janan.</h5>
                        <h5>6/ Anything you think We NEED to know about you such as previous exam scores, any fun fact about you, or your workplace/experiences etc.</h5>
                    </div>
                    <div className='d-flex'>
                        <div className='w-50'>
                            <img className='img-fluid' src={qsnImg} alt="question" />
                        </div>
                        <div className='w-50 mt-5'>
                            <h5>☆ Again, If you are HIGHLY interested to join us, please answer the above questions. I will reply further details (day, timing and payment procedure) in my CONVENIENT time. So, please have patience and wait.</h5>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;