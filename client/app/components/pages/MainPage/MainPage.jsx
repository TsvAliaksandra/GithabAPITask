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
          <li>
            <Link to="/repos">
              List of all Repositories under the facebook org
            </Link>
          </li>

          <li>
            <Link to="/commits">
              List of 100 most recent commits of react repositories
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default MainPage;
