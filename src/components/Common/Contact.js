import React, {Component} from 'react';
import Field from './Field';

const fields = {
    sections: [
        [
            {name: 'name', elementName: 'input', type: 'text', placeholder: "Your Name *", className: 'form-group'},
            {name: 'email', elementName: 'input', type: 'email', placeholder: "Your Email *", className: 'form-group'},
            {name: 'phone', elementName: 'input', type: 'text', placeholder: "Your Phone Number *", className: 'form-group mb-md-0'},
        ],
        [
            {name: 'message', elementName: 'textarea', type: 'text', placeholder: "Type Your Message *", className: 'form-group form-group-textarea mb-md-0'}
        ]
    ]
};

class Contact extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: '',
            phone: '',
            message: ''
        }
    }

    submitForm = (e) => {
        e.preventDefault();
        alert("Form submitted. Thank you very much!");
    }

    render(){
        return(
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact Me</h2>
                        <h3 className="section-subheading text-muted">Should you have any questions, please do not hesitate to either email me at franciscobarrioscuesta@gmail.com or fill in the below form:</h3>
                    </div>
                    <form onSubmit={this.submitForm} id="contactForm" name="sentMessage" noValidate="novalidate">
                        <div className="row align-items-stretch mb-5">
                            {fields.sections.map((section, sectionIndex) => {
                                console.log("Renderding section", sectionIndex, "with", section);
                                return (
                                    <div className="col-md-6" key={sectionIndex}>
                                        {section.map((field, i) => {
                                            return <Field
                                                {...field}
                                                key={i}
                                                value={this.state[field.name]}
                                                onChange={e => this.setState({
                                                    [field.name]: e.target.value
                                                })}
                                            />
                                        })}
                                    </div>
                                )
                            })}
                            
                        </div>
                        <div className="text-center">
                            <div id="success"></div>
                            <button
                                className="btn btn-primary btn-xl text-uppercase"
                                id="sendMessageButton"
                                type="submit"
                            >Send Message</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default Contact;