import React from 'react';
import GitHubLogo from '../Images/GitHub-Mark-64px.png';
import SlackLogo from '../Images/slacklogo.webp';
import NotionLogo from '../Images/notionlogo.png';
import ZoomLogo from '../Images/Zoom-emblem.png';
import './linkbar.css';

function Linkbar(){
    return(
<div className="Linkbar"> 

<div className="link-container">

<a className="git" href="https://github.com/" target="_blank" rel="noreferrer">
<img border="0" alt="GitHubLogo" src={GitHubLogo} width="100" height="100" />
</a>

<a className="slack" href="https://schoolofcode-bc13.slack.com/ssb/redirect" target="_blank" rel="noreferrer">
<img border="0" alt="SlackLogo" src={SlackLogo} width="100" height="100" />
</a>

<a className="notion" href="https://www.notion.so/schoolofcode/Bootcamper-View" target="_blank" rel="noreferrer">
<img border="0" alt="NotionLogo" src={NotionLogo} width="100" height="100" />
</a>

<a className="zoom" href="https://schoolofcode.zoom.us/j/83336028008#success" target="_blank" rel="noreferrer">
<img border="0" alt="ZoomLogo" src={ZoomLogo} width="100" height="100" />
</a>
</div>

</div>
    )
};

export default Linkbar;