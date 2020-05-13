import React from 'react';

import Button from '../Button';

import { Container } from './styles';

class Filters extends React.Component {
	constructor() {
		super();
		this.state = {
			selected: '',
			sorted: '',
		}
	}

	handleClick = label => {
		const { selected, sorted } = this.state;

		let order = "asc";
    if (selected === label) {
      order = sorted === "desc" ? "asc" : "desc";
    }
		
		this.setState({
      selected: label,
      sorted: order,
    });
		this.props.handleSort(label, order)
	}

	isSelected(option) {
    return option === this.state.selected
      ? "filters__item is-selected"
      : "filters__item";
  }

  isSort(option) {
    let icon = "fas fa-sort-down";
    if (option === this.state.selected) {
      icon =
        this.state.sorted === "asc" ? "fas fa-sort-down" : "fas fa-sort-up";
    }
    return icon;
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

					<Button
            content="Nome"
            className={this.isSelected("name")}
            classIcon={this.isSort("name")}
						handleOnClick={() => this.handleClick("name")}
          />
          <Button
            content="País"
            className={this.isSelected("country")}
            classIcon={this.isSort("country")}
            handleOnClick={() => this.handleClick("country")}
          />
          <Button
            content="Empresa"
            className={this.isSelected("company")}
            classIcon={this.isSort("company")}
            handleOnClick={() => this.handleClick("company")}
          />
          <Button
            content="Departamento"
            className={this.isSelected("department")}
            classIcon={this.isSort("department")}
            handleOnClick={() => this.handleClick("department")}
          />
          <Button
            content="Data de admissão"
            className={this.isSelected("admissionDate")}
            classIcon={this.isSort("admissionDate")}
            handleOnClick={() => this.handleClick('admissionDate')}
          />
				</section>
      </Container>
    );
	}
}

export default Filters;
