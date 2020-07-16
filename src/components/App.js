import React from 'react';
import AboutUs from './AboutUs';
import BookingForm from './BookingForm';
import DishMenu from './DishMenu';
import Footer from './Footer';
import Gallery from './Gallery';
import Header from './Header/Header';
import Intro from './Intro';
import Share from './Share';
import Testimonial from './Testimonial';
import {sectionIds} from './Constants';

// Navigation bar items: "About Us", "Menu", "Catering", "Events", "Book Now!"

function App() {
  return (
            <div className="App">
                <Header ids={sectionIds} />
                <Intro ids={sectionIds} />
                <Gallery />
                <DishMenu id={sectionIds.menu} />
                <Testimonial />
                <AboutUs id={sectionIds.aboutUs} />
                <BookingForm id={sectionIds.booking} />
                <Share />
                <Footer />
            </div>
  );
}

export default App;