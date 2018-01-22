import React from 'react';
import {Link} from 'react-router-dom';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ul>
          <li>Returns All Repositories under the facebook org</li>
          <li>Returns the 100 most recent commits of react repositories</li>
        </ul>
      </div>
    );
  }
}

export default MainPage;
