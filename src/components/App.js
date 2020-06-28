import React from 'react';
import Footer from './Footer';
import Share from './Share';
import AboutUs from './AboutUs';
import Header from './Header';
import Intro from './Intro';
import Gallery from './Gallery';
import Menu from './Menu';
import Testimonial from './Testimonial';
import BookingForm from './BookingForm';

// Navigation bar items: "About Us", "Menu", "Catering", "Events", "Book Now!"

const clientName = "Broken Dream Café";
const sectionIds = {
  "aboutUs": "about-us",
  "menu": "menu",
  "booking": "booking-form"
}

function App() {
  return (
			<div className="App">
				<Header ids={sectionIds} clientName={clientName} />
				<Intro ids={sectionIds} clientName={clientName} />
				<Gallery />
				<Menu id={sectionIds.menu} />
				<Testimonial />
				<AboutUs id={sectionIds.aboutUs} clientName={clientName} />
				<BookingForm id={sectionIds.booking} />
				<Share />
				<Footer />
			</div>
  );
}

export default App;