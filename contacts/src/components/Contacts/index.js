import React from "react";

import Contact from '../Contact';

import { Container } from './styles';

class Contacts extends React.Component {
	render() {
		const { contacts } = this.props;

		return (
			<Container className="container" data-testid="contacts">
				<section className="contacts">
					<article className="contact">
						<span className="contact__avatar" />
						<span className="contact__data">Nome</span>
						<span className="contact__data">Telefone</span>
						<span className="contact__data">País</span>
						<span className="contact__data">Admissão</span>
						<span className="contact__data">Empresa</span>
						<span className="contact__data">Departamento</span>
					</article>
					{contacts?.map(contact => (
						<Contact key={contact.id} data={contact} />
					))}
				</section>
      </Container>
		);
	}
}

export default Contacts;
