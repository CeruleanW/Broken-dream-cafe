import React from 'react';
import Footer from './Footer';
import Share from './Share';
import AboutUs from './AboutUs';
import Header from './Header/Header';
import Intro from './Intro';
import Gallery from './Gallery';
import DishMenu from './DishMenu';
import Testimonial from './Testimonial';
import BookingForm from './BookingForm';
import "../css/layout.css";

// Navigation bar items: "About Us", "Menu", "Catering", "Events", "Book Now!"

const clientName = "Broken Dream Café";
const sectionIds = {
  "aboutUs": "about-us",
  "menu": "food-menu",
  "booking": "booking-form"
}

function App() {
  return (
			<div className="App">
				<Header ids={sectionIds} clientName={clientName} />
				<Intro ids={sectionIds} clientName={clientName} />
				<Gallery />
				<DishMenu id={sectionIds.menu} />
				<Testimonial />
				<AboutUs id={sectionIds.aboutUs} clientName={clientName} />
				<BookingForm id={sectionIds.booking} />
				<Share />
				<Footer clientName={clientName} />
			</div>
  );
}

export default App;