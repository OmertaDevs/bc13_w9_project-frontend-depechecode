import React from 'react';
import { TbBrandZoom } from "react-icons/tb"
import { SiNotion} from "react-icons/si"
import {AiOutlineGithub, AiOutlineSlack } from "react-icons/ai"


/**
 * Displays links to third party resources
 * @const {string} Linkbar - Four buttons linking to github, slack, zoom and notion.
 * @returns 
 */

const Linkbar = () => {
  return (
    <div className=" h-30 w-120 sticky bottom-0 py-10">
    
      <div className="flex justify-center items-center h-20 p-2 w-full gap-5 bg-sky-400">
        <a
          className="git"
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineGithub className='border-4 p-2 border-sky-800 rounded-xl bg-sky-400 hover:bg-sky-300 hover:border-sky-100 text-6xl text-sky-900 hover:text-sky-100 shadow-md shadow-sky-900'
          />
        </a>

        <a
          className="slack"
          href="https://schoolofcode-bc13.slack.com/ssb/redirect"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineSlack className='border-4 p-2 border-sky-900 rounded-xl bg-sky-400 hover:bg-sky-300 hover:border-sky-100 text-6xl text-sky-900 hover:text-sky-100 shadow-md shadow-sky-900'
          />
        </a>

        <a
          className="notion"
          href="https://www.notion.so/schoolofcode/Bootcamper-View"
          target="_blank"
          rel="noreferrer"
        >
          <SiNotion className='border-4 p-2 border-sky-900 rounded-xl bg-sky-400 hover:bg-sky-300 hover:border-sky-100 text-6xl text-sky-900 hover:text-sky-100 shadow-md shadow-sky-900'
          />
        </a>

        <a
          className="zoom"
          href="https://schoolofcode.zoom.us/j/83336028008#success"
          target="_blank"
          rel="noreferrer"
        >
          <TbBrandZoom className='border-4 p-2 border-sky-900 rounded-xl bg-sky-400 hover:bg-sky-300 hover:border-sky-100 text-6xl text-sky-900 hover:text-sky-100 shadow-md shadow-sky-900'
          />
        </a>
      </div>
      </div>
  
  );
};

export default Linkbar;