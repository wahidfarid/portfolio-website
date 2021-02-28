// api.github.com/users/:user/repos
import React, { useEffect, useState } from 'react'

import Moment from 'react-moment'

interface commit {
    author: any,
    message: string,
    url: string,
    repo: any
}

const GithubLastCommit = () => {

    let getDataFromGithubAPI = () => {
        // get all user repos from GitHub api
      fetch(`https://api.github.com/users/${user}/repos`)
      .then(response => response.json())
      .then(resultData => {
          // get the latest one
          let repoData = resultData.reduce((latestRepo, repo)=>{
              return new Date(latestRepo.pushed_at) > new Date(repo.pushed_at) ? latestRepo : repo
          });
          
          // Get commits of that repo
          fetch(`https://api.github.com/repos/${user}/${repoData.name}/commits?author=${user}&per_page=1`).then(response => response.json())
          .then(commitResultData => {
              setCommitData({...commitResultData[0].commit, repo: repoData})
          });
      })
    }

    const user = "wahidmagdy"
    const [commitData, setCommitData] = useState({} as commit)

    useEffect(() => {
      getDataFromGithubAPI()
    }, [])

    return <p>Hello from github component {commitData.author?.name} {commitData.repo?.name} </p>
}

export default GithubLastCommit