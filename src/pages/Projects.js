import React, { useState } from 'react';
import NavBreadcrumb from '../components/NavBreadcrumb'
import ProjectCard from '../components/ProjectCard'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import SimpleAccordion from '../components/SimpleAccordion'

import './styles.css'

import axios from 'axios'


import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'



const Projects = () => {

  const crumbs = [{ name: 'Home', href: '/' }, { name: 'Search', href: '/projects' }]

  const [query, setQuery] = useState('');
  const [results, setResults] = useState('');
  const [resultsSummaryDisplay, setResultsSummaryDisplay] = useState('');

  function calculateDaysSince(updateTime) {
    var days = new Date() - new Date(updateTime);
    return Math.round(days / (1000 * 3600 * 24))
  }

  const handleSubmit = (event) => {
    if (event.key === 'Enter') {
      axios.get(`https://api.github.com/search/repositories`, {
        headers: { 'Accept': 'application/vnd.github.mercy-preview+json' },
        params: { q: 'topic:' + query, sort: 'updated', order: 'desc' }
      })
        .then(res => {
          setResultsSummaryDisplay(<span>Displaying {res.data.items.length} of {res.data.total_count} Results matching <b>{query}</b></span>)
          const items = res.data.items.map((i) => {
            return <ProjectCard
              organizationUrl={i.owner.html_url}
              organizationAvatarUrl={i.owner.avatar_url}
              projectUrl={i.html_url}
              ownerName={i.owner.login}
              projectName={i.name}
              projectDescription={i.description}
              homepage={i.homepage}
              lastUpdate={calculateDaysSince(i.updated_at)}
              issueCount={i.open_issues}
              projectLanguage={i.language}
              topics={i.topics}
              watchers={i.watchers_count}
              stargazers={i.stargazers_count}
            />
          })
          setResults(items);
        })
    }
  }


  return (
    <>
      <Header />
      <div style={{ backgroundColor: '#F2F2F2' }}>
        <Container maxWidth='lg'>
          <NavBreadcrumb crumbs={crumbs} color="#0F1D2F" />
          <Grid Container>
            <Grid item xs={12}><h1>Search Projects</h1></Grid>
            <Grid item xs={12}>
              <SearchBar value={query} onInput={e => setQuery(e.target.value)} placeholder="Search the Civic Tech Index" onKeyPress={handleSubmit} />
            </Grid>
            <Grid container xs={12} style={{paddingTop: '10px'}}>
              <Grid item xs={0} sm={3}><SimpleAccordion/></Grid>
              <Grid item xs={9}>
                <Grid container xs={9} sm ={9}>
                  <Grid item sm={9} xs={9}>{resultsSummaryDisplay}</Grid>
                  <Grid item style={{ paddingTop: '10px' }}>

                    <ProjectCard
                      organizationUrl={t.owner.html_url}
                      organizationAvatarUrl={t.owner.avatar_url}
                      projectUrl={t.html_url}
                      ownerName={t.owner.login}
                      projectName={t.name}
                      projectDescription={t.description}
                      homepage={t.homepage} /* TODO: Fan out */
                      lastUpdate={calculateDaysSince(t.updated_at)}
                      issueCount={t.open_issues}
                      issuesUrl={t.html_url + "/issues"}
                      projectLanguage={t.language}
                      topics={t.topics}
                      watchers={t.watchers_count}
                      stargazers={t.stargazers_count}
                    />
                    {results}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Footer />
    </>
  )
}

