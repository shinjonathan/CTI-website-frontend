import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

// Project.json 
/*
[{
      "id": 57027660,
      "node_id": "MDEwOlJlcG9zaXRvcnk1NzAyNzY2MA==",
      "name": "laravel-sendgrid-driver",
      "full_name": "io-digital/laravel-sendgrid-driver",
      "private": false,
      "owner": {
        "login": "io-digital",
        "id": 6604641,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjY2MDQ2NDE=",
        "avatar_url": "https://avatars1.githubusercontent.com/u/6604641?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/io-digital",
        "html_url": "https://github.com/io-digital",
        "followers_url": "https://api.github.com/users/io-digital/followers",
        "following_url": "https://api.github.com/users/io-digital/following{/other_user}",
        "gists_url": "https://api.github.com/users/io-digital/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/io-digital/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/io-digital/subscriptions",
        "organizations_url": "https://api.github.com/users/io-digital/orgs",
        "repos_url": "https://api.github.com/users/io-digital/repos",
        "events_url": "https://api.github.com/users/io-digital/events{/privacy}",
        "received_events_url": "https://api.github.com/users/io-digital/received_events",
        "type": "Organization",
        "site_admin": false
      },
      "html_url": "https://github.com/io-digital/laravel-sendgrid-driver",
      "description": "SendGrid driver for Laravel's mail configuration",
      "fork": false,
      "url": "https://api.github.com/repos/io-digital/laravel-sendgrid-driver",
      "forks_url": "https://api.github.com/repos/io-digital/laravel-sendgrid-driver/forks",
      "keys_url": "https://api.github.com/repos/io-digital/laravel-sendgrid-driver/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/io-digital/laravel-sendgrid-driver/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/io-digital/laravel-sendgrid-driver/teams",
      "hooks_url": "https://api.github.com/repos/io-digital/laravel-sendgrid-driver/hooks",
      "issue_events_url": "https://api.github.com/repos/io-digital/laravel-sendgrid-driver/issues/events{/number}",
      "events_url": "https://api.github.com/repos/io-digital/laravel-sendgrid-driver/events",
      "assignees_url": "https://api.github.com/repos/io-digital/laravel-sendgrid-driver/assignees{/user}",
      "branches_url": "https://api.github.com/repos/io-digital/laravel-sendgrid-driver/branches{/branch}",
      "tags_url": "https://api.github.com/repos/io-digital/laravel-sendgrid-driver/tags",
      "blobs_url": "https://api.github.com/repos/io-digital/laravel-sendgrid-driver/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/io-digital/laravel-sendgrid-driver/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/io-digital/laravel-sendgrid-driver/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/io-digital/laravel-sendgrid-driver/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/io-digital/laravel-sendgrid-driver/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/io-digital/laravel-sendgrid-driver/languages",
      "stargazers_url": "https://api.github.com/repos/io-digital/laravel-sendgrid-driver/stargazers",
      "contributors_url": "https://api.github.com/repos/io-digital/laravel-sendgrid-driver/contributors",
      "subscribers_url": "https://api.github.com/repos/io-digital/laravel-sendgrid-driver/subscribers",
      "subscription_url": "https://api.github.com/repos/io-digital/laravel-sendgrid-driver/subscription",
      "commits_url": "https://api.github.com/repos/io-digital/laravel-sendgrid-driver/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/io-digital/laravel-sendgrid-driver/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/io-digital/laravel-sendgrid-driver/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/io-digital/laravel-sendgrid-driver/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/io-digital/laravel-sendgrid-driver/contents/{+path}",
      "compare_url": "https://api.github.com/repos/io-digital/laravel-sendgrid-driver/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/io-digital/laravel-sendgrid-driver/merges",
      "archive_url": "https://api.github.com/repos/io-digital/laravel-sendgrid-driver/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/io-digital/laravel-sendgrid-driver/downloads",
      "issues_url": "https://api.github.com/repos/io-digital/laravel-sendgrid-driver/issues{/number}",
      "pulls_url": "https://api.github.com/repos/io-digital/laravel-sendgrid-driver/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/io-digital/laravel-sendgrid-driver/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/io-digital/laravel-sendgrid-driver/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/io-digital/laravel-sendgrid-driver/labels{/name}",
      "releases_url": "https://api.github.com/repos/io-digital/laravel-sendgrid-driver/releases{/id}",
      "deployments_url": "https://api.github.com/repos/io-digital/laravel-sendgrid-driver/deployments",
      "created_at": "2016-04-25T09:07:59Z",
      "updated_at": "2019-03-07T15:58:15Z",
      "pushed_at": "2018-06-05T09:50:58Z",
      "git_url": "git://github.com/io-digital/laravel-sendgrid-driver.git",
      "ssh_url": "git@github.com:io-digital/laravel-sendgrid-driver.git",
      "clone_url": "https://github.com/io-digital/laravel-sendgrid-driver.git",
      "svn_url": "https://github.com/io-digital/laravel-sendgrid-driver",
      "homepage": "",
      "size": 21,
      "stargazers_count": 2,
      "watchers_count": 2,
      "language": "PHP",
      "has_issues": true,
      "has_projects": false,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 1,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 3,
      "license": {
        "key": "mit",
        "name": "MIT License",
        "spdx_id": "MIT",
        "url": "https://api.github.com/licenses/mit",
        "node_id": "MDc6TGljZW5zZTEz"
      },
      "forks": 1,
      "open_issues": 3,
      "watchers": 2,
      "default_branch": "master",
      "score": 1.0
}]
*/

// TODO: Fit to figma template with appropriate props.
export default function ProjectCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}