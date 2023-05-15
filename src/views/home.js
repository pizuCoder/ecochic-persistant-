import React from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Banner from '../components/banner'
import Branding from '../components/branding'
import Steps from '../components/steps'
import IconContainer from '../components/icon-container'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>EcoChic Persistant</title>
        <meta property="og:title" content="ecochic persistant" />
      </Helmet>
      <Banner></Banner>
      <section className="home-hero">
        <div className="home-main">
          <div className="home-content">
            <header data-thq="thq-navbar" className="home-navbar-interactive">
              <Branding rootClassName="branding-root-class-name1"></Branding>
              <div
                data-thq="thq-navbar-nav"
                data-role="Nav"
                className="home-desktop-menu"
              >
                <div className="home-links">
                  <Link to="/" className="home-link navLink">
                    Mission
                  </Link>
                  <Link to="/" className="home-link01 navLink">
                    Products
                  </Link>
                  <Link to="/" className="home-link02 navLink">
                    Impact
                  </Link>
                  <Link to="/" className="home-link03 navLink">
                    Blog
                  </Link>
                </div>
              </div>
              <div data-thq="thq-burger-menu" className="home-burger-menu">
                <button className="button">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </button>
              </div>
              <div data-thq="thq-mobile-menu" className="home-mobile-menu">
                <div
                  data-thq="thq-mobile-menu-nav"
                  data-role="Nav"
                  className="home-nav"
                >
                  <div className="home-container1">
                    <Branding rootClassName="branding-root-class-name"></Branding>
                    <div data-thq="thq-close-menu" className="home-menu-close">
                      <svg viewBox="0 0 1024 1024" className="home-icon02">
                        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="home-links1">
                    <Link to="/" className="home-link04 navLink">
                      Mission
                    </Link>
                    <Link to="/" className="home-link05 navLink">
                      Take Action
                    </Link>
                    <Link to="/" className="home-link06 navLink">
                      News
                    </Link>
                    <Link to="/" className="home-link07 navLink">
                      Contact
                    </Link>
                  </div>
                  <div className="home-icon-group">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="home-icon04"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon06"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="home-icon08"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </header>
            <div className="home-hero-section">
              <div className="home-header">
                <h1 className="home-heading">Clothing that Changes Lives.</h1>
                <p className="home-caption">
                  Discover a new era of conscious fashion where style meets
                  sustainability, and join us in making a positive impact on the
                  world.
                </p>
              </div>
              <div className="home-buttons">
                <button className="button">
                  <span>Schedule Call</span>
                </button>
                <button className="home-button02 button">
                  <span>Join our newsletter</span>
                </button>
              </div>
            </div>
          </div>
          <div className="home-image">
            <button className="button home-button03">Contact</button>
          </div>
        </div>
        <div className="home-details-container">
          <div className="home-details">
            <div className="home-category">
              <img
                alt="image"
                src="/playground_assets/details-1.svg"
                className="home-image01"
              />
              <p className="home-text02">
                <span className="home-text03">Sustainable Materials:</span>
                <span className="home-text04">
                  {' '}
                  Showcase your commitment to using eco-friendly and ethically
                  sourced materials in your products. Highlight the use of
                  recycled, organic, or cruelty-free materials to appeal to
                  environmentally conscious consumers.
                </span>
              </p>
            </div>
            <div className="home-category1">
              <img
                alt="image"
                src="/playground_assets/details-2.svg"
                className="home-image02"
              />
              <p className="home-text05">
                <span className="home-text06">
                  Ethical Production:
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text07">
                  Emphasize your fair-trade practices, responsible manufacturing
                  processes, and support for local artisans or communities.
                  Illustrate how your brand ensures fair wages, safe working
                  conditions, and promotes social responsibility throughout the
                  supply chain.
                </span>
              </p>
            </div>
            <div className="home-category2">
              <img
                alt="image"
                src="/playground_assets/details-3.svg"
                className="home-image03"
              />
              <p className="home-text08">
                <span className="home-text09">Timeless Style:</span>
                <span className="home-text10">
                  {' '}
                  Highlight the timeless and enduring nature of your designs.
                  Emphasize that your products are not just trendy fashion items
                  but investment pieces that can be enjoyed for years to come.
                  Showcase the versatility and classic appeal of your
                  collections.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-mission">
        <div className="home-content01">
          <div className="home-main1">
            <span className="home-title">Our Mission</span>
            <div className="home-header01">
              <h2 className="home-heading01">
                Our mission is to redefine status and inspire a cultural shift
                towards a more conscious and compassionate world.
              </h2>
              <p className="home-caption01">
                Through ethically crafted luxury goods, we empower individuals
                to make a positive impact and embrace a new era of status that
                celebrates meaningful contributions to society.&quot;Embrace a
                new definition of status, one that uplifts humanity.
              </p>
            </div>
          </div>
          <button className="button">
            <span>Schedule Call</span>
          </button>
          <div className="home-highlights">
            <div className="home-highlight"></div>
            <div className="home-highlight1"></div>
          </div>
        </div>
        <div className="home-images">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1501644898242-cfea317d7faf?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE4fHxzdXN0YWluYWJsZXxlbnwwfHx8fDE2ODQwOTQwNjV8MA&amp;ixlib=rb-4.0.3&amp;w=400"
            className="home-image04"
          />
          <div className="home-row">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1605274281179-4de6641e30aa?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMzfHxzdXN0YWluYWJsZXxlbnwwfHx8fDE2ODQwOTQwNjV8MA&amp;ixlib=rb-4.0.3&amp;w=400"
              className="home-image05"
            />
          </div>
        </div>
      </section>
      <section className="home-petitions">
        <div className="home-images1">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1567480503709-66518a660785?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fHN1c3RhaW5hYmxlJTIwZmFzaGlvbnxlbnwwfHx8fDE2ODQxNjMyNDd8MA&amp;ixlib=rb-4.0.3&amp;w=1400"
            className="home-image06"
          />
        </div>
        <div className="home-content02">
          <div className="home-main2">
            <div className="home-header02">
              <h2 className="home-heading02">
                &quot;Explore Our Fashion Blog: Unleashing the World of Ethical
                Fashion and Sustainable Luxury&quot;
              </h2>
              <p className="home-caption02">
                Aligning status culturally on a global scale means reattributing
                that wealth towards benefit for humanity and shifting the entire
                global view of wealth.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
          <div className="home-button05">
            <button className="button">
              <span>Read Blog</span>
            </button>
          </div>
        </div>
      </section>
      <section className="home-steps">
        <div className="home-content03">
          <div className="home-information">
            <div className="home-main3">
              <div className="home-header03">
                <h2 className="home-heading03">
                  Making a difference is as easy as checking out our products
                </h2>
              </div>
              <p className="home-caption03">
                Join us in this transformative journey towards a world where
                status is redefined and luxury is synonymous with positive
                change. Check out our products to contribute to this movement.
              </p>
            </div>
            <div className="home-button07">
              <button className="home-button08 button">
                <span>See Products</span>
              </button>
            </div>
          </div>
          <Steps></Steps>
        </div>
      </section>
      <section className="home-help">
        <div className="home-help-content">
          <div className="home-header04">
            <h2 className="home-heading04">How can you help</h2>
            <p className="home-caption04">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="home-switch">
            <div id="individual" className="switch-active switch">
              <span>Individuals</span>
            </div>
            <div id="company" className="switch">
              <span>Companies</span>
            </div>
          </div>
        </div>
        <div className="home-content04">
          <div id="individuals-content" className="home-save">
            <div className="home-content05">
              <div className="home-main4">
                <div className="home-header05">
                  <h2 className="home-heading05">
                    This is the Individuals Tab
                  </h2>
                  <p className="home-caption05">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="home-highlights1">
                  <div className="home-highlight2">
                    <h3 className="home-title1">60%</h3>
                    <p className="home-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                  <div className="home-highlight3">
                    <h3 className="home-title2">40%</h3>
                    <p className="home-description1">
                      Excepteur sint occaecat cupidatat non proident
                    </p>
                  </div>
                </div>
              </div>
              <div className="home-button09">
                <button className="button">
                  <span>Take action</span>
                </button>
                <button className="button">
                  <span>Learn more</span>
                </button>
              </div>
            </div>
            <div className="home-images2">
              <img
                src="https://images.unsplash.com/photo-1591567462127-1f25099900ab?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxzdXN0YWluYWJsZSUyMGZhc2hpb258ZW58MHx8fHwxNjg0MTYzMjQ3fDA&amp;ixlib=rb-4.0.3&amp;w=1400"
                alt="image"
                className="home-image07"
              />
            </div>
          </div>
          <div id="companies-content" className="home-companies">
            <div className="home-content06">
              <div className="home-main5">
                <div className="home-header06">
                  <h2 className="home-heading06">This is the Companies Tab</h2>
                  <p className="home-caption06">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="home-highlights2">
                  <div className="home-highlight4">
                    <h3 className="home-title3">55%</h3>
                    <p className="home-description2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                  <div className="home-highlight5">
                    <h3 className="home-title4">45%</h3>
                    <p className="home-description3">
                      Excepteur sint occaecat cupidatat non proident
                    </p>
                  </div>
                </div>
              </div>
              <div className="home-button12">
                <button className="button">
                  <span>Take action</span>
                </button>
                <button className="button">
                  <span>Learn more</span>
                </button>
              </div>
            </div>
            <div className="home-images3">
              <img
                alt="image"
                src="/playground_assets/help-1400w.png"
                className="home-image08"
              />
            </div>
          </div>
        </div>
        <div>
          <DangerousHTML
            html={`<script>
document.getElementById("individual").addEventListener("click", function() {
  document.getElementById("individuals-content").style.display = "flex";
  document.getElementById("companies-content").style.display = "none";
  this.classList.add("switch-active");
  document.getElementById("company").classList.remove("switch-active");
});
document.getElementById("company").addEventListener("click", function() {
  document.getElementById("companies-content").style.display = "flex";
  document.getElementById("individuals-content").style.display = "none";
  this.classList.add("switch-active");
  document.getElementById("individual").classList.remove("switch-active");
});
</script>`}
          ></DangerousHTML>
        </div>
      </section>
      <section className="home-quote-one">
        <div className="home-quote-content">
          <h2 className="home-quote">
            If only we could make love what people optimize for over wealth. We
            can help society at large realize that is the true way to win the
            game of life
          </h2>
          <div className="home-quoted">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGphY2t8ZW58MHx8fHwxNjg0MTY0MTY0fDA&amp;ixlib=rb-4.0.3&amp;w=200"
              className="home-image09"
            />
            <p className="home-caption07">Jack Jay, @ecochic</p>
          </div>
        </div>
      </section>
      <section className="home-quote-two">
        <div className="home-content07">
          <div className="home-video">
            <video
              src
              poster="/playground_assets/video-1400w.png"
              className="home-video1"
            ></video>
            <div className="home-play">
              <div className="home-button15">
                <svg
                  viewBox="0 0 808.5942857142857 1024"
                  className="home-icon10"
                >
                  <path d="M790.857 529.714l-758.857 421.714c-17.714 9.714-32 1.143-32-18.857v-841.143c0-20 14.286-28.571 32-18.857l758.857 421.714c17.714 9.714 17.714 25.714 0 35.429z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="home-quote-content1">
            <h2 className="home-quote1">
              &quot;It wasn&apos;t until our culture defined cigarettes as bad
              that we quit them. They are just as addicting. They become
              negative status symbols. Hopefully showing the power status has on
              human behavior. If you thought sex runs the world just wait till
              you realize that status is above even that.&quot;
            </h2>
            <div className="home-quoted1">
              <p className="home-caption08">Jackie Jayio</p>
              <p className="home-caption09">@ecochic</p>
            </div>
          </div>
        </div>
      </section>
      <div className="home-donate">
        <div className="home-content08">
          <div className="home-header07">
            <span className="home-heading07">
              Support brands and initiatives that prioritize sustainability,
              ethical practices, and social responsibility.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-caption10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </span>
          </div>
        </div>
      </div>
      <section className="home-donation-use">
        <div className="home-header08">
          <h2 className="home-heading08">
            Educate others about the negative consequences of wasteful spending
            and the potential for status symbols to be aligned with making a
            difference.
          </h2>
          <p className="home-caption11">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>
        <div className="home-accordion">
          <div
            data-role="accordion-container"
            className="accordion-element home-element"
          >
            <div className="home-header09">
              <h3 className="home-text20">
                Lorem ipsum dolor sit ametna aliqua.
              </h3>
              <IconContainer rootClassName="icon-container-root-class-name4"></IconContainer>
            </div>
            <div data-role="accordion-content" className="accordion-content">
              <p className="home-text21">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="accordion-element home-element1"
          >
            <div className="home-header10">
              <h3 className="home-text22">
                Lorem ipsum dolor sit ametna aliqua.
              </h3>
              <IconContainer rootClassName="icon-container-root-class-name5"></IconContainer>
            </div>
            <div data-role="accordion-content" className="accordion-content">
              <p className="home-text23">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="accordion-element home-element2"
          >
            <div className="home-header11">
              <h3 className="home-text24">
                Lorem ipsum dolor sit ametna aliqua.
              </h3>
              <IconContainer rootClassName="icon-container-root-class-name6"></IconContainer>
            </div>
            <div data-role="accordion-content" className="accordion-content">
              <p className="home-text25">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="accordion-element home-element3"
          >
            <div className="home-header12">
              <h3 className="home-text26">
                Lorem ipsum dolor sit ametna aliqua.
              </h3>
              <IconContainer rootClassName="icon-container-root-class-name7"></IconContainer>
            </div>
            <div data-role="accordion-content" className="accordion-content">
              <p className="home-text27">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="accordion-element home-element4"
          >
            <div className="home-header13">
              <h3 className="home-text28">
                Lorem ipsum dolor sit ametna aliqua.
              </h3>
              <IconContainer rootClassName="icon-container-root-class-name8"></IconContainer>
            </div>
            <div data-role="accordion-content" className="accordion-content">
              <p className="home-text29">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
          <div>
            <DangerousHTML
              html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
            ></DangerousHTML>
          </div>
        </div>
      </section>
      <section className="home-updates">
        <div className="home-content14">
          <div className="home-details1">
            <div className="home-header14">
              <h2 className="home-heading09">
                Get updates and action alerts from EcoChic by joining our
                newsletter
              </h2>
              <p className="home-caption12">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.”
              </p>
            </div>
            <div className="home-action">
              <div className="home-input">
                <input
                  type="text"
                  placeholder="Email address"
                  className="home-textinput input"
                />
                <button className="button home-button16">Subscribe</button>
              </div>
              <div className="home-agreement">
                <div className="home-states">
                  <div id="tos" className="home-checkbox"></div>
                  <div id="tos-active" className="home-checkbox1">
                    <svg viewBox="0 0 1024 1024" className="home-icon12">
                      <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                    </svg>
                  </div>
                </div>
                <div className="home-caption13">
                  <label htmlFor="tos" className="home-normal">
                    I agree to the
                  </label>
                  <label htmlFor="tos" className="home-bold">
                    Terms and Conditions
                  </label>
                </div>
                <div>
                  <DangerousHTML
                    html={`<script>
// Create a boolean to represent the state of the toggle
let tosToggle = false;

// Add event listeners to the divs and labels
document.getElementById("tos").addEventListener("click", toggleTos);
document.getElementById("tos-active").addEventListener("click", toggleTos);
document.querySelectorAll("label[for=tos]").forEach(label => label.addEventListener("click", toggleTos));

// Define the toggleTos function to hide/show the elements based on the state of the toggle
function toggleTos() {
  if (tosToggle) {
    document.getElementById("tos").style.display = "flex";
    document.getElementById("tos-active").style.display = "none";
  } else {
    document.getElementById("tos").style.display = "none";
    document.getElementById("tos-active").style.display = "flex";
  }
  tosToggle = !tosToggle;
}
</script>`}
                  ></DangerousHTML>
                </div>
              </div>
            </div>
          </div>
          <div className="home-slider">
            <div className="home-slides">
              <div className="slide-active slide">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1615266508040-7c47f7339963?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM4fHxhbmltYWwlMjBmYXNoaW9ufGVufDB8fHx8MTY4NDE2NDA3M3ww&amp;ixlib=rb-4.0.3&amp;w=1400"
                  className="home-image10"
                />
                <span className="home-text30">
                  WFH One year on. Here’s what we’ve learned.
                </span>
              </div>
              <div className="slide">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1670991761566-534b07539db5?ixid=Mnw5MTMyMXwwfDF8YWxsfDEzfHx8fHx8Mnx8MTY3MTAxNTg5Ng&amp;ixlib=rb-4.0.3&amp;w=1400"
                  className="home-image11"
                />
                <span className="home-text31">
                  <span>This is a test slide</span>
                  <br></br>
                </span>
              </div>
              <div className="slide">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1670087670280-7a3e71a7efa6?ixid=Mnw5MTMyMXwwfDF8YWxsfDE1fHx8fHx8Mnx8MTY3MTAxNTg5Ng&amp;ixlib=rb-4.0.3&amp;w=1400"
                  className="home-image12"
                />
                <span className="home-text34">
                  <span>This one also!</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-buttons-container">
              <div className="home-buttons1">
                <button id="previous-slide" className="home-previous button">
                  <svg viewBox="0 0 1024 1024" className="home-icon14">
                    <path d="M32 512l480 480v-288h512v-384h-512v-288z"></path>
                  </svg>
                </button>
                <button id="next-slide" className="home-next button">
                  <svg viewBox="0 0 1024 1024" className="home-icon16">
                    <path d="M992 512l-480-480v288h-512v384h512v288z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="home-footer">
        <div className="home-top">
          <Branding></Branding>
          <nav className="home-navigation-links">
            <Link to="/" className="home-link08 navLink">
              Mission
            </Link>
            <Link to="/" className="home-link09 navLink">
              Products
            </Link>
            <Link to="/" className="home-link10 navLink">
              Impact
            </Link>
            <Link to="/" className="home-link11 navLink">
              Contact
            </Link>
          </nav>
        </div>
        <div className="home-middle">
          <span className="home-text37">
            +0 222.345.987 office@ecochic.impact
          </span>
          <span className="home-text38">
            Forge Co.13G Eagle Blvd.Nashville, TN 37011-5678
          </span>
        </div>
        <div className="home-bottom">
          <span className="home-copyright">© EcoChic – 2022</span>
        </div>
      </footer>
      <div>
        <DangerousHTML
          html={`<script>
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('slide-active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('slide-active');
}

const previousSlideButton = document.querySelector('#previous-slide');
previousSlideButton.addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

const nextSlideButton = document.querySelector('#next-slide');
nextSlideButton.addEventListener('click', () => {
  showSlide(currentSlide + 1);
});
</script>`}
        ></DangerousHTML>
      </div>
      <div>
        <DangerousHTML
          html={`<script>
function setCookie(name, value, days) {
  // Set the cookie with the given name, value, and expiration time (in days)
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  // Get the value of the cookie with the given name
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function removeCookie(name) {
  // Remove the cookie with the given name
  setCookie(name, "", -1); // Set the cookie with an expiration time of -1 days
}

document.getElementById("close").addEventListener("click", function(){
  // Get the persistence value
  let persistence = document.getElementById("banner").getAttribute("data-persistence");
  if (persistence === "true") {
    // If persistence is enabled, set a cookie to remember that the banner is closed
    setCookie("bannerClosed", "true", 1); // Set the cookie with an expiration time of 1 day
  } else {
    removeCookie("bannerClosed")
  }
  document.getElementById("banner").style.display = "none"; // Hide the banner
});

window.addEventListener("load", function() {
  // Check if the banner should be displayed or not
  let bannerClosed = getCookie("bannerClosed");
  if (bannerClosed === "true") {
    // If the bannerClosed cookie is set, hide the banner
    document.getElementById("banner").style.display = "none";
  }
});
</script>`}
        ></DangerousHTML>
      </div>
    </div>
  )
}

export default Home
