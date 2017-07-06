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
          <h2>Get food fast &mdash; not fast food</h2>
          <p className="long-copy">
            Hello, we’re Omnifood, your new premium food delivery service. We know you’re always busy. No time for cooking. So let us take care of that, we’re really good at it, we promise!
          </p>

        </div>
        <div className="row">
          <div className="small-2 large-3 columns box">
            <i className="fa fa-fw  fa-question icon-big"/>


            <h3>Up to 365 days/year</h3>
            <p>
              Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.
            </p>
          </div>
          <div className=" small-2 large-3 columns box">
            <i className="fa fa-fw  fa-question icon-big"/>

            <h3>Ready in 20 minutes</h3>
            <p>
              You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.
            </p>
          </div>
          <div className=" small-2 large-3 columns box">
            <i className="fa fa-fw  fa-question icon-big"/>

            <h3>100% organic</h3>
            <p>
              All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!

            </p>
          </div>
          <div className=" small-2 large-3 columns box">
            <i className="fa fa-fw  fa-question icon-big"/>

            <h3>Order anything</h3>
            <p>
              We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!
            </p>
          </div>
        </div>
      </section>

      <section className="section-testimonials">
        <div className="row">
          <h2>Our customers can't live without us</h2>
        </div>
        <div className="row">
          <div className="small-3 large-3 columns box">
            <blockquote>
              Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a life-saver. Now that I got used to it, I couldn't live without my daily meals!
              <cite>
                <img src={require('../assets/images/customer-1.jpg')} alt=""/>
                  Alberto Duncan
              </cite>
            </blockquote>
          </div>
          <div className="small-4 large-4 columns">
            <blockquote>
              Inexpensive, healthy and great-tasting meals, delivered right to my home. We have lots of food delivery here in Lisbon, but no one comes even close to Omifood. Me and my family are so in love!
              <cite>
                <img src={require('../assets/images/customer-2.jpg')} alt=""/>
                  Joana Silva
              </cite>
            </blockquote>
          </div>
          <div className="small-4 large-4 columns">
            <blockquote>
              I was looking for a quick and easy food delivery service in San Franciso. I tried a lot of them and ended up with Omnifood. Best food delivery service in the Bay Area. Keep up the great work!
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
