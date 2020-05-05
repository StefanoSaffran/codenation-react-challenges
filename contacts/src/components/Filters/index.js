import React from 'react';

import { Container } from './styles';

class Filters extends React.Component {
	constructor() {
		super();
		this.state = {
			selected: '',
		}
	}

	handleClick = buttonName => {
		const { selected } = this.state;
		
		this.setState({
			selected: selected !== buttonName ? buttonName : '',
		})
		this.props.handleSort(buttonName)
	}

	render() {
		const { selected } = this.state;

		return (
			<Container className="container" data-testid="filters">
				<section className="filters">
					<div className="filters__search">
						<input 
							type="text" 
							className="filters__search__input" 
							placeholder="Pesquisar"
							onChange={(e) => this.props.handleFilter(e)} />

						<button className="filters__search__icon">
							<i className="fa fa-search"/>
						</button>
					</div>

					<button 
						onClick={() => this.handleClick('name')} 
						className={`filters__item ${selected === 'name' && `is-selected`}`}>
							Nome <i className={`fas ${selected === 'name' ? 'fa-sort-up' : 'fa-sort-down' }`} />
					</button>

					<button 
						onClick={() => this.handleClick('country')} 
						className={`filters__item ${selected === 'country' && `is-selected`}`}>
							País <i className={`fas ${selected === 'country' ? 'fa-sort-up' : 'fa-sort-down' }`} />
					</button>

					<button 
						onClick={() => this.handleClick('company')} 
						className={`filters__item ${selected === 'company' && `is-selected`}`}>
							Empresa <i className={`fas ${selected === 'company' ? 'fa-sort-up' : 'fa-sort-down' }`} />
					</button>

					<button 
						onClick={() => this.handleClick('department')} 
						className={`filters__item ${selected === 'department' && `is-selected`}`}>
							Departamento <i className={`fas ${selected === 'department' ? 'fa-sort-up' : 'fa-sort-down' }`} />
					</button>

					<button 
						onClick={() => this.handleClick('admissionDate')} 
						className={`filters__item ${selected === 'admissionDate' && `is-selected`}`}>
							Data de admissão <i className={`fas ${selected === 'admissionDate' ? 'fa-sort-up' : 'fa-sort-down' }`} />
					</button>
				</section>
      </Container>
    );
	}
}

export default Filters;
