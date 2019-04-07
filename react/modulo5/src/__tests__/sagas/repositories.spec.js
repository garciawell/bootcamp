import { runSaga } from "redux-saga";
import { getRepositories } from "../../store/sagas/repositories";
import { Creators as RepositoriesActions } from "../../store/ducks/repositories";

const response = [
  {
    id: 145049583,
    node_id: "MDEwOlJlcG9zaXRvcnkxNDUwNDk1ODM=",
    name: "adonis-lucid",
    full_name: "diego3g/adonis-lucid",
    private: false,
    owner: {
      login: "diego3g",
      id: 2254731,
      node_id: "MDQ6VXNlcjIyNTQ3MzE=",
      avatar_url: "https://avatars2.githubusercontent.com/u/2254731?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/diego3g",
      html_url: "https://github.com/diego3g",
      followers_url: "https://api.github.com/users/diego3g/followers",
      following_url:
        "https://api.github.com/users/diego3g/following{/other_user}",
      gists_url: "https://api.github.com/users/diego3g/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/diego3g/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/diego3g/subscriptions",
      organizations_url: "https://api.github.com/users/diego3g/orgs",
      repos_url: "https://api.github.com/users/diego3g/repos",
      events_url: "https://api.github.com/users/diego3g/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/diego3g/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/diego3g/adonis-lucid",
    description: "Orm for adonis framework",
    fork: true,
    url: "https://api.github.com/repos/diego3g/adonis-lucid",
    forks_url: "https://api.github.com/repos/diego3g/adonis-lucid/forks",
    keys_url: "https://api.github.com/repos/diego3g/adonis-lucid/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/diego3g/adonis-lucid/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/diego3g/adonis-lucid/teams",
    hooks_url: "https://api.github.com/repos/diego3g/adonis-lucid/hooks",
    issue_events_url:
      "https://api.github.com/repos/diego3g/adonis-lucid/issues/events{/number}",
    events_url: "https://api.github.com/repos/diego3g/adonis-lucid/events",
    assignees_url:
      "https://api.github.com/repos/diego3g/adonis-lucid/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/diego3g/adonis-lucid/branches{/branch}",
    tags_url: "https://api.github.com/repos/diego3g/adonis-lucid/tags",
    blobs_url:
      "https://api.github.com/repos/diego3g/adonis-lucid/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/diego3g/adonis-lucid/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/diego3g/adonis-lucid/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/diego3g/adonis-lucid/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/diego3g/adonis-lucid/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/diego3g/adonis-lucid/languages",
    stargazers_url:
      "https://api.github.com/repos/diego3g/adonis-lucid/stargazers",
    contributors_url:
      "https://api.github.com/repos/diego3g/adonis-lucid/contributors",
    subscribers_url:
      "https://api.github.com/repos/diego3g/adonis-lucid/subscribers",
    subscription_url:
      "https://api.github.com/repos/diego3g/adonis-lucid/subscription",
    commits_url:
      "https://api.github.com/repos/diego3g/adonis-lucid/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/diego3g/adonis-lucid/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/diego3g/adonis-lucid/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/diego3g/adonis-lucid/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/diego3g/adonis-lucid/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/diego3g/adonis-lucid/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/diego3g/adonis-lucid/merges",
    archive_url:
      "https://api.github.com/repos/diego3g/adonis-lucid/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/diego3g/adonis-lucid/downloads",
    issues_url:
      "https://api.github.com/repos/diego3g/adonis-lucid/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/diego3g/adonis-lucid/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/diego3g/adonis-lucid/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/diego3g/adonis-lucid/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/diego3g/adonis-lucid/labels{/name}",
    releases_url:
      "https://api.github.com/repos/diego3g/adonis-lucid/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/diego3g/adonis-lucid/deployments",
    created_at: "2018-08-16T23:39:18Z",
    updated_at: "2018-08-16T23:39:20Z",
    pushed_at: "2018-08-10T11:20:49Z",
    git_url: "git://github.com/diego3g/adonis-lucid.git",
    ssh_url: "git@github.com:diego3g/adonis-lucid.git",
    clone_url: "https://github.com/diego3g/adonis-lucid.git",
    svn_url: "https://github.com/diego3g/adonis-lucid",
    homepage: null,
    size: 1276,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz"
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "develop"
  },
  {
    id: 141448625,
    node_id: "MDEwOlJlcG9zaXRvcnkxNDE0NDg2MjU=",
    name: "adonis-vow",
    full_name: "diego3g/adonis-vow",
    private: false,
    owner: {
      login: "diego3g",
      id: 2254731,
      node_id: "MDQ6VXNlcjIyNTQ3MzE=",
      avatar_url: "https://avatars2.githubusercontent.com/u/2254731?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/diego3g",
      html_url: "https://github.com/diego3g",
      followers_url: "https://api.github.com/users/diego3g/followers",
      following_url:
        "https://api.github.com/users/diego3g/following{/other_user}",
      gists_url: "https://api.github.com/users/diego3g/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/diego3g/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/diego3g/subscriptions",
      organizations_url: "https://api.github.com/users/diego3g/orgs",
      repos_url: "https://api.github.com/users/diego3g/repos",
      events_url: "https://api.github.com/users/diego3g/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/diego3g/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/diego3g/adonis-vow",
    description: "Test Runner For AdonisJs",
    fork: true,
    url: "https://api.github.com/repos/diego3g/adonis-vow",
    forks_url: "https://api.github.com/repos/diego3g/adonis-vow/forks",
    keys_url: "https://api.github.com/repos/diego3g/adonis-vow/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/diego3g/adonis-vow/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/diego3g/adonis-vow/teams",
    hooks_url: "https://api.github.com/repos/diego3g/adonis-vow/hooks",
    issue_events_url:
      "https://api.github.com/repos/diego3g/adonis-vow/issues/events{/number}",
    events_url: "https://api.github.com/repos/diego3g/adonis-vow/events",
    assignees_url:
      "https://api.github.com/repos/diego3g/adonis-vow/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/diego3g/adonis-vow/branches{/branch}",
    tags_url: "https://api.github.com/repos/diego3g/adonis-vow/tags",
    blobs_url:
      "https://api.github.com/repos/diego3g/adonis-vow/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/diego3g/adonis-vow/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/diego3g/adonis-vow/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/diego3g/adonis-vow/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/diego3g/adonis-vow/statuses/{sha}",
    languages_url: "https://api.github.com/repos/diego3g/adonis-vow/languages",
    stargazers_url:
      "https://api.github.com/repos/diego3g/adonis-vow/stargazers",
    contributors_url:
      "https://api.github.com/repos/diego3g/adonis-vow/contributors",
    subscribers_url:
      "https://api.github.com/repos/diego3g/adonis-vow/subscribers",
    subscription_url:
      "https://api.github.com/repos/diego3g/adonis-vow/subscription",
    commits_url:
      "https://api.github.com/repos/diego3g/adonis-vow/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/diego3g/adonis-vow/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/diego3g/adonis-vow/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/diego3g/adonis-vow/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/diego3g/adonis-vow/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/diego3g/adonis-vow/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/diego3g/adonis-vow/merges",
    archive_url:
      "https://api.github.com/repos/diego3g/adonis-vow/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/diego3g/adonis-vow/downloads",
    issues_url:
      "https://api.github.com/repos/diego3g/adonis-vow/issues{/number}",
    pulls_url: "https://api.github.com/repos/diego3g/adonis-vow/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/diego3g/adonis-vow/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/diego3g/adonis-vow/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/diego3g/adonis-vow/labels{/name}",
    releases_url:
      "https://api.github.com/repos/diego3g/adonis-vow/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/diego3g/adonis-vow/deployments",
    created_at: "2018-07-18T14:46:47Z",
    updated_at: "2018-07-18T14:52:24Z",
    pushed_at: "2018-07-18T14:52:23Z",
    git_url: "git://github.com/diego3g/adonis-vow.git",
    ssh_url: "git@github.com:diego3g/adonis-vow.git",
    clone_url: "https://github.com/diego3g/adonis-vow.git",
    svn_url: "https://github.com/diego3g/adonis-vow",
    homepage: null,
    size: 245,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz"
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "develop"
  },
  {
    id: 133074457,
    node_id: "MDEwOlJlcG9zaXRvcnkxMzMwNzQ0NTc=",
    name: "app3-node",
    full_name: "diego3g/app3-node",
    private: false,
    owner: {
      login: "diego3g",
      id: 2254731,
      node_id: "MDQ6VXNlcjIyNTQ3MzE=",
      avatar_url: "https://avatars2.githubusercontent.com/u/2254731?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/diego3g",
      html_url: "https://github.com/diego3g",
      followers_url: "https://api.github.com/users/diego3g/followers",
      following_url:
        "https://api.github.com/users/diego3g/following{/other_user}",
      gists_url: "https://api.github.com/users/diego3g/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/diego3g/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/diego3g/subscriptions",
      organizations_url: "https://api.github.com/users/diego3g/orgs",
      repos_url: "https://api.github.com/users/diego3g/repos",
      events_url: "https://api.github.com/users/diego3g/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/diego3g/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/diego3g/app3-node",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/diego3g/app3-node",
    forks_url: "https://api.github.com/repos/diego3g/app3-node/forks",
    keys_url: "https://api.github.com/repos/diego3g/app3-node/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/diego3g/app3-node/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/diego3g/app3-node/teams",
    hooks_url: "https://api.github.com/repos/diego3g/app3-node/hooks",
    issue_events_url:
      "https://api.github.com/repos/diego3g/app3-node/issues/events{/number}",
    events_url: "https://api.github.com/repos/diego3g/app3-node/events",
    assignees_url:
      "https://api.github.com/repos/diego3g/app3-node/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/diego3g/app3-node/branches{/branch}",
    tags_url: "https://api.github.com/repos/diego3g/app3-node/tags",
    blobs_url: "https://api.github.com/repos/diego3g/app3-node/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/diego3g/app3-node/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/diego3g/app3-node/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/diego3g/app3-node/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/diego3g/app3-node/statuses/{sha}",
    languages_url: "https://api.github.com/repos/diego3g/app3-node/languages",
    stargazers_url: "https://api.github.com/repos/diego3g/app3-node/stargazers",
    contributors_url:
      "https://api.github.com/repos/diego3g/app3-node/contributors",
    subscribers_url:
      "https://api.github.com/repos/diego3g/app3-node/subscribers",
    subscription_url:
      "https://api.github.com/repos/diego3g/app3-node/subscription",
    commits_url: "https://api.github.com/repos/diego3g/app3-node/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/diego3g/app3-node/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/diego3g/app3-node/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/diego3g/app3-node/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/diego3g/app3-node/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/diego3g/app3-node/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/diego3g/app3-node/merges",
    archive_url:
      "https://api.github.com/repos/diego3g/app3-node/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/diego3g/app3-node/downloads",
    issues_url:
      "https://api.github.com/repos/diego3g/app3-node/issues{/number}",
    pulls_url: "https://api.github.com/repos/diego3g/app3-node/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/diego3g/app3-node/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/diego3g/app3-node/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/diego3g/app3-node/labels{/name}",
    releases_url:
      "https://api.github.com/repos/diego3g/app3-node/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/diego3g/app3-node/deployments",
    created_at: "2018-05-11T18:22:42Z",
    updated_at: "2018-06-04T03:52:57Z",
    pushed_at: "2018-05-11T20:16:20Z",
    git_url: "git://github.com/diego3g/app3-node.git",
    ssh_url: "git@github.com:diego3g/app3-node.git",
    clone_url: "https://github.com/diego3g/app3-node.git",
    svn_url: "https://github.com/diego3g/app3-node",
    homepage: null,
    size: 72,
    stargazers_count: 1,
    watchers_count: 1,
    language: "HTML",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 1,
    open_issues: 0,
    watchers: 1,
    default_branch: "master"
  },
  {
    id: 152629424,
    node_id: "MDEwOlJlcG9zaXRvcnkxNTI2Mjk0MjQ=",
    name: "bambam",
    full_name: "diego3g/bambam",
    private: false,
    owner: {
      login: "diego3g",
      id: 2254731,
      node_id: "MDQ6VXNlcjIyNTQ3MzE=",
      avatar_url: "https://avatars2.githubusercontent.com/u/2254731?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/diego3g",
      html_url: "https://github.com/diego3g",
      followers_url: "https://api.github.com/users/diego3g/followers",
      following_url:
        "https://api.github.com/users/diego3g/following{/other_user}",
      gists_url: "https://api.github.com/users/diego3g/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/diego3g/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/diego3g/subscriptions",
      organizations_url: "https://api.github.com/users/diego3g/orgs",
      repos_url: "https://api.github.com/users/diego3g/repos",
      events_url: "https://api.github.com/users/diego3g/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/diego3g/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/diego3g/bambam",
    description: "ORM and Query BIRLLLder for SQL",
    fork: false,
    url: "https://api.github.com/repos/diego3g/bambam",
    forks_url: "https://api.github.com/repos/diego3g/bambam/forks",
    keys_url: "https://api.github.com/repos/diego3g/bambam/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/diego3g/bambam/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/diego3g/bambam/teams",
    hooks_url: "https://api.github.com/repos/diego3g/bambam/hooks",
    issue_events_url:
      "https://api.github.com/repos/diego3g/bambam/issues/events{/number}",
    events_url: "https://api.github.com/repos/diego3g/bambam/events",
    assignees_url:
      "https://api.github.com/repos/diego3g/bambam/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/diego3g/bambam/branches{/branch}",
    tags_url: "https://api.github.com/repos/diego3g/bambam/tags",
    blobs_url: "https://api.github.com/repos/diego3g/bambam/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/diego3g/bambam/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/diego3g/bambam/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/diego3g/bambam/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/diego3g/bambam/statuses/{sha}",
    languages_url: "https://api.github.com/repos/diego3g/bambam/languages",
    stargazers_url: "https://api.github.com/repos/diego3g/bambam/stargazers",
    contributors_url:
      "https://api.github.com/repos/diego3g/bambam/contributors",
    subscribers_url: "https://api.github.com/repos/diego3g/bambam/subscribers",
    subscription_url:
      "https://api.github.com/repos/diego3g/bambam/subscription",
    commits_url: "https://api.github.com/repos/diego3g/bambam/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/diego3g/bambam/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/diego3g/bambam/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/diego3g/bambam/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/diego3g/bambam/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/diego3g/bambam/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/diego3g/bambam/merges",
    archive_url:
      "https://api.github.com/repos/diego3g/bambam/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/diego3g/bambam/downloads",
    issues_url: "https://api.github.com/repos/diego3g/bambam/issues{/number}",
    pulls_url: "https://api.github.com/repos/diego3g/bambam/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/diego3g/bambam/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/diego3g/bambam/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/diego3g/bambam/labels{/name}",
    releases_url: "https://api.github.com/repos/diego3g/bambam/releases{/id}",
    deployments_url: "https://api.github.com/repos/diego3g/bambam/deployments",
    created_at: "2018-10-11T17:23:58Z",
    updated_at: "2018-10-25T18:37:50Z",
    pushed_at: "2018-10-11T17:33:29Z",
    git_url: "git://github.com/diego3g/bambam.git",
    ssh_url: "git@github.com:diego3g/bambam.git",
    clone_url: "https://github.com/diego3g/bambam.git",
    svn_url: "https://github.com/diego3g/bambam",
    homepage: null,
    size: 101,
    stargazers_count: 5,
    watchers_count: 5,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 5,
    default_branch: "master"
  },
  {
    id: 148536159,
    node_id: "MDEwOlJlcG9zaXRvcnkxNDg1MzYxNTk=",
    name: "blog-graphql-prisma",
    full_name: "diego3g/blog-graphql-prisma",
    private: false,
    owner: {
      login: "diego3g",
      id: 2254731,
      node_id: "MDQ6VXNlcjIyNTQ3MzE=",
      avatar_url: "https://avatars2.githubusercontent.com/u/2254731?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/diego3g",
      html_url: "https://github.com/diego3g",
      followers_url: "https://api.github.com/users/diego3g/followers",
      following_url:
        "https://api.github.com/users/diego3g/following{/other_user}",
      gists_url: "https://api.github.com/users/diego3g/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/diego3g/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/diego3g/subscriptions",
      organizations_url: "https://api.github.com/users/diego3g/orgs",
      repos_url: "https://api.github.com/users/diego3g/repos",
      events_url: "https://api.github.com/users/diego3g/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/diego3g/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/diego3g/blog-graphql-prisma",
    description: "Back-end de um blog utilizando Node/GraphQL/Prisma.",
    fork: false,
    url: "https://api.github.com/repos/diego3g/blog-graphql-prisma",
    forks_url: "https://api.github.com/repos/diego3g/blog-graphql-prisma/forks",
    keys_url:
      "https://api.github.com/repos/diego3g/blog-graphql-prisma/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/diego3g/blog-graphql-prisma/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/diego3g/blog-graphql-prisma/teams",
    hooks_url: "https://api.github.com/repos/diego3g/blog-graphql-prisma/hooks",
    issue_events_url:
      "https://api.github.com/repos/diego3g/blog-graphql-prisma/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/diego3g/blog-graphql-prisma/events",
    assignees_url:
      "https://api.github.com/repos/diego3g/blog-graphql-prisma/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/diego3g/blog-graphql-prisma/branches{/branch}",
    tags_url: "https://api.github.com/repos/diego3g/blog-graphql-prisma/tags",
    blobs_url:
      "https://api.github.com/repos/diego3g/blog-graphql-prisma/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/diego3g/blog-graphql-prisma/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/diego3g/blog-graphql-prisma/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/diego3g/blog-graphql-prisma/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/diego3g/blog-graphql-prisma/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/diego3g/blog-graphql-prisma/languages",
    stargazers_url:
      "https://api.github.com/repos/diego3g/blog-graphql-prisma/stargazers",
    contributors_url:
      "https://api.github.com/repos/diego3g/blog-graphql-prisma/contributors",
    subscribers_url:
      "https://api.github.com/repos/diego3g/blog-graphql-prisma/subscribers",
    subscription_url:
      "https://api.github.com/repos/diego3g/blog-graphql-prisma/subscription",
    commits_url:
      "https://api.github.com/repos/diego3g/blog-graphql-prisma/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/diego3g/blog-graphql-prisma/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/diego3g/blog-graphql-prisma/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/diego3g/blog-graphql-prisma/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/diego3g/blog-graphql-prisma/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/diego3g/blog-graphql-prisma/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/diego3g/blog-graphql-prisma/merges",
    archive_url:
      "https://api.github.com/repos/diego3g/blog-graphql-prisma/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/diego3g/blog-graphql-prisma/downloads",
    issues_url:
      "https://api.github.com/repos/diego3g/blog-graphql-prisma/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/diego3g/blog-graphql-prisma/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/diego3g/blog-graphql-prisma/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/diego3g/blog-graphql-prisma/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/diego3g/blog-graphql-prisma/labels{/name}",
    releases_url:
      "https://api.github.com/repos/diego3g/blog-graphql-prisma/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/diego3g/blog-graphql-prisma/deployments",
    created_at: "2018-09-12T20:11:34Z",
    updated_at: "2018-09-20T18:32:59Z",
    pushed_at: "2018-09-13T22:21:06Z",
    git_url: "git://github.com/diego3g/blog-graphql-prisma.git",
    ssh_url: "git@github.com:diego3g/blog-graphql-prisma.git",
    clone_url: "https://github.com/diego3g/blog-graphql-prisma.git",
    svn_url: "https://github.com/diego3g/blog-graphql-prisma",
    homepage: null,
    size: 69,
    stargazers_count: 5,
    watchers_count: 5,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 5,
    default_branch: "master"
  },
  {
    id: 132023455,
    node_id: "MDEwOlJlcG9zaXRvcnkxMzIwMjM0NTU=",
    name: "chai-http",
    full_name: "diego3g/chai-http",
    private: false,
    owner: {
      login: "diego3g",
      id: 2254731,
      node_id: "MDQ6VXNlcjIyNTQ3MzE=",
      avatar_url: "https://avatars2.githubusercontent.com/u/2254731?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/diego3g",
      html_url: "https://github.com/diego3g",
      followers_url: "https://api.github.com/users/diego3g/followers",
      following_url:
        "https://api.github.com/users/diego3g/following{/other_user}",
      gists_url: "https://api.github.com/users/diego3g/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/diego3g/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/diego3g/subscriptions",
      organizations_url: "https://api.github.com/users/diego3g/orgs",
      repos_url: "https://api.github.com/users/diego3g/repos",
      events_url: "https://api.github.com/users/diego3g/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/diego3g/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/diego3g/chai-http",
    description: "HTTP Response assertions for the Chai Assertion Library.",
    fork: true,
    url: "https://api.github.com/repos/diego3g/chai-http",
    forks_url: "https://api.github.com/repos/diego3g/chai-http/forks",
    keys_url: "https://api.github.com/repos/diego3g/chai-http/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/diego3g/chai-http/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/diego3g/chai-http/teams",
    hooks_url: "https://api.github.com/repos/diego3g/chai-http/hooks",
    issue_events_url:
      "https://api.github.com/repos/diego3g/chai-http/issues/events{/number}",
    events_url: "https://api.github.com/repos/diego3g/chai-http/events",
    assignees_url:
      "https://api.github.com/repos/diego3g/chai-http/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/diego3g/chai-http/branches{/branch}",
    tags_url: "https://api.github.com/repos/diego3g/chai-http/tags",
    blobs_url: "https://api.github.com/repos/diego3g/chai-http/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/diego3g/chai-http/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/diego3g/chai-http/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/diego3g/chai-http/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/diego3g/chai-http/statuses/{sha}",
    languages_url: "https://api.github.com/repos/diego3g/chai-http/languages",
    stargazers_url: "https://api.github.com/repos/diego3g/chai-http/stargazers",
    contributors_url:
      "https://api.github.com/repos/diego3g/chai-http/contributors",
    subscribers_url:
      "https://api.github.com/repos/diego3g/chai-http/subscribers",
    subscription_url:
      "https://api.github.com/repos/diego3g/chai-http/subscription",
    commits_url: "https://api.github.com/repos/diego3g/chai-http/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/diego3g/chai-http/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/diego3g/chai-http/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/diego3g/chai-http/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/diego3g/chai-http/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/diego3g/chai-http/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/diego3g/chai-http/merges",
    archive_url:
      "https://api.github.com/repos/diego3g/chai-http/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/diego3g/chai-http/downloads",
    issues_url:
      "https://api.github.com/repos/diego3g/chai-http/issues{/number}",
    pulls_url: "https://api.github.com/repos/diego3g/chai-http/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/diego3g/chai-http/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/diego3g/chai-http/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/diego3g/chai-http/labels{/name}",
    releases_url:
      "https://api.github.com/repos/diego3g/chai-http/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/diego3g/chai-http/deployments",
    created_at: "2018-05-03T16:41:06Z",
    updated_at: "2018-05-10T05:03:11Z",
    pushed_at: "2018-03-22T13:20:16Z",
    git_url: "git://github.com/diego3g/chai-http.git",
    ssh_url: "git@github.com:diego3g/chai-http.git",
    clone_url: "https://github.com/diego3g/chai-http.git",
    svn_url: "https://github.com/diego3g/chai-http",
    homepage: "http://chaijs.com/plugins/chai-http",
    size: 1319,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 141464835,
    node_id: "MDEwOlJlcG9zaXRvcnkxNDE0NjQ4MzU=",
    name: "chai-subset",
    full_name: "diego3g/chai-subset",
    private: false,
    owner: {
      login: "diego3g",
      id: 2254731,
      node_id: "MDQ6VXNlcjIyNTQ3MzE=",
      avatar_url: "https://avatars2.githubusercontent.com/u/2254731?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/diego3g",
      html_url: "https://github.com/diego3g",
      followers_url: "https://api.github.com/users/diego3g/followers",
      following_url:
        "https://api.github.com/users/diego3g/following{/other_user}",
      gists_url: "https://api.github.com/users/diego3g/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/diego3g/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/diego3g/subscriptions",
      organizations_url: "https://api.github.com/users/diego3g/orgs",
      repos_url: "https://api.github.com/users/diego3g/repos",
      events_url: "https://api.github.com/users/diego3g/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/diego3g/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/diego3g/chai-subset",
    description: '"containSubset" object properties matcher for Chai',
    fork: true,
    url: "https://api.github.com/repos/diego3g/chai-subset",
    forks_url: "https://api.github.com/repos/diego3g/chai-subset/forks",
    keys_url: "https://api.github.com/repos/diego3g/chai-subset/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/diego3g/chai-subset/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/diego3g/chai-subset/teams",
    hooks_url: "https://api.github.com/repos/diego3g/chai-subset/hooks",
    issue_events_url:
      "https://api.github.com/repos/diego3g/chai-subset/issues/events{/number}",
    events_url: "https://api.github.com/repos/diego3g/chai-subset/events",
    assignees_url:
      "https://api.github.com/repos/diego3g/chai-subset/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/diego3g/chai-subset/branches{/branch}",
    tags_url: "https://api.github.com/repos/diego3g/chai-subset/tags",
    blobs_url:
      "https://api.github.com/repos/diego3g/chai-subset/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/diego3g/chai-subset/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/diego3g/chai-subset/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/diego3g/chai-subset/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/diego3g/chai-subset/statuses/{sha}",
    languages_url: "https://api.github.com/repos/diego3g/chai-subset/languages",
    stargazers_url:
      "https://api.github.com/repos/diego3g/chai-subset/stargazers",
    contributors_url:
      "https://api.github.com/repos/diego3g/chai-subset/contributors",
    subscribers_url:
      "https://api.github.com/repos/diego3g/chai-subset/subscribers",
    subscription_url:
      "https://api.github.com/repos/diego3g/chai-subset/subscription",
    commits_url:
      "https://api.github.com/repos/diego3g/chai-subset/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/diego3g/chai-subset/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/diego3g/chai-subset/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/diego3g/chai-subset/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/diego3g/chai-subset/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/diego3g/chai-subset/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/diego3g/chai-subset/merges",
    archive_url:
      "https://api.github.com/repos/diego3g/chai-subset/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/diego3g/chai-subset/downloads",
    issues_url:
      "https://api.github.com/repos/diego3g/chai-subset/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/diego3g/chai-subset/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/diego3g/chai-subset/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/diego3g/chai-subset/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/diego3g/chai-subset/labels{/name}",
    releases_url:
      "https://api.github.com/repos/diego3g/chai-subset/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/diego3g/chai-subset/deployments",
    created_at: "2018-07-18T17:00:08Z",
    updated_at: "2018-07-18T17:00:10Z",
    pushed_at: "2018-07-18T17:33:53Z",
    git_url: "git://github.com/diego3g/chai-subset.git",
    ssh_url: "git@github.com:diego3g/chai-subset.git",
    clone_url: "https://github.com/diego3g/chai-subset.git",
    svn_url: "https://github.com/diego3g/chai-subset",
    homepage: "http://chaijs.com/plugins/chai-subset/",
    size: 59,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz"
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 60353405,
    node_id: "MDEwOlJlcG9zaXRvcnk2MDM1MzQwNQ==",
    name: "codeboss",
    full_name: "diego3g/codeboss",
    private: false,
    owner: {
      login: "diego3g",
      id: 2254731,
      node_id: "MDQ6VXNlcjIyNTQ3MzE=",
      avatar_url: "https://avatars2.githubusercontent.com/u/2254731?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/diego3g",
      html_url: "https://github.com/diego3g",
      followers_url: "https://api.github.com/users/diego3g/followers",
      following_url:
        "https://api.github.com/users/diego3g/following{/other_user}",
      gists_url: "https://api.github.com/users/diego3g/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/diego3g/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/diego3g/subscriptions",
      organizations_url: "https://api.github.com/users/diego3g/orgs",
      repos_url: "https://api.github.com/users/diego3g/repos",
      events_url: "https://api.github.com/users/diego3g/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/diego3g/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/diego3g/codeboss",
    description:
      "Dê um passo adiante com a codeboss. Cursos completos em video-aula com todas tecnologias web que o mercado está de olho.",
    fork: false,
    url: "https://api.github.com/repos/diego3g/codeboss",
    forks_url: "https://api.github.com/repos/diego3g/codeboss/forks",
    keys_url: "https://api.github.com/repos/diego3g/codeboss/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/diego3g/codeboss/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/diego3g/codeboss/teams",
    hooks_url: "https://api.github.com/repos/diego3g/codeboss/hooks",
    issue_events_url:
      "https://api.github.com/repos/diego3g/codeboss/issues/events{/number}",
    events_url: "https://api.github.com/repos/diego3g/codeboss/events",
    assignees_url:
      "https://api.github.com/repos/diego3g/codeboss/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/diego3g/codeboss/branches{/branch}",
    tags_url: "https://api.github.com/repos/diego3g/codeboss/tags",
    blobs_url: "https://api.github.com/repos/diego3g/codeboss/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/diego3g/codeboss/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/diego3g/codeboss/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/diego3g/codeboss/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/diego3g/codeboss/statuses/{sha}",
    languages_url: "https://api.github.com/repos/diego3g/codeboss/languages",
    stargazers_url: "https://api.github.com/repos/diego3g/codeboss/stargazers",
    contributors_url:
      "https://api.github.com/repos/diego3g/codeboss/contributors",
    subscribers_url:
      "https://api.github.com/repos/diego3g/codeboss/subscribers",
    subscription_url:
      "https://api.github.com/repos/diego3g/codeboss/subscription",
    commits_url: "https://api.github.com/repos/diego3g/codeboss/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/diego3g/codeboss/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/diego3g/codeboss/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/diego3g/codeboss/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/diego3g/codeboss/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/diego3g/codeboss/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/diego3g/codeboss/merges",
    archive_url:
      "https://api.github.com/repos/diego3g/codeboss/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/diego3g/codeboss/downloads",
    issues_url: "https://api.github.com/repos/diego3g/codeboss/issues{/number}",
    pulls_url: "https://api.github.com/repos/diego3g/codeboss/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/diego3g/codeboss/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/diego3g/codeboss/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/diego3g/codeboss/labels{/name}",
    releases_url: "https://api.github.com/repos/diego3g/codeboss/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/diego3g/codeboss/deployments",
    created_at: "2016-06-03T14:22:02Z",
    updated_at: "2017-05-23T17:30:10Z",
    pushed_at: "2016-06-18T00:54:20Z",
    git_url: "git://github.com/diego3g/codeboss.git",
    ssh_url: "git@github.com:diego3g/codeboss.git",
    clone_url: "https://github.com/diego3g/codeboss.git",
    svn_url: "https://github.com/diego3g/codeboss",
    homepage: "http://www.codeboss.com.br",
    size: 2324,
    stargazers_count: 0,
    watchers_count: 0,
    language: "CSS",
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 123184658,
    node_id: "MDEwOlJlcG9zaXRvcnkxMjMxODQ2NTg=",
    name: "comunicacao-rn-nav",
    full_name: "diego3g/comunicacao-rn-nav",
    private: false,
    owner: {
      login: "diego3g",
      id: 2254731,
      node_id: "MDQ6VXNlcjIyNTQ3MzE=",
      avatar_url: "https://avatars2.githubusercontent.com/u/2254731?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/diego3g",
      html_url: "https://github.com/diego3g",
      followers_url: "https://api.github.com/users/diego3g/followers",
      following_url:
        "https://api.github.com/users/diego3g/following{/other_user}",
      gists_url: "https://api.github.com/users/diego3g/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/diego3g/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/diego3g/subscriptions",
      organizations_url: "https://api.github.com/users/diego3g/orgs",
      repos_url: "https://api.github.com/users/diego3g/repos",
      events_url: "https://api.github.com/users/diego3g/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/diego3g/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/diego3g/comunicacao-rn-nav",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/diego3g/comunicacao-rn-nav",
    forks_url: "https://api.github.com/repos/diego3g/comunicacao-rn-nav/forks",
    keys_url:
      "https://api.github.com/repos/diego3g/comunicacao-rn-nav/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/diego3g/comunicacao-rn-nav/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/diego3g/comunicacao-rn-nav/teams",
    hooks_url: "https://api.github.com/repos/diego3g/comunicacao-rn-nav/hooks",
    issue_events_url:
      "https://api.github.com/repos/diego3g/comunicacao-rn-nav/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/diego3g/comunicacao-rn-nav/events",
    assignees_url:
      "https://api.github.com/repos/diego3g/comunicacao-rn-nav/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/diego3g/comunicacao-rn-nav/branches{/branch}",
    tags_url: "https://api.github.com/repos/diego3g/comunicacao-rn-nav/tags",
    blobs_url:
      "https://api.github.com/repos/diego3g/comunicacao-rn-nav/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/diego3g/comunicacao-rn-nav/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/diego3g/comunicacao-rn-nav/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/diego3g/comunicacao-rn-nav/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/diego3g/comunicacao-rn-nav/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/diego3g/comunicacao-rn-nav/languages",
    stargazers_url:
      "https://api.github.com/repos/diego3g/comunicacao-rn-nav/stargazers",
    contributors_url:
      "https://api.github.com/repos/diego3g/comunicacao-rn-nav/contributors",
    subscribers_url:
      "https://api.github.com/repos/diego3g/comunicacao-rn-nav/subscribers",
    subscription_url:
      "https://api.github.com/repos/diego3g/comunicacao-rn-nav/subscription",
    commits_url:
      "https://api.github.com/repos/diego3g/comunicacao-rn-nav/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/diego3g/comunicacao-rn-nav/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/diego3g/comunicacao-rn-nav/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/diego3g/comunicacao-rn-nav/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/diego3g/comunicacao-rn-nav/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/diego3g/comunicacao-rn-nav/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/diego3g/comunicacao-rn-nav/merges",
    archive_url:
      "https://api.github.com/repos/diego3g/comunicacao-rn-nav/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/diego3g/comunicacao-rn-nav/downloads",
    issues_url:
      "https://api.github.com/repos/diego3g/comunicacao-rn-nav/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/diego3g/comunicacao-rn-nav/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/diego3g/comunicacao-rn-nav/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/diego3g/comunicacao-rn-nav/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/diego3g/comunicacao-rn-nav/labels{/name}",
    releases_url:
      "https://api.github.com/repos/diego3g/comunicacao-rn-nav/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/diego3g/comunicacao-rn-nav/deployments",
    created_at: "2018-02-27T20:30:41Z",
    updated_at: "2018-02-27T20:38:51Z",
    pushed_at: "2018-02-27T20:30:52Z",
    git_url: "git://github.com/diego3g/comunicacao-rn-nav.git",
    ssh_url: "git@github.com:diego3g/comunicacao-rn-nav.git",
    clone_url: "https://github.com/diego3g/comunicacao-rn-nav.git",
    svn_url: "https://github.com/diego3g/comunicacao-rn-nav",
    homepage: null,
    size: 135,
    stargazers_count: 1,
    watchers_count: 1,
    language: "Objective-C",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: "master"
  },
  {
    id: 59289469,
    node_id: "MDEwOlJlcG9zaXRvcnk1OTI4OTQ2OQ==",
    name: "desafiobee",
    full_name: "diego3g/desafiobee",
    private: false,
    owner: {
      login: "diego3g",
      id: 2254731,
      node_id: "MDQ6VXNlcjIyNTQ3MzE=",
      avatar_url: "https://avatars2.githubusercontent.com/u/2254731?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/diego3g",
      html_url: "https://github.com/diego3g",
      followers_url: "https://api.github.com/users/diego3g/followers",
      following_url:
        "https://api.github.com/users/diego3g/following{/other_user}",
      gists_url: "https://api.github.com/users/diego3g/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/diego3g/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/diego3g/subscriptions",
      organizations_url: "https://api.github.com/users/diego3g/orgs",
      repos_url: "https://api.github.com/users/diego3g/repos",
      events_url: "https://api.github.com/users/diego3g/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/diego3g/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/diego3g/desafiobee",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/diego3g/desafiobee",
    forks_url: "https://api.github.com/repos/diego3g/desafiobee/forks",
    keys_url: "https://api.github.com/repos/diego3g/desafiobee/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/diego3g/desafiobee/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/diego3g/desafiobee/teams",
    hooks_url: "https://api.github.com/repos/diego3g/desafiobee/hooks",
    issue_events_url:
      "https://api.github.com/repos/diego3g/desafiobee/issues/events{/number}",
    events_url: "https://api.github.com/repos/diego3g/desafiobee/events",
    assignees_url:
      "https://api.github.com/repos/diego3g/desafiobee/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/diego3g/desafiobee/branches{/branch}",
    tags_url: "https://api.github.com/repos/diego3g/desafiobee/tags",
    blobs_url:
      "https://api.github.com/repos/diego3g/desafiobee/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/diego3g/desafiobee/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/diego3g/desafiobee/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/diego3g/desafiobee/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/diego3g/desafiobee/statuses/{sha}",
    languages_url: "https://api.github.com/repos/diego3g/desafiobee/languages",
    stargazers_url:
      "https://api.github.com/repos/diego3g/desafiobee/stargazers",
    contributors_url:
      "https://api.github.com/repos/diego3g/desafiobee/contributors",
    subscribers_url:
      "https://api.github.com/repos/diego3g/desafiobee/subscribers",
    subscription_url:
      "https://api.github.com/repos/diego3g/desafiobee/subscription",
    commits_url:
      "https://api.github.com/repos/diego3g/desafiobee/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/diego3g/desafiobee/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/diego3g/desafiobee/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/diego3g/desafiobee/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/diego3g/desafiobee/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/diego3g/desafiobee/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/diego3g/desafiobee/merges",
    archive_url:
      "https://api.github.com/repos/diego3g/desafiobee/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/diego3g/desafiobee/downloads",
    issues_url:
      "https://api.github.com/repos/diego3g/desafiobee/issues{/number}",
    pulls_url: "https://api.github.com/repos/diego3g/desafiobee/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/diego3g/desafiobee/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/diego3g/desafiobee/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/diego3g/desafiobee/labels{/name}",
    releases_url:
      "https://api.github.com/repos/diego3g/desafiobee/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/diego3g/desafiobee/deployments",
    created_at: "2016-05-20T11:35:32Z",
    updated_at: "2016-05-23T23:23:05Z",
    pushed_at: "2016-06-09T19:06:13Z",
    git_url: "git://github.com/diego3g/desafiobee.git",
    ssh_url: "git@github.com:diego3g/desafiobee.git",
    clone_url: "https://github.com/diego3g/desafiobee.git",
    svn_url: "https://github.com/diego3g/desafiobee",
    homepage: null,
    size: 80,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 32950698,
    node_id: "MDEwOlJlcG9zaXRvcnkzMjk1MDY5OA==",
    name: "diego3g.github.io",
    full_name: "diego3g/diego3g.github.io",
    private: false,
    owner: {
      login: "diego3g",
      id: 2254731,
      node_id: "MDQ6VXNlcjIyNTQ3MzE=",
      avatar_url: "https://avatars2.githubusercontent.com/u/2254731?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/diego3g",
      html_url: "https://github.com/diego3g",
      followers_url: "https://api.github.com/users/diego3g/followers",
      following_url:
        "https://api.github.com/users/diego3g/following{/other_user}",
      gists_url: "https://api.github.com/users/diego3g/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/diego3g/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/diego3g/subscriptions",
      organizations_url: "https://api.github.com/users/diego3g/orgs",
      repos_url: "https://api.github.com/users/diego3g/repos",
      events_url: "https://api.github.com/users/diego3g/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/diego3g/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/diego3g/diego3g.github.io",
    description: "My Site",
    fork: false,
    url: "https://api.github.com/repos/diego3g/diego3g.github.io",
    forks_url: "https://api.github.com/repos/diego3g/diego3g.github.io/forks",
    keys_url:
      "https://api.github.com/repos/diego3g/diego3g.github.io/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/diego3g/diego3g.github.io/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/diego3g/diego3g.github.io/teams",
    hooks_url: "https://api.github.com/repos/diego3g/diego3g.github.io/hooks",
    issue_events_url:
      "https://api.github.com/repos/diego3g/diego3g.github.io/issues/events{/number}",
    events_url: "https://api.github.com/repos/diego3g/diego3g.github.io/events",
    assignees_url:
      "https://api.github.com/repos/diego3g/diego3g.github.io/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/diego3g/diego3g.github.io/branches{/branch}",
    tags_url: "https://api.github.com/repos/diego3g/diego3g.github.io/tags",
    blobs_url:
      "https://api.github.com/repos/diego3g/diego3g.github.io/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/diego3g/diego3g.github.io/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/diego3g/diego3g.github.io/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/diego3g/diego3g.github.io/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/diego3g/diego3g.github.io/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/diego3g/diego3g.github.io/languages",
    stargazers_url:
      "https://api.github.com/repos/diego3g/diego3g.github.io/stargazers",
    contributors_url:
      "https://api.github.com/repos/diego3g/diego3g.github.io/contributors",
    subscribers_url:
      "https://api.github.com/repos/diego3g/diego3g.github.io/subscribers",
    subscription_url:
      "https://api.github.com/repos/diego3g/diego3g.github.io/subscription",
    commits_url:
      "https://api.github.com/repos/diego3g/diego3g.github.io/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/diego3g/diego3g.github.io/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/diego3g/diego3g.github.io/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/diego3g/diego3g.github.io/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/diego3g/diego3g.github.io/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/diego3g/diego3g.github.io/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/diego3g/diego3g.github.io/merges",
    archive_url:
      "https://api.github.com/repos/diego3g/diego3g.github.io/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/diego3g/diego3g.github.io/downloads",
    issues_url:
      "https://api.github.com/repos/diego3g/diego3g.github.io/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/diego3g/diego3g.github.io/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/diego3g/diego3g.github.io/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/diego3g/diego3g.github.io/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/diego3g/diego3g.github.io/labels{/name}",
    releases_url:
      "https://api.github.com/repos/diego3g/diego3g.github.io/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/diego3g/diego3g.github.io/deployments",
    created_at: "2015-03-26T20:40:13Z",
    updated_at: "2017-10-16T19:51:38Z",
    pushed_at: "2017-10-16T20:02:01Z",
    git_url: "git://github.com/diego3g/diego3g.github.io.git",
    ssh_url: "git@github.com:diego3g/diego3g.github.io.git",
    clone_url: "https://github.com/diego3g/diego3g.github.io.git",
    svn_url: "https://github.com/diego3g/diego3g.github.io",
    homepage: null,
    size: 5101,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 137143759,
    node_id: "MDEwOlJlcG9zaXRvcnkxMzcxNDM3NTk=",
    name: "docs",
    full_name: "diego3g/docs",
    private: false,
    owner: {
      login: "diego3g",
      id: 2254731,
      node_id: "MDQ6VXNlcjIyNTQ3MzE=",
      avatar_url: "https://avatars2.githubusercontent.com/u/2254731?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/diego3g",
      html_url: "https://github.com/diego3g",
      followers_url: "https://api.github.com/users/diego3g/followers",
      following_url:
        "https://api.github.com/users/diego3g/following{/other_user}",
      gists_url: "https://api.github.com/users/diego3g/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/diego3g/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/diego3g/subscriptions",
      organizations_url: "https://api.github.com/users/diego3g/orgs",
      repos_url: "https://api.github.com/users/diego3g/repos",
      events_url: "https://api.github.com/users/diego3g/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/diego3g/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/diego3g/docs",
    description: "Official docs on website are stored here",
    fork: true,
    url: "https://api.github.com/repos/diego3g/docs",
    forks_url: "https://api.github.com/repos/diego3g/docs/forks",
    keys_url: "https://api.github.com/repos/diego3g/docs/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/diego3g/docs/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/diego3g/docs/teams",
    hooks_url: "https://api.github.com/repos/diego3g/docs/hooks",
    issue_events_url:
      "https://api.github.com/repos/diego3g/docs/issues/events{/number}",
    events_url: "https://api.github.com/repos/diego3g/docs/events",
    assignees_url: "https://api.github.com/repos/diego3g/docs/assignees{/user}",
    branches_url: "https://api.github.com/repos/diego3g/docs/branches{/branch}",
    tags_url: "https://api.github.com/repos/diego3g/docs/tags",
    blobs_url: "https://api.github.com/repos/diego3g/docs/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/diego3g/docs/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/diego3g/docs/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/diego3g/docs/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/diego3g/docs/statuses/{sha}",
    languages_url: "https://api.github.com/repos/diego3g/docs/languages",
    stargazers_url: "https://api.github.com/repos/diego3g/docs/stargazers",
    contributors_url: "https://api.github.com/repos/diego3g/docs/contributors",
    subscribers_url: "https://api.github.com/repos/diego3g/docs/subscribers",
    subscription_url: "https://api.github.com/repos/diego3g/docs/subscription",
    commits_url: "https://api.github.com/repos/diego3g/docs/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/diego3g/docs/git/commits{/sha}",
    comments_url: "https://api.github.com/repos/diego3g/docs/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/diego3g/docs/issues/comments{/number}",
    contents_url: "https://api.github.com/repos/diego3g/docs/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/diego3g/docs/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/diego3g/docs/merges",
    archive_url:
      "https://api.github.com/repos/diego3g/docs/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/diego3g/docs/downloads",
    issues_url: "https://api.github.com/repos/diego3g/docs/issues{/number}",
    pulls_url: "https://api.github.com/repos/diego3g/docs/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/diego3g/docs/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/diego3g/docs/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/diego3g/docs/labels{/name}",
    releases_url: "https://api.github.com/repos/diego3g/docs/releases{/id}",
    deployments_url: "https://api.github.com/repos/diego3g/docs/deployments",
    created_at: "2018-06-13T00:54:18Z",
    updated_at: "2019-01-21T16:00:37Z",
    pushed_at: "2018-06-13T01:08:22Z",
    git_url: "git://github.com/diego3g/docs.git",
    ssh_url: "git@github.com:diego3g/docs.git",
    clone_url: "https://github.com/diego3g/docs.git",
    svn_url: "https://github.com/diego3g/docs",
    homepage: null,
    size: 1033,
    stargazers_count: 1,
    watchers_count: 1,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 2,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 2,
    open_issues: 0,
    watchers: 1,
    default_branch: "4.1"
  },
  {
    id: 131076869,
    node_id: "MDEwOlJlcG9zaXRvcnkxMzEwNzY4Njk=",
    name: "dokr",
    full_name: "diego3g/dokr",
    private: false,
    owner: {
      login: "diego3g",
      id: 2254731,
      node_id: "MDQ6VXNlcjIyNTQ3MzE=",
      avatar_url: "https://avatars2.githubusercontent.com/u/2254731?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/diego3g",
      html_url: "https://github.com/diego3g",
      followers_url: "https://api.github.com/users/diego3g/followers",
      following_url:
        "https://api.github.com/users/diego3g/following{/other_user}",
      gists_url: "https://api.github.com/users/diego3g/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/diego3g/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/diego3g/subscriptions",
      organizations_url: "https://api.github.com/users/diego3g/orgs",
      repos_url: "https://api.github.com/users/diego3g/repos",
      events_url: "https://api.github.com/users/diego3g/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/diego3g/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/diego3g/dokr",
    description: "Start/stop docker containers from tray menu",
    fork: false,
    url: "https://api.github.com/repos/diego3g/dokr",
    forks_url: "https://api.github.com/repos/diego3g/dokr/forks",
    keys_url: "https://api.github.com/repos/diego3g/dokr/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/diego3g/dokr/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/diego3g/dokr/teams",
    hooks_url: "https://api.github.com/repos/diego3g/dokr/hooks",
    issue_events_url:
      "https://api.github.com/repos/diego3g/dokr/issues/events{/number}",
    events_url: "https://api.github.com/repos/diego3g/dokr/events",
    assignees_url: "https://api.github.com/repos/diego3g/dokr/assignees{/user}",
    branches_url: "https://api.github.com/repos/diego3g/dokr/branches{/branch}",
    tags_url: "https://api.github.com/repos/diego3g/dokr/tags",
    blobs_url: "https://api.github.com/repos/diego3g/dokr/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/diego3g/dokr/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/diego3g/dokr/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/diego3g/dokr/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/diego3g/dokr/statuses/{sha}",
    languages_url: "https://api.github.com/repos/diego3g/dokr/languages",
    stargazers_url: "https://api.github.com/repos/diego3g/dokr/stargazers",
    contributors_url: "https://api.github.com/repos/diego3g/dokr/contributors",
    subscribers_url: "https://api.github.com/repos/diego3g/dokr/subscribers",
    subscription_url: "https://api.github.com/repos/diego3g/dokr/subscription",
    commits_url: "https://api.github.com/repos/diego3g/dokr/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/diego3g/dokr/git/commits{/sha}",
    comments_url: "https://api.github.com/repos/diego3g/dokr/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/diego3g/dokr/issues/comments{/number}",
    contents_url: "https://api.github.com/repos/diego3g/dokr/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/diego3g/dokr/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/diego3g/dokr/merges",
    archive_url:
      "https://api.github.com/repos/diego3g/dokr/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/diego3g/dokr/downloads",
    issues_url: "https://api.github.com/repos/diego3g/dokr/issues{/number}",
    pulls_url: "https://api.github.com/repos/diego3g/dokr/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/diego3g/dokr/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/diego3g/dokr/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/diego3g/dokr/labels{/name}",
    releases_url: "https://api.github.com/repos/diego3g/dokr/releases{/id}",
    deployments_url: "https://api.github.com/repos/diego3g/dokr/deployments",
    created_at: "2018-04-26T00:03:59Z",
    updated_at: "2019-01-14T03:39:42Z",
    pushed_at: "2018-04-27T02:39:20Z",
    git_url: "git://github.com/diego3g/dokr.git",
    ssh_url: "git@github.com:diego3g/dokr.git",
    clone_url: "https://github.com/diego3g/dokr.git",
    svn_url: "https://github.com/diego3g/dokr",
    homepage: null,
    size: 86,
    stargazers_count: 1,
    watchers_count: 1,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 3,
    license: null,
    forks: 0,
    open_issues: 3,
    watchers: 1,
    default_branch: "master"
  },
  {
    id: 172913874,
    node_id: "MDEwOlJlcG9zaXRvcnkxNzI5MTM4NzQ=",
    name: "electron-mongo-gui",
    full_name: "diego3g/electron-mongo-gui",
    private: false,
    owner: {
      login: "diego3g",
      id: 2254731,
      node_id: "MDQ6VXNlcjIyNTQ3MzE=",
      avatar_url: "https://avatars2.githubusercontent.com/u/2254731?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/diego3g",
      html_url: "https://github.com/diego3g",
      followers_url: "https://api.github.com/users/diego3g/followers",
      following_url:
        "https://api.github.com/users/diego3g/following{/other_user}",
      gists_url: "https://api.github.com/users/diego3g/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/diego3g/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/diego3g/subscriptions",
      organizations_url: "https://api.github.com/users/diego3g/orgs",
      repos_url: "https://api.github.com/users/diego3g/repos",
      events_url: "https://api.github.com/users/diego3g/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/diego3g/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/diego3g/electron-mongo-gui",
    description: "Mongo GUI developed using Electron",
    fork: false,
    url: "https://api.github.com/repos/diego3g/electron-mongo-gui",
    forks_url: "https://api.github.com/repos/diego3g/electron-mongo-gui/forks",
    keys_url:
      "https://api.github.com/repos/diego3g/electron-mongo-gui/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/diego3g/electron-mongo-gui/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/diego3g/electron-mongo-gui/teams",
    hooks_url: "https://api.github.com/repos/diego3g/electron-mongo-gui/hooks",
    issue_events_url:
      "https://api.github.com/repos/diego3g/electron-mongo-gui/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/diego3g/electron-mongo-gui/events",
    assignees_url:
      "https://api.github.com/repos/diego3g/electron-mongo-gui/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/diego3g/electron-mongo-gui/branches{/branch}",
    tags_url: "https://api.github.com/repos/diego3g/electron-mongo-gui/tags",
    blobs_url:
      "https://api.github.com/repos/diego3g/electron-mongo-gui/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/diego3g/electron-mongo-gui/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/diego3g/electron-mongo-gui/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/diego3g/electron-mongo-gui/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/diego3g/electron-mongo-gui/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/diego3g/electron-mongo-gui/languages",
    stargazers_url:
      "https://api.github.com/repos/diego3g/electron-mongo-gui/stargazers",
    contributors_url:
      "https://api.github.com/repos/diego3g/electron-mongo-gui/contributors",
    subscribers_url:
      "https://api.github.com/repos/diego3g/electron-mongo-gui/subscribers",
    subscription_url:
      "https://api.github.com/repos/diego3g/electron-mongo-gui/subscription",
    commits_url:
      "https://api.github.com/repos/diego3g/electron-mongo-gui/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/diego3g/electron-mongo-gui/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/diego3g/electron-mongo-gui/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/diego3g/electron-mongo-gui/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/diego3g/electron-mongo-gui/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/diego3g/electron-mongo-gui/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/diego3g/electron-mongo-gui/merges",
    archive_url:
      "https://api.github.com/repos/diego3g/electron-mongo-gui/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/diego3g/electron-mongo-gui/downloads",
    issues_url:
      "https://api.github.com/repos/diego3g/electron-mongo-gui/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/diego3g/electron-mongo-gui/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/diego3g/electron-mongo-gui/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/diego3g/electron-mongo-gui/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/diego3g/electron-mongo-gui/labels{/name}",
    releases_url:
      "https://api.github.com/repos/diego3g/electron-mongo-gui/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/diego3g/electron-mongo-gui/deployments",
    created_at: "2019-02-27T12:44:14Z",
    updated_at: "2019-03-06T12:24:15Z",
    pushed_at: "2019-02-27T12:46:46Z",
    git_url: "git://github.com/diego3g/electron-mongo-gui.git",
    ssh_url: "git@github.com:diego3g/electron-mongo-gui.git",
    clone_url: "https://github.com/diego3g/electron-mongo-gui.git",
    svn_url: "https://github.com/diego3g/electron-mongo-gui",
    homepage: null,
    size: 100,
    stargazers_count: 7,
    watchers_count: 7,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz"
    },
    forks: 0,
    open_issues: 0,
    watchers: 7,
    default_branch: "master"
  },
  {
    id: 84217771,
    node_id: "MDEwOlJlcG9zaXRvcnk4NDIxNzc3MQ==",
    name: "elixirdev",
    full_name: "diego3g/elixirdev",
    private: false,
    owner: {
      login: "diego3g",
      id: 2254731,
      node_id: "MDQ6VXNlcjIyNTQ3MzE=",
      avatar_url: "https://avatars2.githubusercontent.com/u/2254731?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/diego3g",
      html_url: "https://github.com/diego3g",
      followers_url: "https://api.github.com/users/diego3g/followers",
      following_url:
        "https://api.github.com/users/diego3g/following{/other_user}",
      gists_url: "https://api.github.com/users/diego3g/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/diego3g/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/diego3g/subscriptions",
      organizations_url: "https://api.github.com/users/diego3g/orgs",
      repos_url: "https://api.github.com/users/diego3g/repos",
      events_url: "https://api.github.com/users/diego3g/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/diego3g/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/diego3g/elixirdev",
    description: "just some elixir stuff",
    fork: false,
    url: "https://api.github.com/repos/diego3g/elixirdev",
    forks_url: "https://api.github.com/repos/diego3g/elixirdev/forks",
    keys_url: "https://api.github.com/repos/diego3g/elixirdev/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/diego3g/elixirdev/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/diego3g/elixirdev/teams",
    hooks_url: "https://api.github.com/repos/diego3g/elixirdev/hooks",
    issue_events_url:
      "https://api.github.com/repos/diego3g/elixirdev/issues/events{/number}",
    events_url: "https://api.github.com/repos/diego3g/elixirdev/events",
    assignees_url:
      "https://api.github.com/repos/diego3g/elixirdev/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/diego3g/elixirdev/branches{/branch}",
    tags_url: "https://api.github.com/repos/diego3g/elixirdev/tags",
    blobs_url: "https://api.github.com/repos/diego3g/elixirdev/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/diego3g/elixirdev/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/diego3g/elixirdev/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/diego3g/elixirdev/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/diego3g/elixirdev/statuses/{sha}",
    languages_url: "https://api.github.com/repos/diego3g/elixirdev/languages",
    stargazers_url: "https://api.github.com/repos/diego3g/elixirdev/stargazers",
    contributors_url:
      "https://api.github.com/repos/diego3g/elixirdev/contributors",
    subscribers_url:
      "https://api.github.com/repos/diego3g/elixirdev/subscribers",
    subscription_url:
      "https://api.github.com/repos/diego3g/elixirdev/subscription",
    commits_url: "https://api.github.com/repos/diego3g/elixirdev/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/diego3g/elixirdev/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/diego3g/elixirdev/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/diego3g/elixirdev/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/diego3g/elixirdev/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/diego3g/elixirdev/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/diego3g/elixirdev/merges",
    archive_url:
      "https://api.github.com/repos/diego3g/elixirdev/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/diego3g/elixirdev/downloads",
    issues_url:
      "https://api.github.com/repos/diego3g/elixirdev/issues{/number}",
    pulls_url: "https://api.github.com/repos/diego3g/elixirdev/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/diego3g/elixirdev/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/diego3g/elixirdev/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/diego3g/elixirdev/labels{/name}",
    releases_url:
      "https://api.github.com/repos/diego3g/elixirdev/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/diego3g/elixirdev/deployments",
    created_at: "2017-03-07T15:52:07Z",
    updated_at: "2019-04-03T14:29:30Z",
    pushed_at: "2017-03-07T16:19:27Z",
    git_url: "git://github.com/diego3g/elixirdev.git",
    ssh_url: "git@github.com:diego3g/elixirdev.git",
    clone_url: "https://github.com/diego3g/elixirdev.git",
    svn_url: "https://github.com/diego3g/elixirdev",
    homepage: null,
    size: 53,
    stargazers_count: 1,
    watchers_count: 1,
    language: "Elixir",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: "master"
  },
  {
    id: 141434781,
    node_id: "MDEwOlJlcG9zaXRvcnkxNDE0MzQ3ODE=",
    name: "exemplo-git",
    full_name: "diego3g/exemplo-git",
    private: false,
    owner: {
      login: "diego3g",
      id: 2254731,
      node_id: "MDQ6VXNlcjIyNTQ3MzE=",
      avatar_url: "https://avatars2.githubusercontent.com/u/2254731?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/diego3g",
      html_url: "https://github.com/diego3g",
      followers_url: "https://api.github.com/users/diego3g/followers",
      following_url:
        "https://api.github.com/users/diego3g/following{/other_user}",
      gists_url: "https://api.github.com/users/diego3g/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/diego3g/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/diego3g/subscriptions",
      organizations_url: "https://api.github.com/users/diego3g/orgs",
      repos_url: "https://api.github.com/users/diego3g/repos",
      events_url: "https://api.github.com/users/diego3g/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/diego3g/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/diego3g/exemplo-git",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/diego3g/exemplo-git",
    forks_url: "https://api.github.com/repos/diego3g/exemplo-git/forks",
    keys_url: "https://api.github.com/repos/diego3g/exemplo-git/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/diego3g/exemplo-git/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/diego3g/exemplo-git/teams",
    hooks_url: "https://api.github.com/repos/diego3g/exemplo-git/hooks",
    issue_events_url:
      "https://api.github.com/repos/diego3g/exemplo-git/issues/events{/number}",
    events_url: "https://api.github.com/repos/diego3g/exemplo-git/events",
    assignees_url:
      "https://api.github.com/repos/diego3g/exemplo-git/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/diego3g/exemplo-git/branches{/branch}",
    tags_url: "https://api.github.com/repos/diego3g/exemplo-git/tags",
    blobs_url:
      "https://api.github.com/repos/diego3g/exemplo-git/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/diego3g/exemplo-git/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/diego3g/exemplo-git/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/diego3g/exemplo-git/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/diego3g/exemplo-git/statuses/{sha}",
    languages_url: "https://api.github.com/repos/diego3g/exemplo-git/languages",
    stargazers_url:
      "https://api.github.com/repos/diego3g/exemplo-git/stargazers",
    contributors_url:
      "https://api.github.com/repos/diego3g/exemplo-git/contributors",
    subscribers_url:
      "https://api.github.com/repos/diego3g/exemplo-git/subscribers",
    subscription_url:
      "https://api.github.com/repos/diego3g/exemplo-git/subscription",
    commits_url:
      "https://api.github.com/repos/diego3g/exemplo-git/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/diego3g/exemplo-git/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/diego3g/exemplo-git/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/diego3g/exemplo-git/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/diego3g/exemplo-git/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/diego3g/exemplo-git/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/diego3g/exemplo-git/merges",
    archive_url:
      "https://api.github.com/repos/diego3g/exemplo-git/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/diego3g/exemplo-git/downloads",
    issues_url:
      "https://api.github.com/repos/diego3g/exemplo-git/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/diego3g/exemplo-git/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/diego3g/exemplo-git/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/diego3g/exemplo-git/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/diego3g/exemplo-git/labels{/name}",
    releases_url:
      "https://api.github.com/repos/diego3g/exemplo-git/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/diego3g/exemplo-git/deployments",
    created_at: "2018-07-18T12:55:49Z",
    updated_at: "2018-07-18T12:56:24Z",
    pushed_at: "2018-07-18T12:56:23Z",
    git_url: "git://github.com/diego3g/exemplo-git.git",
    ssh_url: "git@github.com:diego3g/exemplo-git.git",
    clone_url: "https://github.com/diego3g/exemplo-git.git",
    svn_url: "https://github.com/diego3g/exemplo-git",
    homepage: null,
    size: 0,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 111213395,
    node_id: "MDEwOlJlcG9zaXRvcnkxMTEyMTMzOTU=",
    name: "express-example",
    full_name: "diego3g/express-example",
    private: false,
    owner: {
      login: "diego3g",
      id: 2254731,
      node_id: "MDQ6VXNlcjIyNTQ3MzE=",
      avatar_url: "https://avatars2.githubusercontent.com/u/2254731?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/diego3g",
      html_url: "https://github.com/diego3g",
      followers_url: "https://api.github.com/users/diego3g/followers",
      following_url:
        "https://api.github.com/users/diego3g/following{/other_user}",
      gists_url: "https://api.github.com/users/diego3g/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/diego3g/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/diego3g/subscriptions",
      organizations_url: "https://api.github.com/users/diego3g/orgs",
      repos_url: "https://api.github.com/users/diego3g/repos",
      events_url: "https://api.github.com/users/diego3g/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/diego3g/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/diego3g/express-example",
    description:
      "A proposal for the usage of Sequelize within an Express.JS application.",
    fork: true,
    url: "https://api.github.com/repos/diego3g/express-example",
    forks_url: "https://api.github.com/repos/diego3g/express-example/forks",
    keys_url:
      "https://api.github.com/repos/diego3g/express-example/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/diego3g/express-example/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/diego3g/express-example/teams",
    hooks_url: "https://api.github.com/repos/diego3g/express-example/hooks",
    issue_events_url:
      "https://api.github.com/repos/diego3g/express-example/issues/events{/number}",
    events_url: "https://api.github.com/repos/diego3g/express-example/events",
    assignees_url:
      "https://api.github.com/repos/diego3g/express-example/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/diego3g/express-example/branches{/branch}",
    tags_url: "https://api.github.com/repos/diego3g/express-example/tags",
    blobs_url:
      "https://api.github.com/repos/diego3g/express-example/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/diego3g/express-example/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/diego3g/express-example/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/diego3g/express-example/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/diego3g/express-example/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/diego3g/express-example/languages",
    stargazers_url:
      "https://api.github.com/repos/diego3g/express-example/stargazers",
    contributors_url:
      "https://api.github.com/repos/diego3g/express-example/contributors",
    subscribers_url:
      "https://api.github.com/repos/diego3g/express-example/subscribers",
    subscription_url:
      "https://api.github.com/repos/diego3g/express-example/subscription",
    commits_url:
      "https://api.github.com/repos/diego3g/express-example/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/diego3g/express-example/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/diego3g/express-example/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/diego3g/express-example/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/diego3g/express-example/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/diego3g/express-example/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/diego3g/express-example/merges",
    archive_url:
      "https://api.github.com/repos/diego3g/express-example/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/diego3g/express-example/downloads",
    issues_url:
      "https://api.github.com/repos/diego3g/express-example/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/diego3g/express-example/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/diego3g/express-example/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/diego3g/express-example/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/diego3g/express-example/labels{/name}",
    releases_url:
      "https://api.github.com/repos/diego3g/express-example/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/diego3g/express-example/deployments",
    created_at: "2017-11-18T14:47:57Z",
    updated_at: "2018-01-23T03:16:15Z",
    pushed_at: "2017-11-18T11:33:45Z",
    git_url: "git://github.com/diego3g/express-example.git",
    ssh_url: "git@github.com:diego3g/express-example.git",
    clone_url: "https://github.com/diego3g/express-example.git",
    svn_url: "https://github.com/diego3g/express-example",
    homepage: "",
    size: 41,
    stargazers_count: 1,
    watchers_count: 1,
    language: "JavaScript",
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 1,
    open_issues: 0,
    watchers: 1,
    default_branch: "master"
  },
  {
    id: 177212963,
    node_id: "MDEwOlJlcG9zaXRvcnkxNzcyMTI5NjM=",
    name: "fala.dev",
    full_name: "diego3g/fala.dev",
    private: false,
    owner: {
      login: "diego3g",
      id: 2254731,
      node_id: "MDQ6VXNlcjIyNTQ3MzE=",
      avatar_url: "https://avatars2.githubusercontent.com/u/2254731?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/diego3g",
      html_url: "https://github.com/diego3g",
      followers_url: "https://api.github.com/users/diego3g/followers",
      following_url:
        "https://api.github.com/users/diego3g/following{/other_user}",
      gists_url: "https://api.github.com/users/diego3g/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/diego3g/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/diego3g/subscriptions",
      organizations_url: "https://api.github.com/users/diego3g/orgs",
      repos_url: "https://api.github.com/users/diego3g/repos",
      events_url: "https://api.github.com/users/diego3g/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/diego3g/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/diego3g/fala.dev",
    description: "Repositório contendo site fala.dev :)",
    fork: false,
    url: "https://api.github.com/repos/diego3g/fala.dev",
    forks_url: "https://api.github.com/repos/diego3g/fala.dev/forks",
    keys_url: "https://api.github.com/repos/diego3g/fala.dev/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/diego3g/fala.dev/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/diego3g/fala.dev/teams",
    hooks_url: "https://api.github.com/repos/diego3g/fala.dev/hooks",
    issue_events_url:
      "https://api.github.com/repos/diego3g/fala.dev/issues/events{/number}",
    events_url: "https://api.github.com/repos/diego3g/fala.dev/events",
    assignees_url:
      "https://api.github.com/repos/diego3g/fala.dev/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/diego3g/fala.dev/branches{/branch}",
    tags_url: "https://api.github.com/repos/diego3g/fala.dev/tags",
    blobs_url: "https://api.github.com/repos/diego3g/fala.dev/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/diego3g/fala.dev/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/diego3g/fala.dev/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/diego3g/fala.dev/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/diego3g/fala.dev/statuses/{sha}",
    languages_url: "https://api.github.com/repos/diego3g/fala.dev/languages",
    stargazers_url: "https://api.github.com/repos/diego3g/fala.dev/stargazers",
    contributors_url:
      "https://api.github.com/repos/diego3g/fala.dev/contributors",
    subscribers_url:
      "https://api.github.com/repos/diego3g/fala.dev/subscribers",
    subscription_url:
      "https://api.github.com/repos/diego3g/fala.dev/subscription",
    commits_url: "https://api.github.com/repos/diego3g/fala.dev/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/diego3g/fala.dev/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/diego3g/fala.dev/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/diego3g/fala.dev/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/diego3g/fala.dev/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/diego3g/fala.dev/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/diego3g/fala.dev/merges",
    archive_url:
      "https://api.github.com/repos/diego3g/fala.dev/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/diego3g/fala.dev/downloads",
    issues_url: "https://api.github.com/repos/diego3g/fala.dev/issues{/number}",
    pulls_url: "https://api.github.com/repos/diego3g/fala.dev/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/diego3g/fala.dev/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/diego3g/fala.dev/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/diego3g/fala.dev/labels{/name}",
    releases_url: "https://api.github.com/repos/diego3g/fala.dev/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/diego3g/fala.dev/deployments",
    created_at: "2019-03-22T21:45:09Z",
    updated_at: "2019-03-25T03:22:45Z",
    pushed_at: "2019-03-22T21:46:16Z",
    git_url: "git://github.com/diego3g/fala.dev.git",
    ssh_url: "git@github.com:diego3g/fala.dev.git",
    clone_url: "https://github.com/diego3g/fala.dev.git",
    svn_url: "https://github.com/diego3g/fala.dev",
    homepage: "https://fala.dev",
    size: 107,
    stargazers_count: 5,
    watchers_count: 5,
    language: "CSS",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 5,
    default_branch: "master"
  },
  {
    id: 178263209,
    node_id: "MDEwOlJlcG9zaXRvcnkxNzgyNjMyMDk=",
    name: "github-explorer",
    full_name: "diego3g/github-explorer",
    private: false,
    owner: {
      login: "diego3g",
      id: 2254731,
      node_id: "MDQ6VXNlcjIyNTQ3MzE=",
      avatar_url: "https://avatars2.githubusercontent.com/u/2254731?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/diego3g",
      html_url: "https://github.com/diego3g",
      followers_url: "https://api.github.com/users/diego3g/followers",
      following_url:
        "https://api.github.com/users/diego3g/following{/other_user}",
      gists_url: "https://api.github.com/users/diego3g/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/diego3g/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/diego3g/subscriptions",
      organizations_url: "https://api.github.com/users/diego3g/orgs",
      repos_url: "https://api.github.com/users/diego3g/repos",
      events_url: "https://api.github.com/users/diego3g/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/diego3g/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/diego3g/github-explorer",
    description: "An example app to deploy to Apple Store and Google Play",
    fork: false,
    url: "https://api.github.com/repos/diego3g/github-explorer",
    forks_url: "https://api.github.com/repos/diego3g/github-explorer/forks",
    keys_url:
      "https://api.github.com/repos/diego3g/github-explorer/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/diego3g/github-explorer/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/diego3g/github-explorer/teams",
    hooks_url: "https://api.github.com/repos/diego3g/github-explorer/hooks",
    issue_events_url:
      "https://api.github.com/repos/diego3g/github-explorer/issues/events{/number}",
    events_url: "https://api.github.com/repos/diego3g/github-explorer/events",
    assignees_url:
      "https://api.github.com/repos/diego3g/github-explorer/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/diego3g/github-explorer/branches{/branch}",
    tags_url: "https://api.github.com/repos/diego3g/github-explorer/tags",
    blobs_url:
      "https://api.github.com/repos/diego3g/github-explorer/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/diego3g/github-explorer/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/diego3g/github-explorer/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/diego3g/github-explorer/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/diego3g/github-explorer/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/diego3g/github-explorer/languages",
    stargazers_url:
      "https://api.github.com/repos/diego3g/github-explorer/stargazers",
    contributors_url:
      "https://api.github.com/repos/diego3g/github-explorer/contributors",
    subscribers_url:
      "https://api.github.com/repos/diego3g/github-explorer/subscribers",
    subscription_url:
      "https://api.github.com/repos/diego3g/github-explorer/subscription",
    commits_url:
      "https://api.github.com/repos/diego3g/github-explorer/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/diego3g/github-explorer/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/diego3g/github-explorer/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/diego3g/github-explorer/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/diego3g/github-explorer/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/diego3g/github-explorer/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/diego3g/github-explorer/merges",
    archive_url:
      "https://api.github.com/repos/diego3g/github-explorer/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/diego3g/github-explorer/downloads",
    issues_url:
      "https://api.github.com/repos/diego3g/github-explorer/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/diego3g/github-explorer/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/diego3g/github-explorer/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/diego3g/github-explorer/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/diego3g/github-explorer/labels{/name}",
    releases_url:
      "https://api.github.com/repos/diego3g/github-explorer/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/diego3g/github-explorer/deployments",
    created_at: "2019-03-28T18:43:36Z",
    updated_at: "2019-03-30T01:48:18Z",
    pushed_at: "2019-03-29T21:47:04Z",
    git_url: "git://github.com/diego3g/github-explorer.git",
    ssh_url: "git@github.com:diego3g/github-explorer.git",
    clone_url: "https://github.com/diego3g/github-explorer.git",
    svn_url: "https://github.com/diego3g/github-explorer",
    homepage: null,
    size: 36869,
    stargazers_count: 7,
    watchers_count: 7,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 7,
    default_branch: "master"
  },
  {
    id: 108914740,
    node_id: "MDEwOlJlcG9zaXRvcnkxMDg5MTQ3NDA=",
    name: "gonative-week-2-app",
    full_name: "diego3g/gonative-week-2-app",
    private: false,
    owner: {
      login: "diego3g",
      id: 2254731,
      node_id: "MDQ6VXNlcjIyNTQ3MzE=",
      avatar_url: "https://avatars2.githubusercontent.com/u/2254731?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/diego3g",
      html_url: "https://github.com/diego3g",
      followers_url: "https://api.github.com/users/diego3g/followers",
      following_url:
        "https://api.github.com/users/diego3g/following{/other_user}",
      gists_url: "https://api.github.com/users/diego3g/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/diego3g/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/diego3g/subscriptions",
      organizations_url: "https://api.github.com/users/diego3g/orgs",
      repos_url: "https://api.github.com/users/diego3g/repos",
      events_url: "https://api.github.com/users/diego3g/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/diego3g/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/diego3g/gonative-week-2-app",
    description: "App desenvolvido no segundo dia da GoNative Week",
    fork: false,
    url: "https://api.github.com/repos/diego3g/gonative-week-2-app",
    forks_url: "https://api.github.com/repos/diego3g/gonative-week-2-app/forks",
    keys_url:
      "https://api.github.com/repos/diego3g/gonative-week-2-app/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/diego3g/gonative-week-2-app/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/diego3g/gonative-week-2-app/teams",
    hooks_url: "https://api.github.com/repos/diego3g/gonative-week-2-app/hooks",
    issue_events_url:
      "https://api.github.com/repos/diego3g/gonative-week-2-app/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/diego3g/gonative-week-2-app/events",
    assignees_url:
      "https://api.github.com/repos/diego3g/gonative-week-2-app/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/diego3g/gonative-week-2-app/branches{/branch}",
    tags_url: "https://api.github.com/repos/diego3g/gonative-week-2-app/tags",
    blobs_url:
      "https://api.github.com/repos/diego3g/gonative-week-2-app/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/diego3g/gonative-week-2-app/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/diego3g/gonative-week-2-app/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/diego3g/gonative-week-2-app/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/diego3g/gonative-week-2-app/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/diego3g/gonative-week-2-app/languages",
    stargazers_url:
      "https://api.github.com/repos/diego3g/gonative-week-2-app/stargazers",
    contributors_url:
      "https://api.github.com/repos/diego3g/gonative-week-2-app/contributors",
    subscribers_url:
      "https://api.github.com/repos/diego3g/gonative-week-2-app/subscribers",
    subscription_url:
      "https://api.github.com/repos/diego3g/gonative-week-2-app/subscription",
    commits_url:
      "https://api.github.com/repos/diego3g/gonative-week-2-app/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/diego3g/gonative-week-2-app/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/diego3g/gonative-week-2-app/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/diego3g/gonative-week-2-app/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/diego3g/gonative-week-2-app/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/diego3g/gonative-week-2-app/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/diego3g/gonative-week-2-app/merges",
    archive_url:
      "https://api.github.com/repos/diego3g/gonative-week-2-app/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/diego3g/gonative-week-2-app/downloads",
    issues_url:
      "https://api.github.com/repos/diego3g/gonative-week-2-app/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/diego3g/gonative-week-2-app/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/diego3g/gonative-week-2-app/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/diego3g/gonative-week-2-app/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/diego3g/gonative-week-2-app/labels{/name}",
    releases_url:
      "https://api.github.com/repos/diego3g/gonative-week-2-app/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/diego3g/gonative-week-2-app/deployments",
    created_at: "2017-10-30T22:19:37Z",
    updated_at: "2017-10-30T22:19:58Z",
    pushed_at: "2017-10-30T22:19:56Z",
    git_url: "git://github.com/diego3g/gonative-week-2-app.git",
    ssh_url: "git@github.com:diego3g/gonative-week-2-app.git",
    clone_url: "https://github.com/diego3g/gonative-week-2-app.git",
    svn_url: "https://github.com/diego3g/gonative-week-2-app",
    homepage: null,
    size: 724,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Objective-C",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "app"
  },
  {
    id: 137402698,
    node_id: "MDEwOlJlcG9zaXRvcnkxMzc0MDI2OTg=",
    name: "goreact-deploy",
    full_name: "diego3g/goreact-deploy",
    private: false,
    owner: {
      login: "diego3g",
      id: 2254731,
      node_id: "MDQ6VXNlcjIyNTQ3MzE=",
      avatar_url: "https://avatars2.githubusercontent.com/u/2254731?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/diego3g",
      html_url: "https://github.com/diego3g",
      followers_url: "https://api.github.com/users/diego3g/followers",
      following_url:
        "https://api.github.com/users/diego3g/following{/other_user}",
      gists_url: "https://api.github.com/users/diego3g/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/diego3g/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/diego3g/subscriptions",
      organizations_url: "https://api.github.com/users/diego3g/orgs",
      repos_url: "https://api.github.com/users/diego3g/repos",
      events_url: "https://api.github.com/users/diego3g/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/diego3g/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/diego3g/goreact-deploy",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/diego3g/goreact-deploy",
    forks_url: "https://api.github.com/repos/diego3g/goreact-deploy/forks",
    keys_url:
      "https://api.github.com/repos/diego3g/goreact-deploy/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/diego3g/goreact-deploy/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/diego3g/goreact-deploy/teams",
    hooks_url: "https://api.github.com/repos/diego3g/goreact-deploy/hooks",
    issue_events_url:
      "https://api.github.com/repos/diego3g/goreact-deploy/issues/events{/number}",
    events_url: "https://api.github.com/repos/diego3g/goreact-deploy/events",
    assignees_url:
      "https://api.github.com/repos/diego3g/goreact-deploy/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/diego3g/goreact-deploy/branches{/branch}",
    tags_url: "https://api.github.com/repos/diego3g/goreact-deploy/tags",
    blobs_url:
      "https://api.github.com/repos/diego3g/goreact-deploy/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/diego3g/goreact-deploy/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/diego3g/goreact-deploy/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/diego3g/goreact-deploy/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/diego3g/goreact-deploy/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/diego3g/goreact-deploy/languages",
    stargazers_url:
      "https://api.github.com/repos/diego3g/goreact-deploy/stargazers",
    contributors_url:
      "https://api.github.com/repos/diego3g/goreact-deploy/contributors",
    subscribers_url:
      "https://api.github.com/repos/diego3g/goreact-deploy/subscribers",
    subscription_url:
      "https://api.github.com/repos/diego3g/goreact-deploy/subscription",
    commits_url:
      "https://api.github.com/repos/diego3g/goreact-deploy/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/diego3g/goreact-deploy/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/diego3g/goreact-deploy/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/diego3g/goreact-deploy/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/diego3g/goreact-deploy/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/diego3g/goreact-deploy/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/diego3g/goreact-deploy/merges",
    archive_url:
      "https://api.github.com/repos/diego3g/goreact-deploy/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/diego3g/goreact-deploy/downloads",
    issues_url:
      "https://api.github.com/repos/diego3g/goreact-deploy/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/diego3g/goreact-deploy/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/diego3g/goreact-deploy/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/diego3g/goreact-deploy/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/diego3g/goreact-deploy/labels{/name}",
    releases_url:
      "https://api.github.com/repos/diego3g/goreact-deploy/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/diego3g/goreact-deploy/deployments",
    created_at: "2018-06-14T19:53:22Z",
    updated_at: "2018-12-21T12:38:22Z",
    pushed_at: "2018-06-24T20:23:15Z",
    git_url: "git://github.com/diego3g/goreact-deploy.git",
    ssh_url: "git@github.com:diego3g/goreact-deploy.git",
    clone_url: "https://github.com/diego3g/goreact-deploy.git",
    svn_url: "https://github.com/diego3g/goreact-deploy",
    homepage: null,
    size: 186,
    stargazers_count: 3,
    watchers_count: 3,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 3,
    default_branch: "master"
  },
  {
    id: 136922826,
    node_id: "MDEwOlJlcG9zaXRvcnkxMzY5MjI4MjY=",
    name: "jest-cheat-sheet",
    full_name: "diego3g/jest-cheat-sheet",
    private: false,
    owner: {
      login: "diego3g",
      id: 2254731,
      node_id: "MDQ6VXNlcjIyNTQ3MzE=",
      avatar_url: "https://avatars2.githubusercontent.com/u/2254731?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/diego3g",
      html_url: "https://github.com/diego3g",
      followers_url: "https://api.github.com/users/diego3g/followers",
      following_url:
        "https://api.github.com/users/diego3g/following{/other_user}",
      gists_url: "https://api.github.com/users/diego3g/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/diego3g/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/diego3g/subscriptions",
      organizations_url: "https://api.github.com/users/diego3g/orgs",
      repos_url: "https://api.github.com/users/diego3g/repos",
      events_url: "https://api.github.com/users/diego3g/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/diego3g/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/diego3g/jest-cheat-sheet",
    description: "Jest cheat sheet",
    fork: true,
    url: "https://api.github.com/repos/diego3g/jest-cheat-sheet",
    forks_url: "https://api.github.com/repos/diego3g/jest-cheat-sheet/forks",
    keys_url:
      "https://api.github.com/repos/diego3g/jest-cheat-sheet/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/diego3g/jest-cheat-sheet/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/diego3g/jest-cheat-sheet/teams",
    hooks_url: "https://api.github.com/repos/diego3g/jest-cheat-sheet/hooks",
    issue_events_url:
      "https://api.github.com/repos/diego3g/jest-cheat-sheet/issues/events{/number}",
    events_url: "https://api.github.com/repos/diego3g/jest-cheat-sheet/events",
    assignees_url:
      "https://api.github.com/repos/diego3g/jest-cheat-sheet/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/diego3g/jest-cheat-sheet/branches{/branch}",
    tags_url: "https://api.github.com/repos/diego3g/jest-cheat-sheet/tags",
    blobs_url:
      "https://api.github.com/repos/diego3g/jest-cheat-sheet/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/diego3g/jest-cheat-sheet/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/diego3g/jest-cheat-sheet/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/diego3g/jest-cheat-sheet/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/diego3g/jest-cheat-sheet/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/diego3g/jest-cheat-sheet/languages",
    stargazers_url:
      "https://api.github.com/repos/diego3g/jest-cheat-sheet/stargazers",
    contributors_url:
      "https://api.github.com/repos/diego3g/jest-cheat-sheet/contributors",
    subscribers_url:
      "https://api.github.com/repos/diego3g/jest-cheat-sheet/subscribers",
    subscription_url:
      "https://api.github.com/repos/diego3g/jest-cheat-sheet/subscription",
    commits_url:
      "https://api.github.com/repos/diego3g/jest-cheat-sheet/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/diego3g/jest-cheat-sheet/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/diego3g/jest-cheat-sheet/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/diego3g/jest-cheat-sheet/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/diego3g/jest-cheat-sheet/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/diego3g/jest-cheat-sheet/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/diego3g/jest-cheat-sheet/merges",
    archive_url:
      "https://api.github.com/repos/diego3g/jest-cheat-sheet/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/diego3g/jest-cheat-sheet/downloads",
    issues_url:
      "https://api.github.com/repos/diego3g/jest-cheat-sheet/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/diego3g/jest-cheat-sheet/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/diego3g/jest-cheat-sheet/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/diego3g/jest-cheat-sheet/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/diego3g/jest-cheat-sheet/labels{/name}",
    releases_url:
      "https://api.github.com/repos/diego3g/jest-cheat-sheet/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/diego3g/jest-cheat-sheet/deployments",
    created_at: "2018-06-11T12:24:48Z",
    updated_at: "2018-06-11T12:24:51Z",
    pushed_at: "2018-06-05T05:29:17Z",
    git_url: "git://github.com/diego3g/jest-cheat-sheet.git",
    ssh_url: "git@github.com:diego3g/jest-cheat-sheet.git",
    clone_url: "https://github.com/diego3g/jest-cheat-sheet.git",
    svn_url: "https://github.com/diego3g/jest-cheat-sheet",
    homepage: null,
    size: 61,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "cc0-1.0",
      name: "Creative Commons Zero v1.0 Universal",
      spdx_id: "CC0-1.0",
      url: "https://api.github.com/licenses/cc0-1.0",
      node_id: "MDc6TGljZW5zZTY="
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 94660093,
    node_id: "MDEwOlJlcG9zaXRvcnk5NDY2MDA5Mw==",
    name: "jivia",
    full_name: "diego3g/jivia",
    private: false,
    owner: {
      login: "diego3g",
      id: 2254731,
      node_id: "MDQ6VXNlcjIyNTQ3MzE=",
      avatar_url: "https://avatars2.githubusercontent.com/u/2254731?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/diego3g",
      html_url: "https://github.com/diego3g",
      followers_url: "https://api.github.com/users/diego3g/followers",
      following_url:
        "https://api.github.com/users/diego3g/following{/other_user}",
      gists_url: "https://api.github.com/users/diego3g/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/diego3g/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/diego3g/subscriptions",
      organizations_url: "https://api.github.com/users/diego3g/orgs",
      repos_url: "https://api.github.com/users/diego3g/repos",
      events_url: "https://api.github.com/users/diego3g/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/diego3g/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/diego3g/jivia",
    description: "2D RPG Game with React + Electron",
    fork: false,
    url: "https://api.github.com/repos/diego3g/jivia",
    forks_url: "https://api.github.com/repos/diego3g/jivia/forks",
    keys_url: "https://api.github.com/repos/diego3g/jivia/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/diego3g/jivia/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/diego3g/jivia/teams",
    hooks_url: "https://api.github.com/repos/diego3g/jivia/hooks",
    issue_events_url:
      "https://api.github.com/repos/diego3g/jivia/issues/events{/number}",
    events_url: "https://api.github.com/repos/diego3g/jivia/events",
    assignees_url:
      "https://api.github.com/repos/diego3g/jivia/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/diego3g/jivia/branches{/branch}",
    tags_url: "https://api.github.com/repos/diego3g/jivia/tags",
    blobs_url: "https://api.github.com/repos/diego3g/jivia/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/diego3g/jivia/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/diego3g/jivia/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/diego3g/jivia/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/diego3g/jivia/statuses/{sha}",
    languages_url: "https://api.github.com/repos/diego3g/jivia/languages",
    stargazers_url: "https://api.github.com/repos/diego3g/jivia/stargazers",
    contributors_url: "https://api.github.com/repos/diego3g/jivia/contributors",
    subscribers_url: "https://api.github.com/repos/diego3g/jivia/subscribers",
    subscription_url: "https://api.github.com/repos/diego3g/jivia/subscription",
    commits_url: "https://api.github.com/repos/diego3g/jivia/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/diego3g/jivia/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/diego3g/jivia/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/diego3g/jivia/issues/comments{/number}",
    contents_url: "https://api.github.com/repos/diego3g/jivia/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/diego3g/jivia/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/diego3g/jivia/merges",
    archive_url:
      "https://api.github.com/repos/diego3g/jivia/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/diego3g/jivia/downloads",
    issues_url: "https://api.github.com/repos/diego3g/jivia/issues{/number}",
    pulls_url: "https://api.github.com/repos/diego3g/jivia/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/diego3g/jivia/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/diego3g/jivia/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/diego3g/jivia/labels{/name}",
    releases_url: "https://api.github.com/repos/diego3g/jivia/releases{/id}",
    deployments_url: "https://api.github.com/repos/diego3g/jivia/deployments",
    created_at: "2017-06-18T02:20:10Z",
    updated_at: "2018-07-03T16:25:02Z",
    pushed_at: "2017-06-23T02:01:30Z",
    git_url: "git://github.com/diego3g/jivia.git",
    ssh_url: "git@github.com:diego3g/jivia.git",
    clone_url: "https://github.com/diego3g/jivia.git",
    svn_url: "https://github.com/diego3g/jivia",
    homepage: "",
    size: 8077,
    stargazers_count: 2,
    watchers_count: 2,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 2,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 2,
    open_issues: 0,
    watchers: 2,
    default_branch: "master"
  },
  {
    id: 174165496,
    node_id: "MDEwOlJlcG9zaXRvcnkxNzQxNjU0OTY=",
    name: "live-formularios-react",
    full_name: "diego3g/live-formularios-react",
    private: false,
    owner: {
      login: "diego3g",
      id: 2254731,
      node_id: "MDQ6VXNlcjIyNTQ3MzE=",
      avatar_url: "https://avatars2.githubusercontent.com/u/2254731?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/diego3g",
      html_url: "https://github.com/diego3g",
      followers_url: "https://api.github.com/users/diego3g/followers",
      following_url:
        "https://api.github.com/users/diego3g/following{/other_user}",
      gists_url: "https://api.github.com/users/diego3g/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/diego3g/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/diego3g/subscriptions",
      organizations_url: "https://api.github.com/users/diego3g/orgs",
      repos_url: "https://api.github.com/users/diego3g/repos",
      events_url: "https://api.github.com/users/diego3g/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/diego3g/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/diego3g/live-formularios-react",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/diego3g/live-formularios-react",
    forks_url:
      "https://api.github.com/repos/diego3g/live-formularios-react/forks",
    keys_url:
      "https://api.github.com/repos/diego3g/live-formularios-react/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/diego3g/live-formularios-react/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/diego3g/live-formularios-react/teams",
    hooks_url:
      "https://api.github.com/repos/diego3g/live-formularios-react/hooks",
    issue_events_url:
      "https://api.github.com/repos/diego3g/live-formularios-react/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/diego3g/live-formularios-react/events",
    assignees_url:
      "https://api.github.com/repos/diego3g/live-formularios-react/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/diego3g/live-formularios-react/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/diego3g/live-formularios-react/tags",
    blobs_url:
      "https://api.github.com/repos/diego3g/live-formularios-react/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/diego3g/live-formularios-react/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/diego3g/live-formularios-react/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/diego3g/live-formularios-react/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/diego3g/live-formularios-react/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/diego3g/live-formularios-react/languages",
    stargazers_url:
      "https://api.github.com/repos/diego3g/live-formularios-react/stargazers",
    contributors_url:
      "https://api.github.com/repos/diego3g/live-formularios-react/contributors",
    subscribers_url:
      "https://api.github.com/repos/diego3g/live-formularios-react/subscribers",
    subscription_url:
      "https://api.github.com/repos/diego3g/live-formularios-react/subscription",
    commits_url:
      "https://api.github.com/repos/diego3g/live-formularios-react/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/diego3g/live-formularios-react/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/diego3g/live-formularios-react/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/diego3g/live-formularios-react/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/diego3g/live-formularios-react/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/diego3g/live-formularios-react/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/diego3g/live-formularios-react/merges",
    archive_url:
      "https://api.github.com/repos/diego3g/live-formularios-react/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/diego3g/live-formularios-react/downloads",
    issues_url:
      "https://api.github.com/repos/diego3g/live-formularios-react/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/diego3g/live-formularios-react/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/diego3g/live-formularios-react/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/diego3g/live-formularios-react/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/diego3g/live-formularios-react/labels{/name}",
    releases_url:
      "https://api.github.com/repos/diego3g/live-formularios-react/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/diego3g/live-formularios-react/deployments",
    created_at: "2019-03-06T14:57:48Z",
    updated_at: "2019-04-01T02:39:49Z",
    pushed_at: "2019-03-06T14:58:11Z",
    git_url: "git://github.com/diego3g/live-formularios-react.git",
    ssh_url: "git@github.com:diego3g/live-formularios-react.git",
    clone_url: "https://github.com/diego3g/live-formularios-react.git",
    svn_url: "https://github.com/diego3g/live-formularios-react",
    homepage: null,
    size: 97,
    stargazers_count: 12,
    watchers_count: 12,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 4,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 4,
    open_issues: 0,
    watchers: 12,
    default_branch: "master"
  },
  {
    id: 110976067,
    node_id: "MDEwOlJlcG9zaXRvcnkxMTA5NzYwNjc=",
    name: "live-git",
    full_name: "diego3g/live-git",
    private: false,
    owner: {
      login: "diego3g",
      id: 2254731,
      node_id: "MDQ6VXNlcjIyNTQ3MzE=",
      avatar_url: "https://avatars2.githubusercontent.com/u/2254731?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/diego3g",
      html_url: "https://github.com/diego3g",
      followers_url: "https://api.github.com/users/diego3g/followers",
      following_url:
        "https://api.github.com/users/diego3g/following{/other_user}",
      gists_url: "https://api.github.com/users/diego3g/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/diego3g/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/diego3g/subscriptions",
      organizations_url: "https://api.github.com/users/diego3g/orgs",
      repos_url: "https://api.github.com/users/diego3g/repos",
      events_url: "https://api.github.com/users/diego3g/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/diego3g/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/diego3g/live-git",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/diego3g/live-git",
    forks_url: "https://api.github.com/repos/diego3g/live-git/forks",
    keys_url: "https://api.github.com/repos/diego3g/live-git/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/diego3g/live-git/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/diego3g/live-git/teams",
    hooks_url: "https://api.github.com/repos/diego3g/live-git/hooks",
    issue_events_url:
      "https://api.github.com/repos/diego3g/live-git/issues/events{/number}",
    events_url: "https://api.github.com/repos/diego3g/live-git/events",
    assignees_url:
      "https://api.github.com/repos/diego3g/live-git/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/diego3g/live-git/branches{/branch}",
    tags_url: "https://api.github.com/repos/diego3g/live-git/tags",
    blobs_url: "https://api.github.com/repos/diego3g/live-git/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/diego3g/live-git/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/diego3g/live-git/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/diego3g/live-git/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/diego3g/live-git/statuses/{sha}",
    languages_url: "https://api.github.com/repos/diego3g/live-git/languages",
    stargazers_url: "https://api.github.com/repos/diego3g/live-git/stargazers",
    contributors_url:
      "https://api.github.com/repos/diego3g/live-git/contributors",
    subscribers_url:
      "https://api.github.com/repos/diego3g/live-git/subscribers",
    subscription_url:
      "https://api.github.com/repos/diego3g/live-git/subscription",
    commits_url: "https://api.github.com/repos/diego3g/live-git/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/diego3g/live-git/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/diego3g/live-git/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/diego3g/live-git/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/diego3g/live-git/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/diego3g/live-git/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/diego3g/live-git/merges",
    archive_url:
      "https://api.github.com/repos/diego3g/live-git/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/diego3g/live-git/downloads",
    issues_url: "https://api.github.com/repos/diego3g/live-git/issues{/number}",
    pulls_url: "https://api.github.com/repos/diego3g/live-git/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/diego3g/live-git/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/diego3g/live-git/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/diego3g/live-git/labels{/name}",
    releases_url: "https://api.github.com/repos/diego3g/live-git/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/diego3g/live-git/deployments",
    created_at: "2017-11-16T13:40:12Z",
    updated_at: "2017-11-16T13:42:10Z",
    pushed_at: "2017-11-16T13:48:46Z",
    git_url: "git://github.com/diego3g/live-git.git",
    ssh_url: "git@github.com:diego3g/live-git.git",
    clone_url: "https://github.com/diego3g/live-git.git",
    svn_url: "https://github.com/diego3g/live-git",
    homepage: null,
    size: 3,
    stargazers_count: 0,
    watchers_count: 0,
    language: "HTML",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 37128741,
    node_id: "MDEwOlJlcG9zaXRvcnkzNzEyODc0MQ==",
    name: "meukart",
    full_name: "diego3g/meukart",
    private: false,
    owner: {
      login: "diego3g",
      id: 2254731,
      node_id: "MDQ6VXNlcjIyNTQ3MzE=",
      avatar_url: "https://avatars2.githubusercontent.com/u/2254731?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/diego3g",
      html_url: "https://github.com/diego3g",
      followers_url: "https://api.github.com/users/diego3g/followers",
      following_url:
        "https://api.github.com/users/diego3g/following{/other_user}",
      gists_url: "https://api.github.com/users/diego3g/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/diego3g/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/diego3g/subscriptions",
      organizations_url: "https://api.github.com/users/diego3g/orgs",
      repos_url: "https://api.github.com/users/diego3g/repos",
      events_url: "https://api.github.com/users/diego3g/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/diego3g/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/diego3g/meukart",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/diego3g/meukart",
    forks_url: "https://api.github.com/repos/diego3g/meukart/forks",
    keys_url: "https://api.github.com/repos/diego3g/meukart/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/diego3g/meukart/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/diego3g/meukart/teams",
    hooks_url: "https://api.github.com/repos/diego3g/meukart/hooks",
    issue_events_url:
      "https://api.github.com/repos/diego3g/meukart/issues/events{/number}",
    events_url: "https://api.github.com/repos/diego3g/meukart/events",
    assignees_url:
      "https://api.github.com/repos/diego3g/meukart/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/diego3g/meukart/branches{/branch}",
    tags_url: "https://api.github.com/repos/diego3g/meukart/tags",
    blobs_url: "https://api.github.com/repos/diego3g/meukart/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/diego3g/meukart/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/diego3g/meukart/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/diego3g/meukart/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/diego3g/meukart/statuses/{sha}",
    languages_url: "https://api.github.com/repos/diego3g/meukart/languages",
    stargazers_url: "https://api.github.com/repos/diego3g/meukart/stargazers",
    contributors_url:
      "https://api.github.com/repos/diego3g/meukart/contributors",
    subscribers_url: "https://api.github.com/repos/diego3g/meukart/subscribers",
    subscription_url:
      "https://api.github.com/repos/diego3g/meukart/subscription",
    commits_url: "https://api.github.com/repos/diego3g/meukart/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/diego3g/meukart/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/diego3g/meukart/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/diego3g/meukart/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/diego3g/meukart/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/diego3g/meukart/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/diego3g/meukart/merges",
    archive_url:
      "https://api.github.com/repos/diego3g/meukart/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/diego3g/meukart/downloads",
    issues_url: "https://api.github.com/repos/diego3g/meukart/issues{/number}",
    pulls_url: "https://api.github.com/repos/diego3g/meukart/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/diego3g/meukart/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/diego3g/meukart/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/diego3g/meukart/labels{/name}",
    releases_url: "https://api.github.com/repos/diego3g/meukart/releases{/id}",
    deployments_url: "https://api.github.com/repos/diego3g/meukart/deployments",
    created_at: "2015-06-09T11:46:54Z",
    updated_at: "2018-01-08T13:01:40Z",
    pushed_at: "2015-06-09T11:47:28Z",
    git_url: "git://github.com/diego3g/meukart.git",
    ssh_url: "git@github.com:diego3g/meukart.git",
    clone_url: "https://github.com/diego3g/meukart.git",
    svn_url: "https://github.com/diego3g/meukart",
    homepage: null,
    size: 1422,
    stargazers_count: 1,
    watchers_count: 1,
    language: "JavaScript",
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: "master"
  },
  {
    id: 152254855,
    node_id: "MDEwOlJlcG9zaXRvcnkxNTIyNTQ4NTU=",
    name: "node-es6-docker",
    full_name: "diego3g/node-es6-docker",
    private: false,
    owner: {
      login: "diego3g",
      id: 2254731,
      node_id: "MDQ6VXNlcjIyNTQ3MzE=",
      avatar_url: "https://avatars2.githubusercontent.com/u/2254731?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/diego3g",
      html_url: "https://github.com/diego3g",
      followers_url: "https://api.github.com/users/diego3g/followers",
      following_url:
        "https://api.github.com/users/diego3g/following{/other_user}",
      gists_url: "https://api.github.com/users/diego3g/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/diego3g/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/diego3g/subscriptions",
      organizations_url: "https://api.github.com/users/diego3g/orgs",
      repos_url: "https://api.github.com/users/diego3g/repos",
      events_url: "https://api.github.com/users/diego3g/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/diego3g/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/diego3g/node-es6-docker",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/diego3g/node-es6-docker",
    forks_url: "https://api.github.com/repos/diego3g/node-es6-docker/forks",
    keys_url:
      "https://api.github.com/repos/diego3g/node-es6-docker/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/diego3g/node-es6-docker/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/diego3g/node-es6-docker/teams",
    hooks_url: "https://api.github.com/repos/diego3g/node-es6-docker/hooks",
    issue_events_url:
      "https://api.github.com/repos/diego3g/node-es6-docker/issues/events{/number}",
    events_url: "https://api.github.com/repos/diego3g/node-es6-docker/events",
    assignees_url:
      "https://api.github.com/repos/diego3g/node-es6-docker/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/diego3g/node-es6-docker/branches{/branch}",
    tags_url: "https://api.github.com/repos/diego3g/node-es6-docker/tags",
    blobs_url:
      "https://api.github.com/repos/diego3g/node-es6-docker/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/diego3g/node-es6-docker/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/diego3g/node-es6-docker/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/diego3g/node-es6-docker/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/diego3g/node-es6-docker/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/diego3g/node-es6-docker/languages",
    stargazers_url:
      "https://api.github.com/repos/diego3g/node-es6-docker/stargazers",
    contributors_url:
      "https://api.github.com/repos/diego3g/node-es6-docker/contributors",
    subscribers_url:
      "https://api.github.com/repos/diego3g/node-es6-docker/subscribers",
    subscription_url:
      "https://api.github.com/repos/diego3g/node-es6-docker/subscription",
    commits_url:
      "https://api.github.com/repos/diego3g/node-es6-docker/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/diego3g/node-es6-docker/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/diego3g/node-es6-docker/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/diego3g/node-es6-docker/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/diego3g/node-es6-docker/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/diego3g/node-es6-docker/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/diego3g/node-es6-docker/merges",
    archive_url:
      "https://api.github.com/repos/diego3g/node-es6-docker/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/diego3g/node-es6-docker/downloads",
    issues_url:
      "https://api.github.com/repos/diego3g/node-es6-docker/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/diego3g/node-es6-docker/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/diego3g/node-es6-docker/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/diego3g/node-es6-docker/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/diego3g/node-es6-docker/labels{/name}",
    releases_url:
      "https://api.github.com/repos/diego3g/node-es6-docker/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/diego3g/node-es6-docker/deployments",
    created_at: "2018-10-09T13:21:30Z",
    updated_at: "2019-02-26T13:45:45Z",
    pushed_at: "2018-10-09T13:21:42Z",
    git_url: "git://github.com/diego3g/node-es6-docker.git",
    ssh_url: "git@github.com:diego3g/node-es6-docker.git",
    clone_url: "https://github.com/diego3g/node-es6-docker.git",
    svn_url: "https://github.com/diego3g/node-es6-docker",
    homepage: null,
    size: 31,
    stargazers_count: 5,
    watchers_count: 5,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 5,
    default_branch: "master"
  },
  {
    id: 174539407,
    node_id: "MDEwOlJlcG9zaXRvcnkxNzQ1Mzk0MDc=",
    name: "node-lerna-microservices",
    full_name: "diego3g/node-lerna-microservices",
    private: false,
    owner: {
      login: "diego3g",
      id: 2254731,
      node_id: "MDQ6VXNlcjIyNTQ3MzE=",
      avatar_url: "https://avatars2.githubusercontent.com/u/2254731?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/diego3g",
      html_url: "https://github.com/diego3g",
      followers_url: "https://api.github.com/users/diego3g/followers",
      following_url:
        "https://api.github.com/users/diego3g/following{/other_user}",
      gists_url: "https://api.github.com/users/diego3g/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/diego3g/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/diego3g/subscriptions",
      organizations_url: "https://api.github.com/users/diego3g/orgs",
      repos_url: "https://api.github.com/users/diego3g/repos",
      events_url: "https://api.github.com/users/diego3g/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/diego3g/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/diego3g/node-lerna-microservices",
    description: "Estudo sobre micro-serviços em NodeJS utilizando Lerna",
    fork: false,
    url: "https://api.github.com/repos/diego3g/node-lerna-microservices",
    forks_url:
      "https://api.github.com/repos/diego3g/node-lerna-microservices/forks",
    keys_url:
      "https://api.github.com/repos/diego3g/node-lerna-microservices/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/diego3g/node-lerna-microservices/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/diego3g/node-lerna-microservices/teams",
    hooks_url:
      "https://api.github.com/repos/diego3g/node-lerna-microservices/hooks",
    issue_events_url:
      "https://api.github.com/repos/diego3g/node-lerna-microservices/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/diego3g/node-lerna-microservices/events",
    assignees_url:
      "https://api.github.com/repos/diego3g/node-lerna-microservices/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/diego3g/node-lerna-microservices/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/diego3g/node-lerna-microservices/tags",
    blobs_url:
      "https://api.github.com/repos/diego3g/node-lerna-microservices/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/diego3g/node-lerna-microservices/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/diego3g/node-lerna-microservices/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/diego3g/node-lerna-microservices/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/diego3g/node-lerna-microservices/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/diego3g/node-lerna-microservices/languages",
    stargazers_url:
      "https://api.github.com/repos/diego3g/node-lerna-microservices/stargazers",
    contributors_url:
      "https://api.github.com/repos/diego3g/node-lerna-microservices/contributors",
    subscribers_url:
      "https://api.github.com/repos/diego3g/node-lerna-microservices/subscribers",
    subscription_url:
      "https://api.github.com/repos/diego3g/node-lerna-microservices/subscription",
    commits_url:
      "https://api.github.com/repos/diego3g/node-lerna-microservices/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/diego3g/node-lerna-microservices/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/diego3g/node-lerna-microservices/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/diego3g/node-lerna-microservices/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/diego3g/node-lerna-microservices/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/diego3g/node-lerna-microservices/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/diego3g/node-lerna-microservices/merges",
    archive_url:
      "https://api.github.com/repos/diego3g/node-lerna-microservices/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/diego3g/node-lerna-microservices/downloads",
    issues_url:
      "https://api.github.com/repos/diego3g/node-lerna-microservices/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/diego3g/node-lerna-microservices/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/diego3g/node-lerna-microservices/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/diego3g/node-lerna-microservices/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/diego3g/node-lerna-microservices/labels{/name}",
    releases_url:
      "https://api.github.com/repos/diego3g/node-lerna-microservices/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/diego3g/node-lerna-microservices/deployments",
    created_at: "2019-03-08T13:07:31Z",
    updated_at: "2019-03-12T01:45:53Z",
    pushed_at: "2019-03-12T20:05:00Z",
    git_url: "git://github.com/diego3g/node-lerna-microservices.git",
    ssh_url: "git@github.com:diego3g/node-lerna-microservices.git",
    clone_url: "https://github.com/diego3g/node-lerna-microservices.git",
    svn_url: "https://github.com/diego3g/node-lerna-microservices",
    homepage: null,
    size: 255,
    stargazers_count: 2,
    watchers_count: 2,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 2,
    default_branch: "master"
  },
  {
    id: 168146881,
    node_id: "MDEwOlJlcG9zaXRvcnkxNjgxNDY4ODE=",
    name: "node-prisma-graphql-example",
    full_name: "diego3g/node-prisma-graphql-example",
    private: false,
    owner: {
      login: "diego3g",
      id: 2254731,
      node_id: "MDQ6VXNlcjIyNTQ3MzE=",
      avatar_url: "https://avatars2.githubusercontent.com/u/2254731?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/diego3g",
      html_url: "https://github.com/diego3g",
      followers_url: "https://api.github.com/users/diego3g/followers",
      following_url:
        "https://api.github.com/users/diego3g/following{/other_user}",
      gists_url: "https://api.github.com/users/diego3g/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/diego3g/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/diego3g/subscriptions",
      organizations_url: "https://api.github.com/users/diego3g/orgs",
      repos_url: "https://api.github.com/users/diego3g/repos",
      events_url: "https://api.github.com/users/diego3g/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/diego3g/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/diego3g/node-prisma-graphql-example",
    description:
      "Start point for GraphQL/Prisma applications using NodeJS/Typescript",
    fork: false,
    url: "https://api.github.com/repos/diego3g/node-prisma-graphql-example",
    forks_url:
      "https://api.github.com/repos/diego3g/node-prisma-graphql-example/forks",
    keys_url:
      "https://api.github.com/repos/diego3g/node-prisma-graphql-example/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/diego3g/node-prisma-graphql-example/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/diego3g/node-prisma-graphql-example/teams",
    hooks_url:
      "https://api.github.com/repos/diego3g/node-prisma-graphql-example/hooks",
    issue_events_url:
      "https://api.github.com/repos/diego3g/node-prisma-graphql-example/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/diego3g/node-prisma-graphql-example/events",
    assignees_url:
      "https://api.github.com/repos/diego3g/node-prisma-graphql-example/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/diego3g/node-prisma-graphql-example/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/diego3g/node-prisma-graphql-example/tags",
    blobs_url:
      "https://api.github.com/repos/diego3g/node-prisma-graphql-example/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/diego3g/node-prisma-graphql-example/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/diego3g/node-prisma-graphql-example/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/diego3g/node-prisma-graphql-example/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/diego3g/node-prisma-graphql-example/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/diego3g/node-prisma-graphql-example/languages",
    stargazers_url:
      "https://api.github.com/repos/diego3g/node-prisma-graphql-example/stargazers",
    contributors_url:
      "https://api.github.com/repos/diego3g/node-prisma-graphql-example/contributors",
    subscribers_url:
      "https://api.github.com/repos/diego3g/node-prisma-graphql-example/subscribers",
    subscription_url:
      "https://api.github.com/repos/diego3g/node-prisma-graphql-example/subscription",
    commits_url:
      "https://api.github.com/repos/diego3g/node-prisma-graphql-example/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/diego3g/node-prisma-graphql-example/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/diego3g/node-prisma-graphql-example/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/diego3g/node-prisma-graphql-example/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/diego3g/node-prisma-graphql-example/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/diego3g/node-prisma-graphql-example/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/diego3g/node-prisma-graphql-example/merges",
    archive_url:
      "https://api.github.com/repos/diego3g/node-prisma-graphql-example/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/diego3g/node-prisma-graphql-example/downloads",
    issues_url:
      "https://api.github.com/repos/diego3g/node-prisma-graphql-example/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/diego3g/node-prisma-graphql-example/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/diego3g/node-prisma-graphql-example/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/diego3g/node-prisma-graphql-example/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/diego3g/node-prisma-graphql-example/labels{/name}",
    releases_url:
      "https://api.github.com/repos/diego3g/node-prisma-graphql-example/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/diego3g/node-prisma-graphql-example/deployments",
    created_at: "2019-01-29T11:56:01Z",
    updated_at: "2019-02-03T10:43:47Z",
    pushed_at: "2019-01-29T11:56:58Z",
    git_url: "git://github.com/diego3g/node-prisma-graphql-example.git",
    ssh_url: "git@github.com:diego3g/node-prisma-graphql-example.git",
    clone_url: "https://github.com/diego3g/node-prisma-graphql-example.git",
    svn_url: "https://github.com/diego3g/node-prisma-graphql-example",
    homepage: null,
    size: 48,
    stargazers_count: 3,
    watchers_count: 3,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 3,
    default_branch: "master"
  },
  {
    id: 102384993,
    node_id: "MDEwOlJlcG9zaXRvcnkxMDIzODQ5OTM=",
    name: "package_control_channel",
    full_name: "diego3g/package_control_channel",
    private: false,
    owner: {
      login: "diego3g",
      id: 2254731,
      node_id: "MDQ6VXNlcjIyNTQ3MzE=",
      avatar_url: "https://avatars2.githubusercontent.com/u/2254731?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/diego3g",
      html_url: "https://github.com/diego3g",
      followers_url: "https://api.github.com/users/diego3g/followers",
      following_url:
        "https://api.github.com/users/diego3g/following{/other_user}",
      gists_url: "https://api.github.com/users/diego3g/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/diego3g/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/diego3g/subscriptions",
      organizations_url: "https://api.github.com/users/diego3g/orgs",
      repos_url: "https://api.github.com/users/diego3g/repos",
      events_url: "https://api.github.com/users/diego3g/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/diego3g/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/diego3g/package_control_channel",
    description:
      "Default channel file for Package Control. Follow the directions at:",
    fork: true,
    url: "https://api.github.com/repos/diego3g/package_control_channel",
    forks_url:
      "https://api.github.com/repos/diego3g/package_control_channel/forks",
    keys_url:
      "https://api.github.com/repos/diego3g/package_control_channel/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/diego3g/package_control_channel/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/diego3g/package_control_channel/teams",
    hooks_url:
      "https://api.github.com/repos/diego3g/package_control_channel/hooks",
    issue_events_url:
      "https://api.github.com/repos/diego3g/package_control_channel/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/diego3g/package_control_channel/events",
    assignees_url:
      "https://api.github.com/repos/diego3g/package_control_channel/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/diego3g/package_control_channel/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/diego3g/package_control_channel/tags",
    blobs_url:
      "https://api.github.com/repos/diego3g/package_control_channel/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/diego3g/package_control_channel/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/diego3g/package_control_channel/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/diego3g/package_control_channel/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/diego3g/package_control_channel/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/diego3g/package_control_channel/languages",
    stargazers_url:
      "https://api.github.com/repos/diego3g/package_control_channel/stargazers",
    contributors_url:
      "https://api.github.com/repos/diego3g/package_control_channel/contributors",
    subscribers_url:
      "https://api.github.com/repos/diego3g/package_control_channel/subscribers",
    subscription_url:
      "https://api.github.com/repos/diego3g/package_control_channel/subscription",
    commits_url:
      "https://api.github.com/repos/diego3g/package_control_channel/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/diego3g/package_control_channel/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/diego3g/package_control_channel/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/diego3g/package_control_channel/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/diego3g/package_control_channel/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/diego3g/package_control_channel/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/diego3g/package_control_channel/merges",
    archive_url:
      "https://api.github.com/repos/diego3g/package_control_channel/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/diego3g/package_control_channel/downloads",
    issues_url:
      "https://api.github.com/repos/diego3g/package_control_channel/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/diego3g/package_control_channel/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/diego3g/package_control_channel/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/diego3g/package_control_channel/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/diego3g/package_control_channel/labels{/name}",
    releases_url:
      "https://api.github.com/repos/diego3g/package_control_channel/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/diego3g/package_control_channel/deployments",
    created_at: "2017-09-04T17:18:42Z",
    updated_at: "2017-09-04T17:18:45Z",
    pushed_at: "2017-09-04T17:24:26Z",
    git_url: "git://github.com/diego3g/package_control_channel.git",
    ssh_url: "git@github.com:diego3g/package_control_channel.git",
    clone_url: "https://github.com/diego3g/package_control_channel.git",
    svn_url: "https://github.com/diego3g/package_control_channel",
    homepage: "https://packagecontrol.io/docs/developers",
    size: 12708,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Python",
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  }
];

describe("Repositories Saga", () => {
  it("Should be able to fetch repositories", async () => {
    const dispatched = [];

    await runSaga(
      {
        dispatch: action => {
          dispatched.push(action);
        }
      },
      getRepositories
    ).toPromise();

    expect(dispatched).toContainEqual(RepositoriesActions.getSuccess(response));
  });
});
