import 'components/pages/RepoDetailsPage/RepoDetailsPage.less';
import React from 'react';

class RepoDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowInfo: false,
      index: null,
    };
  }

  componentWillMount() {
    this.props.getCurrentRepoCommit(this.props.location.name);
  }

  handleMoreInfoClick = (index) => {
    this.setState({isShowInfo: true, index});
  }

  renderMoreInfoOfCommit = () => {
    const item = this.props.currentRepoCommits[this.state.index];

    return (
      <div>
        <div><em>Author name:</em> {item.authorName}</div>
        <div><em>Email:</em> {item.email}</div>
        <div style={{display: 'flex'}}>
          <em>Author avatar: </em>
          <img alt="avatar" src={item.authorAvatar} />
        </div>
        <div><em>Date:</em> {item.date}</div>
        <div><em>Commit message:</em> {item.message}</div>
      </div>
    );
  }

  renderCommitsList = () => {
    return this.props.currentRepoCommits.map((item, index) => {
      const lastIndexSha = item.sha.substr(-1, 1);

      return (

        <div key={item.sha} style={{display: 'flex'}}>
          <div
            className={!isNaN(lastIndexSha) ? 'commits-end-number' : null}
          >
            {index}: {item.sha}
          </div>
          <em
            style={{marginLeft: 5, cursor: 'pointer'}}
            onClick={() => this.handleMoreInfoClick(index)}
          >
            (More details)
          </em>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>
          Repository details
        </h3>
        {this.props.errorMessage.length > 0 &&
        <h2>{this.props.errorMessage}</h2>}
        <div style={{display: 'flex'}}>
          <div>
            {this.renderCommitsList()}
          </div>
          <div className="repo-details">
            {this.state.isShowInfo && this.renderMoreInfoOfCommit()}
          </div>
        </div>
      </div>
    );
  }
}

export default RepoDetailsPage;
