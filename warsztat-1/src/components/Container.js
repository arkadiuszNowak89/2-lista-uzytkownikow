import React from 'react';
import './Container.css';

import EnterNameField from './EnterNameField';
import UsersList from './UsersList';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 1652197042437, name: 'Gandalf' },
        { id: 1652197042438, name: 'Frodo' },
      ],
    };
  }

  addToList = (e, inputEl) => {
    e.preventDefault();
    if (inputEl.value.length === 0) return;

    const newUser = {
      id: Date.now(),
      name: inputEl.value,
    };
    inputEl.value = '';

    this.setState({
      users: this.state.users.concat(newUser),
    });
  };

  removeFromList = (id) => {
    this.setState({
      users: this.state.users.filter((user) => user.id !== id),
    });
  };

  render() {
    return (
      <div className='container'>
        <h1>User's List</h1>
        <EnterNameField addToList={this.addToList} />
        <UsersList
          list={this.state.users}
          removeFromList={this.removeFromList}
        />
      </div>
    );
  }
}

export default Container;
