import React, { Component } from 'react'

export default class ContactForm extends Component {
    render() {
        return (
            <div className="contact-form">
                <form>
                    <div className="info">
                        <div className="field">
                            <label>İsim</label>
                            <input type="text" />
                        </div>
                        <div className="field">
                            <label>E-Posta</label>
                            <input type="email" />
                        </div>
                    </div>

                    <div className="field">
                        <label>Mesajınız</label>
                        <textarea></textarea>
                    </div>

                    <button>Gönder</button>
                </form>
            </div>
        )
    }
}
