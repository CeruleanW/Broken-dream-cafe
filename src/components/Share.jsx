import React, { Component } from 'react'
import { EmailShareButton, FacebookShareButton, TwitterShareButton, RedditShareButton } from "react-share"
import { EmailIcon, FacebookIcon, RedditIcon, TwitterIcon } from "react-share";
import "../css/layout.css";

// Library: [react-share](https://www.npmjs.com/package/react-share)
export default class Share extends Component {
    render() {
        return (
			<div className="center">
				<EmailShareButton children={<EmailIcon size={32} round={true} />} url="https://ceruleanw.github.io/Broken-dream-cafe/"/>
                <FacebookShareButton children={<FacebookIcon size={32} round={true} />} url="https://ceruleanw.github.io/Broken-dream-cafe/"/>
                <TwitterShareButton children={<TwitterIcon size={32} round={true} />} url="https://ceruleanw.github.io/Broken-dream-cafe/"/>
                <RedditShareButton children={<RedditIcon size={32} round={true} />} url="https://ceruleanw.github.io/Broken-dream-cafe/"/>
			</div>
        )
    }
}