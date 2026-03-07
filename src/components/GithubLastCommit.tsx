import React, { useEffect, useState } from 'react'
import Moment from 'react-moment'
import tw from 'tailwind-styled-components'

const StyledH2 = tw.h2`
    text-2xl
    font-semibold
    text-gray-400
    mb-1
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
    w-full
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
    w-full
    relative
    z-10
`
interface commit {
    commit: any,
    repo: any,
    html_url: string
}

const GithubLastCommit = () => {

    let getDataFromGithubAPI = () => {
        // get all user repos from GitHub api
      fetch(`https://api.github.com/users/${user}/repos`)
      .then(response => {
          if (!response.ok) throw new Error(`GitHub API error: ${response.status}`)
          return response.json()
      })
      .then(resultData => {
          if (!Array.isArray(resultData) || resultData.length === 0) return;
          // get the latest one
          let repoData = resultData.reduce((latestRepo, repo)=>{
              return new Date(latestRepo.pushed_at) > new Date(repo.pushed_at) ? latestRepo : repo
          });

          // Get commits of that repo
          fetch(`https://api.github.com/repos/${user}/${repoData.name}/commits?author=${user}&per_page=1`)
          .then(response => {
              if (!response.ok) throw new Error(`GitHub API error: ${response.status}`)
              return response.json()
          })
          .then(commitResultData => {
              if (!Array.isArray(commitResultData) || commitResultData.length === 0) return;
              setCommitData({...commitResultData[0], repo: repoData})
          })
          .catch(err => console.error('Failed to fetch commits:', err));
      })
      .catch(err => console.error('Failed to fetch repos:', err));
    }

    const user = "wahidfarid"
    const [commitData, setCommitData] = useState({} as commit)

    useEffect(() => {
      getDataFromGithubAPI()
    }, [])

    return <div className={`flex flex-col items-start justify-center relative opacity-0 ${commitData.repo ? "transition-all ease-in-out duration-500 opacity-100" : ""}`}>
        <StyledH2>What I'm working on</StyledH2>
        <p className="text-sm text-gray-400 mb-3">(latest public commit)</p>
        <StyledRepoContainer href={commitData.repo?.html_url} target="_blank">
            <div className="flex flex-col mb-2">
                <span className="text-xl font-semibold"><span className="text-gray-400">Repo:</span> {commitData.repo?.name} </span>
                <span className="text-md font-medium"> <span className="text-gray-400">Owner:</span> {commitData.repo?.owner.login}</span>
            </div>
            <p className="pt-2 text-gray-300" style={{whiteSpace: 'pre-line'}}>
                {commitData.repo?.description}
            </p>
        </StyledRepoContainer>

        <div className="block 2xl:hidden w-full flex justify-center mt-2">
            <svg
                width="52"
                height="61"
                viewBox="0 0 52 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* S-curve going upward from bottom-right to top-left */}
                <path
                    d="M 32 61 C 44 44, 8 34, 22 7"
                    stroke="#9CA3AF"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                />
                {/* Arrowhead at top pointing upward */}
                <path
                    d="M 11 19 L 22 6 L 32 19"
                    stroke="#9CA3AF"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>

        <StyledCommitContainer href={commitData.html_url} target="_blank">
            <div className="flex flex-col mb-2">
                <svg
                    className="hidden 2xl:block"
                    style={{ position: "absolute", right: "100%", top: "-25px" }}
                    width="136"
                    height="140"
                    viewBox="5 3 88 90"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* U-shaped curve, right arm cropped ~65% total */}
                    <path
                        d="M 18 14 C 5 108, 96 100, 88 66"
                        stroke="#9CA3AF"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                    />
                    {/* Arrowhead at upper-left, pointing upward */}
                    <path
                        d="M 8 30 L 18 14 L 31 29"
                        stroke="#9CA3AF"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
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
