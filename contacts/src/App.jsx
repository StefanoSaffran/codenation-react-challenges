import React from 'react';

import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';

import AppProvider from './hooks';

import GlobalStyle from './styles/global';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      filter: '',
    }
  }

  async componentDidMount() {
    const response = await fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts');
    const data = await response.json();
    this.setState({
      contacts: data,
    })
  }

  handleFilter = event => {
    this.setState({
      filter: event.target.value,
    })
  }

  handleSort = (key, order) => {
    const { contacts } = this.state;

    this.setState({
      contacts: this.sortByKey(contacts, key, order)
    })
  }

  sortByKey = (contacts, key, order) => {
    return contacts.sort((a, b) => {
      const x = b[key];
      const y = a[key];
      if(order === 'asc')
        return x < y ? 1 : x > y ? -1 : 0;

      return x < y ? -1 : x > y ? 1 : 0;
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const contactsToShow = filter
      ? contacts.filter(contact => {
        const regex = new RegExp(filter, 'i');
        return regex.test(contact.name);
      })
      : contacts;

    return (
      <AppProvider>
        <Topbar />
        <Filters handleFilter={this.handleFilter} handleSort={this.handleSort}/>
        <Contacts contacts={contactsToShow} />
        <GlobalStyle />
      </AppProvider>
    )
  }
}

export default App;
