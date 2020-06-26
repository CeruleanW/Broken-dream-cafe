import React, { Component } from "react";

export default class AboutUs extends Component {
  render() {
    return (
      <section className="about-us" id={this.props.id}>
        <h2 className="title">Welcome to Broken Dream Cafe!</h2>
        <p>
          Since 1874 when Despa Maecenas and his wife Vivian opened the Broken
          Dream Cafe, cozy experience was always behind this brand. Over the
          past fifteen years, coffee lovers across Canada have continued to
          watch Broken Dream Cafe make no exceptions to the passion and
          commitment of providing the world’s most relaxing and comfortable
          cafe. Broken Dream only purchases the top 5-10% of the world’s finest
          Arabica beans that are custom roasted in small batches to guarantee
          taste and freshness.
        </p>
      </section>
    );
  }
}
