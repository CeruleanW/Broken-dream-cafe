import React, { Component } from 'react'

export default class Testimonial extends Component {
    render() {
        return (
            <div>
<section className="testimonial">
  <div className="testimonial-item">
    <img src="./images/person1.jpg" alt="Nancy Huber" />
    <p className="name">Nancy Huber</p>
    <p className="testimonial-content">
      Great coffee and unique sandwiches in a comfortable
      environment right near the cross of Kings avenue.
    </p></div>
  <div className="testimonial-item">
    <img src="./images/person2.jpg" alt="Elliot Mclellan" />
    <p className="name">Elliot Mclellan</p>				
    <p className="testimonial-content">
      “What I like about BentoBox is that the platform makes it easier for the restaurant user—the support team is helpful and really took a load off of our plate.”
    </p>
  </div>
  <div className="testimonial-item">
    <img src="./images/person3.jpg" alt="Randall Whitaker" />
    <p className="name">Randall Whitaker</p>	
    <p className="testimonial-content">
      I loved everything in the coffee shop, I'm from Puerto Rico
      I stopped the day I returned from my stay in Canada with my
      family and I loved the coffee and the person who treated us
      very kindly, I think it was the owner beautiful town and
      very nice people I plan to return and make a stop at your
      place to try your coffee once again , greetings from Puerto
      Rico .. God bless you
    </p>
  </div>
  <div className="testimonial-item">
    <img src="./images/person4.jpg" alt="Jarod Brown" />
    <p className="name">Jarod Brown</p>
    <p className="testimonial-content">
      I like it a Latte! Excellent service, delicious caffienated
      beverages and clean/calm atmosphere.
    </p>
  </div>
</section>

            </div>
        )
    }
}
