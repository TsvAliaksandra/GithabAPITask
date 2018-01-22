import React from 'react';

class CommitsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.getCommits();
  }

  renderCommitsList = () => {
    return this.props.commits.map((item, index) => (
      <div key={item}>
        {index + 1}: {item}
      </div>
    ));
  }

  render() {
    return (
      <div>
        <div>
          Commit List
        </div>
        <div>
          {this.props.commits.length > 0 && this.renderCommitsList()}
        </div>
      </div>
    );
  }
}

export default CommitsList;
