import React, { Component } from "react";

const pageTitle = "Broken Dream Café";

const addListItem = (name, linkId) => {
    const link = linkId ? "#" + linkId: "#";
    return <li className="nav-li"><a href={link}>{name}</a></li>;
}

export default class Header extends Component {
    render() {
        return (
            <header id={this.props.id}>
                <nav>
                    <ul>
                        {addListItem("About Us", this.props.ids["aboutUs"])}
                        {addListItem("Menu", this.props.ids["menu"])}
                        {addListItem("Catering")}
                        {addListItem("Events")}
                        {addListItem("Book a Table", this.props.ids["booking"])}
                    </ul>
                </nav>
                <h1>{pageTitle}</h1>
            </header>
        );
    }
}