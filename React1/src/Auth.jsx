import React from 'react';

import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

// input: props (obj);
// output: JSX;

// alog
// 1. show login by default
// 2. after login click - hide Login & show Spinner for 2 seconds
// 3. after 2 sconds - hide Spinner && show Logout
// 4. after Logout click - hide Logout & show Login

class App extends React.Component {
  state = {
    isLoggedIn: false,
    isProcessing: false,
  };

  loginHandler = () => {
    // this.setState({ age: 1000, name: 'Jack' });
    this.setState({ isProcessing: true });

    setTimeout(() => {
      this.setState({ isProcessing: false, isLoggedIn: true });
    }, 2000);

    console.log('FINISHED');
  };

  logoutHandler = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    console.log('RENDER STARTED');

    const { isLoggedIn, isProcessing } = this.state;

    //   if (isProcessing) {
    //     return <Spinner />;
    //   }
    //   if (isLoggedIn) {
    //     return <Logout onLogout={this.logoutHandler} />;
    //   }
    //   return <Login onLogin={this.loginHandler} />;
    // }

    isProcessing ? (
      <Spinner />
    ) : isLoggedIn ? (
      <Logout onLogout={this.logoutHandler} />
    ) : (
      <Login onLogin={this.loginHandler} />
    );
  }
}

export default App;

// REACT
// 0. make a layout
// 1. split on components
// 2. static version in react
// 3. declare state and props
// 4. write logic
