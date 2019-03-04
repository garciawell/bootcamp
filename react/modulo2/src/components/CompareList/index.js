import React from 'react';
import PropTypes from 'prop-types';
import { Container, Repository, ButtonRefresh } from './styles';

const CompareList = ({
  repositories, removeItem, refLoading, refresh,
}) => (
  <Container>
    {repositories.map(repository => (
      <Repository key={repository.id}>
        <header>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <strong>{repository.name}</strong>
          <small>{repository.owner.login}</small>

          <ul>
            <li>
              {repository.stargazers_count}
              <small> Star</small>
            </li>
            <li>
              {repository.forks_count}
              <small>forks</small>
            </li>
            <li>
              {repository.open_issues_count}
              <small>issues</small>
            </li>
            <li>
              {repository.lastCommit}
              <small>last commit</small>
            </li>
          </ul>
          <button onClick={e => removeItem(e, repository.id)}>
            <i className="fa fa-times " />
          </button>

          <ButtonRefresh left onClick={e => refresh(e, repository.id)}>
            <i className={`${refLoading}` ? 'fa fa-refresh' : 'fa fa-refresh fa-pulse'} />
          </ButtonRefresh>
        </header>
      </Repository>
    ))}
  </Container>
);

CompareList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string,
      }),
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      open_issues_count: PropTypes.number,
      pushed_at: PropTypes.string,
    }),
  ).isRequired,
};

export default CompareList;
