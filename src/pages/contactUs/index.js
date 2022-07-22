import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { baseURL } from "src/utils/commonConfig";

const ContactUs = () => {
    const [Name, setName] = useState('');
    const [isNameError, setNameErrorFlag] = useState(true);
    const [Email, setEmail] = useState('');
    const [isEmailError, setEmailErrorFlag] = useState(true);
    const [Message, setMessage] = useState('');
    const [isMessageError, setMessageErrorFlag] = useState(true);

    const setType = (vType, vValue) => {
        switch (vType) {
            case 'name':
                if (vValue) {
                    const pattern = new RegExp(/^[a-zA-Z ]*$/);
                    if (pattern.test(vValue)) {
                        setName(vValue);
                        setNameErrorFlag(false);
                    }
                    else {
                        setName(vValue);
                        setNameErrorFlag(true);
                    }
                }
                else {
                    setName(vValue);
                    setNameErrorFlag(true);
                }
                break;
            case 'email':
                if (vValue) {
                    const pattern = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
                    if (pattern.test(vValue)) {
                        setEmail(vValue);
                        setEmailErrorFlag(false);
                    }
                    else {
                        setEmail(vValue);
                        setEmailErrorFlag(true);
                    }
                }
                else {
                    setEmail(vValue);
                    setEmailErrorFlag(true);
                }
                break;
            case 'message':
                if (vValue) {
                    setMessage(vValue);
                    setMessageErrorFlag(false);
                }
                else {
                    setMessage(vValue);
                    setMessageErrorFlag(true);
                }
                break;
            default:
                break;
        }
    }

    const submitContactDetails = async () => {
        debugger
        if (isNameError) {
            toast.error("Please Enter Valid Name");
            return;
        }
        else if (isEmailError) {
            toast.error("Please Enter Valid Email");
            return;
        }
        else if (isMessageError) {
            toast.error("Please Enter Valid Message");
            return;
        }
        else {
            try {
                await axios.post(baseURL + "contact-uses", { name: Name, message: Message, email: Email }, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                toast.success("Message Sent Successfully");
                resetValues();
                return;

            }
            catch (error) {
                toast.error("Error Occurred Submitting Your Message");
                return;
            }
        }
    }

    const resetValues = () => {
        setMessage('');
        setName('');
        setEmail('');
        setMessageErrorFlag(true);
        setEmailErrorFlag(true);
        setNameErrorFlag(true);
    }

    return (
        <>
            <div>
                <section className="hero-area breadcumb-area">
                    <div className="hero-carousel">
                        <div className="single-hero d-flex align-items-center text-center breadcumb-contact">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 offset-lg-2 text-center">
                                        <div className="hero-content">
                                            <h3>Organic Food</h3>
                                            <h2>Contact</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contact-address-area pd-t-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <div className="single-contact-info">
                                            <h4>Address</h4>
                                            <p>6th Forrest Ray, <br />Manhattan NYC 10001, USA</p>
                                        </div>
                                        <div className="single-contact-info">
                                            <h4>Address</h4>
                                            <p>6th Forrest Ray, <br />Manhattan NYC 10001, USA</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="single-contact-info">
                                            <h4>Address</h4>
                                            <p>6th Forrest Ray, <br />Manhattan NYC 10001, USA</p>
                                        </div>
                                        <div className="single-contact-info">
                                            <h4>Address</h4>
                                            <p>6th Forrest Ray, <br />Manhattan NYC 10001, USA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div data-testid='officeMap' className="map-wrap">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799160891!2d-74.25987584510595!3d40.69767006338158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1606298363793!5m2!1sen!2sbd" style={{ "border": "0" }} allowFullScreen aria-hidden="false" tabIndex={0} width={600} height={450} frameBorder={0} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contact-form-area pd-t-150">
                    <div className="container">
                        <header className="section-heading text-center">
                            <h3 className="section-title">Drop us a line</h3>
                        </header>
                        <div className="row">
                            <div className="col-lg-12">
                                <form action className="contact-form">
                                    <div className="row">
                                        <div className="col-lg-6 form-group">
                                            <label htmlFor="yourName">Your Name</label>
                                            <input type="text" id="yourName" onChange={(e) => setType('name', e.target.value)} />
                                        </div>
                                        <div className="col-lg-6 form-group">
                                            <label htmlFor="yourEmail">Your Email</label>
                                            <input type="text" id="yourEmail" onChange={(e) => setType('email', e.target.value)} />
                                        </div>
                                        <div className="col-lg-12 form-group">
                                            <label htmlFor="yourMessage">Your Message</label>
                                            <textarea name id="yourMessage" defaultValue={""} onChange={(e) => setType('message', e.target.value)} />
                                        </div>
                                        <div className="col-lg-12 text-center form-group">
                                            <button type="button" onClick={() => submitContactDetails()} className="boxed-btn">Send</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
}

export default ContactUs;