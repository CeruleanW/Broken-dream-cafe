import React, { Component } from "react";
import MenuItem from "./MenuItem";
import { LoremIpsum } from "lorem-ipsum";

// Animation Library: Framer Motion https://www.framer.com/motion/

const lorem = new LoremIpsum({
	sentencesPerParagraph: {
		max: 7,
		min: 4,
	},
	wordsPerSentence: {
		max: 12,
		min: 6,
	},
});

export default class Menu extends Component {
	render() {
		return (
			<section id={this.props.id} className="pure-g">
				<MenuItem
					itemName="Chicken Parmigiana on a Bun"
					imageFileName="mark-deyoung-mjcJ0FFgdWI-unsplash.jpg"
					price={7.5}
					description={lorem.generateParagraphs(1)}
				/>
				<MenuItem
					itemName="Garlic Butter Shrimp Pasta"
					imageFileName="StockSnap_30DIV2QY3M.jpg"
					price={8.5}
					description={lorem.generateParagraphs(1)}
				/>

				<MenuItem
					itemName="Ultimate Muffins"
					imageFileName="StockSnap_FQ5PQADGZ2.jpg"
					price={5.5}
					description={lorem.generateParagraphs(1)}
				/>

				<MenuItem
					itemName="Roasted Corn and Sausage Salad"
					imageFileName="StockSnap_XLQHKJKZSG.jpg"
					price={8.0}
					description={lorem.generateParagraphs(1)}
				/>

				<MenuItem
					itemName="Classic French Toast"
					imageFileName="StockSnap_1JMLWSY55C.jpg"
					price={5.0}
					description={lorem.generateParagraphs(1)}
				/>

				<MenuItem
					itemName="Sheet Pan Burgers and Fries"
					imageFileName="StockSnap_7QH4K6AESO.jpg"
					price={9.0}
					description={lorem.generateParagraphs(1)}
				/>
			</section>
		);
	}
}

// Responsive Horizontal-to-Vertical Menu
// This example shows how you can build upon Pure Menu and Grid classes. At wide window-widths we display a horizontal menu. At smaller window-widths, we switch to a vertical menu with a toggle control. Grids are used to arrange the menus. Code reproduced below:

      {/* <style>
      .custom-wrapper {
          background-color: #ffd390;
          margin-bottom: 1em;
          -webkit-font-smoothing: antialiased;
          height: 2.1em;
          overflow: hidden;
          -webkit-transition: height 0.5s;
          -moz-transition: height 0.5s;
          -ms-transition: height 0.5s;
          transition: height 0.5s;
      }

      .custom-wrapper.open {
          height: 14em;
      }

      .custom-menu-3 {
          text-align: right;
      }

      .custom-toggle {
          width: 34px;
          height: 34px;
          position: absolute;
          top: 0;
          right: 0;
          display: none;
      }

      .custom-toggle .bar {
          background-color: #777;
          display: block;
          width: 20px;
          height: 2px;
          border-radius: 100px;
          position: absolute;
          top: 18px;
          right: 7px;
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -ms-transition: all 0.5s;
          transition: all 0.5s;
      }

      .custom-toggle .bar:first-child {
          -webkit-transform: translateY(-6px);
          -moz-transform: translateY(-6px);
          -ms-transform: translateY(-6px);
          transform: translateY(-6px);
      }

      .custom-toggle.x .bar {
          -webkit-transform: rotate(45deg);
          -moz-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
      }

      .custom-toggle.x .bar:first-child {
          -webkit-transform: rotate(-45deg);
          -moz-transform: rotate(-45deg);
          -ms-transform: rotate(-45deg);
          transform: rotate(-45deg);
      }

      @media (max-width: 47.999em) {

          .custom-menu-3 {
              text-align: left;
          }

          .custom-toggle {
              display: block;
          }

      }
      </style>
      <div class="custom-wrapper pure-g" id="menu">
          <div class="pure-u-1 pure-u-md-1-3">
              <div class="pure-menu">
                  <a href="#" class="pure-menu-heading custom-brand">Brand</a>
                  <a href="#" class="custom-toggle" id="toggle"><s class="bar"></s><s class="bar"></s></a>
              </div>
          </div>
          <div class="pure-u-1 pure-u-md-1-3">
              <div class="pure-menu pure-menu-horizontal custom-can-transform">
                  <ul class="pure-menu-list">
                      <li class="pure-menu-item"><a href="#" class="pure-menu-link">Home</a></li>
                      <li class="pure-menu-item"><a href="#" class="pure-menu-link">About</a></li>
                      <li class="pure-menu-item"><a href="#" class="pure-menu-link">Contact</a></li>
                  </ul>
              </div>
          </div>
          <div class="pure-u-1 pure-u-md-1-3">
              <div class="pure-menu pure-menu-horizontal custom-menu-3 custom-can-transform">
                  <ul class="pure-menu-list">
                      <li class="pure-menu-item"><a href="#" class="pure-menu-link">Yahoo</a></li>
                      <li class="pure-menu-item"><a href="#" class="pure-menu-link">W3C</a></li>
                  </ul>
              </div>
          </div>
      </div>
      <script>
      (function (window, document) {
      var menu = document.getElementById('menu'),
          rollback,
          WINDOW_CHANGE_EVENT = ('onorientationchange' in window) ? 'orientationchange':'resize';

      function toggleHorizontal() {
          menu.classList.remove('closing');
          [].forEach.call(
              document.getElementById('menu').querySelectorAll('.custom-can-transform'),
              function(el){
                  el.classList.toggle('pure-menu-horizontal');
              }
          );
      };

      function toggleMenu() {
          // set timeout so that the panel has a chance to roll up
          // before the menu switches states
          if (menu.classList.contains('open')) {
              menu.classList.add('closing');
              rollBack = setTimeout(toggleHorizontal, 500);
          }
          else {
              if (menu.classList.contains('closing')) {
                  clearTimeout(rollBack);
              } else {
                  toggleHorizontal();
              }
          }
          menu.classList.toggle('open');
          document.getElementById('toggle').classList.toggle('x');
      };

      function closeMenu() {
          if (menu.classList.contains('open')) {
              toggleMenu();
          }
      }

      document.getElementById('toggle').addEventListener('click', function (e) {
          toggleMenu();
          e.preventDefault();
      });

      window.addEventListener(WINDOW_CHANGE_EVENT, closeMenu);
      })(this, this.document);

      </script> */}