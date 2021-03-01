import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import React, { useEffect, useState } from 'react'
import Moment from 'react-moment'
import tw from 'tailwind-styled-components'

const StyledH2 = tw.h2`
    text-2xl
    font-semibold
    text-gray-400
    mb-4
`

const StyledRepoContainer = tw.a`
    bg-gray-900
    hover:bg-gray-800
    rounded-lg
    ring-2
    ring-gray-700
    ring-inset
    flex
    flex-col
    p-4
    text-gray-200
    divide-y-2
    divide-dashed
    divide-gray-400
    max-w-md
`

const StyledCommitContainer = tw.a`
    self-end
    mt-4
    bg-gray-900
    hover:bg-gray-800
    rounded-lg
    ring-2
    ring-gray-700
    ring-inset
    flex
    flex-col
    p-4
    text-gray-200
    divide-y-2
    divide-dashed
    divide-gray-400
    max-w-md
    relative
    z-10
`

const StyledArrow = tw(Img)`
    w-28
    -left-28
    -top-4
    bottom-2
`

interface commit {
    commit: any,
    repo: any,
    html_url: string
}

const GithubLastCommit = () => {

    const data = useStaticQuery(graphql`
    query {
      arrow: file(relativePath: { eq: "arrow.png" }) {
        childImageSharp {
          fluid(maxWidth: 320) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `);

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
              setCommitData({...commitResultData[0], repo: repoData})
          });
      })
    }

    const user = "wahidmagdy"
    const [commitData, setCommitData] = useState({} as commit)

    useEffect(() => {
      getDataFromGithubAPI()
    }, [])

    return <div className="flex flex-col items-start justify-center relative">
        <StyledH2>What i'm working on</StyledH2>
        <StyledRepoContainer href={commitData.repo?.html_url} target="_blank">
            <div className="flex flex-col mb-2">
                <span className="text-xl font-semibold"><span className="text-gray-400">Repo:</span> {commitData.repo?.name} </span>
                <span className="text-md font-medium"> <span className="text-gray-400">Owner:</span> {commitData.repo?.owner.login}</span>
            </div>
            <p className="pt-2 text-gray-300" style={{whiteSpace: 'pre-line'}}>
                {commitData.repo?.description}
            </p>
        </StyledRepoContainer>

        <StyledCommitContainer href={commitData.html_url} target="_blank">
            <div className="flex flex-col mb-2">
                <StyledArrow fluid={data.arrow.childImageSharp.fluid} alt="arrow" style={{position: "absolute"}}/>
                <span className="text-xl font-semibold">
                    <span className="text-gray-400">Commit:</span> {commitData.commit?.message.split("\n")[0]}
                </span>
                <span className="text-gray-400"><Moment fromNow>{commitData.commit?.author.date}</Moment></span>
            </div>
            <p className="pt-2 text-gray-300" style={{whiteSpace: 'pre-line'}}>{commitData.commit?.message.split("\n").slice(1).join("\n").trim()} </p>
        </StyledCommitContainer>

        
    </div>
}

export default GithubLastCommit