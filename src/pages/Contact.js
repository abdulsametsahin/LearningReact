import React, { Component } from 'react'
import ContactForm from '../components/ContactForm'

export default class Contact extends Component {
    componentDidMount(){
        document.title = "İletişim - Abdulsamet Şahin"
    }
    render() {
        return (
            <div id="contact">
                <div className="center2">
                    <h1>İletişim</h1>
                    <p>
                        StoryHub theme comes with a contact form built-in. You can use this form with Gatsbay Js service and get up to 50 submissions for free per form per month. Also, you can easily switch to another service if you want.
                    </p>

                    <ContactForm />
                </div>
            </div>
        )
    }
}
