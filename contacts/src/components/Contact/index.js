import React from 'react';

import { Container } from './styles'

class Contact extends React.Component {
  render() {
    const { data: contact } = this.props;
    const date = new Date(contact.admissionDate);

    const formattedDate = (
      `${date.getDate() > 9 ? date.getDate() : ('0' 
      + date.getDate())}/${date.getMonth() > 8 
        ? date.getMonth(0) + 1 
        : '0' + (date.getMonth() + 1)}/${date.getFullYear()}`)
    
    return (
      <Container className="contact" data-testid="contact">
        <span className="contact__avatar">
          <img src={contact.avatar} alt={contact.name}/>
        </span>
        <span className="contact__data">{contact.name}</span>
        <span className="contact__data">{contact.phone}</span>
        <span className="contact__data">{contact.country}</span>
        <span className="contact__data">{formattedDate}</span>
        <span className="contact__data">{contact.company}</span>
        <span className="contact__data">{contact.department}</span>
      </Container>
    );
  }
}

export default Contact;
