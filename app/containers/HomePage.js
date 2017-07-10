var React = require('react')
import HomePageSearchBox from'HomePageSearchBox'
var HomePage = React.createClass({
  render:()=>{
    return(
    <div className="home-page">
      <section>
        <div className="landing-div">
          <HomePageSearchBox></HomePageSearchBox>
        </div>
      </section>


      <section className="section-features">
        <div className="row">
          <h2>Book unique homes &mdash; experience a city like a local.</h2>
          <p className="long-copy">
            Hello, we’re Roomy, your new premium Rooms searching platform. We know you’re always busy. <br/> And it's hard to find a new place to stay in your new adventure. So let us take care of that, we’re really good at it, we promise!
          </p>

        </div>
        <div className="row">
          <div className="small-6 large-3 columns box">
            <i className="fa fa-fw  fa-clock-o icon-big"/>


            <h3>Up to 365 days/year support</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
          </div>
          <div className=" small-5 large-3 columns box">
            <i className="fa fa-fw  fa-mouse-pointer icon-big"/>

            <h3>Book your room in 3 clicks</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
          </div>
          <div className=" small-6 large-3 columns box">
            <i className="fa fa-fw  fa-plane icon-big"/>

            <h3>Supports over 50 cities</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
          </div>
          <div className=" small-5 large-3 columns box float-left">
            <i className="fa fa-fw  fa-dollar icon-big"/>

            <h3>Save up to 50%</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
          </div>
        </div>
      </section>

      <section className="section-testimonials">
        <div className="row">
          <h2>Our customers are happy with us</h2>
        </div>
        <div className="row">
          <div className="small-4 large-4 columns box">
            <blockquote>

              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              <cite>
                <img src={require('../assets/images/customer-1.jpg')} alt=""/>
                  Alberto Duncan
              </cite>
            </blockquote>
          </div>
          <div className="small-4 large-4 columns">
            <blockquote>

              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
              <cite>
                <img src={require('../assets/images/customer-2.jpg')} alt=""/>
                  Joana Silva
              </cite>
            </blockquote>
          </div>
          <div className="small-4 large-4 columns">
            <blockquote>

              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
              <cite>
                <img src={require('../assets/images/customer-3.jpg')} alt=""/>
                  Milton Chapman
              </cite>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
    )
  }
})
export default HomePage
