const MOCK_USERS = [
  {
    avatar_url: 'https://avatars.githubusercontent.com/u/26?v=4',
    bio: 'DevRel visionary. GitHub user 26. Currently: Director of Education Engineering at @DataDog. Previously: HashiCorp, PeepCode, Pluralsight',
    blog: 'https://topfunky.com',
    company: '@datadog',
    created_at: '2008-01-15T05:40:05Z',
    email: null,
    events_url: 'https://api.github.com/users/topfunky/events{/privacy}',
    followers: 1317,
    followers_url: 'https://api.github.com/users/topfunky/followers',
    following: 244,
    following_url:
      'https://api.github.com/users/topfunky/following{/other_user}',
    gists_url: 'https://api.github.com/users/topfunky/gists{/gist_id}',
    gravatar_id: '',
    hireable: null,
    html_url: 'https://github.com/topfunky',
    id: 26,
    location: 'Seattle, USA',
    login: 'topfunky',
    name: 'Geoffrey Grosenbach',
    node_id: 'MDQ6VXNlcjI2',
    organizations_url: 'https://api.github.com/users/topfunky/orgs',
    public_gists: 46,
    public_repos: 86,
    received_events_url:
      'https://api.github.com/users/topfunky/received_events',
    repos_url: 'https://api.github.com/users/topfunky/repos',
    site_admin: false,
    starred_url: 'https://api.github.com/users/topfunky/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/topfunky/subscriptions',
    twitter_username: null,
    type: 'User',
    updated_at: '2023-04-07T22:40:37Z',
    url: 'https://api.github.com/users/topfunky',
  },
  {
    avatar_url: 'https://avatars.githubusercontent.com/u/29?v=4',
    bio: 'Founder of Weights and Biases (wandb.ai)',
    blog: 'lukasbiewald.com',
    company: 'Weights and Biases',
    created_at: '2008-01-15T12:50:02Z',
    email: null,
    events_url: 'https://api.github.com/users/lukas/events{/privacy}',
    followers: 580,
    followers_url: 'https://api.github.com/users/lukas/followers',
    following: 19,
    following_url: 'https://api.github.com/users/lukas/following{/other_user}',
    gists_url: 'https://api.github.com/users/lukas/gists{/gist_id}',
    gravatar_id: '',
    hireable: null,
    html_url: 'https://github.com/lukas',
    id: 29,
    location: 'San Francisco',
    login: 'lukas',
    name: 'Lukas Biewald',
    node_id: 'MDQ6VXNlcjI5',
    organizations_url: 'https://api.github.com/users/lukas/orgs',
    public_gists: 12,
    public_repos: 30,
    received_events_url: 'https://api.github.com/users/lukas/received_events',
    repos_url: 'https://api.github.com/users/lukas/repos',
    site_admin: false,
    starred_url: 'https://api.github.com/users/lukas/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/lukas/subscriptions',
    twitter_username: 'l2k',
    type: 'User',
    updated_at: '2023-04-16T13:48:13Z',
    url: 'https://api.github.com/users/lukas',
  },
  {
    avatar_url: 'https://avatars.githubusercontent.com/u/44?v=4',
    bio: null,
    blog: '',
    company: null,
    created_at: '2008-01-24T02:08:37Z',
    email: null,
    events_url: 'https://api.github.com/users/errfree/events{/privacy}',
    followers: 1,
    followers_url: 'https://api.github.com/users/errfree/followers',
    following: 0,
    following_url:
      'https://api.github.com/users/errfree/following{/other_user}',
    gists_url: 'https://api.github.com/users/errfree/gists{/gist_id}',
    gravatar_id: '',
    hireable: null,
    html_url: 'https://github.com/errfree',
    id: 44,
    location: null,
    login: 'errfree',
    name: null,
    node_id: 'MDEyOk9yZ2FuaXphdGlvbjQ0',
    organizations_url: 'https://api.github.com/users/errfree/orgs',
    public_gists: 0,
    public_repos: 2,
    received_events_url: 'https://api.github.com/users/errfree/received_events',
    repos_url: 'https://api.github.com/users/errfree/repos',
    site_admin: false,
    starred_url: 'https://api.github.com/users/errfree/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/errfree/subscriptions',
    twitter_username: null,
    type: 'Organization',
    updated_at: '2020-05-13T06:35:19Z',
    url: 'https://api.github.com/users/errfree',
  },
  {
    avatar_url: 'https://avatars.githubusercontent.com/u/17?v=4',
    bio: null,
    blog: 'wandb.com',
    company: 'crowdflower.com',
    created_at: '2008-01-13T05:57:18Z',
    email: null,
    events_url: 'https://api.github.com/users/vanpelt/events{/privacy}',
    followers: 200,
    followers_url: 'https://api.github.com/users/vanpelt/followers',
    following: 17,
    following_url:
      'https://api.github.com/users/vanpelt/following{/other_user}',
    gists_url: 'https://api.github.com/users/vanpelt/gists{/gist_id}',
    gravatar_id: '',
    hireable: null,
    html_url: 'https://github.com/vanpelt',
    id: 17,
    location: 'San Francisco',
    login: 'vanpelt',
    name: 'Chris Van Pelt',
    node_id: 'MDQ6VXNlcjE3',
    organizations_url: 'https://api.github.com/users/vanpelt/orgs',
    public_gists: 50,
    public_repos: 58,
    received_events_url: 'https://api.github.com/users/vanpelt/received_events',
    repos_url: 'https://api.github.com/users/vanpelt/repos',
    site_admin: false,
    starred_url: 'https://api.github.com/users/vanpelt/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/vanpelt/subscriptions',
    twitter_username: null,
    type: 'User',
    updated_at: '2023-04-23T10:41:12Z',
    url: 'https://api.github.com/users/vanpelt',
  },
  {
    avatar_url: 'https://avatars.githubusercontent.com/u/19?v=4',
    bio: 'Co-founder and CEO, Code Climate',
    blog: 'http://codeclimate.com',
    company: 'Code Climate',
    created_at: '2008-01-13T10:19:47Z',
    email: null,
    events_url: 'https://api.github.com/users/brynary/events{/privacy}',
    followers: 666,
    followers_url: 'https://api.github.com/users/brynary/followers',
    following: 28,
    following_url:
      'https://api.github.com/users/brynary/following{/other_user}',
    gists_url: 'https://api.github.com/users/brynary/gists{/gist_id}',
    gravatar_id: '',
    hireable: null,
    html_url: 'https://github.com/brynary',
    id: 19,
    location: 'New York City',
    login: 'brynary',
    name: 'Bryan Helmkamp',
    node_id: 'MDQ6VXNlcjE5',
    organizations_url: 'https://api.github.com/users/brynary/orgs',
    public_gists: 69,
    public_repos: 170,
    received_events_url: 'https://api.github.com/users/brynary/received_events',
    repos_url: 'https://api.github.com/users/brynary/repos',
    site_admin: false,
    starred_url: 'https://api.github.com/users/brynary/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/brynary/subscriptions',
    twitter_username: null,
    type: 'User',
    updated_at: '2023-03-27T23:03:20Z',
    url: 'https://api.github.com/users/brynary',
  },
];

export default MOCK_USERS;
