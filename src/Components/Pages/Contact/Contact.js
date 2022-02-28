import React from 'react';
import Footer from '../../GlobalComponents/Footer/Footer';
import SecondaryHeader from '../../GlobalComponents/Header/SecondaryHeader/SecondaryHeader';
import PageHeroSection from '../../GlobalComponents/PageHeroSection/PageHeroSection';
import ContactDetails from './ContactDetails/ContactDetails';
import './Contact.css';
import ContactForm from './ContactForm/ContactForm';

const Contact = () => {
    const pageInfo = { pageName: "contact us", breadCrumb: 'contact' }
    return (
        <div>
            {/* header */}
            <SecondaryHeader></SecondaryHeader>
            {/* page hero/banner section */}
            <PageHeroSection pageInfo={pageInfo} />
            {/* contact details */}
            <ContactDetails></ContactDetails>
            {/* contact form section */}
            <ContactForm></ContactForm>
            {/* map section */}
            <section className='contact-map'>
                <iframe title='address-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596698663!2d-74.25986773739224!3d40.697149413874705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1645813406064!5m2!1sen!2sbd" allowfullscreen={true}></iframe>
            </section>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default Contact;