import React from 'react'
import {ContactForm, ContactSection, ContactTitle, ContactSpan, InputForm, InputEmail, InputExp, InputSubmit, InputText, InputTextArea} from './style.js'

const Contact = () => {
    return (
        <ContactSection>
            <div className="container">
                <ContactTitle><ContactSpan>Drop </ContactSpan>Me A line</ContactTitle>
                <ContactForm action="">
                    <InputForm>
                        <InputText placeholder="Your Name"/>
                        <InputEmail type="email" placeholder="Your Email"/>
                    </InputForm>
                    <InputExp type="text" class="sub" placeholder="Your Subject"/>
                    <InputTextArea cols="30" rows="10" placeholder="Your Message"></InputTextArea>
                    <InputSubmit type="submit" value="Send Message"/>
                </ContactForm>
            </div>
        </ContactSection>
    )
}


export default Contact