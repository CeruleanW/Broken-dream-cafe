import React, { Component } from 'react'
import {EmailShareButton, FacebookShareButton, TwitterShareButton, RedditShareButton} from "react-share"
// Library: [react-share](https://www.npmjs.com/package/react-share)
export default class Share extends Component {
    render() {
        return (
			<div className="share">
				<p>Facebook etc.</p>
			</div>
        )
    }
}