const t = {
  "id": 215666884,
  "node_id": "MDEwOlJlcG9zaXRvcnkyMTU2NjY4ODQ=",
  "name": "food-oasis",
  "full_name": "hackforla/food-oasis",
  "private": false,
  "owner": {
    "login": "hackforla",
    "id": 11635254,
    "node_id": "MDEyOk9yZ2FuaXphdGlvbjExNjM1MjU0",
    "avatar_url": "https://avatars3.githubusercontent.com/u/11635254?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/hackforla",
    "html_url": "https://github.com/hackforla",
    "followers_url": "https://api.github.com/users/hackforla/followers",
    "following_url": "https://api.github.com/users/hackforla/following{/other_user}",
    "gists_url": "https://api.github.com/users/hackforla/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/hackforla/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/hackforla/subscriptions",
    "organizations_url": "https://api.github.com/users/hackforla/orgs",
    "repos_url": "https://api.github.com/users/hackforla/repos",
    "events_url": "https://api.github.com/users/hackforla/events{/privacy}",
    "received_events_url": "https://api.github.com/users/hackforla/received_events",
    "type": "Organization",
    "site_admin": false
  },
  "html_url": "https://github.com/hackforla/food-oasis",
  "description": "Repository for the current redevelopment of the Food Oasis Los Angeles website",
  "fork": false,
  "url": "https://api.github.com/repos/hackforla/food-oasis",
  "forks_url": "https://api.github.com/repos/hackforla/food-oasis/forks",
  "keys_url": "https://api.github.com/repos/hackforla/food-oasis/keys{/key_id}",
  "collaborators_url": "https://api.github.com/repos/hackforla/food-oasis/collaborators{/collaborator}",
  "teams_url": "https://api.github.com/repos/hackforla/food-oasis/teams",
  "hooks_url": "https://api.github.com/repos/hackforla/food-oasis/hooks",
  "issue_events_url": "https://api.github.com/repos/hackforla/food-oasis/issues/events{/number}",
  "events_url": "https://api.github.com/repos/hackforla/food-oasis/events",
  "assignees_url": "https://api.github.com/repos/hackforla/food-oasis/assignees{/user}",
  "branches_url": "https://api.github.com/repos/hackforla/food-oasis/branches{/branch}",
  "tags_url": "https://api.github.com/repos/hackforla/food-oasis/tags",
  "blobs_url": "https://api.github.com/repos/hackforla/food-oasis/git/blobs{/sha}",
  "git_tags_url": "https://api.github.com/repos/hackforla/food-oasis/git/tags{/sha}",
  "git_refs_url": "https://api.github.com/repos/hackforla/food-oasis/git/refs{/sha}",
  "trees_url": "https://api.github.com/repos/hackforla/food-oasis/git/trees{/sha}",
  "statuses_url": "https://api.github.com/repos/hackforla/food-oasis/statuses/{sha}",
  "languages_url": "https://api.github.com/repos/hackforla/food-oasis/languages",
  "stargazers_url": "https://api.github.com/repos/hackforla/food-oasis/stargazers",
  "contributors_url": "https://api.github.com/repos/hackforla/food-oasis/contributors",
  "subscribers_url": "https://api.github.com/repos/hackforla/food-oasis/subscribers",
  "subscription_url": "https://api.github.com/repos/hackforla/food-oasis/subscription",
  "commits_url": "https://api.github.com/repos/hackforla/food-oasis/commits{/sha}",
  "git_commits_url": "https://api.github.com/repos/hackforla/food-oasis/git/commits{/sha}",
  "comments_url": "https://api.github.com/repos/hackforla/food-oasis/comments{/number}",
  "issue_comment_url": "https://api.github.com/repos/hackforla/food-oasis/issues/comments{/number}",
  "contents_url": "https://api.github.com/repos/hackforla/food-oasis/contents/{+path}",
  "compare_url": "https://api.github.com/repos/hackforla/food-oasis/compare/{base}...{head}",
  "merges_url": "https://api.github.com/repos/hackforla/food-oasis/merges",
  "archive_url": "https://api.github.com/repos/hackforla/food-oasis/{archive_format}{/ref}",
  "downloads_url": "https://api.github.com/repos/hackforla/food-oasis/downloads",
  "issues_url": "https://api.github.com/repos/hackforla/food-oasis/issues{/number}",
  "pulls_url": "https://api.github.com/repos/hackforla/food-oasis/pulls{/number}",
  "milestones_url": "https://api.github.com/repos/hackforla/food-oasis/milestones{/number}",
  "notifications_url": "https://api.github.com/repos/hackforla/food-oasis/notifications{?since,all,participating}",
  "labels_url": "https://api.github.com/repos/hackforla/food-oasis/labels{/name}",
  "releases_url": "https://api.github.com/repos/hackforla/food-oasis/releases{/id}",
  "deployments_url": "https://api.github.com/repos/hackforla/food-oasis/deployments",
  "created_at": "2019-10-17T00:06:56Z",
  "updated_at": "2020-10-06T21:05:03Z",
  "pushed_at": "2020-10-06T21:05:00Z",
  "git_url": "git://github.com/hackforla/food-oasis.git",
  "ssh_url": "git@github.com:hackforla/food-oasis.git",
  "clone_url": "https://github.com/hackforla/food-oasis.git",
  "svn_url": "https://github.com/hackforla/food-oasis",
  "homepage": "https://foodoasis.la",
  "size": 76941,
  "stargazers_count": 18,
  "watchers_count": 18,
  "language": "JavaScript",
  "has_issues": true,
  "has_projects": true,
  "has_downloads": true,
  "has_wiki": true,
  "has_pages": false,
  "forks_count": 19,
  "mirror_url": null,
  "archived": false,
  "disabled": false,
  "open_issues_count": 146,
  "license": {
    "key": "gpl-2.0",
    "name": "GNU General Public License v2.0",
    "spdx_id": "GPL-2.0",
    "url": "https://api.github.com/licenses/gpl-2.0",
    "node_id": "MDc6TGljZW5zZTg="
  },
  "topics": [
    "civictechindex",
    "code-for-all",
    "code-for-america",
    "community-gardens",
    "community-project",
    "community-sourced",
    "farmers-markets",
    "food-deserts",
    "food-pantry",
    "hack-for-la",
    "los-angeles"
  ],
  "forks": 19,
  "open_issues": 146,
  "watchers": 18,
  "default_branch": "develop",
  "score": 1.0
}

export default Projects