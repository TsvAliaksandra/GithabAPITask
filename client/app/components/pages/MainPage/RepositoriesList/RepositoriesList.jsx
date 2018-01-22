import React from 'react';
import {Link} from 'react-router-dom';

class Repositories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.getRepositories();
  }

  renderRepositoriesList = () => {
    return this.props.repositories.map((item, index) => (
      <li key={item.id}>
        <Link to={{
          pathname: 'repodetails',
          index: index,
          name: item.name,
        }}
        >
          {index + 1}:{item.full_name}
        </Link>
      </li>
    ));
  }

  render() {
    return (
      <div>
        <div>
          Repositories List
        </div>
        {this.props.errorMessage.length > 0 &&
        <h2>{this.props.errorMessage}</h2>}
        <ul>
          {this.props.repositories.length > 0 && this.renderRepositoriesList()}
        </ul>
      </div>
    );
  }
}

export default Repositories;
