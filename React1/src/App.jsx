import React from 'react';

// import Auth from './Auth.jsx';
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
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Login />
        <Logout />
        <Spinner />
      </>
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
