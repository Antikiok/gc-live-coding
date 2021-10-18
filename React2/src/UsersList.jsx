import React from 'react';

import User from './User.jsx';
import Pagination from './Pagination.jsx';

class UsersList extends React.Component {
  state = {
    pageNumber: 1,
    usersPerPage: 3,
  };

  handleNext = () => {
    this.setState({
      pageNumber: this.state.pageNumber + 1,
    });
  };
  handlePrev = () => {
    this.setState({
      pageNumber: this.state.pageNumber - 1,
    });
  };

  render() {
    const { pageNumber, usersPerPage } = this.state;
    const { users } = this.props;

    const startIndex = (pageNumber - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    const constUsersToRender = users.slice(startIndex, endIndex);
    return (
      <div>
        <Pagination
          pageNumber={pageNumber}
          handleNext={this.handleNext}
          handlePrev={this.handlePrev}
          usersCount={users.length}
          usersPerPage={usersPerPage}
        />

        <ul className="users">
          {constUsersToRender.map((user) => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
